import { Input, InputProps, Text } from "@chakra-ui/react";

interface InputComponentProps extends InputProps {
  placeholder: string;
  label: string;
}

export const InputComponent = ({
  placeholder,
  label,
  ...props
}: InputComponentProps) => {
  return (
    <>
      <Text mb="8px">{label}</Text>
      <Input {...props} placeholder={placeholder}></Input>
    </>
  );
};
