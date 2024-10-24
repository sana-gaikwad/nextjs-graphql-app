import { ReactNode } from "react";
import { LinkProps as ChakraLinkProps } from "@chakra-ui/react";

export interface LinkProps extends ChakraLinkProps {
  href: string;
  children: ReactNode;
}
