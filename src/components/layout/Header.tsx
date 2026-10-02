import { useEffect, useRef, useState } from 'react'
import {
  BookOpen,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  FileSearch,
  Home,
  Library,
  Menu,
  Moon,
  Search,
  Scale,
  Settings2,
  Sun,
  Wrench,
} from 'lucide-react'

interface HeaderProps {
  dark: boolean
  onToggleDark: () => void
  onSidebarCollapsedChange?: (collapsed: boolean) => void
  currentLabel?: string | null
  activeKey?: string
  onHome: () => void
  onOpenSubjects: () => void
  onSelectSubject: (slug: string) => void
  onSelectTool: (slug: string) => void
  onOpenKnowledge: () => void
  onOpenCaseLaw: () => void
  onOpenContact?: () => void
}

type NavItem = {
  label: string
  hint: string
  icon: typeof Home
  action: () => void
  active: boolean
}

export function Header({
  dark,
  onToggleDark,
  onSidebarCollapsedChange,
  currentLabel,
  activeKey,
  onHome,
  onOpenSubjects,
  onSelectTool,
  onOpenKnowledge,
  onOpenCaseLaw,
  onOpenContact,
}: HeaderProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  const openSearch = () => setSearchOpen(true)

  useEffect(() => {
    onSidebarCollapsedChange?.(collapsed)
  }, [collapsed, onSidebarCollapsedChange])

  useEffect(() => {
    document.body.classList.toggle('nav-open', mobileNavOpen)
    return () => document.body.classList.remove('nav-open')
  }, [mobileNavOpen])

  const runMobileAction = (action: () => void) => {
    action()
    setMobileNavOpen(false)
  }

  useEffect(() => {
    if (!searchOpen) return
    searchRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSearchOpen(false)
        setMobileNavOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [searchOpen])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        openSearch()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const learn: NavItem[] = [
    { label: 'Learn', hint: 'Subjects & provisions', icon: BookOpen, action: onOpenSubjects, active: activeKey === 'subjects' || !!activeKey?.startsWith('subject:') },
    { label: 'Research', hint: 'Sources & authorities', icon: FileSearch, action: () => onSelectTool('research-workbench'), active: activeKey === 'tool:research-workbench' || activeKey === 'tool:global-search' },
    { label: 'Practice', hint: 'Matters & preparation', icon: BriefcaseBusiness, action: () => onSelectTool('case-prep'), active: activeKey === 'tool:case-prep' || activeKey === 'tool:practice-dashboard' },
    { label: 'Library', hint: 'Judgments & knowledge', icon: Library, action: onOpenCaseLaw, active: activeKey === 'case-law' || activeKey === 'knowledge' },
    { label: 'Utilities', hint: 'Calculators & mappings', icon: Wrench, action: () => onSelectTool('legal-calculators'), active: activeKey === 'tool:legal-calculators' },
  ]

  return (
    <>
      <aside
        className={`cp-law-sidebar hidden lg:flex ${collapsed ? 'is-collapsed' : ''}`}
        aria-label="Primary navigation"
      >
        <div className="cp-law-sidebar-brand">
          <button type="button" onClick={onHome} className="cp-law-brand-button" aria-label="CodePackr Law home">
            <span className="cp-ds-mark size-9 rounded-xl flex items-center justify-center shrink-0"><Scale className="w-5 h-5" /></span>
            <span className="cp-law-brand-copy">
              <strong>CodePackr <em>Law</em></strong>
              <small>Legal workspace</small>
            </span>
          </button>
          <button
            type="button"
            className="cp-law-collapse"
            onClick={() => setCollapsed((value) => !value)}
            aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
            title={collapsed ? 'Expand navigation' : 'Collapse navigation'}
          >
            {collapsed ? <ChevronRight size={17} /> : <ChevronLeft size={17} />}
          </button>
        </div>

        <div className="cp-law-sidebar-section">
          <span className="cp-law-section-label">Workspace</span>
          <button type="button" className={`cp-law-nav-item ${activeKey === 'home' ? 'is-active' : ''}`} onClick={onHome}>
            <Home size={18} /><span><b>Home</b><small>Overview</small></span>
          </button>
          {learn.map((item) => {
            const Icon = item.icon
            return (
              <button key={item.label} type="button" className={`cp-law-nav-item ${item.active ? 'is-active' : ''}`} onClick={item.action}>
                <Icon size={18} /><span><b>{item.label}</b><small>{item.hint}</small></span>
              </button>
            )
          })}
        </div>

        <div className="cp-law-sidebar-section cp-law-sidebar-secondary">
          <span className="cp-law-section-label">Reference</span>
          <button type="button" className={`cp-law-nav-item ${activeKey === 'knowledge' ? 'is-active' : ''}`} onClick={onOpenKnowledge}>
            <Scale size={18} /><span><b>Knowledge</b><small>Concepts & maxims</small></span>
          </button>
          <button type="button" className={`cp-law-nav-item ${activeKey === 'case-law' ? 'is-active' : ''}`} onClick={onOpenCaseLaw}>
            <Library size={18} /><span><b>Case law</b><small>Judgments & authorities</small></span>
          </button>
        </div>

        <div className="cp-law-sidebar-footer">
          <button type="button" className="cp-law-nav-item" onClick={onToggleDark}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
            <span><b>{dark ? 'Light mode' : 'Dark mode'}</b><small>Appearance</small></span>
          </button>
          {onOpenContact && (
            <button type="button" className="cp-law-nav-item" onClick={onOpenContact}>
              <Settings2 size={18} /><span><b>Support</b><small>Contact & feedback</small></span>
            </button>
          )}
          <div className="cp-law-privacy"><span aria-hidden>●</span><span>Private by default</span></div>
        </div>
      </aside>

      <header className={`cp-law-topbar ${collapsed ? "is-sidebar-collapsed" : ""}`}>
        <div className="cp-law-topbar-inner">
          <button
            type="button"
            className="cp-law-mobile-menu lg:hidden"
            onClick={() => setMobileNavOpen((value) => !value)}
            aria-expanded={mobileNavOpen}
            aria-controls="codepackr-law-mobile-navigation"
            aria-label={mobileNavOpen ? 'Close navigation' : 'Open navigation'}
          >
            <Menu size={20} />
          </button>
          <div className="cp-law-context">
            <span className="cp-law-context-kicker">CodePackr Law</span>
            <span className="cp-law-context-title">{currentLabel || 'Indian legal research, learning & practice workspace'}</span>
          </div>
          <button type="button" className="cp-law-search-trigger" onClick={openSearch} aria-label="Open global search">
            <Search size={17} />
            <span>Search law, cases, sections, tools…</span>
            <kbd>⌘ K</kbd>
          </button>
          <button type="button" className="cp-law-theme-button" onClick={onToggleDark} aria-label="Toggle theme">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </header>


        {mobileNavOpen && (
          <div id="codepackr-law-mobile-navigation" className="cp-law-mobile-nav lg:hidden" role="dialog" aria-modal="true" aria-label="CodePackr Law navigation">
            <button
              type="button"
              className="cp-law-mobile-nav-backdrop"
              onClick={() => setMobileNavOpen(false)}
              aria-label="Close navigation"
            />
            <nav className="cp-law-mobile-nav-panel" aria-label="Mobile primary navigation">
              <div className="cp-law-mobile-nav-heading">
                <div>
                  <span className="cp-law-context-kicker">CodePackr Law</span>
                  <strong>Legal workspace</strong>
                </div>
                <button type="button" onClick={() => setMobileNavOpen(false)} aria-label="Close navigation">
                  <ChevronLeft size={18} />
                </button>
              </div>

              <div className="cp-law-mobile-nav-group">
                <span className="cp-law-section-label">Workspace</span>
                <button type="button" className={`cp-law-nav-item ${activeKey === 'home' ? 'is-active' : ''}`} onClick={() => runMobileAction(onHome)}>
                  <Home size={18} /><span><b>Home</b><small>Overview</small></span>
                </button>
                {learn.map((item) => {
                  const Icon = item.icon
                  return (
                    <button key={item.label} type="button" className={`cp-law-nav-item ${item.active ? 'is-active' : ''}`} onClick={() => runMobileAction(item.action)}>
                      <Icon size={18} /><span><b>{item.label}</b><small>{item.hint}</small></span>
                    </button>
                  )
                })}
              </div>

              <div className="cp-law-mobile-nav-group cp-law-mobile-nav-reference">
                <span className="cp-law-section-label">Reference</span>
                <button type="button" className={`cp-law-nav-item ${activeKey === 'knowledge' ? 'is-active' : ''}`} onClick={() => runMobileAction(onOpenKnowledge)}>
                  <Scale size={18} /><span><b>Knowledge</b><small>Concepts & maxims</small></span>
                </button>
                <button type="button" className={`cp-law-nav-item ${activeKey === 'case-law' ? 'is-active' : ''}`} onClick={() => runMobileAction(onOpenCaseLaw)}>
                  <Library size={18} /><span><b>Case law</b><small>Judgments & authorities</small></span>
                </button>
              </div>

              <div className="cp-law-mobile-nav-footer">
                <button type="button" className="cp-law-nav-item" onClick={() => runMobileAction(onToggleDark)}>
                  {dark ? <Sun size={18} /> : <Moon size={18} />}
                  <span><b>{dark ? 'Light mode' : 'Dark mode'}</b><small>Appearance</small></span>
                </button>
                {onOpenContact && (
                  <button type="button" className="cp-law-nav-item" onClick={() => runMobileAction(onOpenContact)}>
                    <Settings2 size={18} /><span><b>Support</b><small>Contact & feedback</small></span>
                  </button>
                )}
                <div className="cp-law-privacy"><span aria-hidden>●</span><span>Private by default</span></div>
              </div>
            </nav>
          </div>
        )}
      {searchOpen && (
        <div className={`cp-law-search-overlay ${collapsed ? "is-sidebar-collapsed" : ""}`} role="dialog" aria-modal="true" aria-label="Global search">
          <div className="cp-law-search-dialog">
            <div className="cp-law-search-heading">
              <div><span className="cp-law-context-kicker">Global search</span><h2>Find across CodePackr Law</h2></div>
              <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">Esc</button>
            </div>
            <div className="cp-law-search-input-wrap">
              <Search size={20} />
              <input ref={searchRef} placeholder="Subjects, sections, Acts, judgments, authorities, tools…" onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  setSearchOpen(false)
                  onSelectTool('global-search')
                }
              }} />
              <kbd>Enter</kbd>
            </div>
            <div className="cp-law-search-suggestions">
              <button type="button" onClick={() => { setSearchOpen(false); onOpenSubjects() }}><BookOpen size={17} /><span><b>Browse subjects</b><small>Curriculum, topics and provisions</small></span></button>
              <button type="button" onClick={() => { setSearchOpen(false); onOpenCaseLaw() }}><Library size={17} /><span><b>Case law library</b><small>Judgments and legal authorities</small></span></button>
              <button type="button" onClick={() => { setSearchOpen(false); onSelectTool('research-workbench') }}><FileSearch size={17} /><span><b>Research workspace</b><small>Questions, sources and citations</small></span></button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
