import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/article/what-does-it-mean-to-be-native-today")({
  component: NativeIdentityArticle,
  head: () => ({
    meta: [
      { title: "What Does It Mean to Be Native Today? — The Indigenous Beacon" },
      {
        name: "description",
        content:
          "An exploration of the complexity, diversity, and resilience of contemporary Native American identity — beyond the stereotypes.",
      },
      { name: "og:title", content: "What Does It Mean to Be Native Today?" },
      {
        name: "og:description",
        content:
          "An introduction to the complexity, diversity, and resilience of contemporary Native American identity.",
      },
      { name: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/* ─── Article Page ─── */

function NativeIdentityArticle() {
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
            Culture &amp; Identity
          </span>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-earth sm:text-4xl md:text-5xl">
            What Does It Mean to Be Native Today?
          </h1>
          <p className="mb-6 text-lg font-medium italic text-earth-light/80">
            An introduction to the complexity, diversity, and resilience of contemporary Native American identity.
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
          <p className="text-lg font-semibold italic leading-relaxed text-earth-light/80">
            This is the first in a four-part series exploring what it means to be Native American in the 21st century.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* Beyond the Stereotypes */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Beyond the Stereotypes
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            If you ask most Americans to picture a "Native American," they might describe someone from a 19th-century photograph — wearing feathers, living in a tipi, frozen in time. This image is so pervasive that non-Native people are often surprised to learn that 78% of Native Americans live outside of reservations, that we hold advanced degrees and run businesses, that we use smartphones and attend powwows and practice our religions in churches and longhouses alike.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The gap between perception and reality is not accidental. It is the result of centuries of erasure, romanticization, and misrepresentation — a narrative that has been controlled by outsiders for far too long.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            So what does it actually mean to be Native today?
          </p>

          <hr className="my-10 border-earth/10" />

          {/* 574 Nations */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            574 Nations, Countless Identities
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The first thing to understand is that there is no single "Native American experience." There are 574 federally recognized tribal nations in the United States, each with its own government, culture, language, and history. A citizen of the Navajo Nation living in the Four Corners region has a different relationship to sovereignty, land, and community than a member of the Mashpee Wampanoag Tribe in Massachusetts, or an Alaska Native from the Tlingit Nation in Southeast Alaska.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            We are not a monolith. We are hundreds of distinct peoples, united by a shared history of colonization and a shared commitment to survival and resurgence.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* Identity, Blood Quantum, and Belonging */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Identity, Blood Quantum, and Belonging
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            One of the most complex and personal questions for Native people today is: who is considered Native? Unlike racial or ethnic identities that are largely self-defined, Native identity is often tied to citizenship in a specific tribal nation. Each tribe sets its own citizenship criteria — some use blood quantum (requiring a minimum percentage of Native ancestry), others use lineal descent (tracing ancestry to a tribal roll), and some use a combination of both.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            This means that a person can be clearly Native in their community and culture — raised in ceremony, fluent in their language, active in tribal politics — but not meet another tribe's citizenship criteria. It also means that the federal government, through the Bureau of Indian Affairs, has historically played a gatekeeping role in determining who is "Indian enough."
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            For many Native people, identity is not a checkbox. It is a lived experience of relationship — to land, to community, to language, to ceremony, to ancestors. It is something you are born into and something you actively practice.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* The Urban Native Reality */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Urban Native Reality
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            More than two-thirds of Native Americans live in cities, not on reservations. This urban Native population is often invisible to the broader public — we are your neighbors, your coworkers, your classmates. But urban Natives face unique challenges: maintaining cultural connections away from tribal communities, accessing Indian Health Service benefits, and finding community in cities where Native populations are small and dispersed.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Yet urban Native communities are vibrant and resilient. Organizations like the American Indian Center in Chicago, the Native American Community Center in Minneapolis, and the United American Indian Involvement in Los Angeles provide cultural programming, healthcare, and community connection for tens of thousands of urban Natives.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* Language, Culture, and the Work of Revitalization */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Language, Culture, and the Work of Revitalization
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            When colonization began, there were an estimated 300+ distinct Indigenous languages spoken across what is now the United States. Today, fewer than 150 remain, and many are critically endangered, with only a handful of fluent elders remaining.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            But the story does not end there. Across Indian Country, language revitalization movements are growing. The Cherokee Nation operates one of the most successful language preservation programs in the country, with immersion schools, online courses, and a growing number of new fluent speakers. The Navajo Nation's Diné Language Teachers Association trains educators to teach Navajo in schools. The Wampanoag language, which had no living speakers in the 1990s, has been revived through decades of painstaking work with historical documents.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            To be Native today is to be part of a resurgence — a generation that is actively reclaiming what was taken, rebuilding what was broken, and ensuring that future generations will know their languages, their stories, and their ways.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* Sovereignty */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Sovereignty: The Foundation of Native Life
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Perhaps the most misunderstood aspect of Native identity is sovereignty. Tribal nations are not racial or ethnic groups — they are sovereign governments with their own laws, courts, police forces, and citizenship criteria. This government-to-government relationship with the United States is the foundation of federal Indian law and the basis for everything from tribal gaming to natural resource management to child welfare.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            To be Native today is to navigate a unique legal and political status that most Americans — and most politicians — do not understand. It is to live within a system that was designed to dissolve your government, terminate your treaty rights, and assimilate your people — and to assert your sovereignty anyway.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* Looking Forward */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Looking Forward
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The 21st century is witnessing an unprecedented Native renaissance. Native filmmakers are winning awards at Sundance. Native fashion designers are showing at New York Fashion Week. Native chefs are redefining American cuisine through Indigenous ingredients and techniques. Native activists are leading movements for environmental justice and police reform. Native voters are emerging as a powerful political force.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            To be Native today is to carry the weight of a painful history while actively building a future. It is to exist in two worlds — to be fluent in both your ancestral language and the language of federal Indian law, to honor your elders while making space for your youth, to remember the trauma of colonization while celebrating the joy of survival.
          </p>
          <p className="mb-8 text-lg font-semibold leading-relaxed text-earth">
            This is what it means to be Native today. And it is a story that is only beginning to be told.
          </p>

          <div className="mb-10 rounded-2xl border border-earth/10 bg-cream-dark p-8 text-center">
            <p className="text-sm italic text-earth-light/60">
              This is Part 1 of a four-part series. Next: "Native Identity in the Age of DNA Tests and Tribal Enrollment."
            </p>
            <p className="mt-3 text-sm italic text-earth-light/60">
              The Indigenous Beacon is a Native-led digital media and education platform.
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