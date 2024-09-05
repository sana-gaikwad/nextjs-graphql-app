import type { AppProps } from "next/app";
import ApolloProviderWrapper from "../lib/ApolloProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { ModalProvider } from "@/components/modal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProviderWrapper>
      <ChakraProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </ChakraProvider>
    </ApolloProviderWrapper>
  );
}
