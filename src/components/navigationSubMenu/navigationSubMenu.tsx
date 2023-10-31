'use client'

import { NavigationSubMenuItem } from '../navigationSubMenuItem'
import React from 'react'
import type { SubmenuItemFragment } from 'graphql/generated/graphql'
import classNames from 'classnames'
import styles from './styles.module.scss'

export interface SubMenuProps {
  label?: string | null
  item: string
}

export const NavigationSubMenu: React.FC<SubMenuProps> = ({ label, item }) => {
  const submenu: SubmenuItemFragment['menu'] = JSON.parse(item)
  const [visible, setVisible] = React.useState(false)

  const handleClick = () => {
    setVisible(!visible)
  }

  if (!label) return null

  return (
    <li className={classNames(styles.listItem)}>
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
