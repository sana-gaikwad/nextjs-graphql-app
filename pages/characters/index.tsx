import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "@/graphql/characters";
import { Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Character } from "@/__generated__/graphql";
import { Card, useModal } from "@/components";
import { Pagination } from "@/components/pagination";

export default function Home() {
  const { data } = useQuery(CHARACTERS_QUERY);

  const { openModal } = useModal();

  const handleClick = (character: Partial<Character> | null) => {
    openModal({
      title: character?.name ?? "",
      children: (
        <Flex>
          <VStack w="full" align="flex-start">
            <Text>
              <b>Species:</b> {character?.species}
            </Text>
            <Text>
              <b>Gender:</b> {character?.gender}
            </Text>
          </VStack>
        </Flex>
      ),
    });
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
            <Card
              title={character?.name ?? ""}
              image={character?.image ?? ""}
              onClick={() => handleClick(character ?? {})}
            ></Card>
          </div>
        ))}
      </SimpleGrid>
      <Pagination postsPerPage={10} length={100} />
    </>
  );
}
