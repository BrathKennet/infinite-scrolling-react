"use client";

import CharacterCard from "@/components/character-card";
import Loader from "@/components/loader";
import { getCharacters } from "@/services";
import { Character } from "@/types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const { ref, inView } = useInView();

  const getData = async () => {
    const data = await getCharacters(page);
    
    setCharacters((prev) => [...prev, ...data]);
    setPage((prev) => prev + 1);
    
    if (data.length < 24) setHasMore(false);
  };

  useEffect(() => {
    if (inView) {
      getData();
    }
  }, [inView]);

  return (
    <main className="flex-col items-center justify-between pt-32 px-6 pb-10">
      <div className="grid grid-cols-2 gap-x-4 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-y-9">
        {characters.map((v, i) => (
          <CharacterCard character={v} key={i} />
        ))}
      </div>
      {hasMore && (
        <div ref={ref}>
          <Loader />
        </div>
      )}
    </main>
  );
}
