import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/article/native-representation-in-tech")({
  component: Withdrawn,
  head: () => ({
    meta: [
      { title: "Withdrawn: Coded Invisibility: Native Americans in the Tech Industry — The Indigenous Beacon" },
      {
        name: "description",
        content:
          "This article has been withdrawn. It contained quotations and claims we could not verify against any source.",
      },
      { name: "robots", content: "noindex" },
      { name: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://indigenousbeacon.com/article/native-representation-in-tech" },
    ],
  }),
});

function Withdrawn() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-earth/10 bg-cream/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <Link
            to="/"
            className="font-serif text-xl font-bold tracking-tight text-earth"
          >
            <span className="text-ochre">✦</span> The Indigenous Beacon
          </Link>
          <div className="hidden items-center gap-8 sm:flex">
            <Link
              to="/articles"
              className="text-sm font-medium text-earth-light/85 transition-colors hover:text-earth"
            >
              Articles
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-earth-light/85 transition-colors hover:text-earth"
            >
              Home
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36 sm:px-10">
        <span className="mb-4 inline-block rounded-full bg-crimson/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-crimson">
          Withdrawn
        </span>
        <h1 className="section-heading mb-6 text-earth">Coded Invisibility: Native Americans in the Tech Industry</h1>
        <p className="mb-6 text-lg leading-relaxed text-earth-light/85">
          We have withdrawn this article. It contained quotations attributed to
          named individuals, and other specific claims, that we could not verify
          against any source. Publishing them was a failure of our own standards,
          and we are sorry for it.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-earth-light/85">
          We would rather run nothing on this subject than run something we
          cannot stand behind. The topic matters too much for that, and the
          people quoted in it never agreed to be part of it.
        </p>
        <p className="mb-10 text-lg leading-relaxed text-earth-light/85">
          We are rebuilding the piece from primary documents and named,
          on-the-record sources. If you can point us to documentation on this
          subject, write to{" "}
          <a
            className="font-medium text-turquoise-dark underline underline-offset-2"
            href="mailto:the-indigenous-beacon-ace6ceac@ctomail.io"
          >
            the-indigenous-beacon-ace6ceac@ctomail.io
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/articles"
            className="rounded-full bg-earth px-7 py-3 font-medium text-white transition-colors hover:bg-earth-light"
          >
            Read our other articles
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-earth/20 px-7 py-3 font-medium text-earth transition-colors hover:bg-cream-dark"
          >
            About us
          </Link>
        </div>
      </main>

      <footer className="border-t border-earth/10 bg-earth px-6 py-10 text-cream-dark/70 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl text-center text-sm text-cream-dark/60">
          &copy; {new Date().getFullYear()} The Indigenous Beacon. All rights reserved.
        </div>
      </footer>
    </>
  );
}
