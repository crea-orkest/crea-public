import type { ReactNode } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const resolvedComponent = async <T>(Component: any, props: T) => {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved as ReactNode
}
