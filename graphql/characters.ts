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

export const CHARACTER_QUERY = gql(`
  query character($id: ID!) {
    character(id: $id) {
      id
      image
      name
      gender
      species
      origin {
        dimension
        id
      }
    }
  }
`);
