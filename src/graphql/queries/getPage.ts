import { gql } from "@apollo/client";
import { pageDetail } from "../fragments/pageDetail";

export const GET_PAGE = gql`
  query getPage($slug: String) {
    page(filter: { slug: { eq: $slug } }) {
      ...pageDetail
    }
  }
  ${pageDetail}
`;
