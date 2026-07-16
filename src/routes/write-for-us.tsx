import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/write-for-us")({
  component: WriteForUsPage,
  head: () => ({
    meta: [
      { title: "Write for Us — The Indigenous Beacon" },
      {
        name: "description",
        content:
          "Contributor guidelines for The Indigenous Beacon. We welcome pitches from Native writers, journalists, educators, and storytellers.",
      },
    ],
  }),
});

/* ─── Guideline Card ─── */

function GuidelineCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-4 inline-flex rounded-xl bg-turquoise/10 p-3 text-turquoise">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-earth">{title}</h3>
      <div className="space-y-2 text-base leading-relaxed text-earth-light/70">
        {children}
      </div>
    </div>
  );
}

/* ─── Write for Us Page ─── */

function WriteForUsPage() {
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
              className="text-sm font-medium text-earth-light/70 transition-colors hover:text-earth"
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
              <Link to="/articles" className="rounded-lg px-3 py-2 text-sm font-medium text-earth-light/70 hover:bg-cream-dark hover:text-earth">Articles</Link>
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
            Contribute
          </span>
          <h1 className="section-heading mb-6 text-earth">
            Write for The Indigenous Beacon
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-earth-light/70">
            We are actively seeking pitches from Native writers, journalists,
            educators, and storytellers who want to amplify Indigenous voices and
            perspectives.
          </p>
        </div>
      </section>

      {/* ─────── Who We're Looking For ─────── */}
      <section className="section-padding bg-cream-dark">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-heading mb-8 text-earth">
            Who We're Looking For
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-earth-light/80">
            <p>
              The Indigenous Beacon prioritizes voices from Native American,
              Alaska Native, and Indigenous communities. We welcome pitches from
              enrolled tribal members, First Nations and Métis writers, and
              Indigenous people from across Turtle Island and beyond.
            </p>
            <p>
              We are also open to pitches from non-Native writers who can
              demonstrate deep expertise, meaningful relationships with the
              communities they cover, and a commitment to Indigenous-led
              storytelling. In all cases, our editorial team — which is
              Native-led — makes the final decision on fit and framing.
            </p>
            <p>
              We especially encourage pitches from emerging writers, students,
              elders, and community members who have not traditionally seen
              themselves represented in mainstream media.
            </p>
          </div>
        </div>
      </section>

      {/* ─────── Editorial Focus Areas ─────── */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="section-heading mb-6 text-earth">
              Editorial Focus Areas
            </h2>
            <p className="text-lg leading-relaxed text-earth-light/70">
              We publish across four interconnected content pillars. Your pitch
              should align with one or more of these areas.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <GuidelineCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 7h6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 11h6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 15h4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h.01" />
                </svg>
              }
              title="Reporting &amp; News"
            >
              <p>Original journalism and analysis on:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tribal sovereignty and federal policy</li>
                <li>Environmental justice and land rights</li>
                <li>Supreme Court and legislative updates</li>
                <li>Economic development in Native nations</li>
                <li>Health, education, and social justice</li>
              </ul>
            </GuidelineCard>

            <GuidelineCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              }
              title="Culture &amp; Storytelling"
            >
              <p>Deeply human stories about Native life today:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Artists, musicians, filmmakers, and writers</li>
                <li>Language revitalization and cultural preservation</li>
                <li>Food, cooking, and traditional knowledge</li>
                <li>Personal essays and first-person narratives</li>
                <li>Profiles of community leaders and elders</li>
              </ul>
            </GuidelineCard>

            <GuidelineCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
                </svg>
              }
              title="Education &amp; Curriculum"
            >
              <p>Resources for educators and learners:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Lesson plans and teaching guides</li>
                <li>Book reviews and recommended reading lists</li>
                <li>Historical deep dives with classroom applications</li>
                <li>Interviews with Native educators and scholars</li>
                <li>Curriculum development and pedagogy</li>
              </ul>
            </GuidelineCard>

            <GuidelineCard
              icon={
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                  <polygon points="10 9 16 12 10 15 10 9" />
                </svg>
              }
              title="Video &amp; Multimedia"
            >
              <p>Visual storytelling and documentary content:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Short documentary films and video essays</li>
                <li>Photo essays and visual journalism</li>
                <li>Interview series and conversations</li>
                <li>Animation and explainer content</li>
                <li>Podcast episodes and audio storytelling</li>
              </ul>
            </GuidelineCard>
          </div>
        </div>
      </section>

      {/* ─────── Submission Guidelines ─────── */}
      <section className="section-padding bg-cream-dark">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-heading mb-8 text-earth">
            Submission Guidelines
          </h2>

          <div className="space-y-6">
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-3 text-xl font-bold text-earth">
                How to Pitch
              </h3>
              <div className="space-y-3 text-base leading-relaxed text-earth-light/70">
                <p>
                  Send a brief pitch (200–300 words) to{" "}
                  <strong className="text-earth">pitches@indigenousbeacon.org</strong>{" "}
                  with the following:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Your idea</strong> — What story do you want to tell?
                    Why now? Why does it matter to Native communities?
                  </li>
                  <li>
                    <strong>Your angle</strong> — How will your story center
                    Indigenous perspectives? What makes your approach unique?
                  </li>
                  <li>
                    <strong>Your background</strong> — A brief bio and your
                    connection to the story or community you're pitching.
                  </li>
                  <li>
                    <strong>Format</strong> — Are you proposing a written
                    article, photo essay, video, or multimedia piece?
                  </li>
                  <li>
                    <strong>Length</strong> — Preferred word count or runtime.
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-3 text-xl font-bold text-earth">
                Rates &amp; Compensation
              </h3>
              <div className="space-y-3 text-base leading-relaxed text-earth-light/70">
                <p>
                  We believe in paying writers fairly for their work. Our current
                  rates:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Written articles</strong> (800–2,500 words): $300–$800
                  </li>
                  <li>
                    <strong>Personal essays</strong> (500–1,500 words): $200–$500
                  </li>
                  <li>
                    <strong>Photo essays</strong> (10–20 images + captions): $400–$700
                  </li>
                  <li>
                    <strong>Video content</strong> (5–15 minutes): $500–$1,500
                  </li>
                  <li>
                    <strong>Lesson plans &amp; curriculum</strong>: $400–$1,000
                  </li>
                </ul>
                <p className="mt-3 text-sm italic">
                  Rates are negotiable for longer or more complex pieces. We
                  prioritize paying Native contributors and aim to respond to all
                  pitches within two weeks.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-3 text-xl font-bold text-earth">
                Editorial Process
              </h3>
              <div className="space-y-3 text-base leading-relaxed text-earth-light/70">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Pitch review</strong> — Our editorial team reviews
                    your pitch and responds within 2 weeks.
                  </li>
                  <li>
                    <strong>Assignment</strong> — If accepted, we'll discuss
                    scope, timeline, and compensation.
                  </li>
                  <li>
                    <strong>Drafting</strong> — You write the piece. We offer
                    editorial guidance and support throughout.
                  </li>
                  <li>
                    <strong>Cultural review</strong> — When relevant, pieces are
                    reviewed by cultural experts for accuracy and sensitivity.
                  </li>
                  <li>
                    <strong>Publication</strong> — Your work is published and
                    promoted across our platforms.
                  </li>
                </ol>
              </div>
            </div>

            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-3 text-xl font-bold text-earth">
                What We're Looking For
              </h3>
              <div className="space-y-3 text-base leading-relaxed text-earth-light/70">
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Originality</strong> — Stories that haven't been told
                    elsewhere, or fresh angles on under-covered topics.
                  </li>
                  <li>
                    <strong>Authenticity</strong> — Writing that reflects genuine
                    connection to the subject and community.
                  </li>
                  <li>
                    <strong>Rigor</strong> — Well-researched, fact-checked, and
                    sourced reporting and storytelling.
                  </li>
                  <li>
                    <strong>Accessibility</strong> — Writing that engages both
                    Native and non-Native audiences without sacrificing depth.
                  </li>
                  <li>
                    <strong>Joy and creativity</strong> — We love stories about
                    Native resilience, triumph, and cultural richness.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────── Final CTA ─────── */}
      <section className="section-padding text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="section-heading mb-6 text-earth">
            Ready to pitch?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-earth-light/70">
            Send your pitch to{" "}
            <strong className="text-earth">pitches@indigenousbeacon.org</strong>.
            We look forward to reading your work.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:pitches@indigenousbeacon.org"
              className="inline-flex items-center gap-2 rounded-full bg-earth px-8 py-3.5 font-medium text-white shadow-lg transition-all hover:bg-earth-light hover:shadow-xl"
            >
              Send a Pitch
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5" />
              </svg>
            </a>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 rounded-full border border-earth/20 px-8 py-3.5 font-medium text-earth transition-all hover:bg-earth hover:text-white"
            >
              Browse Published Articles
            </Link>
          </div>
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