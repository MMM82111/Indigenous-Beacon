/**
 * Create the `subscribers` table for the newsletter.
 *
 * Run once after connecting a database (DATABASE_URL):
 *   DATABASE_URL=postgres://... bun run scripts/init-db.ts
 *
 * Uses the same standard Postgres client as the app, so it works against
 * any provider (Tiger Cloud, Neon, etc.).
 */
import postgres from "postgres";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set. Connect a database first, then re-run with DATABASE_URL=...");
  process.exit(1);
}

const sql = postgres(url, { max: 1 });
await sql`
  CREATE TABLE IF NOT EXISTS subscribers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email text NOT NULL UNIQUE,
    created_at timestamptz NOT NULL DEFAULT now()
  );
`;
await sql.end();
console.log("subscribers table ready.");
