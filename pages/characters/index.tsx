import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "@/graphql/characters";
import { Card } from "@/components/character/card";
import {
  Flex,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Modal } from "@/components/character/modal";
import { Character } from "@/__generated__/graphql";
import { useState } from "react";
import { Pagination } from "@/components/common/pagination";

export default function Home() {
  const { data } = useQuery(CHARACTERS_QUERY);
  const [selectedCharacter, setSelectedCharacter] =
    useState<Partial<Character> | null>(null);

  const handleClick = (character: Partial<Character> | null) => {
    setSelectedCharacter(character ?? null);
    onOpen();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        p={16}
        background={"gray.300"}
      >
        {data?.characters?.results?.map((character) => (
          <div key={character?.id}>
            <Card
              title={character?.name ?? ""}
              image={character?.image ?? ""}
              onClick={() => handleClick(character)}
            ></Card>
          </div>
        ))}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          title={selectedCharacter?.name ?? ""}
        >
          <Flex>
            <VStack w="full" align="flex-start">
              <Text>
                <b>Species:</b> {selectedCharacter?.species}
              </Text>
              <Text>
                <b>Gender:</b> {selectedCharacter?.gender}
              </Text>
            </VStack>
          </Flex>
        </Modal>
      </SimpleGrid>
      <Pagination postsPerPage={10} length={100} />
    </>
  );
}
