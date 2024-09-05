import {
  Card,
  CardBody,
  CardFooter,
  CardProps,
  Stack,
  Divider,
  Image,
} from "@chakra-ui/react";
import { HeadingComponent } from "../common/heading";
import { ButtonComponent } from "../common/button";

interface CardComponentProps extends CardProps {
  title: string;
  image: string;
}

export const CardComponent = ({
  title,
  image,
  ...props
}: CardComponentProps) => {
  return (
    <>
      <Card maxW="sm" {...props}>
        <CardBody>
          <Image src={image} alt={title} borderRadius="lg" height={200} />
          <Stack mt="6" spacing="3">
            <HeadingComponent size="sm" text={title}></HeadingComponent>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter mt={"auto"}>
          <ButtonComponent label="Click here"></ButtonComponent>
        </CardFooter>
      </Card>
    </>
  );
};
