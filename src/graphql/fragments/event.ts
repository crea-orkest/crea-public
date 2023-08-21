import { author } from "./author";
import { file } from "./file";
import { gql } from "@apollo/client/core";
import { link } from "./link";
import { locations } from "./locations";
import { tag } from "./tag";

export const event = gql`
  fragment event on ConcertRecord {
    id
    title
    _seoMetaTags {
      ...tag
    }
    link {
      ...link
    }
    locations {
      ...locations
    }
    persons {
      ...author
    }
    poster {
      ...file
    }
  }
  ${link}
  ${file}
  ${tag}
  ${author}
  ${locations}
`;
