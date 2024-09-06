import { Link as ChakraLink } from "@chakra-ui/react";
import { LinkProps } from "./Link.types";
import NextLink from "next/link";

export const Link = ({ children, ...props }: LinkProps) => {
  return (
    <ChakraLink as={NextLink} {...props}>
      {children}
    </ChakraLink>
  );
};
