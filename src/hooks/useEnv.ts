import React from 'react'
import { type EnvAllowList } from 'types/envAllowlist'

export const useEnv = (key: EnvAllowList): string | undefined => {
  const [state, setState] = React.useState<string | undefined>()

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/env?${key}`, {
        next: { revalidate: 86400, tags: ['env'] },
      })
      const data = await response.json()
      if (!data) return
      if (typeof data !== 'object') return
      if (!Object.hasOwn(data, key)) return
      if (typeof data[key] !== 'string') return
      setState(data[key])
    }

    fetchData()
  }, [key])

  return state
}
