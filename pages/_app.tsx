import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ApolloProviderWrapper from "../lib/ApolloProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProviderWrapper>
      <Component {...pageProps} />
    </ApolloProviderWrapper>
  );
}
