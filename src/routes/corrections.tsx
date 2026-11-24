import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/corrections")({
  component: Corrections,
  head: () => ({
    meta: [
      { title: "Corrections and Editorial Standards — The Indigenous Beacon" },
      {
        name: "description",
        content:
          "What we got wrong, what we withdrew, and the sourcing standard every article on this site is now held to.",
      },
      { name: "og:title", content: "Corrections and Editorial Standards — The Indigenous Beacon" },
      {
        name: "og:description",
        content:
          "Our corrections log, the five articles we withdrew, and the standard we now hold every piece to.",
      },
      { name: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://indigenousbeacon.com/corrections" }],
  }),
});

const WITHDRAWN = [
  {
    slug: "/article/5-stories-media-missed",
    title: "5 Stories Mainstream Media Missed This Month",
    reason:
      "Described five recent news events in specific detail. None could be verified against a source.",
  },
  {
    slug: "/article/meet-the-makers-sarah-ortegon",
    title: "Meet the Makers: Sarah Ortegon",
    reason:
      "Carried quotations attributed to a named weaver who did not give them. No interview took place.",
  },
  {
    slug: "/article/data-centers-tribal-lands",
    title: "The Cloud's New Frontier: Data Centers and Tribal Lands",
    reason:
      "Carried quotations attributed to named individuals and anonymous “experts”, and factual claims — dates, dollar figures, job numbers, a community benefits agreement — that did not survive checking.",
  },
  {
    slug: "/article/tribal-broadband-access",
    title: "The Last Mile: How Native Nations Are Building Their Way Out of the Digital Divide",
    reason:
      "Carried quotations attributed to a named tribal leader who did not give them, and anonymous sources we cannot produce.",
  },
  {
    slug: "/article/native-representation-in-tech",
    title: "Coded Invisibility: Native Americans in Tech and the Fight for Representation",
    reason:
      "Carried quotations attributed to named individuals who did not give them, and anonymous sources we cannot produce.",
  },
];

const LOG = [
  {
    date: "22 November 2026",
    entries: [
      "Withdrew “5 Stories Mainstream Media Missed This Month”. Its five news items could not be verified.",
      "Corrected “Land Back: What It Really Means”. Four land-return examples it carried — a transfer to the Pueblo of Jemez, a Trust for Public Land return at Sáttítla, a Mount Graham return and a “Pronghorn” site — could not be verified and were replaced with documented returns.",
      "Removed two statistics whose source documents we could not trace: an “87%” figure on state history standards, and a newsroom-diversity figure attributed to a named report.",
      "Replaced ICWA removal-rate percentages with the findings Congress wrote into the statute at 25 U.S.C. § 1901, which a reader can check.",
    ],
  },
  {
    date: "21 November 2026",
    entries: [
      "Withdrew “Meet the Makers: Sarah Ortegon”, “The Cloud's New Frontier”, “The Last Mile” and “Coded Invisibility” for quotations and claims we could not verify.",
      "Removed advertised contributor rates from our Write for Us page. We had offered $300–$800 per article against a budget of zero.",
    ],
  },
];

