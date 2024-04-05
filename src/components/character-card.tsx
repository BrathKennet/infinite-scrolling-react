import { Character } from "@/types";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <div className="border border-[#9B3922] rounded-md max-w-[200px] p-2">
      <img src={character.image} className="w-full p-2" />
      <p className="pb-2 text-center font-semibold text-[#F2613F]">
        {character.name}
      </p>
      <div className="w-full h-[1px] bg-[#9B3922] mb-3"></div>
      <p className="text-xs font-bold text-[#9B3922]">Species:</p>
      <p className="text-center text-gray-400">{character.species}</p>
      <p className="text-xs font-bold text-[#9B3922]">Status:</p>
      <p className="text-center text-gray-400">{character.status}</p>
    </div>
  );
}
