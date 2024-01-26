import { useState, useEffect } from 'react'
import classNames from 'classnames'
import type { GeneralRecord } from 'graphql/generated/graphql'
import { useDimensions } from 'hooks/useDimensions'
import { useHrefClick } from 'hooks/useHrefClick'
import { cssToJs } from 'utils/cssToJs'
import { Hamburger } from 'components/icons/hamburger'
import { Cross } from 'components/icons/cross'
import { NavigationItem } from 'components/navigationItem'

import styles from './styles.module.scss'

interface Props {
  menu: GeneralRecord['menu']
}

export const MobileMenu = ({ menu }: Props) => {
  const [open, setOpen] = useState(false)
  useHrefClick(() => setOpen(false))
  const { width } = useDimensions()

  const handleClick = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (width < cssToJs(styles.mobileBreakpoint)) {
      document.body.classList.toggle('noscroll', open)
    } else {
      document.body.classList.remove('noscroll')
    }
  }, [open, width])

  return (
    <div className={classNames(styles.root)}>
      <button
        className={classNames(styles.menuButton)}
        type="button"
        onClick={handleClick}
      >
        <span className="sr-only">Menu</span>
        <Hamburger className={classNames(styles.menuIcon)} />
      </button>
      {open && (
        <div className={classNames(styles.overlay)}>
          <div className={classNames(styles.heading)}>
            <button
              className={classNames(styles.menuButton)}
              type="button"
              onClick={handleClick}
            >
              <span className="sr-only">Sluit menu</span>
              <Cross className={classNames(styles.menuIcon)} />
            </button>
          </div>

          <ul className={styles.mobileMenuItems}>
            {menu.map((item) => {
              if ('link' in item) {
                return (
                  <NavigationItem
                    key={item.id}
                    slug={item?.link?.slug}
                    label={item.label}
                  />
                )
              }

              if ('menu' in item) {
                return (
                  <li key={item.id}>
                    <span
                      className={classNames(styles.mobileMenuSubItem, 'h3')}
                    >
                      {item.label}
                    </span>
                    <ul className={styles.mobileMenuSubList}>
                      {item?.menu?.map((subItem) => {
                        return (
                          <NavigationItem
                            key={subItem.id}
                            slug={subItem?.link?.slug}
                            label={subItem.label}
                          />
                        )
                      })}
                    </ul>
                  </li>
                )
              }
              return <NavigationItem key={item.id} slug={'/'} label={'Error'} />
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
