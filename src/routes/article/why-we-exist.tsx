import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/article/why-we-exist")({
  component: WhyWeExistArticle,
  head: () => ({
    meta: [
      { title: "Why The Indigenous Beacon Exists — The Indigenous Beacon" },
      {
        name: "description",
        content:
          "A Native-led platform for truth, told by those who live it. Read our launch story about why Indigenous representation in media matters.",
      },
      { name: "og:title", content: "Why The Indigenous Beacon Exists" },
      {
        name: "og:description",
        content:
          "A Native-led platform for truth, told by those who live it. Read our launch story.",
      },
      { name: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/* ─── Article Page ─── */

function WhyWeExistArticle() {
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
            Launch Article
          </span>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-earth sm:text-4xl md:text-5xl">
            Why The Indigenous Beacon Exists
          </h1>
          <p className="mb-6 text-lg font-medium italic text-earth-light/80">
            A Native-led platform for truth, told by those who live it.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-earth-light/60">
            <span>The Indigenous Beacon Editorial Team</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-07-15">July 15, 2026</time>
          </div>
        </div>
      </section>

      {/* ─────── Article Content ─────── */}
      <article className="section-padding">
        <div className="prose-custom mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-earth-light/80">
            There is a story that America has been telling about Native peoples for
            more than five hundred years. It is a story written by colonizers,
            missionaries, historians, and Hollywood screenwriters — a story of
            vanishing cultures, tragic victims, and noble savages frozen in time.
            It is a story that has been told <em>about</em> us, but rarely{" "}
            <em>by</em> us.
          </p>
          <p className="text-lg font-semibold leading-relaxed text-earth">
            The Indigenous Beacon exists to change that.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* The Stories That Go Untold */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Stories That Go Untold
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Every day, Native communities across Turtle Island are living stories
            that the mainstream media never covers. The Diné weaver reviving
            ancestral patterns with contemporary designs. The youth-led water
            protectors defending sacred sites. The tribal college student becoming
            the first in their family to earn a PhD. The elders teaching
            endangered languages to a new generation over Zoom.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            These are not stories of tragedy — they are stories of resilience,
            creativity, and thriving. Yet when Native Americans appear in national
            news, the narrative is often narrow and deficit-focused: poverty,
            addiction, Missing and Murdered Indigenous Women, boarding school
            trauma. These are real and urgent crises that deserve coverage. But
            they are not the <em>only</em> story.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The problem is not just <em>what</em> gets covered, but{" "}
            <em>who</em> does the covering. A 2021 report from the Indigenous
            Journalists Association (formerly NAJA) found that fewer than 1% of
            newsroom employees in the United States are Native American. This
            means the vast majority of stories about Native communities are
            filtered through non-Native perspectives — well-intentioned but
            lacking the context, relationships, and cultural understanding that
            only lived experience can provide.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The result is a media landscape that consistently misrepresents,
            oversimplifies, or simply ignores the 574 federally recognized tribal
            nations and millions of Indigenous people living in the United States
            today.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* A Different Kind of Platform */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            A Different Kind of Platform
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The Indigenous Beacon is built on a simple premise:{" "}
            <strong className="text-earth">
              Native people should tell Native stories.
            </strong>
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            We are a digital media and education platform rooted in Indigenous
            perspectives. Our journalism covers sovereignty, policy,
            environmental justice, and the issues that shape contemporary Native
            life. Our storytelling celebrates the artists, language keepers,
            chefs, filmmakers, and innovators carrying traditions forward. Our
            educational resources give teachers and students access to accurate,
            Native-authored curriculum materials that too often remain absent
            from American classrooms.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            We are not here to replace existing Native media — organizations like
            Indian Country Today, Native News Online, and the Navajo Times have
            been doing vital work for years. We are here to <em>expand</em> the
            ecosystem: to reach new audiences, experiment with new formats, and
            build a bridge between journalism and education that currently does
            not exist.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* Four Pillars, One Mission */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Four Pillars, One Mission
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Our content is organized around four interconnected pillars:
          </p>

          <div className="mb-8 space-y-6">
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-earth">
                Reporting &amp; News
              </h3>
              <p className="text-base leading-relaxed text-earth-light/70">
                Original journalism covering the issues that matter to Native
                communities, from Supreme Court decisions on tribal sovereignty
                to the fight for clean water on reservations. We report with
                rigor and context, always centering Native perspectives.
              </p>
            </div>
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-earth">
                Culture &amp; Storytelling
              </h3>
              <p className="text-base leading-relaxed text-earth-light/70">
                Deeply human stories about Native life today: the artists,
                musicians, language revitalizers, and everyday people who are
                shaping Indigenous futures. We believe joy and creativity are as
                newsworthy as struggle and resistance.
              </p>
            </div>
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-earth">
                Education &amp; Curriculum
              </h3>
              <p className="text-base leading-relaxed text-earth-light/70">
                Classroom-ready resources developed by Native educators, aligned
                with state and national standards. We are building the curriculum
                that we wish had been available when we were students.
              </p>
            </div>
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-earth">
                Community &amp; Dialogue
              </h3>
              <p className="text-base leading-relaxed text-earth-light/70">
                Live events, Q&amp;As, and spaces for conversation where Native
                voices lead and allies can learn how to show up meaningfully.
              </p>
            </div>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* What We Believe */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            What We Believe
          </h2>
          <div className="mb-6 space-y-4">
            <div className="flex gap-4 rounded-xl border border-earth/10 bg-cream p-5">
              <span className="mt-1 text-ochre" aria-hidden="true">✦</span>
              <p className="text-base leading-relaxed text-earth-light/80">
                <strong>We believe</strong> that storytelling is a form of
                sovereignty. When we control our own narratives, we reclaim our
                history and shape our future.
              </p>
            </div>
            <div className="flex gap-4 rounded-xl border border-earth/10 bg-cream p-5">
              <span className="mt-1 text-turquoise" aria-hidden="true">✦</span>
              <p className="text-base leading-relaxed text-earth-light/80">
                <strong>We believe</strong> that accurate representation matters
                — not just for Native people, but for everyone. A society that
                understands Indigenous history and contemporary life is better
                equipped to honor treaties, protect sacred lands, and build a
                more just future.
              </p>
            </div>
            <div className="flex gap-4 rounded-xl border border-earth/10 bg-cream p-5">
              <span className="mt-1 text-crimson" aria-hidden="true">✦</span>
              <p className="text-base leading-relaxed text-earth-light/80">
                <strong>We believe</strong> that education is the foundation of
                change. The reason most Americans know so little about Native
                peoples is not malice — it is absence. Absence from textbooks,
                from news coverage, from popular culture. We are here to fill
                that absence with truth.
              </p>
            </div>
            <div className="flex gap-4 rounded-xl border border-earth/10 bg-cream p-5">
              <span className="mt-1 text-sage" aria-hidden="true">✦</span>
              <p className="text-base leading-relaxed text-earth-light/80">
                <strong>We believe</strong> that Native communities face serious
                challenges <em>and</em> experience profound joy, creativity, and
                triumph. One does not cancel out the other.
              </p>
            </div>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* An Invitation */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            An Invitation
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            If you are reading this, you are part of what comes next. Whether
            you are Native, non-Native, a student, an educator, a journalist, or
            simply someone who wants to understand the full story of this land
            and its people — you are welcome here.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Subscribe to our newsletter. Share our stories. Bring our resources
            into your classroom. If you are able, become a member and support
            Indigenous-led media with your subscription.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            The Indigenous Beacon is a small light in a vast landscape of
            misinformation and omission. But lights have a way of gathering.
            Join us, and together we will illuminate the stories that have been
            hidden for too long.
          </p>

          <div className="mb-10 rounded-2xl border border-earth/10 bg-cream-dark p-8 text-center">
            <p className="mb-1 text-lg font-bold text-earth">
              — The Indigenous Beacon Editorial Team
            </p>
            <p className="text-sm italic text-earth-light/60">
              The Indigenous Beacon is a Native-led digital media and education
              platform. Our work is supported by members, educational licensing,
              and foundation grants.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/#join"
              className="inline-flex items-center gap-2 rounded-full bg-earth px-8 py-3.5 font-medium text-white shadow-lg transition-all hover:bg-earth-light hover:shadow-xl"
            >
              Support Our Mission
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-earth/20 px-8 py-3.5 font-medium text-earth transition-all hover:bg-earth hover:text-white"
            >
              Learn More About Us
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
                <li><Link to="/about" className="transition-colors hover:text-ochre-light">About</Link></li>
                <li><a href="/#join" className="transition-colors hover:text-ochre-light">Membership</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-white">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="transition-colors hover:text-ochre-light">Twitter / X</a></li>
                <li><a href="#" className="transition-colors hover:text-ochre-light">Instagram</a></li>
                <li><a href="#" className="transition-colors hover:text-ochre-light">Contact Us</a></li>
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