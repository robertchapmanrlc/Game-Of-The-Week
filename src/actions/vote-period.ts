type Game = {
  name: string;
  votes: number;
  image: string;
  dueDate: Date | null;
};

export async function votingOver(game: Game) {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/New_York"
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();

  const date = new Date(data.datetime).getTime();
  const dueDate = game.dueDate!.getTime();

  return date > dueDate;
}
