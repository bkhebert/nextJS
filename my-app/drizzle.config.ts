// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./drizzle/schema",
  out: "./drizzle/migrations",
  dialect: "postgresql",
    dbCredentials: {
    url: process.env.DRIZZLE_DATABASE_URL!,
  },
});