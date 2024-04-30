import { registerVote } from "@/server/queries";
import Image from "next/image";

type Game = {
  name: string;
  votes: number;
  image: string;
};

export default async function Game({
  game,
  id,
}: {
  game: Game;
  id: number;
  }) {
  
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
      <form
        className="w-full"
        action={async () => {
          "use server";
          await registerVote(game.votes, game.name);
        }}
      >
        <button
          data-testid={`Game ${id} Vote`}
          className="w-full py-1 md:py-2 text-lg md:text-xl lg:text-3xl text-text font-bebasneue bg-primary rounded-md hover:scale-105 transition-transform disabled:bg-accent disabled:hover:scale-100"
        >
          Vote
        </button>
      </form>
      <h3 className="text-text text-center text-lg md:text-xl lg:text-3xl font-bebasneue">
        {game.name}
      </h3>
    </li>
  );
}
