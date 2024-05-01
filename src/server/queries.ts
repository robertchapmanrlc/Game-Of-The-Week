import "server-only";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { games, users } from "./db/schema";
import { auth } from "@clerk/nextjs/server";

export async function getGames() {
  const { userId } = auth();

  if (!userId) {
    throw Error('Unauthorized');
  }

  const games = await db.query.games.findMany({ orderBy: (model, { desc }) => desc(model.id)});
  return games;
}

export async function registerVote(count: number, name: string) {
  const { userId } = auth();

  if (!userId) {
    throw Error("Unauthorized");
  }

  await db.update(games).set({ votes: count + 1 }).where(eq(games.name, name));
  await db.insert(users).values({ userId: userId, voted: true });
}

export async function getVoted(id: string) {
  const { userId } = auth();

  if (!userId) {
    throw Error("Unauthorized");
  }

  if (id !== userId) {
    throw Error("Invalid user id");
  }

  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.userId, id)
  });

  return user?.voted;

}

