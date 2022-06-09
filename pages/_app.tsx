import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ApolloClient, InMemoryCache,ApolloProvider  } from "@apollo/client"
import { client } from '../utils/functions/client'



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


