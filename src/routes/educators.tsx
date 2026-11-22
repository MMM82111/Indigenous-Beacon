import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/educators")({
  component: Educators,
  head: () => ({
    meta: [
      { title: "For Educators — The Indigenous Beacon" },
      {
        name: "description",
        content:
          "Native-led articles, sourced to primary documents, for K–12 and college classrooms. Read what we publish today and tell us what your curriculum needs.",
      },
      { name: "og:title", content: "For Educators — The Indigenous Beacon" },
      {
        name: "og:description",
        content:
          "Native-led reporting and teaching material sourced to primary documents, for K–12 and college classrooms.",
      },
      { name: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://indigenousbeacon.com/educators" }],
  }),
});

/* ─── Use Card ─── */

function UseCard({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
      <span className="mb-3 inline-block self-start rounded-full bg-turquoise/10 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-turquoise">
        {status}
      </span>
      <h3 className="mb-2 text-lg font-bold text-earth">{title}</h3>
      <p className="text-sm leading-relaxed text-earth-light/85">{description}</p>
    </div>
  );
}

/* ─── Educators Page ─── */

function Educators() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

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
              className="text-sm font-medium text-earth-light/85 transition-colors hover:text-earth"
            >
              Home
            </Link>
            <Link
              to="/articles"
              className="text-sm font-medium text-earth-light/85 transition-colors hover:text-earth"
            >
              Articles
            </Link>
            <Link
              to="/educators"
              className="text-sm font-medium text-ochre-ink transition-colors"
            >
              For Educators
            </Link>
            <a
              href="/#join"
              className="rounded-full bg-turquoise px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-turquoise-dark"
            >
              Join Us
            </a>
          </div>
          <details className="sm:hidden">
            <summary className="list-none cursor-pointer p-1 text-earth-light hover:text-earth">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-4 top-full mt-2 flex w-48 flex-col gap-2 rounded-xl border border-earth/10 bg-white p-4 shadow-lg">
              <Link to="/" className="rounded-lg px-3 py-2 text-sm font-medium text-earth-light/85 hover:bg-cream-dark hover:text-earth">Home</Link>
              <Link to="/articles" className="rounded-lg px-3 py-2 text-sm font-medium text-earth-light/85 hover:bg-cream-dark hover:text-earth">Articles</Link>
              <Link to="/educators" className="rounded-lg px-3 py-2 text-sm font-medium text-ochre-ink hover:bg-cream-dark">For Educators</Link>
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
          <span className="mb-4 inline-block rounded-full bg-ochre/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-ochre-ink">
            For Educators
          </span>
          <h1 className="section-heading mb-6 text-earth">
            Native-led material for your classroom
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-earth-light/85">
            Every story we publish is written from a Native perspective and
            sourced to the primary record — court opinions, federal reports,
            tribal documents. This page is where teachers, librarians and
            curriculum leads can find it, and tell us what is still missing.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/articles"
              className="rounded-full bg-earth px-7 py-3 font-medium text-white transition-colors hover:bg-earth-light"
            >
              Browse the articles
            </Link>
            <a
              href="#educator-inquiry"
              className="rounded-full border border-earth/20 px-7 py-3 font-medium text-earth transition-colors hover:bg-cream-dark"
            >
              Request material
            </a>
          </div>
        </div>
      </section>

      {/* ─────── What exists today ─────── */}
      <section className="section-padding bg-cream-dark">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="section-heading mb-4 text-earth">What you can use today</h2>
            <p className="text-lg leading-relaxed text-earth-light/85">
              We would rather show you the work than describe it. Here is what is
              published now, and an honest account of what does not exist yet.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <UseCard
              status="Published"
              title="Sourced articles"
              description="Thirteen pieces to date, each naming its sources so a student can follow the trail back to the original document rather than to us."
            />
            <UseCard
              status="Published"
              title="Primary-document sourcing"
              description="Our ICWA piece cites the statute and Haaland v. Brackeen, 599 U.S. 255. Our boarding-school piece is built from the Interior Department's Federal Indian Boarding School Initiative, Volumes I and II."
            />
            <UseCard
              status="Not built yet"
              title="Lesson plans & discussion guides"
              description="Per-article guides with framing questions, vocabulary and primary sources, written to be handed to a class as-is. These do not exist yet. Tell us what would make one usable and we will build to that."
            />
            <UseCard
              status="Not built yet"
              title="Curriculum packs"
              description="Grouped units — ICWA and child welfare, land and sovereignty, language revitalization, media representation — assembled from published work with classroom use terms attached. Also not built yet."
            />
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-earth-light/85">
            We are not yet selling licences or classroom reprint rights. If you
            need them for the coming term, say so below and we will tell you
            honestly what we can and cannot provide.
          </p>
        </div>
      </section>

      {/* ─────── Who it's for ─────── */}
      <section className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-heading mb-8 text-earth">Who this is for</h2>
          <div className="grid gap-6 text-left sm:grid-cols-3">
            <div>
              <h3 className="mb-2 font-bold text-earth">K–12 teachers</h3>
              <p className="text-sm leading-relaxed text-earth-light/85">
                Social studies, history and English classrooms that need material
                accurate beyond November.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-bold text-earth">College faculty</h3>
              <p className="text-sm leading-relaxed text-earth-light/85">
                Courses in Native American studies, law, journalism and public
                policy looking for current, sourced reporting.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-bold text-earth">Libraries &amp; museums</h3>
              <p className="text-sm leading-relaxed text-earth-light/85">
                Public programming, reading lists and exhibits that want Native
                voices rather than commentary about them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────── Inquiry ─────── */}
      <section id="educator-inquiry" className="section-padding bg-cream-dark">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="section-heading mb-4 text-earth">Tell us what you need</h2>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-earth-light/85">
              What grade level, what topic, what format — and whether you need
              something for a specific date. We read every message.
            </p>
          </div>

          <div className="rounded-2xl border border-earth/10 bg-white p-8 shadow-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const subject = encodeURIComponent("Educator inquiry");
                const body = encodeURIComponent(
                  `${message}\n\n— ${name}${role ? `, ${role}` : ""}\nReply to: ${email}`,
                );
                window.location.href = `mailto:the-indigenous-beacon-ace6ceac@ctomail.io?subject=${subject}&body=${body}`;
                setSent(true);
              }}
              className="space-y-4 text-left"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="educator-name" className="mb-1 block text-sm font-medium text-earth">Name</label>
                  <input
                    id="educator-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-earth/20 bg-cream px-4 py-2.5 text-earth placeholder:text-earth-light/40 focus:border-turquoise focus:outline-none focus:ring-2 focus:ring-turquoise/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="educator-email" className="mb-1 block text-sm font-medium text-earth">Email</label>
                  <input
                    id="educator-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-earth/20 bg-cream px-4 py-2.5 text-earth placeholder:text-earth-light/40 focus:border-turquoise focus:outline-none focus:ring-2 focus:ring-turquoise/20"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="educator-role" className="mb-1 block text-sm font-medium text-earth">
                  School, district or institution <span className="font-normal text-earth-light/50">(optional)</span>
                </label>
                <input
                  id="educator-role"
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-xl border border-earth/20 bg-cream px-4 py-2.5 text-earth placeholder:text-earth-light/40 focus:border-turquoise focus:outline-none focus:ring-2 focus:ring-turquoise/20"
                  placeholder="e.g. 11th grade US history, or a university department"
                />
              </div>
              <div>
                <label htmlFor="educator-message" className="mb-1 block text-sm font-medium text-earth">What do you need?</label>
                <textarea
                  id="educator-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-earth/20 bg-cream px-4 py-2.5 text-earth placeholder:text-earth-light/40 focus:border-turquoise focus:outline-none focus:ring-2 focus:ring-turquoise/20"
                  placeholder="Topic, grade level, format, and any deadline you are working to..."
                />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-earth px-8 py-3 font-medium text-white shadow transition-colors hover:bg-earth-light hover:shadow-md">
                Open in your email app
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5" />
                </svg>
              </button>
              {sent && (
                <p className="text-sm text-earth-light/85">
                  Your email app should have opened with this message ready to
                  send — press send there and it reaches us. If nothing opened,
                  email{" "}
                  <a
                    className="font-medium text-turquoise underline underline-offset-2"
                    href="mailto:the-indigenous-beacon-ace6ceac@ctomail.io"
                  >
                    the-indigenous-beacon-ace6ceac@ctomail.io
                  </a>{" "}
                  directly.
                </p>
              )}
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
                <li><Link to="/articles" className="transition-colors hover:text-ochre-light">Articles</Link></li>
                <li><Link to="/educators" className="transition-colors hover:text-ochre-light">For Educators</Link></li>
                <li><a href="/#join" className="transition-colors hover:text-ochre-light">Support Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-white">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/rss.xml" className="transition-colors hover:text-ochre-light">RSS feed</a></li>
                <li><a href="/about" className="transition-colors hover:text-ochre-light">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-cream-dark/60">
            &copy; {new Date().getFullYear()} The Indigenous Beacon. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
