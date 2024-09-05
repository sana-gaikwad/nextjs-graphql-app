import { Button as ChakraButton } from "@chakra-ui/react";
import { ButtonProps } from "./Button.types";

export const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <ChakraButton {...props} colorScheme="teal" onClick={onClick}>
      {children}
    </ChakraButton>
  );
};
