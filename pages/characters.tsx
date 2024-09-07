import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "@/graphql/characters";
import { Container, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Character } from "@/__generated__/graphql";
import {
  Card,
  Heading,
  Link,
  Pagination,
  Spinner,
  useModal,
} from "@/components";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { EditIcon } from "@chakra-ui/icons";

export default function Home() {
  const { openModal } = useModal();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = useSearchParams();

  const pageNumber = Number(params.get("page")) ?? 1;
  const user = useAppSelector((state) => state.persistedReducer.userReducer);

  const handleSearchParams = (pageClicked: number) => {
    const urlParams = new URLSearchParams();
    urlParams.set("page", pageClicked.toString());
    replace(`${pathname}?${urlParams.toString()}`);
  };

  const { data, loading, error } = useQuery(CHARACTERS_QUERY, {
    variables: {
      page: pageNumber,
    },
  });

  function CharacterInfo({
    label,
    value,
  }: {
    label: string;
    value?: string | null;
  }) {
    return (
      <Text fontSize="md">
        <b>{label}:</b> {value || "N/A"}
      </Text>
    );
  }

  const handleClick = (character: Partial<Character> | null) => {
    openModal({
      title: character?.name ?? "",
      children: (
        <Flex direction="column">
          <VStack align="flex-start" spacing={4}>
            <CharacterInfo label="Species" value={character?.species} />
            <CharacterInfo label="Gender" value={character?.gender} />
            {character?.type && (
              <CharacterInfo label="Type" value={character.type} />
            )}
            <CharacterInfo label="Status" value={character?.status} />
          </VStack>
        </Flex>
      ),
    });
  };

  return (
    <>
      <Flex p={8} direction={"column"} background={"teal.500"}>
        <Heading as="h1">Welcome {user.username}</Heading>
        <Heading as="h2" size={"sm"}>
          {user.jobTitle}
        </Heading>
        <Link href="/">
          <EditIcon mr={2} />
          Edit details
        </Link>
      </Flex>
      <Container maxW="container.xl">
        <Flex pt={16} pb={16} direction={"column"} gap={12}>
          {loading ? (
            <Flex
              justifyContent={"center"}
              height={"100vh"}
              alignItems={"center"}
            >
              <Spinner size={"xl"} />
            </Flex>
          ) : (
            <>
              {data?.characters?.results?.length === 0 || error ? (
                <Flex justifyContent={"center"} height={"100vh"}>
                  <Text>No results found</Text>
                </Flex>
              ) : (
                <>
                  <SimpleGrid
                    spacing={4}
                    templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                  >
                    {data?.characters?.results?.map((character) => (
                      <div key={character?.id}>
                        <Card
                          background={"gray.50"}
                          title={character?.name ?? ""}
                          image={character?.image ?? ""}
                          onClick={() => handleClick(character ?? {})}
                        ></Card>
                      </div>
                    ))}
                  </SimpleGrid>
                  <Pagination
                    totalPages={data?.characters?.info?.pages ?? 1}
                    currentPage={pageNumber}
                    onClick={handleSearchParams}
                  ></Pagination>
                </>
              )}
            </>
          )}
        </Flex>
      </Container>
    </>
  );
}
