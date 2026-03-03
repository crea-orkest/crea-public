export const getUrl = () => {
  if (typeof window === 'undefined')
    return 'https://graphql.datocms.com' as const

  return '/graphql' as const
}
