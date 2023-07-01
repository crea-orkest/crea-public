import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const contentfulEnvironment = process.env.CONTENTFUL_ENVIRONMENT;
const contentfulAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const url = `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${contentfulEnvironment}`;

const contentfulLink = createHttpLink({
  uri: url,
});

const authLink = setContext(() => ({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${contentfulAccessToken}`,
    "Content-Language": "nl-NL",
  },
}));

export const contentfulClient = new ApolloClient({
  ssrMode: process.env.NODE_ENV === "production",
  link: authLink.concat(contentfulLink),
  cache: new InMemoryCache(),
});
