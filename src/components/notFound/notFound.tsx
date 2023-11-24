import Link from 'next/link'
import styles from './styles.module.scss'

export const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <div className={styles.notFound__content}>
        <h2>Niet gevonden</h2>
        <p>Kon de content niet vinden.</p>
        <Link href="/">Ga terug naar de homepage</Link>
      </div>
    </section>
  )
}
