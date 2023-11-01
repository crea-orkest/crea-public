'use client'

import { NavigationSubMenuItem } from '../navigationSubMenuItem'
import React from 'react'
import type { SubmenuItemFragment } from 'graphql/generated/graphql'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { useOutsideClick } from 'hooks/useOutsideClick'
import { useEscapeKey } from 'hooks/useEscapeKey'

export interface SubMenuProps {
  label?: string | null
  item: string
}

export const NavigationSubMenu: React.FC<SubMenuProps> = ({ label, item }) => {
  const submenu: SubmenuItemFragment['menu'] = JSON.parse(item)
  const [visible, setVisible] = React.useState(false)
  const ref = useOutsideClick<HTMLLIElement>(() => setVisible(false))
  useEscapeKey(() => setVisible(false))

  const handleClick = () => {
    setVisible(!visible)
  }

  if (!label) return null

  return (
    <li ref={ref}>
      <button
        className={classNames(styles.button, 'text-large')}
        disabled={Boolean(submenu?.length === 0)}
        type="button"
        onClick={handleClick}
      >
        {label}
      </button>
      {visible && (
        <ul className={classNames(styles.list)}>
          {submenu?.map((item) => (
            <NavigationSubMenuItem
              key={item.id}
              slug={item?.link?.slug}
              label={item.label}
              onClick={handleClick}
            />
          ))}
        </ul>
      )}
    </li>
  )
}
