import "server-only";
import { db } from "./db";
import { eq, lte, gte, and } from "drizzle-orm";
import { elections, games, votes } from "./db/schema";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function getGames() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/New_York"
  );

  if (!res.ok) throw new Error("Failed to fetch date data");

  const data = await res.json();
  const date = new Date(data.datetime);

  const [currentElection] = await db
    .select()
    .from(elections)
    .where(and(lte(elections.start_date, date), gte(elections.end_date, date)))
    .limit(1);

  if (!currentElection) {
    throw new Error("No current election found");
  }

  const [game1, game2] = await Promise.all([
    db
      .select()
      .from(games)
      .where(eq(games.game_id, currentElection.game1_id))
      .limit(1),
    db
      .select()
      .from(games)
      .where(eq(games.game_id, currentElection.game2_id))
      .limit(1),
  ]);

  let currentGames = [game1[0], game2[0]];

  return { election: currentElection, games: currentGames };
}

export async function registerVote(
  count: number,
  game_id: number,
  election_id: number
) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.transaction(async (tx) => {
    await tx
      .update(games)
      .set({ votes_count: count + 1 })
      .where(eq(games.game_id, game_id));

    await tx.insert(votes).values({
      user_id: userId,
      election_id: election_id,
      game_id: game_id,
    });
  });

  redirect("/voting");
}

export async function getVoted(id: string) {
  const { userId } = auth();

  if (!userId) {
    throw Error("Unauthorized");
  }

  if (id !== userId) {
    throw Error("Invalid user id");
  }

  const user_vote = await db
    .select()
    .from(votes)
    .where(eq(votes.user_id, userId));

  return user_vote.length === 1;
}
