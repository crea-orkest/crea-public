import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'
import classNames from 'classnames'
import styles from './styles.module.scss'

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={classNames(styles.main)}>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
