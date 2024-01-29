import type { AppProps } from 'next/app'

import '../styles/global.scss'

function CreaPublic({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default CreaPublic
