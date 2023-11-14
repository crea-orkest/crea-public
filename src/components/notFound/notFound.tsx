import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

export const NotFound: React.FC = () => {
  return (
    <section className={styles.notFound}>
      <div className={styles.notFound__content}>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </section>
  )
}
