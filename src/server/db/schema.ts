import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const GamesTable = pgTable(
  "games",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    image: text("image").notNull(),
    votes: integer('votes').notNull().default(0),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (games) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(games.image),
    };
  }
);
