import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { databaseParams } from "../../assets/constants"

// Initialize Apollo client and create provider wrapper
const client = new ApolloClient({ 
  uri: databaseParams.uri,
  headers: databaseParams.headers,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default function CardProvider ({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
