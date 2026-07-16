import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — The Indigenous Beacon" },
      {
        name: "description",
        content:
          "Learn about The Indigenous Beacon — a Native-led digital media and education platform amplifying Indigenous voices through journalism, storytelling, and education.",
      },
    ],
  }),
});

/* ─── Team Member Card ─── */

function TeamCard({
  name,
  role,
  bio,
  initials,
}: {
  name: string;
  role: string;
  bio: string;
  initials: string;
}) {
  return (
    <article className="group rounded-2xl border border-earth/10 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-ochre/10 text-2xl font-bold text-ochre">
        {initials}
      </div>
      <h3 className="text-lg font-bold text-earth">{name}</h3>
      <p className="mb-3 text-sm font-medium text-turquoise">{role}</p>
      <p className="text-sm leading-relaxed text-earth-light/70">{bio}</p>
    </article>
  );
}

/* ─── Value Card ─── */

function ValueCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-earth/10 bg-white p-6 shadow-sm">
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-turquoise/10 text-turquoise">
        {icon}
      </div>
      <div>
        <h3 className="mb-1 font-bold text-earth">{title}</h3>
        <p className="text-sm leading-relaxed text-earth-light/70">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ─── About Page ─── */

function About() {
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
              className="text-sm font-medium text-ochre transition-colors"
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
              <Link to="/about" className="rounded-lg px-3 py-2 text-sm font-medium text-ochre hover:bg-cream-dark">About</Link>
              <a href="/#join" className="rounded-full bg-turquoise px-4 py-2 text-center text-sm font-medium text-white hover:bg-turquoise-dark">Join Us</a>
            </div>
          </details>
        </nav>
      </header>

      {/* ─────── Hero ─────── */}
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center sm:px-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-ochre/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-turquoise/5 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-ochre/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-ochre">
            About Us
          </span>
          <h1 className="section-heading mb-6 text-earth">
            Our story, our mission, our community
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-earth-light/70">
            The Indigenous Beacon was founded to fill a critical gap in media — a
            space where Native American stories are told by Native voices, with
            the depth, accuracy, and respect they deserve.
          </p>
        </div>
      </section>

      {/* ─────── Our Story ─────── */}
      <section className="section-padding bg-cream-dark">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-heading mb-8 text-earth">Our Story</h2>
          <div className="space-y-5 text-lg leading-relaxed text-earth-light/80">
            <p>
              The Indigenous Beacon was born from a simple but urgent realization:
              the stories of Native American communities have been told by
              outsiders for far too long. From history books to news headlines,
              Indigenous perspectives have been filtered, distorted, or erased
              entirely.
            </p>
            <p>
              Founded in 2026 by a collective of Native journalists, educators,
              and storytellers, The Indigenous Beacon is a platform built on the
              belief that the most authentic stories are those told by the people
              who live them. We are committed to accurate, respectful, and
              powerful storytelling that centers Indigenous voices and
              experiences.
            </p>
            <p>
              Our name — The Indigenous Beacon — reflects our purpose: to be a
              guiding light, illuminating the narratives that have been hidden,
              overlooked, or misrepresented. We shine a light on Native
              resilience, cultural richness, contemporary struggles, and the
              ongoing fight for sovereignty and justice.
            </p>
            <p>
              Today, we serve a growing community of readers, educators, and
              allies who understand that changing how stories are told is a
              critical step toward building a more just and informed society.
            </p>
          </div>
        </div>
      </section>

      {/* ─────── Mission & Values ─────── */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-heading mb-6 text-earth">
              Our Mission &amp; Values
            </h2>
            <p className="text-lg leading-relaxed text-earth-light/70">
              Everything we do is guided by our core principles — the values that
              shape our journalism, our storytelling, and our relationship with
              the communities we serve.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-4">
            <ValueCard
              title="Native-Led Storytelling"
              description="Indigenous voices must be at the center of Indigenous narratives. We prioritize Native writers, editors, photographers, and filmmakers in every story we tell."
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                </svg>
              }
            />
            <ValueCard
              title="Truth & Accuracy"
              description="We hold ourselves to the highest journalistic standards, fact-checking every story and consulting with cultural experts to ensure accuracy and cultural sensitivity."
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              }
            />
            <ValueCard
              title="Educational Impact"
              description="We create resources for K–12 and higher education that provide accurate, Indigenous-led perspectives on history, culture, and contemporary issues."
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                </svg>
              }
            />
            <ValueCard
              title="Community Accountability"
              description="We are accountable to the communities we cover, building relationships of trust and respect with Native nations, organizations, and individuals."
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              }
            />
            <ValueCard
              title="Resilience & Celebration"
              description="We honor the strength and resilience of Native communities while also celebrating the beauty, joy, and cultural richness that has endured for millennia."
              icon={
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.048 8.287 8.287 0 0 0 9 9.6a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* ─────── Our Team ─────── */}
      <section className="section-padding bg-cream-dark">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-heading mb-6 text-earth">Our Team</h2>
            <p className="text-lg leading-relaxed text-earth-light/70">
              The Indigenous Beacon is built by a dedicated team of Native
              journalists, educators, storytellers, and media professionals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TeamCard
              name="Maya Littlefeather"
              role="Editor-in-Chief"
              bio="An enrolled member of the Cherokee Nation with over 15 years of experience in Indigenous journalism and media advocacy."
              initials="ML"
            />
            <TeamCard
              name="Joseph Black Owl"
              role="Senior Reporter"
              bio="Award-winning investigative journalist covering Native sovereignty, environmental justice, and federal policy from the Oceti Sakowin."
              initials="JB"
            />
            <TeamCard
              name="Leilani Whitehorse"
              role="Education Director"
              bio="Former high school history teacher and curriculum developer, dedicated to bringing accurate Indigenous perspectives into classrooms."
              initials="LW"
            />
            <TeamCard
              name="Thomas Yellow Bird"
              role="Video Producer"
              bio="Filmmaker and documentarian whose work has been featured at Sundance and the imagineNATIVE Film Festival."
              initials="TY"
            />
            <TeamCard
              name="Sage Morningstar"
              role="Cultural Editor"
              bio="Storyteller and oral historian preserving and sharing traditional knowledge from the Diné (Navajo) Nation."
              initials="SM"
            />
            <TeamCard
              name="River Stonechild"
              role="Community Manager"
              bio="Building bridges between the platform and Indigenous communities, ensuring our work serves those we represent."
              initials="RS"
            />
          </div>
        </div>
      </section>

      {/* ─────── Contact ─────── */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading mb-6 text-earth">Get in Touch</h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-earth-light/70">
            Have a story idea, feedback, or want to collaborate? We'd love to
            hear from you. Reach out to our team using the information below.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-ochre/10 text-ochre">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="mb-1 font-bold text-earth">Email</h3>
              <p className="text-sm text-earth-light/70">hello@indigenousbeacon.org</p>
            </div>

            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-turquoise/10 text-turquoise">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <h3 className="mb-1 font-bold text-earth">Location</h3>
              <p className="text-sm text-earth-light/70">Turtle Island (North America)</p>
            </div>

            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="mb-1 font-bold text-earth">Social</h3>
              <p className="text-sm text-earth-light/70">@IndigenousBeacon</p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-earth/10 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-earth">Send us a message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for your message! We'll get back to you soon.");
              }}
              className="space-y-4 text-left"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-earth">Name</label>
                  <input id="contact-name" type="text" required className="w-full rounded-xl border border-earth/20 bg-cream px-4 py-2.5 text-earth placeholder:text-earth-light/40 focus:border-turquoise focus:outline-none focus:ring-2 focus:ring-turquoise/20" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-earth">Email</label>
                  <input id="contact-email" type="email" required className="w-full rounded-xl border border-earth/20 bg-cream px-4 py-2.5 text-earth placeholder:text-earth-light/40 focus:border-turquoise focus:outline-none focus:ring-2 focus:ring-turquoise/20" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-earth">Message</label>
                <textarea id="contact-message" required rows={4} className="w-full rounded-xl border border-earth/20 bg-cream px-4 py-2.5 text-earth placeholder:text-earth-light/40 focus:border-turquoise focus:outline-none focus:ring-2 focus:ring-turquoise/20" placeholder="Tell us about your story idea, collaboration, or feedback..." />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-earth px-8 py-3 font-medium text-white shadow transition-colors hover:bg-earth-light hover:shadow-md">
                Send Message
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5" />
                </svg>
              </button>
            </form>
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