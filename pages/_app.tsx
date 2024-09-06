import type { AppProps } from "next/app";
import ApolloProviderWrapper from "../lib/ApolloProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { ModalProvider } from "@/components/modal";
import ReduxProvider from "@/redux/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProviderWrapper>
      <ChakraProvider>
        <ModalProvider>
          <ReduxProvider>
            <Component {...pageProps} />
          </ReduxProvider>
        </ModalProvider>
      </ChakraProvider>
    </ApolloProviderWrapper>
  );
}
