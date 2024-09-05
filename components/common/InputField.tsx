import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  Text,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  placeholder: string;
  label: string;
}

export const Input = ({ placeholder, label, ...props }: InputProps) => {
  return (
    <>
      <Text mb="8px">{label}</Text>
      <ChakraInput {...props} placeholder={placeholder}></ChakraInput>
    </>
  );
};
