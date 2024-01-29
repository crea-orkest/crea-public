import Link from 'next/link'

export const NotFound = () => {
  return (
    <section className="content-layout">
      <h1>Pagina niet gevonden</h1>
      <p>
        Je lijkt een verkeerde afslag te hebben genomen.{' '}
        <Link href="/">Ga terug naar de homepage</Link>
      </p>
    </section>
  )
}
