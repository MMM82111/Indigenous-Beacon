// Shared Stripe configuration
// Requires STRIPE_SECRET_KEY and VITE_STRIPE_PUBLISHABLE_KEY env vars

import Stripe from "stripe";

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "STRIPE_SECRET_KEY environment variable is required. " +
        "Set it in your .env file or environment."
    );
  }
  return new Stripe(key, {
    apiVersion: "2025-02-24.acacia",
    typescript: true,
  });
}

let _stripe: Stripe | null = null;
export function stripe(): Stripe {
  if (!_stripe) _stripe = getStripe();
  return _stripe;
}

// Product configuration
// These IDs are set after running the setup script (scripts/setup-stripe-products.ts)
// They are stored as env vars so they can be set once products are created
export const PRODUCT_IDS = {
  supporter: process.env.STRIPE_SUPPORTER_PRICE_ID || "",
  beacon: process.env.STRIPE_BEACON_PRICE_ID || "",
  elder: process.env.STRIPE_ELDER_PRICE_ID || "",
} as const;

export const MEMBERSHIP_TIERS = [
  {
    id: "supporter",
    name: "Supporter",
    amount: 500, // cents ($5)
    currency: "usd",
    interval: "month" as const,
    description: "Ad-free reading + Monthly newsletter",
  },
  {
    id: "beacon",
    name: "Beacon",
    amount: 1500, // cents ($15)
    currency: "usd",
    interval: "month" as const,
    description: "Everything in Supporter + Exclusive deep dives + Live Q&A access",
  },
  {
    id: "elder",
    name: "Elder",
    amount: 3000, // cents ($30)
    currency: "usd",
    interval: "month" as const,
    description: "Everything in Beacon + Educational licensing + Event invitations",
  },
] as const;

export function getPublishableKey(): string {
  const key = process.env.VITE_STRIPE_PUBLISHABLE_KEY;
  if (!key) {
    // Return a placeholder for development — the site will show "Coming Soon" fallback
    return "";
  }
  return key;
}