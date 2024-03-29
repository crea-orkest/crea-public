import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import type { GeneralRecord } from 'graphql/generated/graphql'
import { slugFormatter } from 'utils/slugFormatter'

import styles from './styles.module.scss'

interface Props {
  generalInfo: GeneralRecord
  siteName: string
}

export const Footer = ({ generalInfo, siteName }: Props) => {
  return (
    <footer className={classNames(styles.root, 'with-background')}>
      <div className={classNames(styles.content, 'content-layout')}>
        <div>
          <h2 className={classNames(styles.title)}>
            <span className="sr-only">Footer</span>
            {siteName}
          </h2>

          <address className={classNames(styles.address)}>
            <Link
              className={classNames(styles.addressLink)}
              href="https://maps.google.com/?q=Nieuwe+Achtergracht+170,+1018+WV+Amsterdam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Nieuwe Achtergracht 170</span>
              <span>1018 WV Amsterdam</span>
            </Link>
          </address>

          <ul className={classNames(styles.list, styles.logoList)}>
            <li>
              <Link
                className={classNames(styles.logoLink)}
                href="https://www.crea.nl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={classNames(styles.logo)}
                  src="/img/logo-crea-cultureel-studentencentrum.png"
                  alt="logo CREA"
                  fill
                  sizes="(min-width: 500px) 50vw, 100vw"
                />
                <span className="sr-only">Ga naar crea.nl</span>
              </Link>
            </li>
            <li>
              <Link
                className={classNames(styles.logoLink)}
                href="https://www.uva.nl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={classNames(styles.logo)}
                  src="/img/logo-uva.png"
                  alt="logo UVA"
                  fill
                  sizes="(min-width: 500px) 50vw, 100vw"
                />
                <span className="sr-only">Ga naar uva.nl</span>
              </Link>
            </li>
            <li>
              <Link
                className={classNames(styles.logoLink)}
                href="https://www.hva.nl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={classNames(styles.logo)}
                  src="/img/logo-hva.png"
                  alt="logo HVA"
                  fill
                  sizes="(min-width: 500px) 50vw, 100vw"
                />
                <span className="sr-only">Ga naar hva.nl</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={classNames(styles.title)}>Navigatie</h3>
          <ul className={classNames(styles.list)}>
            {generalInfo.menu.map((item) => {
              if ('link' in item && item?.link?.slug && item.label) {
                return (
                  <li key={item.id}>
                    <Link
                      className={classNames(styles.link)}
                      href={slugFormatter({ slug: item?.link?.slug })}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              }
              return null
            })}
          </ul>
        </div>

        <div>
          <h3 className={classNames(styles.title)}>Volg ons</h3>
          <ul className={classNames(styles.list)}>
            <li>
              <Link
                className={classNames(styles.link)}
                href="https://facebook.com/creaorkest"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                className={classNames(styles.link)}
                href="https://www.instagram.com/creaorkest/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                className={classNames(styles.link)}
                href="https://www.youtube.com/user/creaorkestpr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
