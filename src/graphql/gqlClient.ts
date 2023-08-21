import { HttpLink } from "@apollo/client/core";
import { cacheConfig } from "./cacheConfig";
import { linkConfig } from "./linkConfig";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(cacheConfig),
    link: new HttpLink({
      ...linkConfig,
      fetchOptions: { next: { revalidate: 60 } },
    }),
  });
});
