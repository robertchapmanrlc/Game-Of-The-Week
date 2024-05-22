

export async function votingOver(end_date: Date) {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/New_York"
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();

  const date = new Date(data.datetime).getTime();
  const dueDate = new Date(end_date).getTime();

  return date > dueDate;
}
