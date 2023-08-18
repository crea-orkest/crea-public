import { gql } from "@apollo/client";
import { file } from "./file";
import { tag } from "./tag";
import { author } from "./author";
import { locations } from "./locations";
import { link } from "./link";

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
