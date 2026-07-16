import { createAPIFileRoute } from "@tanstack/react-start/api";
import { stripe, PRODUCT_IDS, MEMBERSHIP_TIERS } from "../../lib/stripe";

/**
 * POST /api/stripe/checkout
 *
 * Creates a Stripe Checkout Session for a membership subscription.
 * Body: { tier: "supporter" | "beacon" | "elder" }
 * Returns: { sessionUrl: string, sessionId: string }
 */
export const APIRoute = createAPIFileRoute("/api/stripe/checkout")({
  POST: async ({ request }) => {
    try {
      const body = (await request.json()) as { tier?: string };
      const { tier } = body;

      if (!tier || !["supporter", "beacon", "elder"].includes(tier)) {
        return new Response(
          JSON.stringify({ error: "Invalid tier. Must be: supporter, beacon, or elder" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      const priceId = PRODUCT_IDS[tier as keyof typeof PRODUCT_IDS];
      if (!priceId) {
        return new Response(
          JSON.stringify({
            error: "Stripe products not yet configured. Run the setup script first.",
            hint: "Run: STRIPE_SECRET_KEY=sk_... npx tsx scripts/setup-stripe-products.ts",
          }),
          { status: 503, headers: { "Content-Type": "application/json" } }
        );
      }

      // Get the origin from the request
      const origin = new URL(request.url).origin;

      const session = await stripe().checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        success_url: `${origin}/membership/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/#join`,
        metadata: {
          tier,
        },
        subscription_data: {
          metadata: {
            tier,
          },
        },
      });

      return new Response(
        JSON.stringify({
          sessionUrl: session.url,
          sessionId: session.id,
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error("Stripe checkout error:", message);
      return new Response(
        JSON.stringify({ error: "Failed to create checkout session" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  },
});