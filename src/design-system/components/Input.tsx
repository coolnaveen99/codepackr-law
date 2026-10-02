import { useId, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react'

interface FieldProps {
  label: string
  hint?: string
  error?: string
  children: (ids: { inputId: string; describedBy?: string }) => ReactNode
}

export function Field({ label, hint, error, children }: FieldProps) {
  const inputId = useId()
  const hintId = useId()
  const errorId = useId()
  const describedBy = [hint ? hintId : '', error ? errorId : ''].filter(Boolean).join(' ') || undefined

  return (
    <div className="cp-ds-field">
      <label className="cp-ds-label" htmlFor={inputId}>
        {label}
      </label>
      {children({ inputId, describedBy })}
      {hint ? (
        <p className="cp-ds-hint" id={hintId}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="cp-ds-error" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  hint?: string
  error?: string
}

export function TextInput({ label, hint, error, id, ...props }: TextInputProps) {
  return (
    <Field label={label} hint={hint} error={error}>
      {({ inputId, describedBy }) => (
        <input
          id={id ?? inputId}
          className="cp-ds-input"
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          {...props}
        />
      )}
    </Field>
  )
}

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  hint?: string
  error?: string
  children: ReactNode
}

export function SelectInput({ label, hint, error, id, children, ...props }: SelectInputProps) {
  return (
    <Field label={label} hint={hint} error={error}>
      {({ inputId, describedBy }) => (
        <select
          id={id ?? inputId}
          className="cp-ds-select"
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          {...props}
        >
          {children}
        </select>
      )}
    </Field>
  )
}

interface TextAreaInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  hint?: string
  error?: string
}

export function TextAreaInput({ label, hint, error, id, ...props }: TextAreaInputProps) {
  return (
    <Field label={label} hint={hint} error={error}>
      {({ inputId, describedBy }) => (
        <textarea
          id={id ?? inputId}
          className="cp-ds-textarea"
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          {...props}
        />
      )}
    </Field>
  )
}
