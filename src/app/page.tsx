import { getGames } from "@/server/queries";
import Image from "next/image";

export default async function Home() {

  const games = await getGames();

  return (
    <main className="w-full sm:py-20 md:py-10 lg:py-5 flex flex-col items-center justify-center gap-y-5 px-8">
      <h1 className="text-text font-bebasneue text-3xl md:text-5xl lg:text-7xl">
        Game of the Week
      </h1>
      <div className="w-full flex justify-center gap-x-10">
        <div className="flex flex-col items-center gap-y-5 md:gap-y-8">
          <Image
            className="rounded-xl"
            src={`${games[0].image}`}
            width={425}
            height={500}
            alt="Game 1"
          />
          <button
            data-testid="Game 1 Vote"
            className="w-full py-1 md:py-2 text-lg md:text-xl lg:text-3xl text-text font-bebasneue bg-primary rounded-md hover:scale-105 transition-transform"
          >
            Vote
          </button>
          <h3 className="text-text text-center text-lg md:text-xl lg:text-3xl font-bebasneue">
            {games[0].name}
          </h3>
        </div>
        <div className="flex flex-col items-center gap-y-5 md:gap-y-8">
          <Image
            className="rounded-xl"
            src={`${games[1].image}}`}
            width={425}
            height={500}
            alt="Game 2"
          />
          <button
            data-testid="Game 2 Vote"
            className="w-full py-1 md:py-2 text-lg md:text-xl lg:text-3xl text-text font-bebasneue bg-primary rounded-md hover:scale-105 transition-transform"
          >
            Vote
          </button>
          <h3 className="text-text text-center text-lg md:text-xl lg:text-3xl font-bebasneue">
            {games[1].name}
          </h3>
        </div>
      </div>
    </main>
  );
}
