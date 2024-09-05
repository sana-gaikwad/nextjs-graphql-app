import { Heading, HeadingProps } from "@chakra-ui/react";

interface HeadingComponentProps extends HeadingProps {
  text: string;
}

export const HeadingComponent = ({ text, ...props }: HeadingComponentProps) => {
  return (
    <>
      <Heading {...props}>{text}</Heading>
    </>
  );
};
