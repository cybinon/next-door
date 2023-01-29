import '@/styles/globals.css'
import '@/styles/template.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Root from '@/Root'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Root>
        <Component {...pageProps} />
      </Root>
    </ChakraProvider>
  )
}
