import { gql } from "../__generated__/gql";

export const CHARACTERS_QUERY = gql(`
  query characters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        image
        name
        gender
        species
        type
        status
      }
    }
  }
`);
