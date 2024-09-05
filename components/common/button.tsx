import { Button, ButtonProps } from "@chakra-ui/react";

interface ButtonComponentProps extends ButtonProps {
  label: string;
}

export const ButtonComponent = ({ label, ...props }: ButtonComponentProps) => {
  return (
    <>
      <Button {...props} colorScheme="teal">
        {" "}
        {label}
      </Button>
    </>
  );
};
