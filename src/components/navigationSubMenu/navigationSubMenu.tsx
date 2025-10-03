import { useState } from 'react'
import classNames from 'classnames'
import type { MenuItemFragment } from 'graphql/generated/graphql'
import { useOutsideClick } from 'hooks/useOutsideClick'
import { useEscapeKey } from 'hooks/useEscapeKey'
import { NavigationSubMenuItem } from '../navigationSubMenuItem'

import styles from './styles.module.scss'

export interface SubMenuProps {
  label?: string | null
  submenu: MenuItemFragment[]
}

export const NavigationSubMenu = ({ label, submenu }: SubMenuProps) => {
  const [visible, setVisible] = useState(false)
  const ref = useOutsideClick<HTMLLIElement>(() => setVisible(false))
  useEscapeKey(() => setVisible(false))

  const handleClick = () => {
    setVisible(!visible)
  }

  if (!label) return null

  return (
    <li className={classNames(styles.listItem)} ref={ref}>
      <button
        className={classNames(styles.button, 'text-large')}
        disabled={Boolean(submenu?.length === 0)}
        type="button"
        onClick={handleClick}
      >
        {label}
      </button>
      {visible && (
        <>
          <ul className={classNames(styles.list, 'with-background')}>
            {submenu?.map((item) => (
              <NavigationSubMenuItem
                key={item.id}
                slug={item?.link?.slug}
                label={item.label}
                onClick={handleClick}
              />
            ))}
          </ul>

          <div className={classNames(styles.arrow)} />
        </>
      )}
    </li>
  )
}
