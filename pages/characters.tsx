import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "@/graphql/characters";
import { Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Character } from "@/__generated__/graphql";
import { Card, Pagination, useModal } from "@/components";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const { openModal } = useModal();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = useSearchParams();

  const pageNum = Number(params.get("page")) ?? 1;

  const handleSearchParams = (pageClicked: number) => {
    const urlParams = new URLSearchParams();
    urlParams.set("page", pageClicked.toString());
    replace(`${pathname}?${urlParams.toString()}`);
  };

  const { data, loading } = useQuery(CHARACTERS_QUERY, {
    variables: {
      page: pageNum,
    },
  });

  if (loading) {
    return (
      <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
        Loading...
      </Flex>
    );
  }

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
    <Flex p={16} direction={"column"} background={"gray.300"} gap={12}>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
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
      <Pagination
        totalPages={data?.characters?.info?.pages ?? 0}
        currentPage={pageNum}
        onClick={handleSearchParams}
      ></Pagination>
    </Flex>
  );
}
