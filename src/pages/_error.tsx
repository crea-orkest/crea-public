import type { NextPageContext } from 'next'
import NextErrorComponent from 'next/error'

type Props = {
  statusCode: number
}

function CustomErrorComponent({ statusCode }: Props) {
  return <NextErrorComponent statusCode={statusCode} />
}

CustomErrorComponent.getInitialProps = (contextData: NextPageContext) => {
  return NextErrorComponent.getInitialProps(contextData)
}

export default CustomErrorComponent
