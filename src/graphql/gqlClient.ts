import {
  ApolloClient,
  createHttpLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { cacheConfig } from "./cacheConfig";
import { linkConfig } from "./linkConfig";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

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
