import { Flex } from "@chakra-ui/react";
import { Button, Heading, Input } from "@/components";

export default function Login() {
  return (
    <>
      <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
        <Flex
          background={"gray.300"}
          p={10}
          rounded={6}
          m={10}
          direction={"column"}
          width={500}
        >
          <Heading mb={10}>Log In</Heading>
          <Input
            placeholder="Enter your username here..."
            label="Enter Your Username"
            variant={"filled"}
            mb={6}
          ></Input>
          <Input
            placeholder="Enter your job title here..."
            label="Enter Your Job Title"
            variant={"filled"}
            mb={10}
          ></Input>
          <Button size={"lg"} onClick={() => null}>
            Log In
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
