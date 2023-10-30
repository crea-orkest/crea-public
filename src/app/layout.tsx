import '../styles/global.scss'

import { DefaultLayout } from 'components/defaultLayout'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="nl-NL">
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  )
}

export default RootLayout
