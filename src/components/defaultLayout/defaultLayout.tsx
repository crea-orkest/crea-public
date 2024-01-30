import type { ReactNode } from 'react'
import type { GeneralRecord } from 'graphql/generated/graphql'
import classNames from 'classnames'
import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'

import styles from './styles.module.scss'

interface Props {
  children: ReactNode
  generalInfo: GeneralRecord
  siteName: string
}

export const DefaultLayout = ({ children, generalInfo, siteName }: Props) => {
  return (
    <div className={classNames(styles.main)}>
      <Navigation generalInfo={generalInfo} siteName={siteName} />
      <main>{children}</main>
      <Footer generalInfo={generalInfo} siteName={siteName} />
    </div>
  )
}
