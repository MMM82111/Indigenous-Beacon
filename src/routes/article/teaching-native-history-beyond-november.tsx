import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/article/teaching-native-history-beyond-november")({
  component: TeachingNativeHistoryArticle,
  head: () => ({
    meta: [
      { title: "Teaching Native History Beyond November — The Indigenous Beacon" },
      {
        name: "description",
        content:
          "How educators can integrate Indigenous perspectives into the classroom year-round — a practical guide for K-12 and beyond.",
      },
      { name: "og:title", content: "Teaching Native History Beyond November" },
      {
        name: "og:description",
        content:
          "How educators can integrate Indigenous perspectives into the classroom year-round.",
      },
      { name: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/* ─── Article Page ─── */

function TeachingNativeHistoryArticle() {
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
            Education &amp; Curriculum
          </span>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-earth sm:text-4xl md:text-5xl">
            Teaching Native History Beyond November
          </h1>
          <p className="mb-6 text-lg font-medium italic text-earth-light/80">
            How educators can integrate Indigenous perspectives into the classroom year-round.
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
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Every November, thousands of American classrooms pull out the same materials: a simplified version of the "First Thanksgiving," a generic "Native American Heritage Month" bulletin board, a reading list that often includes more stereotypes than accurate history. And every December, those materials go back into storage until next year.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            This pattern — the "November-only" approach to Native history — is one of the most persistent and damaging practices in American education. It reinforces the false idea that Native peoples are historical figures rather than contemporary communities. It reduces hundreds of distinct cultures to a handful of one-dimensional stereotypes. And it leaves students without the context they need to understand the world they live in — a world shaped by treaties, tribal sovereignty, and the ongoing presence of 574 federally recognized tribal nations.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* Why November-Only Fails */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Why the November-Only Model Fails
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The problem is not that Native American Heritage Month exists. The problem is that for many schools, it is the <em>only</em> time Native content appears in the curriculum.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            When Native history is taught as a single unit — often squeezed between Columbus and the Pilgrims — it creates several problems:
          </p>

          <div className="mb-8 space-y-4">
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-earth">It reinforces a "past tense" narrative.</h3>
              <p className="text-base leading-relaxed text-earth-light/70">Students learn that Native people existed before colonization, but they rarely learn about contemporary Native life. A 2019 study by the National Congress of American Indians found that 87% of state history standards do not mention Native history after 1900. This reinforces the false narrative that Native peoples have "vanished" or exist only in museums.</p>
            </div>
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-earth">It flattens diversity.</h3>
              <p className="text-base leading-relaxed text-earth-light/70">One November lesson cannot do justice to the diversity of 574 tribal nations. Students may learn about the Wampanoag in November and never encounter the Navajo, the Cherokee, the Lakota, or the dozens of other nations that shape contemporary Native America.</p>
            </div>
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-earth">It invites stereotypes.</h3>
              <p className="text-base leading-relaxed text-earth-light/70">When teachers lack training and resources, they often fall back on generic "Native American" activities — building tipis (which are specific to Plains tribes), making "feather headdresses" (which are specific to certain cultures and contexts), or coloring generic "Indian" pictures.</p>
            </div>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* A Year-Round Approach */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            A Year-Round Approach
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The solution is not to abandon November — it is to build a curriculum that weaves Native perspectives throughout the entire school year. Here are strategies for educators at every grade level:
          </p>

          <div className="mb-8 space-y-6">
            <div className="flex gap-4 rounded-xl border border-earth/10 bg-cream p-5">
              <span className="mt-1 text-ochre text-lg font-bold" aria-hidden="true">1</span>
              <div>
                <h3 className="mb-1 text-lg font-bold text-earth">Start with Sovereignty, Not Stereotypes</h3>
                <p className="text-base leading-relaxed text-earth-light/70">Before teaching any specific Native content, help students understand the foundational concept of tribal sovereignty. Native nations are not ethnic groups — they are sovereign governments with their own laws, courts, and citizens.</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-earth/10 bg-cream p-5">
              <span className="mt-1 text-turquoise text-lg font-bold" aria-hidden="true">2</span>
              <div>
                <h3 className="mb-1 text-lg font-bold text-earth">Map Local Indigenous Land</h3>
                <p className="text-base leading-relaxed text-earth-light/70">Every school in the United States sits on the ancestral lands of a specific tribal nation or nations. Begin the year by having students research which Indigenous peoples lived on the land where their school is built. Resources like Native-Land.ca offer free tools for this practice.</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-earth/10 bg-cream p-5">
              <span className="mt-1 text-crimson text-lg font-bold" aria-hidden="true">3</span>
              <div>
                <h3 className="mb-1 text-lg font-bold text-earth">Integrate Native Content Across Subjects</h3>
                <p className="text-base leading-relaxed text-earth-light/70">Native history and contemporary life belong in every subject. Include Native authors like Joy Harjo and Tommy Orange in English curricula. Teach traditional ecological knowledge in science. Study contemporary Native artists in art classes. Use tribal constitutions in civics.</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-earth/10 bg-cream p-5">
              <span className="mt-1 text-sage text-lg font-bold" aria-hidden="true">4</span>
              <div>
                <h3 className="mb-1 text-lg font-bold text-earth">Use Native-Led Resources</h3>
                <p className="text-base leading-relaxed text-earth-light/70">Organizations like the National Museum of the American Indian, IllumiNative, and the Indigenous Journalists Association offer free, accurate, Native-led resources. Use materials created by Native people for the most authentic perspectives.</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-earth/10 bg-cream p-5">
              <span className="mt-1 text-ochre text-lg font-bold" aria-hidden="true">5</span>
              <div>
                <h3 className="mb-1 text-lg font-bold text-earth">Teach Contemporary Native Life</h3>
                <p className="text-base leading-relaxed text-earth-light/70">Every unit on Native history should include a contemporary component. When teaching about the Trail of Tears, also teach about Cherokee language revitalization today. When teaching about the fur trade, also teach about modern tribal natural resource management.</p>
              </div>
            </div>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* Year-Round Calendar Table */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            A Year-Round Calendar
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-earth-light/80">
            Here is a simple framework for integrating Native content throughout the academic year:
          </p>

          <div className="mb-8 overflow-hidden rounded-2xl border border-earth/10 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-earth text-cream-dark">
                <tr>
                  <th className="px-4 py-3 font-semibold">Month</th>
                  <th className="px-4 py-3 font-semibold">Focus</th>
                  <th className="px-4 py-3 font-semibold">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-earth/10">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-earth">Aug/Sep</td>
                  <td className="px-4 py-3 text-earth-light/70">Local Indigenous land and peoples</td>
                  <td className="px-4 py-3 text-earth-light/70">Land acknowledgment research, local tribal history</td>
                </tr>
                <tr className="bg-cream-dark/50">
                  <td className="px-4 py-3 font-medium text-earth">October</td>
                  <td className="px-4 py-3 text-earth-light/70">Indigenous sovereignty and governance</td>
                  <td className="px-4 py-3 text-earth-light/70">Tribal constitutions, treaty rights, citizenship</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-earth">November</td>
                  <td className="px-4 py-3 text-earth-light/70">Accurate Thanksgiving history (with context)</td>
                  <td className="px-4 py-3 text-earth-light/70">Primary sources, Wampanoag perspectives, beyond the myth</td>
                </tr>
                <tr className="bg-cream-dark/50">
                  <td className="px-4 py-3 font-medium text-earth">December</td>
                  <td className="px-4 py-3 text-earth-light/70">Native winter celebrations</td>
                  <td className="px-4 py-3 text-earth-light/70">Winter solstice, cultural diversity across nations</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-earth">January</td>
                  <td className="px-4 py-3 text-earth-light/70">Native literature and storytelling</td>
                  <td className="px-4 py-3 text-earth-light/70">Contemporary Native authors, oral traditions</td>
                </tr>
                <tr className="bg-cream-dark/50">
                  <td className="px-4 py-3 font-medium text-earth">February</td>
                  <td className="px-4 py-3 text-earth-light/70">Native contributions to US history</td>
                  <td className="px-4 py-3 text-earth-light/70">Code talkers, Native military service, activism</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-earth">March</td>
                  <td className="px-4 py-3 text-earth-light/70">Women's History — Native women leaders</td>
                  <td className="px-4 py-3 text-earth-light/70">Wilma Mankiller, Winona LaDuke, Sharice Davids</td>
                </tr>
                <tr className="bg-cream-dark/50">
                  <td className="px-4 py-3 font-medium text-earth">April</td>
                  <td className="px-4 py-3 text-earth-light/70">Environmental justice and traditional knowledge</td>
                  <td className="px-4 py-3 text-earth-light/70">Indigenous stewardship, land back, water protectors</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-earth">May</td>
                  <td className="px-4 py-3 text-earth-light/70">Contemporary Native life and futures</td>
                  <td className="px-4 py-3 text-earth-light/70">Native artists, entrepreneurs, scientists, and youth</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* The Bottom Line */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Bottom Line
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            Teaching Native history beyond November is not about adding more content to an already crowded curriculum. It is about teaching the truth — and teaching it accurately, respectfully, and consistently. When students learn about Native peoples only in November, they learn that Native people are a footnote to American history. When they learn about Native peoples all year, they learn that Native people <em>are</em> American history — and American present, and American future.
          </p>

          <div className="mb-10 rounded-2xl border border-earth/10 bg-cream-dark p-8 text-center">
            <p className="text-sm italic text-earth-light/60">
              The Indigenous Beacon offers free and licensed curriculum resources for K-12 and higher education.
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