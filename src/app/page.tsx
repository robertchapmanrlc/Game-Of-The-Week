import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full fixed inset-0 flex flex-col items-center justify-center gap-y-5 px-8">
      <h1 className="text-text font-bebasneue text-3xl md:text-5xl lg:text-7xl">
        Game of the Week
      </h1>
      <div className="w-full flex justify-center gap-x-10">
        <div className="flex flex-col items-center gap-y-5 md:gap-y-8">
          <Image
            className="rounded-xl"
            src={"https://i.ibb.co/HTLzWRx/Tears-Of-The-Kingdom.webp"}
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
            The Legend of Zelda: Tears of the Kingdom
          </h3>
        </div>
        <div className="flex flex-col items-center gap-y-5 md:gap-y-8">
          <Image
            className="rounded-xl"
            src={"https://i.ibb.co/jVy7z9S/Persona5-Royal.webp"}
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
            Persona 5 Royal
          </h3>
        </div>
      </div>
    </main>
  );
}
