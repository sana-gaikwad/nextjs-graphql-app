import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
      <ChakraButton {...props} colorScheme="teal" onClick={onClick}>
        {children}
      </ChakraButton>
  );
};
