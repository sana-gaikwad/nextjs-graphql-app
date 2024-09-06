import { Flex } from "@chakra-ui/react";
import { Button, Heading, Input } from "@/components";
import { useState } from "react";
import { saveUser } from "@/redux/features/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSaveUser = () => {
    dispatch(saveUser({ username, jobTitle }));
    router.push("/characters");
  };
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
          <Heading mb={5}>Welcome</Heading>
          <Heading size={"sm"} mb={10}>
            Please enter your username and job title
          </Heading>
          <Input
            placeholder="Enter your username here..."
            label="Enter Your Username"
            variant={"filled"}
            mb={6}
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <Input
            placeholder="Enter your job title here..."
            label="Enter Your Job Title"
            variant={"filled"}
            mb={10}
            onChange={(e) => setJobTitle(e.target.value)}
          ></Input>
          <Button size={"lg"} onClick={handleSaveUser}>
            Save & Continue
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
