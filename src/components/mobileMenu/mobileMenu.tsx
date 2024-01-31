import { useState } from 'react'
import classNames from 'classnames'
import type { GeneralRecord } from 'graphql/generated/graphql'
import { useHrefClick } from 'hooks/useHrefClick'
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

  const handleClick = () => {
    if (open) {
      document.body.classList.remove('noscroll-mobile')
      setOpen(false)
    } else if (!open) {
      document.body.classList.add('noscroll-mobile')
      setOpen(true)
    }
  }

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
                    onClick={handleClick}
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
                            onClick={handleClick}
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
