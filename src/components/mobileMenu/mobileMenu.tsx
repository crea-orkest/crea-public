'use client'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Provider } from 'urql'
import { useDimensions } from 'hooks/useDimensions'
import { client } from '../../graphql/gqlClient'
import { Hamburger } from 'components/icons/hamburger'
import { Cross } from 'components/icons/cross'
import { useHrefClick } from 'hooks/useHrefClick'
import { MobileMenuItems } from 'components/mobileMenuItems'
import { cssToJs } from 'utils/cssToJs'

import styles from './styles.module.scss'

export const MobileMenu = () => {
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
    <Provider value={client}>
      <div className={classNames(styles.container)}>
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
            <MobileMenuItems />
          </div>
        )}
      </div>
    </Provider>
  )
}
