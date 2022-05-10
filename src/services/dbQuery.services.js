import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from "@apollo/client"
import { databaseParams } from "../assets/constants"

// DEBUG BLOCK
import { getDebug } from "../assets/constants"
import LoadingSpinner from "../components/subcomponents/LoadingSpinner";
const { cardData, enable: debugging } = getDebug()

// Initialize Apollo client and create provider wrapper
const client = new ApolloClient({ 
  uri: databaseParams.uri,
  headers: databaseParams.headers,
  cache: new InMemoryCache()
});

export const CardProvider = ({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider>


// Custom hook for querying GraphQL server
export function useGetCards(setCode) {
  const { data, loading, error } = useQuery(databaseParams.query, { variables: { setCode }, skip: debugging }) // DEBUG

  if (debugging) return { data: cardData } // DEBUG
  if (loading) return { msg: <LoadingSpinner /> }
  if (error) return console.error(error) || { msg: `Error! ${error.message}` }

  return { data: data?.sets?.[0]?.cards }
}