#!/usr/bin/env bash
# Vercel Ignored Build Step for CodePackr Law.
# Exit 0 = skip the Vercel build. Exit 1 = continue with the Vercel build.
set -euo pipefail

PREVIOUS_SHA="${VERCEL_GIT_PREVIOUS_SHA:-HEAD^}"
CURRENT_SHA="${VERCEL_GIT_COMMIT_SHA:-HEAD}"

if [[ -z "${VERCEL_GIT_PREVIOUS_SHA:-}" ]]; then
  echo "No previous Vercel commit SHA available; proceeding with build."
  exit 1
fi

if ! git cat-file -e "${PREVIOUS_SHA}^{commit}" 2>/dev/null || ! git cat-file -e "${CURRENT_SHA}^{commit}" 2>/dev/null; then
  echo "Required Git commit is unavailable; proceeding with build."
  exit 1
fi

mapfile -t CHANGED_FILES < <(git diff --name-only "${PREVIOUS_SHA}" "${CURRENT_SHA}")

if [[ ${#CHANGED_FILES[@]} -eq 0 ]]; then
  echo "No changed files detected; skipping build."
  exit 0
fi

for file in "${CHANGED_FILES[@]}"; do
  case "$file" in
    .github/*|docs/*|prompts/*|README.md|README.*|CHANGELOG.md|CHANGELOG.*) ;;
    *) echo "Build-relevant change detected: $file"; exit 1 ;;
  esac
done

echo "Only documentation/instructions changed; skipping Vercel build."
exit 0
