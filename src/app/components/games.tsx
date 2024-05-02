import Game from "./game";

type Game = {
  name: string;
  votes: number;
  image: string;
  winner?: boolean;
};

export default function Games({
  games,
  over,
}: {
  games: Game[];
  over: boolean;
}) {
  let processedGames: Game[] = [];

  games.forEach((game, i) => {
    if (over)
      processedGames.push({
        ...game,
        winner: games[i].votes > games[games.length - 1 - i].votes,
      });
    else processedGames.push(game);
  });

  return (
    <ul className="w-full flex justify-center gap-x-10">
      {processedGames.map((game, i) => (
        <Game key={i} game={game} id={i + 1} />
      ))}
    </ul>
  );
}
