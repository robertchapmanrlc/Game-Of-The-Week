
import { auth } from "@clerk/nextjs/server";

import { getGames } from "@/server/queries";
import Games from "../components/games";
import { redirect } from "next/navigation";
import { votingOver } from "@/actions/vote-period";

export default async function Home() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }
  
  const { games, election } = await getGames();
  
  const over = await votingOver(election.end_date);

  return (
    <main className="w-full py-5 flex flex-col items-center justify-center gap-y-5 px-8">
      <h1 className="text-text font-bebasneue text-3xl md:text-5xl lg:text-7xl">
        Game of the Week
      </h1>
      <Games games={games} over={over} />
      {over && games[0].votes_count === games[1].votes_count && (
        <h3 className="text-text font-bebasneue text-lg md:text-xl lg:text-3xl">
          Seems there is a tie...
        </h3>
      )}
    </main>
  );
}
