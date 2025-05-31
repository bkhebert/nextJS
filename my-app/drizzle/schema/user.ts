import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const drizzleUser = pgTable("drizzle_user", {
  id: serial("id").primaryKey(),
  name: text("name"), //.notNull(),
  email: varchar("email", { length: 255 }), // .notNull(),
});
