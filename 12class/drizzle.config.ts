// drizzle.config.ts

import { defineConfig } from "drizzle-kit";
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "pg",  // Correct dialect name for PostgreSQL
  dbCredentials: {
    url: process.env.POSTGRES_URL!,  // Ensure POSTGRES_URL is defined in .env
  },
});
