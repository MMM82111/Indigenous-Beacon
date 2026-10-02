import postgres from "postgres";

/**
 * Server-only handle to the team's database (any standard Postgres).
 *
 * The connection string comes from `DATABASE_URL`, which the owner connects via
 * the database card and which is injected into the sandbox and passed to the
 * live host on publish. Resolved lazily (per call, not at module load) so the
 * site still builds and serves before a database is connected — the error only
 * surfaces if a query actually runs without `DATABASE_URL`.
 *
 * Uses `postgres` (postgres.js) over standard TCP so the same code works with
 * any Postgres provider (Tiger Cloud, Neon, Supabase, etc.) — not just a single
 * vendor's proprietary HTTP driver.
 *
 * Use it only inside a `createServerFn()` handler or an `src/routes/api/*` route
 * (never client code):
 *
 *   const getPosts = createServerFn().handler(async () => {
 *     const rows = await sql()`select id, title, created_at from posts`;
 *     // Coerce non-primitive columns (timestamps are JS Dates) to strings before
 *     // returning to the client, or React will refuse to render them:
 *     return rows.map((r) => ({ ...r, created_at: String(r.created_at) }));
 *   });
 */

let client: ReturnType<typeof postgres> | null = null;

export const sql = () => {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set — connect a database (via the database card) before running queries.",
    );
  }
  // One pooled client reused for the lifetime of the process (max 1 connection
  // is plenty for a low-traffic newsletter form and avoids exhausting the
  // serverless function's connection budget).
  if (!client) {
    client = postgres(url, { max: 1, idle_timeout: 20, connect_timeout: 10 });
  }
  return client;
};
