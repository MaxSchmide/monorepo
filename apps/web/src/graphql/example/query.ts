import { graphql } from '../graphql'

export const exampleQuery = graphql(`
  query GetExampleData {
    exampleQuery {
      id
    }
  }
`)
