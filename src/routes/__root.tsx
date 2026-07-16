import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Indigenous Beacon — Amplifying Native Voices" },
      {
        name: "description",
        content:
          "A digital media and education platform informing the broader public about Native American history, current struggles, cultural triumphs, and contemporary issues through original journalism, storytelling, and education.",
      },
      { name: "og:title", content: "The Indigenous Beacon — Amplifying Native Voices" },
      {
        name: "og:description",
        content:
          "A digital media and education platform amplifying Native American voices through original journalism, storytelling, and educational resources.",
      },
      { name: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  notFoundComponent: () => (
    <div className="section-padding flex min-h-dvh flex-col items-center justify-center text-center">
      <h1 className="section-heading mb-4">Page not found</h1>
      <p className="text-earth-light max-w-md text-lg">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="mt-8 inline-block rounded-full bg-turquoise px-8 py-3 font-medium text-white transition-colors hover:bg-turquoise-dark"
      >
        Return home
      </a>
    </div>
  ),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}