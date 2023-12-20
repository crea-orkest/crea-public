export const cssToJs = (cssString?: string) => {
  if (!cssString) {
    return 0
  }

  if (cssString.includes('rem')) {
    const rem = cssString.split('rem')[0]

    if (rem) {
      const px = parseInt(rem) * 16
      return px
    }
    return 0
  }

  if (cssString.includes('px')) {
    const px = cssString.split('px')[0]

    if (px) {
      return parseInt(px)
    }
    return 0
  }

  return 0
}
