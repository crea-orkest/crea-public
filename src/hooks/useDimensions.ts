import React from 'react'

export const useDimensions = () => {
  const [dimensions, setDimensions] = React.useState({
    width: globalThis.innerWidth,
    height: globalThis.innerHeight,
  })
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        width: globalThis.innerWidth,
        height: globalThis.innerHeight,
      })
    }

    document.addEventListener('load', handleResize)
    document.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('load', handleResize)
      document.removeEventListener('resize', handleResize)
    }
  }, [setDimensions])

  return dimensions
}
