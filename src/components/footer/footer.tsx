import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <footer className={classNames(styles.wrapper)}>
      <ul>
        <li>Concerten</li>
      </ul>
      <ul>
        <li>Instagram</li>
        <li>Facebook</li>
      </ul>
    </footer>
  )
}
