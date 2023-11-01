'use client'

import { NavigationSubMenuItem } from '../navigationSubMenuItem'
import React, { useRef, useEffect, useState } from 'react'
import type { SubmenuItemFragment } from 'graphql/generated/graphql'
import classNames from 'classnames'
import styles from './styles.module.scss'

export interface SubMenuProps {
  label?: string | null
  item: string
}

export const NavigationSubMenu: React.FC<SubMenuProps> = ({ label, item }) => {
  const submenu: SubmenuItemFragment['menu'] = JSON.parse(item)
  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(!visible)
  }

  const dropdown = useRef<HTMLLIElement>(null)

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!visible) return
    const handleClick = (event: MouseEvent) => {
      if (
        dropdown.current &&
        event.target &&
        !dropdown.current.contains(event.target as Node)
      ) {
        setVisible(false)
      }
    }
    window.addEventListener('click', handleClick)
    // clean up
    return () => window.removeEventListener('click', handleClick)
  }, [visible])

  if (!label) return null

  return (
    <li className={classNames(styles.listItem)} ref={dropdown}>
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
