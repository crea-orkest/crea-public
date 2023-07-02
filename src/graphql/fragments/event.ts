import gql from "graphql-tag";

import { imageFragment } from "../fragments/image";
import { metadataFragment } from "../fragments/metadata";
import { sysFragment } from "../fragments/sys";
import { locationFragment } from "./location";

export const eventFragment = gql`
  fragment eventFragment on Event {
    __typename
    title
    startDate
    contentfulMetadata {
      ...metadataFragment
    }
    description {
      __typename
      json
    }
    image {
      ...imageFragment
    }
    location {
      ...locationFragment
    }
    sys {
      ...sysFragment
    }
  }
  ${metadataFragment}
  ${locationFragment}
  ${imageFragment}
  ${sysFragment}
`;
