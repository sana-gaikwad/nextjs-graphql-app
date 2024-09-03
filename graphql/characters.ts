import { gql } from "../__generated__/gql";

export const CHARACTERS_QUERY = gql(`
  query characters {
    characters {
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
      }
    }
  }
`);
