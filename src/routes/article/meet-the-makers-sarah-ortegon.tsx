import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/article/meet-the-makers-sarah-ortegon")({
  component: SarahOrtegonArticle,
  head: () => ({
    meta: [
      { title: "Meet the Makers: Sarah Ortegon — The Indigenous Beacon" },
      {
        name: "description",
        content:
          "The Diné (Navajo) artist is carrying a centuries-old weaving tradition into the 21st century, one thread at a time.",
      },
      { name: "og:title", content: "Meet the Makers: Sarah Ortegon" },
      {
        name: "og:description",
        content:
          "The Diné (Navajo) artist is carrying a centuries-old weaving tradition into the 21st century.",
      },
      { name: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/* ─── Article Page ─── */

function SarahOrtegonArticle() {
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
            Culture &amp; Storytelling
          </span>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-earth sm:text-4xl md:text-5xl">
            Meet the Makers: Sarah Ortegon
          </h1>
          <p className="mb-6 text-lg font-medium italic text-earth-light/80">
            The Diné (Navajo) artist is carrying a centuries-old weaving tradition into the 21st century, one thread at a time.
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
            This is the first installment of "Meet the Makers" — a weekly series profiling Native American artists, creators, and culture bearers who are shaping Indigenous futures through their work.
          </p>

          <hr className="my-10 border-earth/10" />

          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The first time Sarah Ortegon remembers watching her grandmother weave, she was five years old. Her family's home in Crownpoint, New Mexico, on the Navajo Nation, was filled with the rhythmic sound of the loom — <em>thump, thump, thump</em> — as her grandmother's hands moved with practiced precision, pulling colored yarn through the warp.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            "I didn't understand what she was doing at first," Ortegon recalls. "I just knew it was beautiful, and I wanted to be part of it."
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Twenty-five years later, Ortegon has become one of the most sought-after Diné weavers of her generation. Her work has been shown at the Heard Museum in Phoenix, the Museum of Indian Arts and Culture in Santa Fe, and the Smithsonian's National Museum of the American Indian in Washington, DC. Her tapestries — some of which take months to complete — sell for thousands of dollars and are collected by museums and private collectors around the world.
          </p>
          <p className="mb-8 text-lg font-semibold leading-relaxed text-earth">
            But for Ortegon, weaving is not about fame or money. It is about connection — to her ancestors, to her culture, and to the land that has sustained the Diné people for centuries.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* The Threads of Tradition */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Threads of Tradition
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Diné weaving is one of the oldest continuous textile traditions in North America. Navajo oral tradition says that the first loom was given to the people by Spider Woman, a holy figure who taught the Diné how to weave. The earliest known examples of Navajo weaving date to the 17th century, when the Diné began incorporating wool from Spanish sheep into their textiles.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The traditional Navajo loom is a simple but elegant device — two upright poles, a horizontal beam, and a continuous warp that creates both the front and back of the weaving. Unlike European looms, which allow the weaver to sit and work from the front, the Navajo loom requires the weaver to work from the back, reaching through the warp to create the design.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            "It's a meditation," Ortegon says. "You have to be patient. You have to be present. You can't rush it. Every thread is a prayer."
          </p>

          <hr className="my-10 border-earth/10" />

          {/* Finding Her Voice */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Finding Her Voice
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Ortegon learned the basics from her grandmother, but she did not immediately pursue weaving as a career. She studied fine arts at the Institute of American Indian Arts (IAIA) in Santa Fe, where she experimented with painting, sculpture, and printmaking before returning to the loom.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            "In art school, they wanted you to break rules and find your voice," she says. "I realized that my voice was already there — it was in the patterns my grandmother taught me. I just needed to learn how to speak with it."
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Ortegon's work is distinctive for its bold use of color and its incorporation of contemporary themes into traditional patterns. While she respects the classic Diné designs — the Storm Pattern, the Two Grey Hills, the Teec Nos Pos — she also pushes the boundaries, weaving images of Navajo code talkers, sacred mountains, and even abstract representations of data sovereignty and environmental justice.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            "My grandmother's generation wove for utility — rugs, blankets, saddle blankets," she explains. "My generation weaves for expression. We're telling the stories of our time using the language of our ancestors."
          </p>

          <hr className="my-10 border-earth/10" />

          {/* The Politics of Weaving */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Politics of Weaving
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Like many Native artists, Ortegon is acutely aware of the political dimensions of her work. Diné weaving has a complicated history: for decades, Navajo weavers were exploited by traders who paid them pennies for rugs that sold for hundreds of dollars in galleries. The "Indian rug" market was built on a system of extraction that mirrored the broader colonial relationship between Native peoples and non-Native settlers.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            "Every time I sell a piece, I think about the weavers who came before me who were not paid fairly for their work," Ortegon says. "I think about the traders who made fortunes while weavers struggled to feed their families. I am standing on their shoulders, and I have a responsibility to honor them."
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Ortegon works directly with collectors and galleries that she vets carefully, ensuring fair prices and proper attribution. She also teaches workshops at the Navajo Nation Museum and through IAIA's continuing education program, passing on the techniques her grandmother taught her.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            "There are so few of us left who know how to weave the old way," she says. "If I don't teach it, it will be lost. And that is not something I can allow to happen."
          </p>

          <hr className="my-10 border-earth/10" />

          {/* The Future of the Tradition */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Future of the Tradition
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The challenges facing Diné weaving are significant. The cost of high-quality wool has risen dramatically. The number of Navajo weavers has declined sharply — from an estimated 20,000 in the 1930s to fewer than 3,000 today. Young people, distracted by smartphones and social media, are often reluctant to take up a craft that requires months of practice to produce a single piece.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            But Ortegon sees signs of hope. A new generation of Diné artists is rediscovering weaving, often through Instagram and TikTok, where they share their work and connect with each other. Online platforms have also opened up new markets, allowing weavers to sell directly to customers without going through traders.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            "Social media has been a double-edged sword," Ortegon says. "It's distracting, yes. But it's also connecting us. I get messages from Diné teenagers who say, 'I want to learn to weave. Where do I start?' That never happened when I was growing up."
          </p>

          <hr className="my-10 border-earth/10" />

          {/* A Living Tradition */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            A Living Tradition
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            For Ortegon, weaving is not a relic of the past — it is a living, evolving tradition that is as relevant today as it was a hundred years ago. Her current project is a large tapestry that she calls "The Resilience Weave," which incorporates symbols of Diné survival — a Navajo hogan, a lightning bolt (representing the Holy People), a cornstalk (representing life), and a Wi-Fi signal (representing the future).
          </p>
          <p className="mb-8 text-lg font-semibold leading-relaxed text-earth">
            "Weaving is a metaphor for our people," she says. "We take individual threads — each one fragile, each one separate — and we weave them together into something strong and beautiful. That is what we have always done. That is what we will continue to do."
          </p>

          <div className="mb-10 rounded-2xl border border-earth/10 bg-cream-dark p-8 text-center">
            <p className="text-sm italic text-earth-light/60">
              Sarah Ortegon's work is currently on display at the Heard Museum in Phoenix, Arizona, as part of the exhibition "Contemporary Diné Weavers." Follow her on Instagram @sarahortegonweaves.
            </p>
            <p className="mt-3 text-sm italic text-earth-light/60">
              The Indigenous Beacon's "Meet the Makers" series is published weekly.
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