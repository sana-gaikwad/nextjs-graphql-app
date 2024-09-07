import { Spinner as ChakraSpinner, SpinnerProps } from "@chakra-ui/react";

export const Spinner = ({ ...props }: SpinnerProps) => {
  return (
    <ChakraSpinner
      {...props}
      thickness="4px"
      speed="0.65s"
      emptyColor="teal.200"
      color="teal.500"
    />
  );
};
