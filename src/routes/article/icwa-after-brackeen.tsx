import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/article/icwa-after-brackeen")({
  component: IcwaAfterBrackeen,
  head: () => ({
    meta: [
      {
        title: "ICWA After Brackeen: What the Court Settled — and What It Left Open — The Indigenous Beacon",
      },
      {
        name: "description",
        content:
          "The Indian Child Welfare Act survived the Supreme Court in 2023. Here is what the law actually requires of state agencies, what the Court decided, and which questions it never answered.",
      },
      {
        name: "og:title",
        content: "ICWA After Brackeen: What the Court Settled — and What It Left Open",
      },
      {
        name: "og:description",
        content:
          "What the Indian Child Welfare Act requires, what Haaland v. Brackeen decided, and the questions the Court left open.",
      },
      { name: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://indigenousbeacon.com/article/icwa-after-brackeen" }],
  }),
});

function IcwaAfterBrackeen() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"NewsArticle\", \"headline\": \"ICWA After Brackeen: What the Court Settled \u2014 and What It Left Open\", \"description\": \"The Indian Child Welfare Act survived the Supreme Court in 2023. Here is what the law actually requires of state agencies, what the Court decided, and which questions it never answered.\", \"datePublished\": \"2026-11-09\", \"dateModified\": \"2026-11-09\", \"author\": {\"@type\": \"Organization\", \"name\": \"The Indigenous Beacon\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"The Indigenous Beacon\", \"url\": \"https://indigenousbeacon.com\"}, \"mainEntityOfPage\": {\"@type\": \"WebPage\", \"@id\": \"https://indigenousbeacon.com/article/icwa-after-brackeen\"}, \"url\": \"https://indigenousbeacon.com/article/icwa-after-brackeen\"}" }}
      />
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
            Law &amp; Sovereignty
          </span>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-earth sm:text-4xl md:text-5xl">
            ICWA After Brackeen: What the Court Settled — and What It Left Open
          </h1>
          <p className="mb-6 text-lg font-medium italic text-earth-light/80">
            The Indian Child Welfare Act survived the Supreme Court in 2023. Here is what the law actually requires of state agencies — and which questions the Court never answered.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-earth-light/60">
            <span>The Indigenous Beacon Editorial Team</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-11-09">November 9, 2026</time>
          </div>
        </div>
      </section>

      {/* ─────── Article Content ─────── */}
      <article className="section-padding">
        <div className="prose-custom mx-auto max-w-3xl">
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Few federal laws are as widely invoked and as widely misunderstood as the Indian Child Welfare Act. Passed in 1978, ICWA governs how state courts handle custody proceedings involving Native children. It is not a race-based preference program, and it is not a blanket rule that Native children must be placed with Native families. It is a set of procedural and substantive protections built on a legal relationship between sovereign nations and the United States.
          </p>
          <p className="mb-8 text-lg font-semibold leading-relaxed text-earth">
            In 2023 the Supreme Court upheld it. What that decision did and did not settle is the part most people never hear.
          </p>
          <hr className="my-10 border-earth/10" />

          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Removals That Made ICWA
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            ICWA was a response to a documented crisis, not a theoretical one. According to the National Indian Child Welfare Association, Native children were being removed from their families and communities at rates of <strong className="text-earth">25% to 35%</strong> in the decades before the law passed. Of those removed, roughly <strong className="text-earth">85% were placed outside their families</strong> — even when relatives or Tribal members were available to care for them.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            That pattern was not an accident of poverty or neglect casework. State and private agencies routinely removed Native children on grounds that would not have justified removal for non-Native families, and routinely declined to place them with relatives who were willing and able to take them in. ICWA was Congress’s answer to that record.
          </p>
          <hr className="my-10 border-earth/10" />

          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Who the Law Covers
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            ICWA applies to an “Indian child,” which federal law defines narrowly: a person who is unmarried, under 18, and either a member of a federally recognized Tribe or eligible for membership in one and the biological child of a Tribal member (25 U.S.C. § 1903).
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            That definition matters. Under federal law, <strong className="text-earth">each Tribal nation determines its own membership requirements</strong>, and only the Tribe can determine whether a child is a member or eligible. The protections rest on a child’s political status as a member of a sovereign nation — not on a racial classification. That distinction is the legal foundation the whole statute stands on, and it is the ground the 2023 litigation attacked.
          </p>
          <hr className="my-10 border-earth/10" />

          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            What the Law Actually Requires
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            In a case where ICWA applies, state and private agencies carry obligations that go beyond ordinary child welfare practice:
          </p>
          <ul className="mb-4 space-y-3 text-lg leading-relaxed text-earth-light/80">
            <li>
              <strong className="text-earth">Active efforts.</strong> The agency must make proactive, thorough and timely efforts to prevent removal in the first place, and to reunite the family afterward — including culturally appropriate services. “Active efforts” is a higher bar than the “reasonable efforts” standard applied in other cases; referrals alone do not satisfy it.
            </li>
            <li>
              <strong className="text-earth">Notice.</strong> The child’s Tribe and the parents must be notified promptly of the state court proceeding.
            </li>
            <li>
              <strong className="text-earth">Placement preferences.</strong> When removal is necessary, the agency must identify a placement consistent with ICWA’s preferences, which prioritize relatives, then other members of the child’s Tribe, then other Native families.
            </li>
            <li>
              <strong className="text-earth">Tribal involvement.</strong> The Tribe, parents and extended family must be actively involved in case planning and decisions.
            </li>
          </ul>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            These obligations apply whether or not the Tribe chooses to participate in the case. A state cannot treat ICWA as optional because a Tribal government has not entered an appearance — the requirements are the state’s to meet.
          </p>
          <hr className="my-10 border-earth/10" />

          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            What the Law Does Not Do
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            ICWA does not apply to every case involving a Native family. It generally does not govern custody disputes between parents or family members, such as divorce proceedings. It does not apply to juvenile delinquency proceedings for acts that would be crimes if committed by an adult. And it does not apply to cases already under Tribal court jurisdiction, because those courts are not state courts applying state law.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            It also does not guarantee an outcome. ICWA sets a process and a set of preferences; it does not override a court’s obligation to protect a child from harm. Much of the practical fight over the law happens in the gap between those two things — in how thoroughly an agency documents its active efforts, how early it notifies a Tribe, and whether a judge holds it to the standard.
          </p>
          <hr className="my-10 border-earth/10" />

          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Brackeen: What the Court Decided
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The challenge that reached the Supreme Court was <em>Haaland v. Brackeen</em>, 599 U.S. 255 (2023), brought by the states of Texas, Louisiana and Indiana along with individual plaintiffs and consolidated with three related cases, including <em>Cherokee Nation v. Brackeen</em>. The plaintiffs argued that ICWA exceeded Congress’s authority and violated the Constitution’s guarantee of equal protection.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            On <strong className="text-earth">June 15, 2023</strong>, the Court ruled <strong className="text-earth">7–2</strong> to uphold the law. It rejected two of the constitutional challenges — the ones brought by Texas and by the private parties — and dismissed two others for lack of standing, according to NICWA’s account of the decision.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The practical effect was unambiguous: ICWA remains the law of the land, and states must follow it.
          </p>
          <hr className="my-10 border-earth/10" />

          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            What Brackeen Left Open
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The decision was a victory, but it was not a complete one — and reading it as the end of the fight would be a mistake.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Because the Court dismissed the equal protection challenge to ICWA’s placement preferences on standing grounds, it did not reach the merits of that question. A plaintiff with proper standing in a future case could bring the same argument again. That is not a prediction that the law will fall; it is simply what a standing-based dismissal leaves on the table.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            And the daily reality of the law is decided far from the Supreme Court. ICWA’s protections are only as strong as the compliance behind them — whether caseworkers document active efforts, whether Tribes are notified in time to intervene, whether judges enforce the placement preferences, and whether states fund the culturally specific services the law contemplates. A statute that is upheld in Washington can still be under-enforced in a county courthouse.
          </p>
          <hr className="my-10 border-earth/10" />

          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Why This Belongs in the Classroom
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            For educators, ICWA is one of the clearest cases available for teaching the difference between race and political status in federal Indian law — and for showing students that the removal of Native children is not a closed chapter of history but a live area of law with ongoing litigation and ongoing consequences.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            It is also a reminder of why the details matter. The headline from 2023 was that the Supreme Court saved ICWA. The work since is making sure that decision means something in an actual courtroom, for an actual family, on the day it counts.
          </p>

          <div className="mb-10 rounded-2xl border border-earth/10 bg-cream-dark p-8">
            <h3 className="mb-3 text-sm font-semibold tracking-wider uppercase text-earth">
              Sources
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed text-earth-light/70">
              <li>· National Indian Child Welfare Association, “What is ICWA?” — https://www.nicwa.org/what-is-icwa/</li>
              <li>· <em>Haaland v. Brackeen</em>, 599 U.S. 255 (2023) — https://en.wikipedia.org/wiki/Haaland_v._Brackeen</li>
              <li>· Indian Child Welfare Act of 1978, 25 U.S.C. § 1901 et seq. (definition of “Indian child” at § 1903)</li>
            </ul>
            <p className="mt-4 text-xs italic text-earth-light/50">
              This article is part of The Indigenous Beacon’s Law &amp; Sovereignty series. Where the effect of a ruling is a matter of legal interpretation rather than a holding of the Court, we say so.
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
                <li><a href="/#join" className="transition-colors hover:text-ochre-light">Support Us</a></li>
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
