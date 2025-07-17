export const isValidUrl = (url: string) => {
  return URL.canParse(url)
}
