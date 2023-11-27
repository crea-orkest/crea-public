import classNames from 'classnames'
import type { TwoColumFragment } from '../../graphql/generated/graphql'
import { ContentField } from 'components/contentField'
import { isStructuredText } from 'datocms-structured-text-utils'

import styles from './styles.module.scss'

interface Props {
  item: TwoColumFragment
}

export const TwoColumContentField = ({ item }: Props) => {
  return (
    <div className={classNames(styles.wrapper)} key={item.id}>
      {isStructuredText(item.leftContent) && (
        <div className={styles.content}>
          <ContentField data={item.leftContent} />
        </div>
      )}

      {isStructuredText(item.rightContent) && (
        <div className={styles.content}>
          <ContentField data={item.rightContent} />
        </div>
      )}
    </div>
  )
}
