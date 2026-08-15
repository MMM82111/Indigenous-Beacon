import { createAPIFileRoute } from "@tanstack/react-start/api";

/**
 * POST /api/newsletter
 *
 * Newsletter signup endpoint. Validates email and stores signup.
 * Body: { email: string }
 * Returns: { success: boolean, message: string }
 */
export const APIRoute = createAPIFileRoute("/api/newsletter")({
  POST: async ({ request }) => {
    try {
      const body = (await request.json()) as { email?: string };
      const { email } = body;

      if (!email || typeof email !== "string") {
        return new Response(
          JSON.stringify({ success: false, message: "Email address is required." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return new Response(
          JSON.stringify({ success: false, message: "Please enter a valid email address." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      // Log signup (in production, connect to email service or database)
      console.log(`[Newsletter Signup] ${email.trim()}`);

      return new Response(
        JSON.stringify({
          success: true,
          message: "Thank you for signing up! We'll be in touch soon.",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
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
