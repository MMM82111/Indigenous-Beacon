import { createServerFn } from "@tanstack/react-start";
import { sql } from "../db";

/**
 * Server function that stores a newsletter signup.
 *
 * Returns a structured { success, message } object in every case (including
 * when no database is connected), so the client never needs a fake-success
 * fallback. When DATABASE_URL is missing we tell the visitor honestly that
 * signups are temporarily unavailable rather than silently discarding the
 * address.
 */
export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .validator((data: { email?: string }) => data)
  .handler(async ({ data }) => {
    const email = (data?.email ?? "").trim();
    if (!email) {
      return { success: false, message: "Email address is required." };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: "Please enter a valid email address." };
    }
    if (!process.env.DATABASE_URL) {
      return {
        success: false,
        message:
          "Newsletter signups are temporarily unavailable. Please try again soon.",
      };
    }
    try {
      await sql()`INSERT INTO subscribers (email) VALUES (${email}) ON CONFLICT (email) DO NOTHING`;
      return {
        success: true,
        message: "Thank you for signing up! We'll be in touch soon.",
      };
    } catch (error) {
      console.error("Newsletter signup error:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }
  });
