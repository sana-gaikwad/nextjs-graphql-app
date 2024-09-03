import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "@/graphql/characters";
import Image from "next/image";

export default function Home() {
  const { data } = useQuery(CHARACTERS_QUERY);
  //TODO: Loading and Error States
  return (
    <>
      <div>
        {data?.characters?.results?.map((character) => (
          <div key={character?.id}>
            <Image
              src={character?.image ?? ""}
              alt={character?.name ?? ""}
              width="200"
              height="200"
            />
          </div>
        ))}
      </div>
    </>
  );
}
