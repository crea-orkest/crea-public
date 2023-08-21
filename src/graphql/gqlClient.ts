import { Client, cacheExchange, fetchExchange } from "@urql/core";
import { linkConfig, url } from "./linkConfig";

export const client = new Client({
  url,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
    return {
      headers: { ...linkConfig.headers },
      next: { revalidate: 60 },
    };
  },
});
