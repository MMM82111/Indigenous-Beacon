import { createAPIFileRoute } from "@tanstack/react-start/api";
import { sql } from "../../db";

/**
 * POST /api/newsletter
 *
 * Newsletter signup endpoint. Validates email and stores the signup in the
 * connected Postgres database (table `subscribers`, created by
 * `scripts/init-db.ts`). Returns 503 with an honest message if no database is
 * connected yet, rather than silently discarding the address.
 *
 * Body: { email: string }
 * Returns: { success: boolean, message: string }
 */
export const APIRoute = createAPIFileRoute("/api/newsletter")({
  POST: async ({ request }) => {
    try {
      const body = (await request.json()) as { email?: string };
      const email = (body?.email ?? "").trim();

      if (!email) {
        return new Response(
          JSON.stringify({ success: false, message: "Email address is required." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(
          JSON.stringify({ success: false, message: "Please enter a valid email address." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      if (!process.env.DATABASE_URL) {
        return new Response(
          JSON.stringify({
            success: false,
            message: "Newsletter signups are temporarily unavailable. Please try again soon.",
          }),
          { status: 503, headers: { "Content-Type": "application/json" } }
        );
      }

      await sql()`INSERT INTO subscribers (email) VALUES (${email}) ON CONFLICT (email) DO NOTHING`;

      return new Response(
        JSON.stringify({
          success: true,
          message: "Thank you for signing up! We'll be in touch soon.",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error("Newsletter signup error:", message);
      return new Response(
        JSON.stringify({ success: false, message: "Something went wrong. Please try again." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  },
});
