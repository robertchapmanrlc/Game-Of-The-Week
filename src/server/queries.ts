import "server-only";
import { db } from "./db";
import { games } from "./db/schema";
import { eq } from "drizzle-orm";

export async function getGames() {
  const games = await db.query.games.findMany({ orderBy: (model, { desc }) => desc(model.id)});
  return games;
}

export async function registerVote(count: number, name: string) {
  await db.update(games).set({ votes: count + 1 }).where(eq(games.name, name));
}

