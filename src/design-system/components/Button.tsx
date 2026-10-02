import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'quiet' | 'danger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
}

export function Button({
  variant = 'primary',
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  return (
    <button type={type} className="cp-ds-button" data-variant={variant} {...props}>
      {children}
    </button>
  )
}
