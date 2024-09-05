import { Button, ButtonProps } from "@chakra-ui/react";

interface ButtonComponentProps extends ButtonProps {
  label: string;
  onClick: () => void;
}

export const ButtonComponent = ({
  label,
  onClick,
  ...props
}: ButtonComponentProps) => {
  return (
    <>
      <Button {...props} colorScheme="teal" onClick={onClick}>
        {" "}
        {label}
      </Button>
    </>
  );
};
