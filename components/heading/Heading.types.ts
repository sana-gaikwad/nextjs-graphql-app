import { ReactNode } from "react";
import { HeadingProps as ChakraHeadingProps } from "@chakra-ui/react";

export interface HeadingProps extends ChakraHeadingProps {
  children: ReactNode;
}
