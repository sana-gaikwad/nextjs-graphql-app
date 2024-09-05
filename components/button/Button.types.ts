import { ReactNode } from "react";
import { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

export interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
  onClick: () => void;
}
