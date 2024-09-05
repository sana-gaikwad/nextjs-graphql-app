import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "@/graphql/characters";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { data } = useQuery(CHARACTERS_QUERY);
  //TODO: Loading and Error States
  return (
    <>
      <div>
        {data?.characters?.results?.map((character) => (
          <div key={character?.id}>
            <Link
              href={{
                pathname: "/characters/[slug]",
                query: { slug: character?.id },
              }}
            >
              <Image
                src={character?.image ?? ""}
                alt={character?.name ?? ""}
                width="200"
                height="200"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
