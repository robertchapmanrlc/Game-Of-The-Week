import "server-only";
import { db } from "./db";
import { games } from "./db/schema";

export async function getGames() {
  const games = await db.query.games.findMany({ orderBy: (model, { desc }) => desc(model.id)});
  return games;
}


