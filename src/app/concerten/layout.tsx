import { DefaultLayout } from 'components/defaultLayout'

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DefaultLayout>{children}</DefaultLayout>
}
