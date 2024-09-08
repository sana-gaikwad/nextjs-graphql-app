import { Flex } from "@chakra-ui/react";
import { Button, Heading, Input } from "@/components";
import { useState } from "react";
import { saveUser } from "@/redux/features/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const user = useAppSelector((state) => state.persistedReducer.userReducer);

  const [userDetails, setUserDetails] = useState(user || {});
  const dispatch = useDispatch<AppDispatch>();

  const handleSaveUser = () => {
    dispatch(saveUser(userDetails));
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
          <Heading as={"h1"} mb={5}>
            Welcome
          </Heading>
          <Heading size={"sm"} mb={10}>
            Please enter your username and job title
          </Heading>
          <Input
            placeholder="Enter your username here..."
            label="Enter Your Username"
            variant={"filled"}
            value={userDetails.username}
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
            mb={6}
          ></Input>
          <Input
            placeholder="Enter your job title here..."
            label="Enter Your Job Title"
            variant={"filled"}
            value={userDetails.jobTitle}
            mb={10}
            onChange={(e) =>
              setUserDetails({ ...userDetails, jobTitle: e.target.value })
            }
          ></Input>
          <Button size={"lg"} onClick={handleSaveUser}>
            Save & Continue
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
