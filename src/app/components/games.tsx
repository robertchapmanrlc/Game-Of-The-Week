"use client";

import { useCallback, useState } from "react";
import Game from "./game";

type Game = {
  name: string;
  votes: number;
  image: string;
};

export default function Games({ games }: { games: Game[] }) {
  const [voted, setVoted] = useState(false);

  const onClick = useCallback(
    (voted: boolean) => {
      setVoted(voted);
    },
    [setVoted]
  );

  return (
    <ul className="w-full flex justify-center gap-x-10">
      {games.map((game, i) => (
        <Game key={i} game={game} id={i + 1} voted={voted} onClick={onClick} />
      ))}
    </ul>
  );
}
