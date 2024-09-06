import { Flex } from "@chakra-ui/react";
import { Button, Heading, Input } from "@/components";
import { useState } from "react";
import { saveUser } from "@/redux/features/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const usernameState = useAppSelector(
    (state) => state.persistedReducer.userReducer.value.username,
  );
  const jobTitleState = useAppSelector(
    (state) => state.persistedReducer.userReducer.value.jobTitle,
  );

  const [username, setUsername] = useState(usernameState || "");
  const [jobTitle, setJobTitle] = useState(jobTitleState || "");
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
            value={username}
            mb={6}
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <Input
            placeholder="Enter your job title here..."
            label="Enter Your Job Title"
            variant={"filled"}
            value={jobTitle}
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
