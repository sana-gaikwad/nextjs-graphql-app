import type { AppProps } from "next/app";
import ApolloProviderWrapper from "../lib/ApolloProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { ModalProvider } from "@/components/modal";
import ReduxProvider from "@/redux/provider";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/redux/store";
import { Layout } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProviderWrapper>
      <ChakraProvider>
        <ModalProvider>
          <ReduxProvider>
            <PersistGate loading={null} persistor={persistor}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </PersistGate>
          </ReduxProvider>
        </ModalProvider>
      </ChakraProvider>
    </ApolloProviderWrapper>
  );
}
