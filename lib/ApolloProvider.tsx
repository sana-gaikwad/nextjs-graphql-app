import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";

const ApolloProviderWrapper = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
