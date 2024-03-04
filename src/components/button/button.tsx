import type { ReactNode } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import styles from './styles.module.scss'

export interface Props {
  className?: string
  href?: string
  type?: HTMLButtonElement['type']
  children: ReactNode
  target?: string
  rel?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  suffix?: string
  download?: boolean
  variant?: 'primary' | 'secondary' | 'tertiary'
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({
  className,
  href = '',
  type = 'button',
  children,
  target,
  rel,
  leftIcon,
  rightIcon,
  suffix,
  download,
  variant = 'primary',
  disabled,
  onClick,
}: Props) => {
  if (!href) {
    return (
      <button
        className={classNames(
          className,
          styles.button,
          styles[variant],
          'text-small'
        )}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {leftIcon}
        <span>
          {children} {suffix && <span className={styles.suffix}>{suffix}</span>}
        </span>
        {rightIcon}
      </button>
    )
  }

  return (
    <Link
      className={classNames(
        className,
        styles.button,
        styles[variant],
        'text-small',
        {
          [`${styles.disabled}`]: disabled,
        }
      )}
      href={href}
      target={target}
      rel={rel}
      download={download}
      onClick={onClick}
      tabIndex={disabled ? -1 : undefined}
    >
      {leftIcon}
      <span>
        {children} {suffix && <span className={styles.suffix}>{suffix}</span>}
      </span>
      {rightIcon}
    </Link>
  )
}
