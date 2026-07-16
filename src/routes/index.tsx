import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

/* ─── SVG Icon Components ─── */

function NewspaperIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9" />
      <path d="M10 7h6" />
      <path d="M10 11h6" />
      <path d="M10 15h4" />
      <path d="M6 7h.01" />
    </svg>
  );
}

function StorytellingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
      <polygon points="10 9 16 12 10 15 10 9" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
      aria-hidden="true"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8 text-ochre/40"
      aria-hidden="true"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

/* ─── Section Component ─── */

function ContentCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="group rounded-2xl border border-earth/10 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="mb-4 inline-flex rounded-xl bg-turquoise/10 p-3 text-turquoise">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-earth">{title}</h3>
      <p className="leading-relaxed text-earth-light/80">{description}</p>
    </article>
  );
}

/* ─── Membership Button ─── */

function MembershipButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-full bg-turquoise px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-turquoise-dark"
    >
      {label}
    </a>
  );
}

/* ─── Home Page Component ─── */

function Home() {
  return (
    <>
      {/* ─────── Navigation ─────── */}
      <header className="fixed top-0 z-50 w-full border-b border-earth/10 bg-cream/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <a
            href="/"
            className="font-serif text-xl font-bold tracking-tight text-earth"
          >
            <span className="text-ochre">✦</span> The Indigenous Beacon
          </a>
          <div className="hidden items-center gap-8 sm:flex">
            <a
              href="#mission"
              className="text-sm font-medium text-earth-light/70 transition-colors hover:text-earth"
            >
              Mission
            </a>
            <a
              href="#content"
              className="text-sm font-medium text-earth-light/70 transition-colors hover:text-earth"
            >
              What We Cover
            </a>
            <Link
              to="/articles"
              className="text-sm font-medium text-earth-light/70 transition-colors hover:text-earth"
            >
              Articles
            </Link>
            <Link
              to="/write-for-us"
              className="text-sm font-medium text-earth-light/70 transition-colors hover:text-earth"
            >
              Write for Us
            </Link>
            <a
              href="#join"
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
              <a href="#mission" className="rounded-lg px-3 py-2 text-sm font-medium text-earth-light/70 hover:bg-cream-dark hover:text-earth">Mission</a>
              <a href="#content" className="rounded-lg px-3 py-2 text-sm font-medium text-earth-light/70 hover:bg-cream-dark hover:text-earth">What We Cover</a>
              <Link to="/articles" className="rounded-lg px-3 py-2 text-sm font-medium text-earth-light/70 hover:bg-cream-dark hover:text-earth">Articles</Link>
              <Link to="/write-for-us" className="rounded-lg px-3 py-2 text-sm font-medium text-earth-light/70 hover:bg-cream-dark hover:text-earth">Write for Us</Link>
              <a href="#join" className="rounded-full bg-turquoise px-4 py-2 text-center text-sm font-medium text-white hover:bg-turquoise-dark">Join Us</a>
            </div>
          </details>
        </nav>
      </header>

      {/* ─────── Hero Section ─────── */}
      <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center sm:px-10">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-ochre/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-turquoise/5 blur-3xl" />
          <div className="absolute top-1/3 left-1/4 h-2 w-2 rounded-full bg-ochre/30" />
          <div className="absolute top-1/2 right-1/3 h-3 w-3 rounded-full bg-turquoise/20" />
          <div className="absolute bottom-1/3 right-1/4 h-1.5 w-1.5 rounded-full bg-crimson/20" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <span className="mb-6 inline-block rounded-full bg-ochre/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-ochre">
            Native-Led Media &amp; Education
          </span>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-earth">The Indigenous</span>
            <br />
            <span className="text-ochre">Beacon</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-earth-light/80 sm:text-xl">
            Amplifying Native American voices through original journalism,
            cultural storytelling, and educational resources — illuminating
            history, celebrating resilience, and shaping a more informed future.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-earth px-8 py-3.5 font-medium text-white shadow-lg transition-all hover:bg-earth-light hover:shadow-xl"
            >
              Support Our Mission
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#content"
              className="inline-flex items-center gap-2 rounded-full border border-earth/20 px-8 py-3.5 font-medium text-earth transition-all hover:bg-earth hover:text-white hover:border-earth"
            >
              Explore Our Work
            </a>
            <Link
              to="/article/why-we-exist"
              className="text-sm font-medium text-ochre underline underline-offset-4 transition-colors hover:text-ochre-dark"
            >
              Read Our Launch Story →
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg className="h-6 w-6 text-earth-light/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─────── Mission Section ─────── */}
      <section
        id="mission"
        className="section-padding relative overflow-hidden bg-earth"
      >
        {/* Decorative pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-0 right-0 h-64 w-64 border-r-2 border-t-2 border-ochre/30 rounded-tr-[100px]" />
          <div className="absolute bottom-0 left-0 h-64 w-64 border-b-2 border-l-2 border-turquoise/30 rounded-bl-[100px]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-ochre/20 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-ochre-light">
              Our Mission
            </span>
            <h2 className="section-heading mb-6 text-white">
              Truth, told by those who live it
            </h2>
            <p className="text-lg leading-relaxed text-cream-dark/80">
              For generations, Native American stories have been told by
              outsiders — filtered, distorted, or erased entirely. The Indigenous
              Beacon exists to change that. We are a Native-led platform
              dedicated to accurate, respectful, and powerful storytelling that
              centers Indigenous perspectives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ochre/20 text-ochre-light">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Amplify</h3>
              <p className="text-cream-dark/70">
                Center Native voices in conversations about history, culture, and
                the issues that matter today.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-turquoise/20 text-turquoise-light">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Educate</h3>
              <p className="text-cream-dark/70">
                Provide accurate, Indigenous-led curriculum materials for
                educators and lifelong learners.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-crimson/20 text-crimson-light">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.048 8.287 8.287 0 0 0 9 9.6a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Connect</h3>
              <p className="text-cream-dark/70">
                Build bridges between Indigenous communities and the broader
                public through genuine understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────── Content Pillars Section ─────── */}
      <section id="content" className="section-padding mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-turquoise/10 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-turquoise">
            What We Cover
          </span>
          <h2 className="section-heading mb-6 text-earth">
            Four pillars of Indigenous storytelling
          </h2>
          <p className="text-lg leading-relaxed text-earth-light/70">
            From breaking news and investigative reports to ancestral stories and
            classroom-ready resources — our content spans the full spectrum of
            Native experience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ContentCard
            icon={<NewspaperIcon />}
            title="Original Journalism"
            description="In-depth reporting on Native nations, sovereignty, environmental justice, policy, and contemporary issues that mainstream media often overlooks or misrepresents."
          />
          <ContentCard
            icon={<StorytellingIcon />}
            title="Cultural Storytelling"
            description="Personal narratives, oral histories, and feature pieces that celebrate the richness, diversity, and resilience of Native cultures across Turtle Island."
          />
          <ContentCard
            icon={<VideoIcon />}
            title="Documentary &amp; Video"
            description="Powerful visual storytelling — short films, interview series, and documentary features that bring Indigenous perspectives to life."
          />
          <ContentCard
            icon={<EducationIcon />}
            title="Educational Resources"
            description="Native-led curriculum packs, lesson plans, and classroom materials for K–12 and higher education, aligned with accurate Indigenous scholarship."
          />
        </div>
      </section>

      {/* ─────── Testimonial / Quote Section ─────── */}
      <section className="section-padding bg-cream-dark">
        <div className="mx-auto max-w-4xl text-center">
          <QuoteIcon />
          <blockquote className="mx-auto max-w-3xl">
            <p className="text-2xl font-serif italic leading-relaxed text-earth sm:text-3xl">
              When we tell our own stories, we reclaim our history. The Indigenous
              Beacon is a vessel for that truth — a light shining on the
              narratives that have been hidden for too long.
            </p>
          </blockquote>
          <div className="mt-8">
            <div className="mx-auto h-12 w-12 rounded-full bg-ochre/20 flex items-center justify-center text-ochre font-bold text-lg">
              TB
            </div>
            <p className="mt-4 font-semibold text-earth">— The Indigenous Beacon Editorial Team</p>
          </div>
        </div>
      </section>

      {/* ─────── Join / Membership CTA ─────── */}
      <section
        id="join"
        className="section-padding relative overflow-hidden"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-ochre/5 via-transparent to-turquoise/5" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-crimson/10 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-crimson">
            Get Involved
          </span>
          <h2 className="section-heading mb-6 text-earth">
            Join the Beacon community
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-earth-light/70">
            Be the first to know about new stories, educational resources, and
            events. Sign up to receive our newsletter and learn how you can
            support Indigenous-led media.
          </p>

          <form
            className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: Connect to email service when backend is ready
              const form = e.currentTarget;
              const input = form.querySelector("input") as HTMLInputElement;
              if (input.value) {
                alert("Thank you for signing up! We'll be in touch soon.");
                input.value = "";
              }
            }}
          >
            <label htmlFor="email-input" className="sr-only">
              Email address
            </label>
            <input
              id="email-input"
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-earth/20 bg-white px-6 py-3.5 text-earth placeholder:text-earth-light/40 focus:border-turquoise focus:outline-none focus:ring-2 focus:ring-turquoise/20"
            />
            <button
              type="submit"
              className="rounded-full bg-crimson px-8 py-3.5 font-medium text-white shadow-md transition-all hover:bg-crimson-light hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-sm text-earth-light/50">
            No spam. Unsubscribe anytime. We respect your inbox.
          </p>

          {/* Membership options */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-earth">Supporter</h3>
              <p className="mb-1 text-2xl font-bold text-turquoise">$5</p>
              <p className="mb-4 text-sm text-earth-light/60">per month</p>
              <ul className="mb-6 space-y-2 text-left text-sm text-earth-light/70">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-ochre">✦</span> Ad-free reading
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-ochre">✦</span> Monthly newsletter
                </li>
              </ul>
              <MembershipButton href="https://buy.stripe.com/7sYeVd3ms9t5esj9VJ3Nm00" label="Subscribe — $5/mo" />
            </div>

            <div className="rounded-2xl border-2 border-turquoise bg-white p-6 shadow-md relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-turquoise px-4 py-1 text-xs font-semibold text-white">
                Popular
              </span>
              <h3 className="mb-2 text-lg font-bold text-earth">Beacon</h3>
              <p className="mb-1 text-2xl font-bold text-turquoise">$15</p>
              <p className="mb-4 text-sm text-earth-light/60">per month</p>
              <ul className="mb-6 space-y-2 text-left text-sm text-earth-light/70">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-ochre">✦</span> Everything in Supporter
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-ochre">✦</span> Exclusive deep dives
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-ochre">✦</span> Live Q&amp;A access
                </li>
              </ul>
              <MembershipButton href="https://buy.stripe.com/28E28rcX220D3NF7NB3Nm01" label="Subscribe — $15/mo" />
            </div>

            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-bold text-earth">Elder</h3>
              <p className="mb-1 text-2xl font-bold text-turquoise">$30</p>
              <p className="mb-4 text-sm text-earth-light/60">per month</p>
              <ul className="mb-6 space-y-2 text-left text-sm text-earth-light/70">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-ochre">✦</span> Everything in Beacon
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-ochre">✦</span> Educational licensing
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-ochre">✦</span> Event invitations
                </li>
              </ul>
              <MembershipButton href="https://buy.stripe.com/cNicN58GM0Wz6ZRfg33Nm02" label="Subscribe — $30/mo" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────── Footer ─────── */}
      <footer className="border-t border-earth/10 bg-earth px-6 py-12 text-cream-dark/70 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="/" className="font-serif text-xl font-bold text-white">
                <span className="text-ochre-light">✦</span> The Indigenous Beacon
              </a>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream-dark/60">
                A Native-led digital media and education platform amplifying
                Indigenous voices through original journalism, storytelling, and
                educational resources.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-white">
                Explore
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#mission" className="transition-colors hover:text-ochre-light">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#content" className="transition-colors hover:text-ochre-light">
                    What We Cover
                  </a>
                </li>
                <li>
                  <a href="#join" className="transition-colors hover:text-ochre-light">
                    Membership
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-white">
                Connect
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="transition-colors hover:text-ochre-light">
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-ochre-light">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-ochre-light">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-cream-dark/40">
            &copy; {new Date().getFullYear()} The Indigenous Beacon. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}