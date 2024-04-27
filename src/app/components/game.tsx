'use client'

import Image from "next/image";
import { useState } from "react";

type Game = {
  name: string;
  votes: number;
  image: string;
};

export default function Game({ game, id }: { game: Game; id: number }) {

  const [votes, setVotes] = useState(game.votes);
  const [voted, setVoted] = useState(false);

  const handleClick = () => {
    setVotes((vote) => vote + 1);
    setVoted(true);
  };

  return (
    <li className="flex flex-col items-center gap-y-5 md:gap-y-8">
      <Image
        className="rounded-xl"
        src={`${game.image}`}
        width={425}
        height={500}
        alt={`Game ${id}`}
        priority
      />
      <button
        onClick={() => handleClick()}
        data-testid={`Game ${id} Vote`}
        disabled={voted}
        className="w-full py-1 md:py-2 text-lg md:text-xl lg:text-3xl text-text font-bebasneue bg-primary rounded-md hover:scale-105 transition-transform disabled:bg-accent disabled:hover:scale-100"
      >
        {voted ? votes : <>Vote</>}
      </button>
      <h3 className="text-text text-center text-lg md:text-xl lg:text-3xl font-bebasneue">
        {game.name}
      </h3>
    </li>
  );
}
