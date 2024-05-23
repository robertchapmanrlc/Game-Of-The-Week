import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import { getVoted, registerVote } from "@/server/queries";
import { redirect } from "next/navigation";
import { getPlaceHolderImage } from "@/utils/images";
import clsx from "clsx";
import VotingForm from "./voteForm";

type Game = {
  title: string;
  votes_count: number;
  image: string;
};

export default async function Game({ game, id, over, won }: { game: Game; id: number, over: boolean, won: boolean }) {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const voted = await getVoted(userId);

  const imageWithPlaceholder = await getPlaceHolderImage(game.image);

  return (
    <li className="flex flex-col items-center gap-y-5 md:gap-y-8">
      <Image
        className={clsx(
          "rounded-xl aspect-square object-cover",
          !won && "grayscale"
        )}
        src={imageWithPlaceholder.src}
        width={400}
        height={400}
        alt={`Game ${id}`}
        placeholder="blur"
        blurDataURL={imageWithPlaceholder.placeholder}
        priority
      />
      {!voted && over && (
        <VotingForm currentVotes={game.votes_count} name={game.title} />
      )}
      {(voted || over) && (
        <div className="w-full py-1 md:py-2 text-lg md:text-xl lg:text-3xl text-text text-center font-bebasneue bg-accent rounded-md">
          {game.votes_count}
        </div>
      )}
      <h3 className="text-text text-center text-lg md:text-xl lg:text-3xl font-bebasneue">
        {game.title}
        {won && <p>Wins</p>}
      </h3>
    </li>
  );
}
