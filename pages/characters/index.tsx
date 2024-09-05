import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "@/graphql/characters";
import { Link } from "@chakra-ui/next-js";
import { CardComponent } from "@/components/character/card";
import { SimpleGrid } from "@chakra-ui/react";

export default function Home() {
  const { data } = useQuery(CHARACTERS_QUERY);
  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        pl={16}
        pr={16}
      >
        {data?.characters?.results?.map((character) => (
          <div key={character?.id}>
            <Link
              href={{
                pathname: "/characters/[slug]",
                query: { slug: character?.id },
              }}
            >
              <CardComponent
                title={character?.name ?? ""}
                image={character?.image ?? ""}
              ></CardComponent>
            </Link>
          </div>
        ))}
      </SimpleGrid>
    </>
  );
}
