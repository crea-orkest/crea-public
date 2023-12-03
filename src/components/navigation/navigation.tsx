import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { NavigationItem } from 'components/navigationItem'
import { NavigationSubMenu } from 'components/navigationSubMenu'
import { getGeneralInfo } from '../../graphql/getters/getGeneralInfo'
import { MobileMenu } from 'components/mobileMenu'
import { getSiteMetadata } from '../../graphql/getters/getSiteMetadata'

import styles from './styles.module.scss'

export const Navigation: React.FC = async () => {
  const { data } = await getGeneralInfo()
  const { metadata } = await getSiteMetadata()
  if (!data?.general) return null

  return (
    <nav className={classNames(styles.root, 'content-layout')}>
      <div className={classNames(styles.content)}>
        <Link href="/" className={classNames(styles.logoLink)}>
          <Image
            className={classNames(styles.logo)}
            priority={true}
            src="/img/logo-crea-orkest.svg"
            alt={metadata?.title || ''}
            width={200}
            height={50}
          />
        </Link>
        <MobileMenu />
        <ul className={classNames(styles.list)}>
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
      </div>
    </nav>
  )
}
