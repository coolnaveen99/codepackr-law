import type { ReactNode } from 'react'

export interface TableColumn<T> {
  id: string
  header: string
  cell: (row: T) => ReactNode
}

interface TableProps<T> {
  caption: string
  columns: TableColumn<T>[]
  rows: T[]
  getRowId: (row: T) => string
  empty?: ReactNode
}

export function Table<T>({ caption, columns, rows, getRowId, empty }: TableProps<T>) {
  return (
    <div className="cp-ds-table-wrap">
      <table className="cp-ds-table">
        <caption>{caption}</caption>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id} scope="col">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length}>{empty ?? 'Nothing to show.'}</td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={getRowId(row)}>
                {columns.map((column) => (
                  <td key={column.id} data-label={column.header}>
                    {column.cell(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
