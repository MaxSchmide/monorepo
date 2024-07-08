'use client'

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from '@apollo/client'
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename'
import React, { PropsWithChildren, useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export const instantiateApolloClient = () => {
  if (apolloClient) {
    return apolloClient
  }

  const stripTypenameLink = removeTypenameFromVariables()

  const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  })

  apolloClient = new ApolloClient({
    link: ApolloLink.from([stripTypenameLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: { fetchPolicy: 'network-only' },
    },
  })

  return apolloClient
}

export const ApolloWrapper: React.FC<
  PropsWithChildren<Record<never, never>>
> = ({ children }) => {
  const client = useMemo(instantiateApolloClient, [])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
