import { defineConfig } from 'drizzle-kit'
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

export default defineConfig({
    out: './drizzle',
    schema: './drizzle/db/schema.js',
    dialect: 'turso',
    dbCredentials: {
        url: process.env.DB_FILE_NAME,
        authToken: process.env.TURSO_KEY
    }
})

const client = createClient({
    url: process.env.DB_FILE_NAME,
    authToken: process.env.TURSO_KEY
})

export const db = drizzle({ client })