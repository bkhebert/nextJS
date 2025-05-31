import { db } from "./lib/drizzle";
import { drizzleUser } from "./drizzle/schema";


async function seed() {
  await db.insert(drizzleUser).values({
    name: "Test User",
    email: "test@example.com",
  });

  console.log("🌱 Database seeded with a test user.");
}

seed().catch((err) => {
  console.error("❌ Failed to seed database:", err);
});