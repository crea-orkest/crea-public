import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import type { GetGeneralInfoQuery } from 'graphql/generated/graphql'
import { NavigationItem } from 'components/navigationItem'
import { NavigationSubMenu } from 'components/navigationSubMenu'
import { MobileMenu } from 'components/mobileMenu'
import { CreaOrkestLogo } from 'components/icons/crea-orkest-logo'

import styles from './styles.module.scss'

interface Props {
  generalInfo: GetGeneralInfoQuery['general']
  siteName: string
}

export const Navigation = ({ siteName, generalInfo }: Props) => {
  return (
    <nav className={classNames(styles.root, 'content-layout')}>
      <div className={classNames(styles.content)}>
        <Link href="/" className={classNames(styles.logoLink)}>
          <CreaOrkestLogo className={classNames(styles.logo)} />
          <span className="sr-only">{siteName}: Ga naar home</span>
        </Link>
        <MobileMenu menu={generalInfo?.menu ?? null} />
        <ul className={classNames(styles.list)}>
          {generalInfo?.menu?.map((item) => {
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
                  submenu={item.menu}
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
