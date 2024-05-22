import {
  date,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex
} from "drizzle-orm/pg-core";

export const elections = pgTable("elections", {
  election_id: serial("election_id").primaryKey(),
  name: text("name").notNull(),
  start_date: date("start_date", { mode: "date" }).notNull(),
  end_date: date("end_date", { mode: "date" }).notNull(),
  game1_id: integer('game1_id').notNull().references(() => games.game_id),
  game2_id: integer('game2_id').notNull().references(() => games.game_id),
  created_at: timestamp("created_at", { mode: "string" }).defaultNow(),
});

export const games = pgTable("games", {
  game_id: serial("game_id").primaryKey(),
  title: text("title").notNull(),
  image: text("image").notNull(),
  votes_count: integer("votes").notNull().default(0),
  createdAt: timestamp("createdAt").defaultNow(),
});

export const votes = pgTable("votes", {
  vote_id: serial('vote_id').primaryKey(),
  user_id: text('user_id').notNull().unique(),
  game_id: integer('game_id').references(() => games.game_id),
  election_id: integer('election_id').references(() => elections.election_id),
  voted_at: timestamp('voted_at').defaultNow()
}, (table) => {
  return {
    userIndex: uniqueIndex('userIndex').on(table.user_id),
    electionIndex: uniqueIndex('electionIndex').on(table.election_id),
  }
});


