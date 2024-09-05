import { Input as ChakraInput, Text } from "@chakra-ui/react";
import { InputProps } from "./Input.types";

export const Input = ({ placeholder, label, ...props }: InputProps) => {
  return (
    <>
      <Text mb="8px">{label}</Text>
      <ChakraInput {...props} placeholder={placeholder}></ChakraInput>
    </>
  );
};
