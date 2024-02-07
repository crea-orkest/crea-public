import Link from 'next/link'
import styles from './styles.module.scss'
import classNames from 'classnames'

export const NotFound = () => {
  return (
    <section className={classNames(styles.root, 'content-layout')}>
      <h1>Pagina niet gevonden</h1>
      <p>
        Je lijkt een verkeerde afslag te hebben genomen.{' '}
        <Link href="/">Ga terug naar de homepage</Link>
      </p>
    </section>
  )
}
