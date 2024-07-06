import { initGraphQLTada } from 'gql.tada'
import { introspection } from '../../graphql-env'

export const graphql = initGraphQLTada<{
  introspection: typeof introspection
  scalars: {
    DateTime: string
    JSONObject: object
    Float: number
  }
}>()
