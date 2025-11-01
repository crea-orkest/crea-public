import Link from 'next/link'
import classNames from 'classnames'
import { slugFormatter } from 'utils/slugFormatter'

import styles from './styles.module.scss'

export interface NavigationItemProps {
  slug?: string | null
  label?: string | null
  onClick?: () => void
}

export const NavigationItem = ({
  slug,
  label,
  onClick,
}: NavigationItemProps) => {
  if (!slug)
    return <li className={classNames(styles.navItem)}>No link specified</li>
  if (!label)
    return <li className={classNames(styles.navItem)}>No label specified</li>

  return (
    <li className={classNames(styles.navItem)}>
      <Link
        className={classNames(styles.link, 'text-large')}
        href={slugFormatter({ slug })}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  )
}
