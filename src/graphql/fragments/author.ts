import gql from "graphql-tag";
import { identifiable } from "./identifiable";

export const author = gql`
  fragment author on PersonRecord {
    ...identifiable
    name
    role
  }
  ${identifiable}
`;
