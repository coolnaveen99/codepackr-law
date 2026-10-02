import { useId, useState, type KeyboardEvent, type ReactNode } from 'react'

export interface TabItem {
  id: string
  label: string
  panel: ReactNode
}

interface TabsProps {
  tabs: TabItem[]
  label: string
  value?: string
  defaultValue?: string
  onChange?: (id: string) => void
}

export function Tabs({ tabs, label, value, defaultValue, onChange }: TabsProps) {
  const baseId = useId()
  const first = tabs[0]?.id ?? ''
  const [internal, setInternal] = useState(defaultValue ?? first)
  const selected = value ?? internal

  function select(id: string) {
    if (value === undefined) setInternal(id)
    onChange?.(id)
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = tabs.findIndex((tab) => tab.id === selected)
    if (index < 0) return
    const last = tabs.length - 1
    let next = index
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = index === last ? 0 : index + 1
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = index === 0 ? last : index - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last
    else return
    event.preventDefault()
    const tab = tabs[next]
    if (!tab) return
    select(tab.id)
    document.getElementById(`${baseId}-tab-${tab.id}`)?.focus()
  }

  return (
    <div className="cp-ds-tabs-root">
      <div className="cp-ds-tabs" role="tablist" aria-label={label} onKeyDown={onKeyDown}>
        {tabs.map((tab) => {
          const active = tab.id === selected
          return (
            <button
              key={tab.id}
              id={`${baseId}-tab-${tab.id}`}
              className="cp-ds-tab"
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={active ? 0 : -1}
              onClick={() => select(tab.id)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`${baseId}-panel-${tab.id}`}
          className="cp-ds-tabpanel"
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={tab.id !== selected}
          tabIndex={0}
        >
          {tab.panel}
        </div>
      ))}
    </div>
  )
}
