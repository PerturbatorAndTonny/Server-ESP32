import { drizzle } from "drizzle-orm/libsql";
import { config } from "dotenv";

config({ path: '.env' })

export const db = drizzle({
  connection: {
    url: process.env.TURSO_URL,
    authToken: process.env.TURSO_KEY
  }
})