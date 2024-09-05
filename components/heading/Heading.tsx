import { Heading as ChakraHeading } from "@chakra-ui/react";
import { HeadingProps } from "./Heading.types";

export const Heading = ({ children, ...props }: HeadingProps) => {
  return (
    <>
      <ChakraHeading {...props}>{children}</ChakraHeading>
    </>
  );
};
