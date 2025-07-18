import { type ReactNode } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

export interface Props {
  lat: number
  lng: number
  children: ReactNode
}

export const LinkToMap = ({ lat, lng, children }: Props) => (
  <Link
    href={`https://maps.google.com/?q=${lat},${lng}`}
    target="_blank"
    rel="noreferrer"
    className={styles.staticMapLink}
  >
    {children}
  </Link>
)
