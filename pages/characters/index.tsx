import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "@/graphql/characters";
import { CardComponent } from "@/components/character/card";
import { Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { ModalComponent } from "@/components/character/modal";
import { Character } from "@/__generated__/graphql";
import { useState } from "react";

export default function Home() {
  const { data } = useQuery(CHARACTERS_QUERY);
  const [selectedCharacter, setSelectedCharacter] =
    useState<Partial<Character> | null>(null);

  const handleClick = (character: Partial<Character> | null) => {
    setSelectedCharacter(character ?? null);
  };

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
            <CardComponent
              title={character?.name ?? ""}
              image={character?.image ?? ""}
              onClick={() => handleClick(character ?? null)}
            ></CardComponent>
          </div>
        ))}
        <ModalComponent
          isOpen={!!selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
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
        </ModalComponent>
      </SimpleGrid>
    </>
  );
}
