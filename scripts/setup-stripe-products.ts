#!/usr/bin/env node
/**
 * Stripe Product Setup Script
 *
 * Creates the three membership products in Stripe and outputs
 * the price IDs that need to be set as environment variables.
 *
 * Usage:
 *   STRIPE_SECRET_KEY=sk_live_... npx tsx scripts/setup-stripe-products.ts
 *
 * Or set STRIPE_SECRET_KEY in your .env file first.
 */

import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  console.error(
    "❌ STRIPE_SECRET_KEY environment variable is required.\n" +
      "   Run: STRIPE_SECRET_KEY=sk_live_... npx tsx scripts/setup-stripe-products.ts"
  );
  process.exit(1);
}

const stripe = new Stripe(key, {
  apiVersion: "2025-02-24.acacia",
});

const PRODUCTS = [
  {
    id: "supporter",
    name: "Supporter",
    description: "Ad-free reading and monthly newsletter",
    amount: 500,
    metadata: { tier: "supporter" },
  },
  {
    id: "beacon",
    name: "Beacon",
    description: "Everything in Supporter plus exclusive deep dives and live Q&A access",
    amount: 1500,
    metadata: { tier: "beacon" },
  },
  {
    id: "elder",
    name: "Elder",
    description: "Everything in Beacon plus educational licensing and event invitations",
    amount: 3000,
    metadata: { tier: "elder" },
  },
];

async function setup() {
  console.log("🚀 Setting up Stripe membership products...\n");

  const results: Array<{ id: string; name: string; priceId: string }> = [];

  for (const product of PRODUCTS) {
    console.log(`📦 Creating product: ${product.name}`);

    // Create or retrieve existing product
    let stripeProduct;
    const existing = await stripe.products.search({
      query: `metadata['tier']:'${product.id}'`,
    });

    if (existing.data.length > 0) {
      stripeProduct = existing.data[0];
      console.log(`   ✅ Found existing product: ${stripeProduct.id}`);
    } else {
      stripeProduct = await stripe.products.create({
        name: product.name,
        description: product.description,
        metadata: product.metadata,
      });
      console.log(`   ✅ Created product: ${stripeProduct.id}`);
    }

    // Create monthly price
    const price = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: product.amount,
      currency: "usd",
      recurring: { interval: "month" },
      metadata: { tier: product.id },
    });

    console.log(`   💰 Created price: ${price.id} ($${(product.amount / 100).toFixed(2)}/mo)`);
    results.push({ id: product.id, name: product.name, priceId: price.id });
  }

  console.log("\n✅ All products created!\n");
  console.log("📋 Set these environment variables in your .env file:\n");

  for (const r of results) {
    const varName = `STRIPE_${r.id.toUpperCase()}_PRICE_ID`;
    console.log(`   ${varName}=${r.priceId}`);
  }

  console.log("\n📋 Also ensure these are set:");
  console.log("   STRIPE_SECRET_KEY=sk_live_...");
  console.log("   VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...");
  console.log("   STRIPE_WEBHOOK_SECRET=whsec_... (from Stripe Dashboard > Webhooks)\n");

  console.log("🔗 Create a webhook endpoint in your Stripe Dashboard:");
  console.log("   Endpoint URL: https://yourdomain.com/api/stripe/webhook");
  console.log("   Events: checkout.session.completed, customer.subscription.updated\n");
}

setup().catch((err) => {
  console.error("❌ Setup failed:", err.message);
  process.exit(1);
});