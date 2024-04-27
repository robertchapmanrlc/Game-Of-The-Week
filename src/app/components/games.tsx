import Game from "./game";

type Game = {
  name: string;
  votes: number;
  image: string;
};

export default function Games({ games }: { games: Game[] }) {

  return (
    <ul className="w-full flex justify-center gap-x-10">
      {games.map((game, i) => (
        <Game key={i} game={game} id={i + 1} />
      ))}
    </ul>
  );
}
