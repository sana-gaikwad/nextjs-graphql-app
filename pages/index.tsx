import { Flex } from "@chakra-ui/react";
import { HeadingComponent } from "@/components/common/heading";
import { InputComponent } from "@/components/common/InputField";
import { ButtonComponent } from "@/components/common/button";

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
          <HeadingComponent mb={10} text="Log In"></HeadingComponent>
          <InputComponent
            placeholder="Enter your username here..."
            label="Enter Your Username"
            variant={"filled"}
            mb={6}
          ></InputComponent>
          <InputComponent
            placeholder="Enter your job title here..."
            label="Enter Your Job Title"
            variant={"filled"}
            mb={10}
          ></InputComponent>
          <ButtonComponent size={"lg"} label="Log In"></ButtonComponent>
        </Flex>
      </Flex>
    </>
  );
}
