import { NavigationItem } from 'components/navigationItem'
import { NavigationSubMenu } from 'components/navigationSubMenu'
import React from 'react'
import classNames from 'classnames'
import { getGeneralInfo } from 'graphql/getters/getGeneralInfo'
import styles from './styles.module.scss'

export const Navigation: React.FC = async () => {
  const { data } = await getGeneralInfo()
  if (!data?.general) return null

  return (
    <nav className={classNames(styles.wrapper)}>
      <ul className={classNames(styles.list)}>
        <NavigationItem
          slug="homepage"
          label="Homepage"
        />
        <NavigationItem
          slug="/concerten"
          label="Concerten"
        />
        {data.general.menu.map((item) => {
          if ('link' in item) {
            return (
              <NavigationItem
                key={item.id}
                slug={item?.link?.slug}
                label={item.label}
              />
            )
          }

          if ('menu' in item) {
            return (
              <NavigationSubMenu
                key={item.id}
                label={item.label}
                item={JSON.stringify(item.menu)}
              />
            )
          }

          return <NavigationItem key={item.id} slug={'/'} label={'Error'} />
        })}
      </ul>
    </nav>
  )
}
