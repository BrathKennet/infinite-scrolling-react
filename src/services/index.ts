import { Character as Location } from "@/types";

export async function getCharacters(page: number) {
  const startIndex = (page - 1) * 24 + 1;
  
  const elements = Array.from({ length: 24 }, (_, index) => startIndex + index);
  
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${elements.join(",")}`
  );

  const data = await res.json();

  return data as Location[];
}
