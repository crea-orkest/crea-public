import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'
import { slugFormatter } from 'utils/slugFormatter'
import styles from './styles.module.scss'

export interface NavigationItemProps {
  slug?: string | null
  label?: string | null
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  slug,
  label,
}) => {
  if (!slug)
    return <li className={classNames(styles.navItem)}>No link specified</li>
  if (!label)
    return <li className={classNames(styles.navItem)}>No label specified</li>

  return (
    <li className={classNames(styles.navItem)}>
      <Link href={slugFormatter({ slug })}>{label}</Link>
    </li>
  )
}
