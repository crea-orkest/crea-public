import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-cache-inmemory";
import introspectionQueryResultData from "./generated/types";
const accessToken = process.env?.["DATOCMS_ACCESS_TOKEN"];
const url = `https://graphql.datocms.com`;

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const link = createHttpLink({
  uri: url,
});

const authLink = setContext(() => ({
  headers: {
    "X-Base-Editing-Url": "true",
    "X-Include-Drafts": "true",
    "X-Exclude-Invalid": "true",
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
    "Content-Language": "nl-NL",
  },
}));

export const gqlClient = new ApolloClient({
  ssrMode: process.env.NODE_ENV === "production",
  link: authLink.concat(link),
  cache: new InMemoryCache({ fragmentMatcher }),
});
