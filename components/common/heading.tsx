import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface HeadingProps extends ChakraHeadingProps {
  children: ReactNode;
}

export const Heading = ({ children, ...props }: HeadingProps) => {
  return (
    <>
      <ChakraHeading {...props}>{children}</ChakraHeading>
    </>
  );
};
