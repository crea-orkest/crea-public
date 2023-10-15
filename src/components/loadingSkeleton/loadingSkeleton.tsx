import React from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export const LoadingSkeleton: React.FC = () => {
  return <div className={classNames(styles.loadingWrapper)} />
}
