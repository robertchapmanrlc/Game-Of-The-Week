import { auth } from "@clerk/nextjs/server";

import { getGames } from "@/server/queries";
import Games from "./components/games";
import { redirect } from "next/navigation";

export default async function Home() {

  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const games = await getGames();

  return (
    <main className="w-full sm:py-20 md:py-10 lg:py-5 flex flex-col items-center justify-center gap-y-5 px-8">
      <h1 className="text-text font-bebasneue text-3xl md:text-5xl lg:text-7xl">
        Game of the Week
      </h1>
      <Games games={games} />
    </main>
  );
}
