interface Props {
  env: 'current' | 'dev'
}

export const getUrl = ({ env }: Props) => {
  if (typeof window === 'undefined')
    return `https://${env}--crea-orkest.apollographos.net/graphql` as const

  return '/graphql' as const
}
