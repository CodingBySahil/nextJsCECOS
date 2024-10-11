// src/db/schema.ts

import { drizzle } from "drizzle-orm/vercel-postgres";
import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { sql } from "@vercel/postgres";

// Initialize Drizzle ORM with the Vercel Postgres SQL client
export const db = drizzle(sql);

// Define the Todo table with consistent column names
export const Todo = pgTable("todonew2", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  completed: boolean("completed").default(false),
});