function Corrections() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-earth/10 bg-cream/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <Link to="/" className="font-serif text-xl font-bold tracking-tight text-earth">
            <span className="text-ochre">✦</span> The Indigenous Beacon
          </Link>
          <div className="hidden items-center gap-8 sm:flex">
            <Link
              to="/articles"
              className="text-sm font-medium text-earth-light/85 transition-colors hover:text-earth"
            >
              Articles
            </Link>
            <a
              href="/educators"
              className="text-sm font-medium text-earth-light/85 transition-colors hover:text-earth"
            >
              For Educators
            </a>
            <Link
              to="/about"
              className="text-sm font-medium text-earth-light/85 transition-colors hover:text-earth"
            >
              About
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36 sm:px-10">
        <p className="mb-3 text-xs font-semibold tracking-widest uppercase text-ochre-ink">
          Trust and standards
        </p>
        <h1 className="section-heading mb-6 text-earth">Corrections and Editorial Standards</h1>

        <p className="mb-6 text-lg leading-relaxed text-earth-light/85">
          In November 2026 we audited our own archive and found that it did not
          meet the standard this subject deserves. Five articles carried
          quotations attributed to real people who never gave them, and specific
          claims about dates, acreages, dollars and events that we could not
          verify against any source. We withdrew them. This page records that,
          and states what we now hold every piece to.
        </p>

        <p className="mb-10 text-lg leading-relaxed text-earth-light/85">
          We are a small publication without a reporting staff. That is an
          explanation, not an excuse: if we cannot report something properly, we
          should not publish it as though we had.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-earth">The standard we hold</h2>
        <ul className="mb-12 space-y-3 text-lg leading-relaxed text-earth-light/85">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sage" aria-hidden="true" />
            <span>
              <strong className="text-earth">No quotation without a source.</strong> A
              quote appears only if we hold a recording, a transcript, a published
              document, or a named person's own writing that contains it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sage" aria-hidden="true" />
            <span>
              <strong className="text-earth">Every figure is traced or described.</strong>{" "}
              Numbers come from a statute, a court opinion, a government report, or a
              named study we can point to. Where we cannot trace one, we describe the
              finding without inventing precision.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sage" aria-hidden="true" />
            <span>
              <strong className="text-earth">No anonymous “experts”.</strong> An unnamed
              source is not a source, and we do not use one to carry a claim.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sage" aria-hidden="true" />
            <span>
              <strong className="text-earth">No event we did not confirm.</strong> If we
              cannot verify that something happened, we do not describe it happening.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sage" aria-hidden="true" />
            <span>
              <strong className="text-earth">Corrections are dated and visible.</strong>{" "}
              We add a note to the article rather than quietly editing it, and the note
              says what the earlier version got wrong.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sage" aria-hidden="true" />
            <span>
              <strong className="text-earth">Withdrawal, not deletion.</strong> When a
              piece cannot be salvaged we leave the page up with a notice, take it out
              of search and our feed, and keep the record here.
            </span>
          </li>
        </ul>

        <h2 className="mb-4 text-2xl font-bold text-earth">Withdrawn articles</h2>
        <p className="mb-6 text-lg leading-relaxed text-earth-light/85">
          These five pieces remain online with a notice explaining why they were
          withdrawn. They are not indexed by search engines and do not appear in our
          feed. They will not be republished unless they are rebuilt from primary
          documents and named, on-the-record sources.
        </p>
        <ul className="mb-12 space-y-4">
          {WITHDRAWN.map((item) => (
            <li
              key={item.slug}
              className="rounded-2xl border border-earth/10 bg-white p-5 shadow-sm"
            >
              <a
                href={item.slug}
                className="font-semibold text-earth underline underline-offset-2 hover:text-turquoise-dark"
              >
                {item.title}
              </a>
              <p className="mt-2 text-base leading-relaxed text-earth-light/85">
                {item.reason}
              </p>
            </li>
          ))}
        </ul>

        <h2 className="mb-4 text-2xl font-bold text-earth">Corrections log</h2>
        <div className="mb-12 space-y-8">
          {LOG.map((day) => (
            <div key={day.date}>
              <h3 className="mb-2 text-sm font-semibold tracking-widest uppercase text-ochre-ink">
                {day.date}
              </h3>
              <ul className="space-y-2 text-base leading-relaxed text-earth-light/85">
                {day.entries.map((entry) => (
                  <li key={entry} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ochre"
                      aria-hidden="true"
                    />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-earth/10 bg-cream-dark p-6">
          <h2 className="mb-3 text-xl font-bold text-earth">If we have something wrong</h2>
          <p className="text-base leading-relaxed text-earth-light/85">
            Write to{" "}
            <a
              className="font-medium text-turquoise-dark underline underline-offset-2"
              href="mailto:the-indigenous-beacon-ace6ceac@ctomail.io?subject=Correction"
            >
              the-indigenous-beacon-ace6ceac@ctomail.io
            </a>{" "}
            with the article, the sentence, and the document that settles it. We will
            check it against the source, correct the page with a dated note, and log it
            above. If you are one of the people quoted in a withdrawn piece, tell us —
            we will answer you directly.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/articles"
            className="rounded-full bg-earth px-7 py-3 font-medium text-white transition-colors hover:bg-earth-light"
          >
            Read our articles
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
