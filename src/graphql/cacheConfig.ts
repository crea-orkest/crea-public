import type { InMemoryCacheConfig } from "@apollo/client";
import { createFragmentRegistry } from "@apollo/client/cache";
import { identifiable } from "./fragments/identifiable";
import { seo } from "./fragments/seo";
import { tag } from "./fragments/tag";

export const cacheConfig: InMemoryCacheConfig = {
  fragments: createFragmentRegistry(identifiable, seo, tag),
  typePolicies: {
    ConcertRecord: {
      fields: {
        poster: {
          merge: true,
        },
      },
    },
  },
};
