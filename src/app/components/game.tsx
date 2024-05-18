import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import { getVoted, registerVote } from "@/server/queries";
import { redirect } from "next/navigation";
import { getPlaceHolderImage } from "@/utils/images";

type Game = {
  name: string;
  votes: number;
  image: string;
  winner?: boolean;
};

export default async function Game({ game, id }: { game: Game; id: number }) {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const voted = await getVoted(userId);

  const imageWithPlaceholder = await getPlaceHolderImage(game.image);

  return (
    <li className="flex flex-col items-center gap-y-5 md:gap-y-8">
      <Image
        className={`rounded-xl ${game.winner != undefined && !game.winner && 'grayscale'}`}
        src={imageWithPlaceholder.src}
        width={425}
        height={500}
        alt={`Game ${id}`}
        placeholder='blur'
        blurDataURL={imageWithPlaceholder.placeholder}
        priority
      />
      {(!voted && game.winner == undefined) && (
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
      )}
      {(voted || game.winner != undefined) && (
        <div className="w-full py-1 md:py-2 text-lg md:text-xl lg:text-3xl text-text text-center font-bebasneue bg-accent rounded-md">
          {game.votes}
        </div>
      )}
      <h3 className="text-text text-center text-lg md:text-xl lg:text-3xl font-bebasneue">
        {game.name}
        {game.winner && <p>Wins</p>}
      </h3>
    </li>
  );
}
