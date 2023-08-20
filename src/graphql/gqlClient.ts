import { cacheConfig } from "./cacheConfig";
import { linkConfig } from "./linkConfig";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";

import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";

export const client = new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(cacheConfig),
  link: createHttpLink(linkConfig),
  name: "web",
  version: "1.0",
});

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(cacheConfig),
    link: new HttpLink({
      ...linkConfig,
      fetchOptions: { cache: "no-store" },
    }),
  });
});
