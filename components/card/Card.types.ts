import { CardProps as ChakraCardProps } from "@chakra-ui/react";
export interface CardProps extends ChakraCardProps {
  title: string;
  image: string;
  onClick: () => void;
}
