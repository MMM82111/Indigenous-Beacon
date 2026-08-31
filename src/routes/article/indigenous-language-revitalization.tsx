import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/article/indigenous-language-revitalization")({
  component: LanguageRevitalization,
  head: () => ({
    meta: [
      {
        title: "Speaking the Language Home: Indigenous Language Revitalization — The Indigenous Beacon",
      },
      {
        name: "description",
        content:
          "Across Indian Country, communities are reviving languages once forced into silence — through immersion schools, master-apprentice programs, and technology. A look at how, and why it matters.",
      },
      {
        name: "og:title",
        content: "Speaking the Language Home: Indigenous Language Revitalization",
      },
      {
        name: "og:description",
        content:
          "Across Indian Country, communities are reviving languages once forced into silence — and winning, one fluent speaker at a time.",
      },
    ],
  }),
});

function LanguageRevitalization() {
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
            Culture & Storytelling
          </span>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-earth sm:text-4xl md:text-5xl">
            Speaking the Language Home: Indigenous Language Revitalization in Action
          </h1>
          <p className="mb-6 text-lg font-medium italic text-earth-light/80">
            Across Indian Country, communities are reviving languages once forced into silence — and winning, one fluent speaker at a time.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-earth-light/60">
            <span>The Indigenous Beacon Editorial Team</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-08-27">August 27, 2026</time>
          </div>
        </div>
      </section>

      {/* ─────── Article Content ─────── */}
      <article className="section-padding">
        <div className="prose-custom mx-auto max-w-3xl">
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            A language is not simply a way of saying things. It is a way of <strong className="text-earth">seeing</strong> them. Embedded in every Indigenous language is a worldview — a way of understanding the land, kinship, time, and responsibility that has been refined over thousands of years. When a language falls silent, that entire way of seeing the world dims with it.
          </p>
          <p className="mb-8 text-lg font-semibold leading-relaxed text-earth">
            Across the United States, communities are refusing to let that happen.
          </p>
          <hr className="my-10 border-earth/10" />

          {/* How the Silence Happened */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            How the Silence Happened
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The crisis did not occur by accident. For more than a century, the United States pursued an explicit policy of erasing Indigenous languages. Beginning with the Carlisle Indian Industrial School in 1879 and continuing through the federal boarding school era, Native children were forcibly removed from their families and punished for speaking their own languages. The stated goal was captured in a phrase attributed to Carlisle's founder: <em>"Kill the Indian, save the man."</em>
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The damage was intergenerational. Children who were beaten or shamed for speaking their language often grew up refusing to teach it to their own children, hoping to spare them the same pain. A single policy of forced assimilation broke the chain of transmission in the space of a few generations — and that chain is exactly what revitalization seeks to repair.
          </p>
          <hr className="my-10 border-earth/10" />

          {/* The Scale */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Scale of the Loss
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Of the hundreds of Indigenous languages once spoken in what is now the United States, roughly 150 remain — and the vast majority are classified as endangered. Many now have only a handful of fluent speakers, most of them elders. When an elder passes without a younger speaker ready to take their place, a library of knowledge leaves with them.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The Cherokee Nation, one of the largest tribes in the country, has reported fewer than 2,000 fluent speakers — a fraction of its enrolled population. Others have far fewer. And some languages, long thought lost, are being brought back from written records alone.
          </p>
          <hr className="my-10 border-earth/10" />

          {/* What Revitalization Looks Like */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            What Revitalization Looks Like
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            There is no single model. Communities are drawing on every tool available, often combining several at once:
          </p>
          <div className="mb-8 space-y-6">
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-earth">Immersion Schools</h3>
              <p className="text-base leading-relaxed text-earth-light/80">
                Language-immersion schools teach core subjects entirely in the Indigenous language, so children learn it not as a memorized subject but as a living medium. These schools have proven among the most effective tools for raising new generations of fluent speakers.
              </p>
            </div>
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-earth">Master–Apprentice Programs</h3>
              <p className="text-base leading-relaxed text-earth-light/80">
                Modeled on the California-based Advocates for Indigenous California Language Survival, master–apprentice programs pair a fluent elder with a committed learner who spends hundreds of hours absorbing the language through everyday activity — cooking, walking, working — rather than classroom drills.
              </p>
            </div>
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-earth">Technology and Archives</h3>
              <p className="text-base leading-relaxed text-earth-light/80">
                Tribal nations are building online courses, dictionaries, and apps so that a language can reach learners far from the reservation — including urban and diaspora communities. Historical recordings and written documents, once locked in archives, are being digitized and returned to the communities they came from.
              </p>
            </div>
          </div>
          <hr className="my-10 border-earth/10" />

          {/* Stories of Revival */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Stories of Revival
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Some of the most striking successes have come from languages that were declared extinct or "sleeping." The Wampanoag community of Massachusetts revived <strong className="text-earth">Wôpanâak</strong> — a language with no living fluent speakers for more than a century — by reconstructing it from colonial-era documents, including a 1663 Bible translation. Linguist Jessie Little Doe Baird, a Mashpee Wampanoag woman who helped lead the effort and later received a MacArthur Fellowship, has described the work as restoring something taken by force: <span className="italic">"We are reclaiming what was always ours."</span>
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The Miami Tribe of Oklahoma has undertaken a similar revival of <strong className="text-earth">Myaamia</strong>, reconstructing the language from centuries of written records and documentation — a project led in part by Daryl Baldwin, a linguist and MacArthur Fellow who founded the Myaamia Center. The Cherokee Nation, meanwhile, has built an immersion school and an extensive suite of online courses and master–apprentice programs to rebuild its speaker base from the ground up.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            These efforts share a common thread: they are led by the communities themselves, not imposed from outside. Language revitalization, at its heart, is an act of self-determination.
          </p>
          <hr className="my-10 border-earth/10" />

          {/* The Challenge Ahead */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Challenge Ahead
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            For all the progress, the work is a race against time. The most fluent speakers are overwhelmingly elders, and the programs that could train new speakers are chronically underfunded. Intergenerational transmission — parents passing the language to their children at home — remains the hardest and most important goal, because it is the only way a language becomes self-sustaining.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            There are structural obstacles too. Decades of federal policy deliberately dismantled these languages, and the institutions built to replace them have not kept pace with the scale of the need. Many revitalization programs rely on a patchwork of grants and tribal funding rather than sustained federal investment.
          </p>
          <hr className="my-10 border-earth/10" />

          {/* The Bottom Line */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Bottom Line
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            Language revitalization is about far more than vocabulary. It is about restoring connection — to ancestors, to land, to a way of understanding the world that was nearly lost. Every new speaker is a victory against a policy that set out to erase them. And every community that takes its language back is making a profound statement: <strong className="text-earth">we are still here, and we are not going silent.</strong>
          </p>

          <div className="mb-10 rounded-2xl border border-earth/10 bg-cream-dark p-8">
            <h3 className="mb-3 text-sm font-semibold tracking-wider uppercase text-earth">
              Further Reading & Sources
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed text-earth-light/70">
              <li>· Wôpanâak Language Reclamation Project — the effort to restore the Wampanoag language</li>
              <li>· Myaamia Center (Miami Tribe of Oklahoma) — Myaamia language and cultural revitalization</li>
              <li>· Cherokee Nation Language Program — immersion school and online courses</li>
              <li>· Advocates for Indigenous California Language Survival — master–apprentice program model</li>
              <li>· National Indian Boarding School histories, including the Carlisle Indian Industrial School</li>
            </ul>
            <p className="mt-4 text-xs italic text-earth-light/50">
              This article is part of The Indigenous Beacon's Culture & Storytelling series.
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
