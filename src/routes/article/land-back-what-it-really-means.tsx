import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/article/land-back-what-it-really-means")({
  component: LandBackArticle,
  head: () => ({
    meta: [
      { title: "Land Back: What It Really Means — The Indigenous Beacon" },
      {
        name: "description",
        content:
          "A policy explainer on the movement to return land to Indigenous stewardship — what it is, what it isn't, and where it's winning.",
      },
      { name: "og:title", content: "Land Back: What It Really Means" },
      {
        name: "og:description",
        content:
          "A policy explainer on the movement to return land to Indigenous stewardship.",
      },
      { name: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/* ─── Article Page ─── */

function LandBackArticle() {
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
            Policy Explainer
          </span>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-earth sm:text-4xl md:text-5xl">
            Land Back: What It Really Means
          </h1>
          <p className="mb-6 text-lg font-medium italic text-earth-light/80">
            A policy explainer on the movement to return land to Indigenous stewardship.
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
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            You may have seen the phrase on a protest sign, in a news headline, or scrawled across a water tower: <strong className="text-earth">Land Back</strong>. It is one of the most misunderstood and misrepresented movements in contemporary Native American activism. Critics call it a radical demand for the wholesale confiscation of private property. Supporters describe it as a necessary step toward healing centuries of dispossession.
          </p>
          <p className="mb-8 text-lg font-semibold leading-relaxed text-earth">
            The truth is more nuanced — and more interesting — than either caricature.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* What Land Back Is Not */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            What Land Back Is Not
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Let's start with what the Land Back movement is not. It is not a demand that every non-Native person in the United States pack up and leave. It is not a call for the government to seize suburban homes or farmland. It is not a proposal to return the entire continent to its pre-colonial state.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            These straw-man arguments are often used to dismiss the movement without engaging with its actual demands. In reality, the vast majority of Land Back initiatives are targeted, specific, and negotiated — not revolutionary seizures.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* What Land Back Actually Means */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            What Land Back Actually Means
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The Land Back movement is fundamentally about <strong className="text-earth">restoring Indigenous stewardship</strong> over lands that were taken through violence, fraud, or broken treaties. It operates on multiple levels:
          </p>

          <div className="mb-8 space-y-6">
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-earth">1. Public Lands Transfers</h3>
              <p className="text-base leading-relaxed text-earth-light/70">
                The most common form of Land Back involves the transfer of federal or state public lands to tribal ownership or co-management. These are lands that are already publicly owned — national forests, Bureau of Land Management parcels, state parks — not private property. The Biden administration's transfer of 465 acres of national forest land to the Pueblo of Jemez in New Mexico is a recent example. The land, which contains sacred sites and ancestral villages, was returned to Tribal ownership while remaining protected as open space.
              </p>
            </div>
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-earth">2. Co-Management Agreements</h3>
              <p className="text-base leading-relaxed text-earth-light/70">
                Some Land Back efforts focus on shared stewardship rather than outright ownership. In 2023, the Biden administration signed new co-management agreements with several tribal nations, giving them a formal role in managing national parks and public lands that contain culturally significant sites. The Bears Ears National Monument in Utah, co-managed by five tribal nations, is the most prominent example.
              </p>
            </div>
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-earth">3. Land Purchases and Donations</h3>
              <p className="text-base leading-relaxed text-earth-light/70">
                Private land trusts and conservation organizations have begun facilitating Land Back by purchasing land and transferring it to tribal nations. The Nature Conservancy has transferred thousands of acres to tribal stewardship. The Trust for Public Land has helped return sacred sites like the return of 1,200 acres of Sáttítla (Medicine Lake Highlands) to the Pit River Tribe in California.
              </p>
            </div>
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-earth">4. Repatriation of Specific Sites</h3>
              <p className="text-base leading-relaxed text-earth-light/70">
                Many Land Back campaigns focus on returning specific, culturally significant sites — burial grounds, sacred mountains, ceremonial sites — that are currently under non-Native ownership. The return of Mount Graham to the San Carlos Apache Tribe, or the return of the 130-acre "Pronghorn" site to the Confederated Tribes of the Colville Reservation, are examples of targeted site repatriation.
              </p>
            </div>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* The Legal Framework */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Legal Framework
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Land Back is not a legal novelty. It operates within existing legal frameworks:
          </p>

          <ul className="mb-8 space-y-3 text-lg leading-relaxed text-earth-light/80">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ochre" aria-hidden="true" />
              <span><strong className="text-earth">The Indian Reorganization Act (1934)</strong> allows the Secretary of the Interior to take land into trust for tribal nations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ochre" aria-hidden="true" />
              <span><strong className="text-earth">The Alaska Native Claims Settlement Act (1971)</strong> transferred 44 million acres to Alaska Native corporations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ochre" aria-hidden="true" />
              <span><strong className="text-earth">The Maine Indian Claims Settlement Act (1980)</strong> returned 300,000 acres to the Passamaquoddy and Penobscot nations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ochre" aria-hidden="true" />
              <span><strong className="text-earth">The Pueblo Lands Act</strong> and various court decisions have restored lands to Pueblo nations in the Southwest</span>
            </li>
          </ul>

          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            In total, the federal government has placed approximately 57 million acres into trust for tribal nations — a fraction of the 1.9 billion acres that Indigenous peoples controlled before colonization, but a significant and growing body of land that is being restored to tribal stewardship.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* Why Land Back Matters */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Why Land Back Matters
          </h2>

          <div className="mb-8 space-y-6">
            <div className="flex gap-4 rounded-xl border border-earth/10 bg-cream p-5">
              <span className="mt-1 text-ochre" aria-hidden="true">&loz;</span>
              <div>
                <h3 className="mb-1 text-lg font-bold text-earth">For Sovereignty</h3>
                <p className="text-base leading-relaxed text-earth-light/70">
                  Land is the physical foundation of tribal sovereignty. Without a land base, a nation cannot exercise jurisdiction, support its economy, or protect its cultural resources. Every acre returned to tribal ownership strengthens the practical reality of tribal self-governance.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-earth/10 bg-cream p-5">
              <span className="mt-1 text-turquoise" aria-hidden="true">&loz;</span>
              <div>
                <h3 className="mb-1 text-lg font-bold text-earth">For the Environment</h3>
                <p className="text-base leading-relaxed text-earth-light/70">
                  Research consistently shows that Indigenous-managed lands have higher biodiversity and lower rates of deforestation than adjacent non-Indigenous lands. A 2019 study in the journal <em>Nature</em> found that Indigenous territories in the Amazon — which are often held under insecure tenure — are as effective as protected areas at preventing deforestation. Returning land to Indigenous stewardship is one of the most effective conservation strategies available.
                </p>
              </div>
            </div>
            <div className="flex gap-4 rounded-xl border border-earth/10 bg-cream p-5">
              <span className="mt-1 text-crimson" aria-hidden="true">&loz;</span>
              <div>
                <h3 className="mb-1 text-lg font-bold text-earth">For Healing</h3>
                <p className="text-base leading-relaxed text-earth-light/70">
                  The theft of land is not just a historical injustice — it is an ongoing wound. The Dawes Act of 1887, which broke up collectively held tribal lands and allotted them to individual households, resulted in the loss of approximately 90 million acres of tribal land. For many Native people, the return of land is a necessary step toward healing that intergenerational trauma.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* Common Criticisms, Answered */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Common Criticisms, Answered
          </h2>

          <div className="mb-8 space-y-4">
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <p className="mb-2 text-base font-bold text-earth">&ldquo;Land Back means kicking people off their property.&rdquo;</p>
              <p className="text-base leading-relaxed text-earth-light/70">No. Land Back initiatives focus on public lands, not private property. No major Land Back organization advocates for the seizure of private homes or farms.</p>
            </div>
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <p className="mb-2 text-base font-bold text-earth">&ldquo;Tribes can't manage land as well as the government.&rdquo;</p>
              <p className="text-base leading-relaxed text-earth-light/70">The evidence suggests the opposite. Tribal nations have managed their lands sustainably for thousands of years. Modern tribal natural resource departments are staffed by trained professionals, and tribal co-management of federal lands has been shown to improve outcomes.</p>
            </div>
            <div className="rounded-2xl border border-earth/10 bg-white p-6 shadow-sm">
              <p className="mb-2 text-base font-bold text-earth">&ldquo;This is just about money — tribes want to develop the land.&rdquo;</p>
              <p className="text-base leading-relaxed text-earth-light/70">For many tribes, the goal is preservation, not development. The return of Bears Ears to tribal co-management was driven by a desire to protect the area from looting and development. When tribes do pursue economic development on returned lands, it is often for purposes that benefit the entire community — housing, healthcare, education.</p>
            </div>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* Where Land Back Is Winning */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Where Land Back Is Winning
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The movement is gaining momentum at every level of government:
          </p>

          <ul className="mb-8 space-y-3 text-lg leading-relaxed text-earth-light/80">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sage" aria-hidden="true" />
              <span><strong className="text-earth">Federal:</strong> The Biden administration has taken more land into trust for tribes than any administration in recent history, and has issued a memorandum on Indigenous co-management of federal lands.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sage" aria-hidden="true" />
              <span><strong className="text-earth">State:</strong> California has returned thousands of acres of state land to tribal nations, including the 2023 return of 1,200 acres of Bruce Beach to the Wiyot Tribe.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sage" aria-hidden="true" />
              <span><strong className="text-earth">Local:</strong> Cities and counties are returning land to tribal ownership, including the 2022 transfer of 40 acres in Evanston, Illinois to the Ho-Chunk Nation.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sage" aria-hidden="true" />
              <span><strong className="text-earth">Private:</strong> Land trusts, foundations, and individual landowners are increasingly donating or selling land at below-market rates to tribal nations.</span>
            </li>
          </ul>

          <hr className="my-10 border-earth/10" />

          {/* The Bottom Line */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Bottom Line
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            Land Back is not a fringe demand. It is a practical, legal, and increasingly mainstream movement to correct one of the longest-running injustices in American history. It is about returning land that should never have been taken — and in doing so, strengthening tribal sovereignty, protecting the environment, and beginning the long work of healing.
          </p>

          <div className="mb-10 rounded-2xl border border-earth/10 bg-cream-dark p-8 text-center">
            <p className="text-sm italic text-earth-light/60">
              This article is part of The Indigenous Beacon's policy explainer series.
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