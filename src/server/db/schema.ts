import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const games = pgTable(
  "games",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    image: text("image").notNull(),
    votes: integer("votes").notNull().default(0),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (games) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(games.image),
    };
  }
);

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    userId: text("userId").notNull(),
    voted: boolean("voted").notNull().default(false),
  },
  (users) => {
    return {
      uniqueIndex: uniqueIndex("unique_idx2").on(users.userId),
    };
  }
);
