import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/articles")({
  component: ArticlesPage,
  head: () => ({
    meta: [
      { title: "Articles — The Indigenous Beacon" },
      {
        name: "description",
        content:
          "Browse articles from The Indigenous Beacon — Native-led journalism, cultural storytelling, and educational resources.",
      },
    ],
  }),
});

/* ─── Article Card ─── */

function ArticleCard({
  title,
  excerpt,
  category,
  author,
  date,
  slug,
  featured,
}: {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  slug: string;
  featured?: boolean;
}) {
  return (
    <article
          className={`group relative rounded-2xl border border-earth/10 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
            featured ? "sm:col-span-2 lg:col-span-2" : ""
          }`}
        >
      <div className="p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-ochre/10 px-3 py-0.5 text-xs font-semibold text-ochre">
            {category}
          </span>
          {featured && (
            <span className="rounded-full bg-turquoise/10 px-3 py-0.5 text-xs font-semibold text-turquoise">
              Featured
            </span>
          )}
        </div>
        <h2 className="mb-3 text-xl font-bold text-earth transition-colors group-hover:text-ochre sm:text-2xl">
          <Link to={slug} className="after:absolute after:inset-0">
            {title}
          </Link>
        </h2>
        <p className="mb-4 text-base leading-relaxed text-earth-light/70">
          {excerpt}
        </p>
        <div className="flex items-center gap-3 text-sm text-earth-light/50">
          <span>{author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={date}>{date}</time>
        </div>
      </div>
    </article>
  );
}

/* ─── Articles Page ─── */

function ArticlesPage() {
  const articles = [
    {
      slug: "/article/why-we-exist",
      title: "Why The Indigenous Beacon Exists",
      excerpt:
        "A Native-led platform for truth, told by those who live it. Our launch story about why Indigenous representation in media matters.",
      category: "Announcement",
      author: "The Indigenous Beacon Editorial Team",
      date: "July 15, 2026",
      featured: true,
    },
    {
      slug: "/article/what-does-it-mean-to-be-native-today",
      title: "What Does It Mean to Be Native Today?",
      excerpt:
        "An exploration of the complexity, diversity, and resilience of contemporary Native American identity — beyond the stereotypes.",
      category: "Culture & Identity",
      author: "The Indigenous Beacon Editorial Team",
      date: "July 16, 2026",
    },
    {
      slug: "/article/land-back-what-it-really-means",
      title: "Land Back: What It Really Means",
      excerpt:
        "A policy explainer on the movement to return land to Indigenous stewardship — what it is, what it isn't, and where it's winning.",
      category: "Policy Explainer",
      author: "The Indigenous Beacon Editorial Team",
      date: "July 16, 2026",
    },
    {
      slug: "/article/meet-the-makers-sarah-ortegon",
      title: "Meet the Makers: Sarah Ortegon",
      excerpt:
        "The Diné (Navajo) artist is carrying a centuries-old weaving tradition into the 21st century, one thread at a time.",
      category: "Culture & Storytelling",
      author: "The Indigenous Beacon Editorial Team",
      date: "July 16, 2026",
    },
    {
      slug: "/article/5-stories-media-missed",
      title: "5 Stories Mainstream Media Missed This Month",
      excerpt:
        "A roundup of under-covered Native news that deserves your attention — from land returns to language revitalization.",
      category: "Reporting & News",
      author: "The Indigenous Beacon Editorial Team",
      date: "July 16, 2026",
    },
    {
      slug: "/article/teaching-native-history-beyond-november",
      title: "Teaching Native History Beyond November",
      excerpt:
        "How educators can integrate Indigenous perspectives into the classroom year-round — a practical guide for K-12 and beyond.",
      category: "Education & Curriculum",
      author: "The Indigenous Beacon Editorial Team",
      date: "July 16, 2026",
    },
    {
      slug: "/article/data-centers-tribal-lands",
      title: "The Cloud's New Frontier: Data Centers and Tribal Lands",
      excerpt:
        "As tech giants race to build data centers across the American West, Native American tribes face a complex new challenge — and an unexpected opportunity.",
      category: "Reporting & News",
      author: "The Indigenous Beacon Editorial Team",
      date: "July 16, 2026",
    },
    {
      slug: "/article/tribal-broadband-access",
      title: "The Last Mile: How Native Nations Are Building Their Way Out of the Digital Divide",
      excerpt:
        "On tribal lands across the United States, a quiet infrastructure revolution is underway — one fiber optic strand at a time.",
      category: "Reporting & News",
      author: "The Indigenous Beacon Editorial Team",
      date: "July 2026",
    },
    {
      slug: "/article/native-representation-in-tech",
      title: "Coded Invisibility: Native Americans in Tech and the Fight for Representation",
      excerpt:
        "Native people make up less than 1% of the tech workforce. A growing movement is trying to change that — and reshape the future of technology itself.",
      category: "Reporting & News",
      author: "The Indigenous Beacon Editorial Team",
      date: "July 2026",
    },
    {
      slug: "/article/indigenous-language-revitalization",
      title: "Speaking the Language Home: Indigenous Language Revitalization in Action",
      excerpt:
        "Across Indian Country, communities are reviving languages once forced into silence — through immersion schools, master–apprentice programs, and technology.",
      category: "Culture & Storytelling",
      author: "The Indigenous Beacon Editorial Team",
      date: "August 27, 2026",
    },
  ];

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
              className="text-sm font-medium text-ochre transition-colors"
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

      {/* ─────── Hero ─────── */}
      <section className="relative flex min-h-[40vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center sm:px-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-ochre/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-turquoise/5 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-ochre/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-ochre">
            Articles
          </span>
          <h1 className="section-heading mb-6 text-earth">
            Stories that matter
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-earth-light/70">
            Original journalism, cultural storytelling, and educational content
            that centers Native voices and perspectives.
          </p>
        </div>
      </section>

      {/* ─────── Articles Grid ─────── */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-6xl">
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* ─────── Write for Us CTA ─────── */}
      <section className="section-padding bg-cream-dark">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading mb-6 text-earth">
            Want to contribute?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-earth-light/70">
            We're always looking for Native writers, journalists, educators, and
            storytellers to contribute to The Indigenous Beacon.
          </p>
          <Link
            to="/write-for-us"
            className="inline-flex items-center gap-2 rounded-full bg-earth px-8 py-3.5 font-medium text-white shadow-lg transition-all hover:bg-earth-light hover:shadow-xl"
          >
            View Contributor Guidelines
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

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