import { cacheExchange } from './cacheExchange'
import { linkConfig } from './linkConfig'
import { Client, type CombinedError, fetchExchange } from '@urql/core'
import { retryExchange, type RetryExchangeOptions } from '@urql/exchange-retry'

const options: RetryExchangeOptions = {
  initialDelayMs: 1000,
  maxDelayMs: 15000,
  randomDelay: true,
  maxNumberAttempts: 2,
  retryIf: (err: CombinedError) => Boolean(err && err.networkError),
}

export const client = new Client({
  url: linkConfig.url,
  exchanges: [cacheExchange, retryExchange(options), fetchExchange],
  fetchOptions: () => {
    return {
      headers: { ...linkConfig.headers },
      next: { revalidate: 60, tags: ['content'] },
    }
  },
  suspense: true,
})
