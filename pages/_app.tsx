import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ApolloClient, InMemoryCache,ApolloProvider  } from "@apollo/client"

const client = new ApolloClient({
  uri:"http://54.226.140.111:3000",
  cache: new InMemoryCache()  
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp


