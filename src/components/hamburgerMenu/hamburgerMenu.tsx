'use client'
import React from 'react'
import classNames from 'classnames'
import { Provider } from 'urql'
import styles from './styles.module.scss'
import { useDimensions } from 'hooks/useDimensions'
import { client } from 'graphql/gqlClient'
import { Hamburger } from 'components/icons/hamburger'
import { Cross } from 'components/icons/cross'
import { useHrefClick } from 'hooks/useHrefClick'
import { HamburgerMenuItems } from 'components/hamburgerMenuItems'

export const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  useHrefClick(() => setOpen(false))
  const { width } = useDimensions()

  const handleClick = () => {
    setOpen(!open)
  }

  React.useEffect(() => {
    // TODO: use breakpoint css variable
    if (width < 800) {
      document.body.classList.toggle('noscroll', open)
    } else {
      document.body.classList.remove('noscroll')
    }
  }, [open, width])

  return (
    <Provider value={client}>
      <div className={classNames(styles.hamburgerMenu)}>
        <button
          className={classNames(styles.hamburgerMenu__hamburger)}
          type="button"
          onClick={handleClick}
        >
          <Hamburger />
        </button>
        {open && (
          <div className={classNames(styles.hamburgerMenu__overlay)}>
            <div className={classNames(styles.hamburgerMenu__heading)}>
              <button
                className={classNames(styles.hamburgerMenu__close)}
                type="button"
                onClick={handleClick}
              >
                <Cross />
              </button>
            </div>
            <HamburgerMenuItems />
          </div>
        )}
      </div>
    </Provider>
  )
}
