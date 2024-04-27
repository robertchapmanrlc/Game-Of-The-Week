import { getGames } from "@/server/queries";
import Game from "./components/game";

export default async function Home() {

  const games = await getGames();

  return (
    <main className="w-full sm:py-20 md:py-10 lg:py-5 flex flex-col items-center justify-center gap-y-5 px-8">
      <h1 className="text-text font-bebasneue text-3xl md:text-5xl lg:text-7xl">
        Game of the Week
      </h1>
      <ul className="w-full flex justify-center gap-x-10">
        {games.map((game, i) => (<Game key={i} game={game} id={i+1}/>))}
      </ul>
    </main>
  );
}
