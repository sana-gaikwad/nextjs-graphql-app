import {
  Card as ChakraCard,
  CardBody,
  CardFooter,
  CardProps as ChakraCardProps,
  Stack,
  Divider,
  Image,
} from "@chakra-ui/react";
import { Heading } from "../common/heading";
import { Button } from "../common/button";

interface CardProps extends ChakraCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

export const Card = ({ title, image, onClick, ...props }: CardProps) => {
  return (
    <>
      <ChakraCard maxW="sm" {...props}>
        <CardBody>
          <Image src={image} alt={title} borderRadius="lg" height={200} />
          <Stack mt="6" spacing="3">
            <Heading size="sm">{title}</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter mt={"auto"}>
          <Button onClick={onClick}>View Details</Button>
        </CardFooter>
      </ChakraCard>
    </>
  );
};
