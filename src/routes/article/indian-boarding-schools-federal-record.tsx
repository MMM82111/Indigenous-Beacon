import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/article/indian-boarding-schools-federal-record")({
  component: BoardingSchoolsRecord,
  head: () => ({
    meta: [
      {
        title: "What the Federal Record Actually Shows About Indian Boarding Schools — The Indigenous Beacon",
      },
      {
        name: "description",
        content:
          "408 schools across 37 states. Over 500 documented child deaths at 19 schools. The Department of the Interior's own investigation put the numbers on the record — here is what it found and what it left unfinished.",
      },
      {
        name: "og:title",
        content: "What the Federal Record Actually Shows About Indian Boarding Schools",
      },
      {
        name: "og:description",
        content:
          "The Interior Department's investigation documented 408 federal Indian boarding schools, 431 sites, and more than 500 child deaths at 19 schools.",
      },
    ],
  }),
});

function BoardingSchoolsRecord() {
  return (
    <>
      {/* ─────── Nav ─────── */}
      <header className="sticky top-0 z-50 border-b border-earth/10 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <Link
            to="/"
            className="font-serif text-xl font-bold tracking-tight text-earth"
          >
            <span className="text-ochre">✦</span> The Indigenous Beacon
          </Link>
          <div className="hidden items-center gap-8 sm:flex">
            <Link
              to="/"
              className="text-sm font-medium text-earth-light/70 transition-colors hover:text-earth"
            >
              Home
            </Link>
            <Link
              to="/articles"
              className="text-sm font-medium text-earth-light/70 transition-colors hover:text-ochre"
            >
              Articles
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-earth-light/70 transition-colors hover:text-earth"
            >
              About
            </Link>
            <a
              href="/#join"
              className="rounded-full bg-turquoise px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-turquoise-dark"
            >
              Join Us
            </a>
          </div>
          {/* Mobile menu button */}
          <details className="sm:hidden">
            <summary className="list-none cursor-pointer p-1 text-earth-light hover:text-earth">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-4 top-full mt-2 flex w-48 flex-col gap-2 rounded-xl border border-earth/10 bg-white p-4 shadow-lg">
              <Link to="/" className="rounded-lg px-3 py-2 text-sm font-medium text-earth-light/70 hover:bg-cream-dark hover:text-earth">Home</Link>
              <Link to="/articles" className="rounded-lg px-3 py-2 text-sm font-medium text-ochre hover:bg-cream-dark">Articles</Link>
              <Link to="/about" className="rounded-lg px-3 py-2 text-sm font-medium text-earth-light/70 hover:bg-cream-dark hover:text-earth">About</Link>
              <a href="/#join" className="rounded-full bg-turquoise px-4 py-2 text-center text-sm font-medium text-white hover:bg-turquoise-dark">Join Us</a>
            </div>
          </details>
        </nav>
      </header>

      {/* ─────── Article Hero ─────── */}
      <section className="relative flex min-h-[40vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center sm:px-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-ochre/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-turquoise/5 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-ochre/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-ochre">
            History &amp; Policy
          </span>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-earth sm:text-4xl md:text-5xl">
            What the Federal Record Actually Shows About Indian Boarding Schools
          </h1>
          <p className="mb-6 text-lg font-medium italic text-earth-light/80">
            408 schools. 431 sites. More than 500 documented child deaths at 19 of them. The government's own investigation put the numbers on the record — here is what it found, and what it did not finish.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-earth-light/60">
            <span>The Indigenous Beacon Editorial Team</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-11-09">November 9, 2026</time>
          </div>
        </div>
      </section>

      {/* ─────── Article Content ─────── */}
      <article className="section-padding">
        <div className="prose-custom mx-auto max-w-3xl">
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            For most of a century, the United States ran a school system for Native children whose stated purpose was to make them stop being Native. That is not an interpretation. It is the conclusion of the federal government’s own investigation, published in two volumes by the Department of the Interior.
          </p>
          <p className="mb-8 text-lg font-semibold leading-relaxed text-earth">
            The numbers in those volumes are worth knowing precisely, because they are the most defensible account of the system that exists — and because they are still incomplete.
          </p>
          <hr className="my-10 border-earth/10" />

          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            How the Investigation Came About
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            In June 2021, Secretary of the Interior Deb Haaland announced the <strong className="text-earth">Federal Indian Boarding School Initiative</strong>, directing the Department to examine historical records and produce an investigative report — and, for the first time, an official list of sites. Assistant Secretary for Indian Affairs Bryan Newland led the effort.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Volume I was released in May 2022. The second and final volume followed in July 2024, expanding on the number and details of institutions and adding student deaths, burial sites, the participation of religious institutions and organizations, and federal dollars spent operating these locations. It also carried policy recommendations for Congress and the Executive Branch.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            On <strong className="text-earth">October 25, 2024</strong>, President Joe Biden issued a formal apology for the federal Indian boarding school program.
          </p>
          <hr className="my-10 border-earth/10" />

          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Scale, in the Government’s Own Numbers
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Volume I found that between <strong className="text-earth">1819 and 1969</strong>, the federal Indian boarding school system consisted of <strong className="text-earth">408 federal schools across 37 states or then-territories</strong>, including 21 schools in Alaska and 7 in Hawaii. Because some individual schools occupied more than one location, those 408 schools comprised <strong className="text-earth">431 specific sites</strong>.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The schools varied enormously in size. Enrollment ranged from a single child to more than 1,200, and capacity ranged from one child to more than 1,700.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The report also put a floor under the death toll: approximately <strong className="text-earth">19 federal Indian boarding schools accounted for over 500 documented American Indian, Alaska Native and Native Hawaiian child deaths</strong>. The Department stated plainly that it expected the number of recorded deaths to increase as the investigation continued. That figure covers 19 schools out of 408 — it was never a total.
          </p>
          <hr className="my-10 border-earth/10" />

          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            What the Schools Did
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Volume I describes what it calls systematic militarized and identity-alteration methodologies aimed at assimilating Native children. Among the practices it documents:
          </p>
          <ul className="mb-4 space-y-3 text-lg leading-relaxed text-earth-light/80">
            <li>Renaming Indian children with English names.</li>
            <li>Cutting the hair of Indian children.</li>
            <li>Discouraging or preventing the use of American Indian, Alaska Native and Native Hawaiian languages.</li>
          </ul>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The investigation’s stated objectives included identifying the names and Tribal identities of the children who were placed in these schools, and locating <strong className="text-earth">marked and unmarked burial sites</strong> of children’s remains at or near school facilities. That second objective is the reason the work is not finished: burial sites are still being identified.
          </p>
          <hr className="my-10 border-earth/10" />

          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Why the Numbers Matter More Than the Rhetoric
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The boarding school era is often reduced to a single phrase or a single photograph. The federal record is more useful than either, because it is specific and because it is the government’s own accounting. It establishes that this was a national system, not a scattering of institutions — 408 schools in 37 states and territories — and it establishes that children died in these schools in numbers the government itself expects to revise upward.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            It also establishes the limits of the record. The Department investigated records under its control. Tribal and individual perspectives, including those of descendants, were incorporated through formal consultation, but the documentary base is the federal archive — which means the record reflects what was written down, not necessarily everything that happened.
          </p>
          <hr className="my-10 border-earth/10" />

          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            For Educators
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The two volumes and their appendices — including the official list of schools and school summary profiles, organized by state — are public and citable. For a classroom, that matters: a teacher can point students to a named school in their own state, with a documented location and operating dates, rather than to an abstraction.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            Two cautions are worth passing on to students. First, the death count is a documented minimum, not a total. Second, an apology is not a remedy — the report’s policy recommendations were addressed to Congress and the Executive Branch, and what happens to them is a separate question from what the investigation found.
          </p>

          <div className="mb-10 rounded-2xl border border-earth/10 bg-cream-dark p-8">
            <h3 className="mb-3 text-sm font-semibold tracking-wider uppercase text-earth">
              Sources
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed text-earth-light/70">
              <li>· U.S. Department of the Interior, Federal Indian Boarding School Initiative — https://www.bia.gov/service/federal-indian-boarding-school-initiative</li>
              <li>· Volume I, Federal Indian Boarding School Initiative Investigative Report (May 2022) — https://www.bia.gov/sites/default/files/dup/inline-files/bsi_investigative_report_may_2022_508.pdf</li>
              <li>· Volume II, Federal Indian Boarding School Initiative Investigative Report (July 2024), referenced on the BIA initiative page above</li>
            </ul>
            <p className="mt-4 text-xs italic text-earth-light/50">
              This article is part of The Indigenous Beacon’s History &amp; Policy series. All figures are quoted from the Department of the Interior’s published reports.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://buy.stripe.com/28E28rcX220D3NF7NB3Nm01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-earth px-8 py-3.5 font-medium text-white shadow-lg transition-all hover:bg-earth-light hover:shadow-xl"
            >
              Support Our Mission
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 rounded-full border border-earth/20 px-8 py-3.5 font-medium text-earth transition-all hover:bg-earth hover:text-white"
            >
              More Articles
            </Link>
          </div>
        </div>
      </article>

      {/* ─────── Footer ─────── */}
      <footer className="border-t border-earth/10 bg-earth px-6 py-12 text-cream-dark/70 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link to="/" className="font-serif text-xl font-bold text-white">
                <span className="text-ochre-light">✦</span> The Indigenous Beacon
              </Link>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream-dark/60">
                A Native-led digital media and education platform amplifying
                Indigenous voices through original journalism, storytelling, and
                educational resources.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-white">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="transition-colors hover:text-ochre-light">Home</Link></li>
                <li><Link to="/articles" className="transition-colors hover:text-ochre-light">Articles</Link></li>
                <li><Link to="/about" className="transition-colors hover:text-ochre-light">About</Link></li>
                <li><Link to="/write-for-us" className="transition-colors hover:text-ochre-light">Write for Us</Link></li>
                <li><a href="/#join" className="transition-colors hover:text-ochre-light">Support Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-white">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="transition-colors hover:text-ochre-light">Twitter / X</a></li>
                <li><a href="#" className="transition-colors hover:text-ochre-light">Facebook</a></li>
                <li><a href="#" className="transition-colors hover:text-ochre-light">Instagram</a></li>
                <li><a href="/about" className="transition-colors hover:text-ochre-light">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-cream-dark/40">
            &copy; {new Date().getFullYear()} The Indigenous Beacon. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
