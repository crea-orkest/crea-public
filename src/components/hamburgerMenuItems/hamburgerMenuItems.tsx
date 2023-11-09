'use client'

// import Image from 'next/image'
// import Link from 'next/link'
import { NavigationItem } from 'components/navigationItem'
import { NavigationSubMenu } from 'components/navigationSubMenu'
import React from 'react'
import { useQuery } from 'urql'
import { GetGeneralInfoDocument } from 'graphql/generated/graphql'
import styles from './styles.module.scss'

export const HamburgerMenuItems: React.FC = () => {
  const [result] = useQuery({ query: GetGeneralInfoDocument })

  return (
    <ul className={styles.hamburgerMenuItems}>
      {result?.data?.general?.menu.map((item) => {
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
  )
}
