/**
 * Create the `subscribers` table for the newsletter.
 *
 * Run once after connecting a database (DATABASE_URL):
 *   DATABASE_URL=postgres://... bun run scripts/init-db.ts
 *
 * Uses the same Neon serverless client as the app, so it works both against
 * the sandbox and the production database.
 */
import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set. Connect a database first, then re-run with DATABASE_URL=...");
  process.exit(1);
}

const sql = neon(url);

await sql`
  CREATE TABLE IF NOT EXISTS subscribers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email text NOT NULL UNIQUE,
    created_at timestamptz NOT NULL DEFAULT now()
  );
`;

console.log("subscribers table ready.");
