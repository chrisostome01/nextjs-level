import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: "https://myflashcards12.herokuapp.com",
});

const authLink = setContext((_, { headers }) =>{
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})




export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri:process.env.API_URI,
  cache: new InMemoryCache()
})