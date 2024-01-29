export interface siteMetadata {
  baseUrl: string
  title: string
}

export const formatSiteMetadata = ({
  baseUrl = '',
  title = '',
}): siteMetadata => {
  return {
    baseUrl,
    title,
  }
}
