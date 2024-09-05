import type { AppProps } from "next/app";
import ApolloProviderWrapper from "../lib/ApolloProvider";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProviderWrapper>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProviderWrapper>
  );
}
