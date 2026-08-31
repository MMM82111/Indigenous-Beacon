import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/article/native-food-sovereignty")({
  component: FoodSovereignty,
  head: () => ({
    meta: [
      {
        title: "The Three Sisters Return: Native Food Sovereignty — The Indigenous Beacon",
      },
      {
        name: "description",
        content:
          "From seed rematriation to community gardens, Native communities are rebuilding food systems that nourish both people and land — reclaiming the right to define their own foodways.",
      },
      {
        name: "og:title",
        content: "The Three Sisters Return: Native Food Sovereignty",
      },
      {
        name: "og:description",
        content:
          "From seed rematriation to community gardens, Native communities are rebuilding food systems that nourish both people and land.",
      },
    ],
  }),
});

function FoodSovereignty() {
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
            The Three Sisters Return: Native Food Sovereignty
          </h1>
          <p className="mb-6 text-lg font-medium italic text-earth-light/80">
            From seed rematriation to community gardens, Native communities are rebuilding food systems that nourish both people and land.
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
            For most people, food is fuel. For Native communities, it is something far deeper: food is <strong className="text-earth">culture, ceremony, kinship, and medicine</strong>. The act of growing, harvesting, preparing, and sharing traditional foods is inseparable from identity itself. That is why the movement known as food sovereignty is about much more than what ends up on a plate — it is about who gets to decide.
          </p>
          <p className="mb-8 text-lg font-semibold leading-relaxed text-earth">
            Across Indian Country, communities are taking that decision back.
          </p>
          <hr className="my-10 border-earth/10" />

          {/* How the Plate Was Disrupted */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            How the Plate Was Disrupted
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The disruption began with dispossession. As tribes were forcibly removed from ancestral lands and confined to reservations, they lost access to the hunting grounds, fishing sites, and farmlands that had sustained them for millennia. What followed was a deliberate effort to remake not only where Native people lived, but what they ate.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            For decades, federal food programs shipped commodity staples — flour, lard, canned meat, processed cheese — to reservations. These rations filled stomachs but severed the connection between people and their traditional foodways. The health consequences have been severe: Native communities today experience disproportionately high rates of diabetes, heart disease, and other diet-related illness, a legacy researchers now trace directly to the forced replacement of traditional diets.
          </p>
          <hr className="my-10 border-earth/10" />

          {/* What Food Sovereignty Means */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            What Food Sovereignty Means
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The term "food sovereignty" entered global use through La Vía Campesina, the international peasant movement, which defined it in the 1990s as the right of peoples to healthy, culturally appropriate food produced through ecologically sound and sustainable methods — and, crucially, <strong className="text-earth">the right to define their own food and agriculture systems</strong> rather than having them dictated by distant markets or governments.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            For Native communities, that definition lands with special force. Food sovereignty here is inseparable from land sovereignty and treaty rights. It is the right to fish in ancestral waters, to hunt on ancestral lands, to gather traditional plants, and to grow ancestral crops — rights affirmed in treaties that the United States has not always honored.
          </p>
          <hr className="my-10 border-earth/10" />

          {/* The Three Sisters */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Three Sisters
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            At the heart of many Indigenous food systems is a planting tradition known as the <strong className="text-earth">Three Sisters</strong>: corn, beans, and squash grown together in a single mound. It is an elegant example of traditional ecological knowledge — corn provides a stalk for beans to climb, beans fix nitrogen in the soil, and broad squash leaves shade the ground and hold moisture. Each plant supports the others, and together they produce a complete, complementary diet.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The Three Sisters are not just agronomy; they are a teaching. Many communities use the trio to pass down lessons about interdependence, reciprocity, and care for the land. Replanting them is, in itself, an act of cultural renewal.
          </p>
          <hr className="my-10 border-earth/10" />

          {/* Seed Rematriation */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Seed Rematriation
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Some of the most hopeful work underway is <strong className="text-earth">seed rematriation</strong> — the return of ancestral seeds to the Indigenous communities they came from. Over generations, countless Native seed varieties were collected into museums, universities, and seed banks, often without consent, and then drifted out of reach of the communities that bred them.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Today, Indigenous seed keepers are working to bring those varieties home — rebuilding living seed libraries, reviving varieties adapted to local climates over centuries, and re-establishing the relationships between communities and their crops. The word "rematriation" itself is intentional: where "repatriation" describes returning to a fatherland, rematriation describes returning seeds to the care of the earth and of the women and communities who have long been their stewards.
          </p>
          <hr className="my-10 border-earth/10" />

          {/* From Gardens to Policy */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            From Gardens to Policy
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The movement is growing at every scale. Community gardens and youth programs are putting traditional foods back into daily life and teaching the next generation how to grow them. Tribal nations are writing their own food codes and investing in local food infrastructure. Intertribal networks are sharing seeds, knowledge, and advocacy strategies across regions.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Underneath all of it is a simple premise: a community that controls its own food is a community that controls its own future. Food sovereignty is self-determination made tangible — something you can hold in your hand, plant in the ground, and serve to a child.
          </p>
          <hr className="my-10 border-earth/10" />

          {/* The Bottom Line */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Bottom Line
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            Food sovereignty is a quiet revolution being carried out one seed, one garden, and one harvest at a time. It is about restoring not just a diet but a relationship — to land, to ancestors, and to the knowledge that has kept communities alive for thousands of years. Every returned seed and every replanted mound is a refusal to let that knowledge end. <strong className="text-earth">The Three Sisters are coming home.</strong>
          </p>

          <div className="mb-10 rounded-2xl border border-earth/10 bg-cream-dark p-8">
            <h3 className="mb-3 text-sm font-semibold tracking-wider uppercase text-earth">
              Further Reading & Sources
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed text-earth-light/70">
              <li>· Native American Food Sovereignty Alliance — Indigenous food systems advocacy and education</li>
              <li>· Intertribal Agriculture Council — supporting Native producers and regenerative agriculture</li>
              <li>· White Earth Land Recovery Project — seed saving and food sovereignty in Anishinaabe country</li>
              <li>· Seed Rematriation / Sierra Seeds — returning ancestral seeds to Indigenous communities</li>
              <li>· First Nations Development Institute — research and reports on Native food systems</li>
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
