import Head from "next/head";
import { LayoutProps } from "./Layout.types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="This is my website description." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* You can add more meta tags here */}
      </Head>
      <main>{children}</main>
    </>
  );
};
