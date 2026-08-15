import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/article/5-stories-media-missed")({
  component: FiveStoriesArticle,
  head: () => ({
    meta: [
      { title: "5 Stories Mainstream Media Missed This Month — The Indigenous Beacon" },
      {
        name: "description",
        content:
          "A roundup of under-covered Native news that deserves your attention — from land returns to language revitalization.",
      },
      { name: "og:title", content: "5 Stories Mainstream Media Missed This Month" },
      {
        name: "og:description",
        content:
          "A roundup of under-covered Native news that deserves your attention.",
      },
      { name: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/* ─── Article Page ─── */

function FiveStoriesArticle() {
  return (
    <>
      {/* ─────── Navigation ─────── */}
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
            Reporting &amp; News
          </span>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-earth sm:text-4xl md:text-5xl">
            5 Stories Mainstream Media Missed This Month
          </h1>
          <p className="mb-6 text-lg font-medium italic text-earth-light/80">
            A roundup of under-covered Native news that deserves your attention.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-earth-light/60">
            <span>The Indigenous Beacon Editorial Team</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-07-16">July 16, 2026</time>
          </div>
        </div>
      </section>

      {/* ─────── Article Content ─────── */}
      <article className="section-padding">
        <div className="prose-custom mx-auto max-w-3xl">
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            Every day, newsrooms across the country make decisions about what stories to cover. Too often, stories about Native American communities — stories that matter deeply to the people living them — are pushed aside, buried, or never assigned at all.
          </p>
          <p className="mb-8 text-lg font-semibold leading-relaxed text-earth">
            Here are five stories from the past month that deserved more attention from the national media.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* Story 1 */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            1. The Pueblo of Jemez Gets Its Land Back
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            In a quiet ceremony that drew far less attention than it deserved, the Biden administration transferred 465 acres of national forest land to the Pueblo of Jemez in New Mexico. The land, which includes the pueblo's ancestral village of Wan Sibi and numerous sacred sites, had been part of the Santa Fe National Forest for decades.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            This is not a land swap or a lease — it is a permanent transfer of ownership. The Pueblo of Jemez now holds the land in trust, meaning it can protect sacred sites, manage forests according to traditional ecological knowledge, and ensure that future generations can access their ancestral homeland.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The transfer was years in the making, requiring coordination between the Department of the Interior, the U.S. Forest Service, and the Pueblo of Jemez. It represents one of the most significant land returns to a tribal nation in recent years — and it is part of a growing trend.
          </p>
          <div className="mb-8 rounded-2xl border border-earth/10 bg-cream p-5">
            <p className="text-base font-bold text-earth">Why it matters:</p>
            <p className="text-base leading-relaxed text-earth-light/70">Land back is not a radical fringe movement. It is federal policy, and it is happening. The Pueblo of Jemez land transfer is a model for how other tribes can reclaim ancestral lands through negotiated, legal channels.</p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* Story 2 */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            2. The Cherokee Nation Opens Its First Immersion School in Oklahoma
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The Cherokee Nation recently celebrated the opening of a new Cherokee language immersion school in Tahlequah, Oklahoma — the first new immersion school built by the nation in decades. The school will serve students from pre-K through 8th grade, with a curriculum taught entirely in the Cherokee language.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The Cherokee language is one of the most endangered Indigenous languages in North America. According to the Cherokee Nation, there are fewer than 2,000 fluent speakers remaining, most of them elders. The immersion school is part of an aggressive revitalization effort that includes online courses, a Cherokee language master-apprentice program, and a growing library of Cherokee-language media.
          </p>
          <div className="mb-8 rounded-2xl border border-earth/10 bg-cream p-5">
            <p className="text-base font-bold text-earth">Why it matters:</p>
            <p className="text-base leading-relaxed text-earth-light/70">Language is the carrier of culture. When a language dies, the knowledge, stories, and ways of thinking embedded in that language die with it. The Cherokee Nation's investment in immersion education is a model for what Indigenous language revitalization looks like at scale.</p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* Story 3 */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            3. Tribal Nations Challenge the Supreme Court's Brackeen Decision Implementation
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            In June 2023, the Supreme Court upheld the Indian Child Welfare Act (ICWA) in the landmark <em>Brackeen v. Haaland</em> decision. The ruling was celebrated as a major victory for tribal sovereignty and Native children. But the fight is not over.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            This month, a coalition of tribal nations filed a joint brief challenging implementation gaps in the post-Brackeen landscape. Despite the Supreme Court's ruling, some states continue to process Native child custody cases in ways that violate the spirit — and in some cases, the letter — of ICWA. The brief argues that states are using procedural loopholes to circumvent the law's requirement that Native children be placed with Native families whenever possible.
          </p>
          <div className="mb-8 rounded-2xl border border-earth/10 bg-cream p-5">
            <p className="text-base font-bold text-earth">Why it matters:</p>
            <p className="text-base leading-relaxed text-earth-light/70">ICWA is one of the most important federal laws protecting Native children and families. The Supreme Court upheld it, but laws are only as strong as their enforcement. This story is a reminder that legal victories require ongoing vigilance.</p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* Story 4 */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            4. Boarding School Healing Coalition Releases New Report
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The National Native American Boarding School Healing Coalition (NABS) released a major new report this month documenting the physical locations of federal Indian boarding schools across the United States. The report, based on archival research and site visits, identifies 18 previously undocumented boarding school sites and confirms the existence of 16 unmarked burial sites associated with the schools.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The report is part of the coalition's ongoing work to document the full scope of the federal boarding school system, which operated from 1819 to the 1970s and forcibly removed hundreds of thousands of Native children from their families. The Department of the Interior's own 2022 investigative report identified at least 973 children who died at boarding schools — a number that NABS says is likely a significant undercount.
          </p>
          <div className="mb-8 rounded-2xl border border-earth/10 bg-cream p-5">
            <p className="text-base font-bold text-earth">Why it matters:</p>
            <p className="text-base leading-relaxed text-earth-light/70">The boarding school era is one of the most traumatic chapters in Native American history, and it is only beginning to receive the public attention it deserves. For Native communities, this is not history — it is intergenerational trauma that continues to shape family and community life today.</p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* Story 5 */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            5. The Intertribal Agriculture Council Launches Food Sovereignty Initiative
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The Intertribal Agriculture Council (IAC) announced a major new initiative this month aimed at expanding food sovereignty across Indian Country. The program, funded by a combination of federal grants and private foundation support, will provide technical assistance and funding to tribal nations seeking to develop local food systems.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The initiative comes at a critical time. Many Native communities live in "food deserts" where access to fresh, healthy food is severely limited. The Navajo Nation, for example, has only 13 grocery stores for a population of 170,000 spread across 27,000 square miles. The pandemic dramatically highlighted these food access disparities.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The IAC's initiative will support tribal farms, ranches, and food processing facilities, with a focus on traditional foods and sustainable agricultural practices, including a youth component training the next generation of Native farmers.
          </p>
          <div className="mb-8 rounded-2xl border border-earth/10 bg-cream p-5">
            <p className="text-base font-bold text-earth">Why it matters:</p>
            <p className="text-base leading-relaxed text-earth-light/70">Food sovereignty is one of the most concrete expressions of tribal sovereignty. When a nation can feed itself, it is less dependent on federal programs and external supply chains. It also means communities can reconnect with traditional foods central to cultural identity and spiritual practice.</p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* Closing */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Stories That Deserve More
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            These five stories represent just a fraction of the news emerging from Indian Country every month. They are stories of resilience, innovation, and the ongoing work of nation-building — and they deserve to be part of the national conversation.
          </p>

          <div className="mb-10 rounded-2xl border border-earth/10 bg-cream-dark p-8 text-center">
            <p className="text-sm italic text-earth-light/60">
              The Indigenous Beacon is committed to covering these stories and the many others that mainstream media overlooks.
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
                <li><a href="/#join" className="transition-colors hover:text-ochre-light">Membership</a></li>
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