'use client'

// import Image from 'next/image'
// import Link from 'next/link'
import { NavigationItem } from 'components/navigationItem'
import React from 'react'
import { useQuery } from 'urql'
import { GetGeneralInfoDocument } from 'graphql/generated/graphql'
import styles from './styles.module.scss'

export const MobileMenuItems: React.FC = () => {
  const [result] = useQuery({ query: GetGeneralInfoDocument })

  return (
    <ul className={styles.container}>
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
            <li key={item.id}>
              <span className={styles.subItem}>{item.label}</span>
              <ul className={styles.subList}>
                {item?.menu?.map((subItem) => {
                  return (
                    <NavigationItem
                      key={subItem.id}
                      slug={subItem?.link?.slug}
                      label={subItem.label}
                    />
                  )
                })}
              </ul>
            </li>
          )
        }
        return <NavigationItem key={item.id} slug={'/'} label={'Error'} />
      })}
    </ul>
  )
}
