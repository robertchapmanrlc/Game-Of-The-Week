import Game from "./game";

type Game = {
  title: string;
  votes_count: number;
  image: string;
  game_id: number
};

export default function Games({
  games,
  over,
  electionId,
}: {
  games: Game[];
  over: boolean;
  electionId: number;
}) {
  return (
    <ul className="w-full flex justify-center gap-x-10">
      {games.map((game, i) => (
        <Game
          key={i}
          game={game}
          id={i + 1}
          over={over}
          won={games[i].votes_count > games[1 - i].votes_count && over}
          electionId={electionId}
        />
      ))}
    </ul>
  );
}
