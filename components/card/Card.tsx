import {
  Card as ChakraCard,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  Image,
} from "@chakra-ui/react";
import { Heading } from "../heading/Heading";
import { Button } from "../button/Button";
import { CardProps } from "./Card.types";

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
