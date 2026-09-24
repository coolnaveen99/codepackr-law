# CodePackr Law ZIP -> GitHub branch sync
# No Git installation is required.
# This updates the existing branch and therefore updates PR #30 automatically.

$ErrorActionPreference = "Stop"

$Repo   = "coolnaveen99/codepackr-law"
$Branch = "zip-sync-2026-09-24"
$Zip    = Join-Path (Get-Location) "codepackr-law.zip"

if (-not (Test-Path $Zip)) {
    throw "Cannot find codepackr-law.zip in: $(Get-Location)"
}

$secure = Read-Host "Enter your GitHub Fine-grained PAT (Contents: Read and write for $Repo)" -AsSecureString
$ptr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
try {
    $Token = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr)
}
finally {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr)
}

$Headers = @{
    Authorization = "Bearer $Token"
    Accept        = "application/vnd.github+json"
    "X-GitHub-Api-Version" = "2022-11-28"
    "User-Agent"  = "CodePackr-Law-Zip-Sync"
}

function Invoke-GitHubJson {
    param(
        [string]$Method,
        [string]$Uri,
        [object]$Body = $null
    )

    $params = @{
        Method  = $Method
        Uri     = $Uri
        Headers = $Headers
    }
    if ($null -ne $Body) {
        $params.ContentType = "application/json"
        $params.Body = ($Body | ConvertTo-Json -Depth 20 -Compress)
    }

    for ($attempt = 1; $attempt -le 5; $attempt++) {
        try {
            return Invoke-RestMethod @params
        }
        catch {
            $status = $_.Exception.Response.StatusCode.value__
            if ($status -eq 403 -or $status -eq 429) {
                $wait = [Math]::Min(60, 5 * $attempt)
                Write-Host "GitHub rate/secondary limit response ($status). Waiting $wait seconds..."
                Start-Sleep -Seconds $wait
                continue
            }
            throw
        }
    }
    throw "GitHub request failed after retries: $Uri"
}

$api = "https://api.github.com/repos/$Repo"

Write-Host "Reading branch state..."
$ref = Invoke-GitHubJson GET "$api/git/ref/heads/$Branch"
$parentSha = $ref.object.sha
$parentCommit = Invoke-GitHubJson GET "$api/git/commits/$parentSha"
$baseTreeSha = $parentCommit.tree.sha

$temp = Join-Path $env:TEMP ("codepackr-law-sync-" + [Guid]::NewGuid().ToString())
New-Item -ItemType Directory -Path $temp | Out-Null

try {
    Write-Host "Extracting ZIP..."
    Expand-Archive -LiteralPath $Zip -DestinationPath $temp -Force

    $root = Join-Path $temp "codepackr-law-main"
    if (-not (Test-Path $root)) {
        throw "ZIP does not contain the expected codepackr-law-main folder."
    }

    $files = Get-ChildItem -LiteralPath $root -Recurse -File |
        Where-Object { $_.FullName -notmatch '\\.git\\' }

    Write-Host ("Found {0} files." -f $files.Count)

    $desired = @{}
    foreach ($file in $files) {
        $relative = $file.FullName.Substring($root.Length + 1).Replace('\','/')
        $desired[$relative] = $file
    }

    $existingTree = Invoke-GitHubJson GET "$api/git/trees/$baseTreeSha?recursive=1"
    $treeEntries = New-Object System.Collections.Generic.List[object]

    $i = 0
    foreach ($item in $desired.GetEnumerator()) {
        $i++
        $path = $item.Key
        $file = $item.Value

        $bytes = [IO.File]::ReadAllBytes($file.FullName)
        $b64 = [Convert]::ToBase64String($bytes)

        $blob = Invoke-GitHubJson POST "$api/git/blobs" @{
            content  = $b64
            encoding = "base64"
        }

        $treeEntries.Add(@{
            path = $path
            mode = "100644"
            type = "blob"
            sha  = $blob.sha
        })

        if (($i % 25) -eq 0 -or $i -eq $files.Count) {
            Write-Progress -Activity "Uploading CodePackr Law files" -Status "$i / $($files.Count)" -PercentComplete (($i / $files.Count) * 100)
        }

        Start-Sleep -Milliseconds 100
    }
    Write-Progress -Activity "Uploading CodePackr Law files" -Completed

    foreach ($item in $existingTree.tree) {
        if ($item.type -eq "blob" -and -not $desired.ContainsKey($item.path)) {
            $treeEntries.Add(@{
                path = $item.path
                mode = "100644"
                type = "blob"
                sha  = $null
            })
        }
    }

    Write-Host ("Creating Git tree with {0} entries..." -f $treeEntries.Count)
    $tree = Invoke-GitHubJson POST "$api/git/trees" @{
        base_tree = $baseTreeSha
        tree      = $treeEntries
    }

    Write-Host "Creating commit..."
    $commit = Invoke-GitHubJson POST "$api/git/commits" @{
        message = "Sync CodePackr Law from updated ZIP"
        tree    = $tree.sha
        parents = @($parentSha)
    }

    Write-Host "Updating branch..."
    Invoke-GitHubJson PATCH "$api/git/refs/heads/$Branch" @{
        sha   = $commit.sha
        force = $false
    } | Out-Null

    Write-Host ""
    Write-Host "SUCCESS" -ForegroundColor Green
    Write-Host "Branch: $Branch"
    Write-Host "Commit: $($commit.sha)"
    Write-Host "PR #30 should now show the ZIP contents."
}
finally {
    Remove-Item -LiteralPath $temp -Recurse -Force -ErrorAction SilentlyContinue
    $Token = $null
}
