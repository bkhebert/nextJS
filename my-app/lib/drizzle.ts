// lib/drizzle.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const pool = new Pool({
  connectionString: process.env.DRIZZLE_DATABASE_URL,
});

export const db = drizzle(pool);
