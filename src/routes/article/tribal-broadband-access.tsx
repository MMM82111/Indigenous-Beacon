import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/article/tribal-broadband-access")({
  component: TribalBroadbandArticle,
  head: () => ({
    meta: [
      { title: "The Last Mile: Tribal Broadband Access — The Indigenous Beacon" },
      {
        name: "description",
        content:
          "How Native nations are building their own broadband networks to bridge the digital divide, assert sovereignty, and connect their communities.",
      },
      { name: "og:title", content: "The Last Mile: How Native Nations Are Building Their Way Out of the Digital Divide" },
      {
        name: "og:description",
        content:
          "On tribal lands across the United States, a quiet infrastructure revolution is underway — one fiber optic strand at a time.",
      },
      { name: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/* ─── Article Page ─── */

function TribalBroadbandArticle() {
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
            Reporting &amp; News
          </span>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-earth sm:text-4xl md:text-5xl">
            The Last Mile: How Native Nations Are Building Their Way Out of the Digital Divide
          </h1>
          <p className="mb-6 text-lg font-medium italic text-earth-light/80">
            On tribal lands across the United States, a quiet infrastructure revolution is underway — one fiber optic strand at a time.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-earth-light/60">
            <span>The Indigenous Beacon Editorial Team</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-07">July 2026</time>
          </div>
        </div>
      </section>

      {/* ─────── Article Content ─────── */}
      <article className="section-padding">
        <div className="prose-custom mx-auto max-w-3xl">
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            When the COVID-19 pandemic shut down schools across the country in 2020, students in the Cherokee Nation faced a challenge that most of their peers did not: nearly a third of Cherokee households had no broadband internet access at all. For students in rural districts deep within the 7,000-square-mile reservation, remote learning was not an inconvenience — it was an impossibility.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            "We had kids sitting in school parking lots at night, using the Wi-Fi from the building to do their homework," recalls Cherokee Nation Principal Chief Chuck Hoskin Jr. "That's not acceptable in the 21st century."
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The Cherokee Nation's response was decisive. The tribe committed $30 million of its own funds to build a fiber-optic broadband network across the reservation, laying hundreds of miles of cable to connect homes, schools, and health clinics. The project, which broke ground in 2021 and is still expanding, has become a model for tribal broadband across Indian Country.
          </p>

          <div className="my-8 border-l-4 border-ochre bg-cream-dark py-4 pl-6 pr-4 italic text-earth-light/80">
            <p className="mb-2 text-base">"Connectivity is not a luxury. It is infrastructure — as essential as roads, water, and electricity."</p>
            <p className="text-sm font-medium not-italic text-earth-light/60">— Cherokee Nation Principal Chief Chuck Hoskin Jr.</p>
          </div>

          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            The Cherokee Nation is not alone. Across the United States, Native nations are taking broadband access into their own hands — building networks, securing spectrum rights, and asserting their sovereignty over the digital infrastructure that will define the 21st century.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* The Digital Divide in Indian Country */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Digital Divide in Indian Country
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The scale of the problem is staggering. According to the Federal Communications Commission, approximately 18% of Native Americans living on tribal lands lack access to broadband internet — defined as download speeds of at least 25 Mbps. But independent researchers argue the real number is much higher. The American Indian Policy Institute at Arizona State University found that only 52% of tribal households have "meaningful" broadband access — meaning they can afford it, have devices to use it, and possess the digital literacy skills to navigate it.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The consequences of this digital divide ripple through every aspect of life:
          </p>

          <div className="mb-8 space-y-6">
            <div>
              <p className="mb-1 text-base font-bold text-earth">Education.</p>
              <p className="text-base leading-relaxed text-earth-light/80">
                During the pandemic, Native students were disproportionately affected by school closures. On the Navajo Nation, which spans 27,000 square miles across Arizona, New Mexico, and Utah, an estimated 40% of students lacked internet access at home. The situation was even worse on the Hopi Reservation, where some families had to drive 45 minutes to reach a public Wi-Fi hotspot.
              </p>
            </div>
            <div>
              <p className="mb-1 text-base font-bold text-earth">Healthcare.</p>
              <p className="text-base leading-relaxed text-earth-light/80">
                Telemedicine has the potential to transform healthcare access in rural Native communities, where residents often travel hours to reach a hospital or clinic. But without broadband, telemedicine is a promise that cannot be fulfilled. The Indian Health Service, which serves 2.6 million Native Americans, has identified broadband access as a critical priority for improving health outcomes.
              </p>
            </div>
            <div>
              <p className="mb-1 text-base font-bold text-earth">Economic development.</p>
              <p className="text-base leading-relaxed text-earth-light/80">
                In an economy where job applications, business registration, and government services are increasingly online, lack of broadband is a direct barrier to economic opportunity. Tribal businesses cannot compete in e-commerce without reliable internet. Tribal members cannot access remote work opportunities. Tribal governments cannot deliver services efficiently.
              </p>
            </div>
            <div>
              <p className="mb-1 text-base font-bold text-earth">Cultural preservation.</p>
              <p className="text-base leading-relaxed text-earth-light/80">
                Tribes are using digital tools to archive oral histories, teach Indigenous languages, and connect dispersed community members. The Cherokee Nation's online language courses, for example, reach Cherokee citizens across the United States and around the world. But these efforts require bandwidth — and many tribal communities lack it.
              </p>
            </div>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* The Federal Response */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Federal Response: Historic Funding, Still Falling Short
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The federal government has recognized the tribal broadband crisis and responded with significant funding. The Tribal Broadband Connectivity Program (TBCP), administered by the National Telecommunications and Information Administration (NTIA), has allocated over $3 billion to tribal broadband projects since 2021. The USDA's ReConnect program has added another $1 billion. The FCC's E-Rate program has been expanded to support Wi-Fi on school buses and hotspots for students.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            But the funding, while historic, has not been enough. The NTIA received applications totaling more than $10 billion for the first round of TBCP funding — far exceeding the $3 billion available. Many tribes applied for funding to build networks that would cost tens of millions of dollars, only to receive partial funding or none at all.
          </p>

          <div className="mb-8 rounded-2xl border border-earth/10 bg-cream p-5">
            <p className="text-base leading-relaxed text-earth-light/70">
              "The demand far exceeds the supply," says a tribal broadband coordinator who worked on multiple grant applications. "We're grateful for the funding, but we need a permanent, predictable source of funding — not a one-time grant program."
            </p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* Building Sovereign Networks */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Building Sovereign Networks
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Faced with the limitations of federal programs, many tribes have chosen to build their own networks. The results are remarkable.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The <strong>Cherokee Nation's</strong> fiber network now passes more than 12,000 homes and businesses, with plans to reach every Cherokee citizen in the tribe's 14-county reservation area. The network is owned and operated by the tribe, which means profits stay in the community and are reinvested into infrastructure.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The <strong>Gila River Indian Community</strong> in Arizona built a fiber network that connects tribal government buildings, schools, and health clinics, and is now expanding to residential areas. The network has been critical for telemedicine, allowing community members to consult with specialists without traveling to Phoenix.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The <strong>Pueblo of Isleta</strong> in New Mexico has partnered with local internet service providers to bring fiber broadband to every home on the pueblo. The tribe negotiated a community benefits agreement that includes free or low-cost internet for low-income households.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            The <strong>Southern Ute Indian Tribe</strong> in Colorado has built one of the most advanced tribal broadband networks in the country, using a combination of fiber and fixed wireless technology to reach homes across the tribe's mountainous 1,100-square-mile reservation.
          </p>

          <div className="my-8 border-l-4 border-turquoise bg-cream-dark py-4 pl-6 pr-4 italic text-earth-light/80">
            <p className="mb-2 text-base">"We are not waiting for the federal government to solve this problem. We are solving it ourselves."</p>
            <p className="text-sm font-medium not-italic text-earth-light/60">— Tribal broadband director, Southern Ute Indian Tribe</p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* The Sovereignty Dimension */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Sovereignty Dimension
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Tribal broadband is not just an infrastructure issue — it is a sovereignty issue. When tribes own their own networks, they control the terms of access, the pricing, and the data. They are not subject to the whims of corporate internet service providers who have little incentive to serve remote, low-density areas.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The sovereignty dimension extends to spectrum rights. The FCC has designated certain spectrum bands for "priority access" by tribal nations, and some tribes have begun licensing their own spectrum to build wireless networks. The concept of "spectrum sovereignty" — the idea that tribes have inherent authority over the airwaves above their lands — is gaining traction in legal and policy circles.
          </p>

          <div className="mb-8 rounded-2xl border border-earth/10 bg-cream p-5">
            <p className="text-base leading-relaxed text-earth-light/70">
              "I think we're going to look back at this moment and realize that broadband was one of the most important sovereignty battles of the 21st century," says a tribal telecommunications attorney. "The tribes that control their own digital infrastructure are going to be the tribes that thrive."
            </p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* Challenges That Remain */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Challenges That Remain
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Despite the progress, significant barriers remain.
          </p>

          <div className="mb-8 space-y-6">
            <div>
              <p className="mb-1 text-base font-bold text-earth">Rights-of-way on trust lands.</p>
              <p className="text-base leading-relaxed text-earth-light/80">
                Building fiber infrastructure on tribal trust lands requires approval from the Bureau of Indian Affairs (BIA), a process that can take months or years. The BIA has faced criticism for slow permitting, and tribal leaders have called for reforms to streamline the process.
              </p>
            </div>
            <div>
              <p className="mb-1 text-base font-bold text-earth">Geographic and logistical barriers.</p>
              <p className="text-base leading-relaxed text-earth-light/80">
                Many reservations are in remote, mountainous, or desert areas where construction is difficult and expensive. Running fiber to a single home in a remote canyon can cost tens of thousands of dollars.
              </p>
            </div>
            <div>
              <p className="mb-1 text-base font-bold text-earth">Funding sustainability.</p>
              <p className="text-base leading-relaxed text-earth-light/80">
                Grant programs provide capital for construction, but they do not cover ongoing operational costs. Tribes must find ways to sustain their networks — through subscription fees, tribal government subsidies, or commercial partnerships — long after the grant money is spent.
              </p>
            </div>
            <div>
              <p className="mb-1 text-base font-bold text-earth">Digital literacy.</p>
              <p className="text-base leading-relaxed text-earth-light/80">
                Access to broadband is only part of the equation. Many tribal members, particularly elders, lack the digital literacy skills to use the internet effectively. Tribes are investing in training programs, but the need far exceeds current capacity.
              </p>
            </div>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* The Role of New Technologies */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Role of New Technologies
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            New technologies are changing the tribal broadband landscape. Fixed wireless internet — which uses radio signals to deliver broadband without fiber — can reach homes in remote areas more cheaply than running fiber. Starlink, SpaceX's satellite internet service, has been adopted by some tribal households, offering speeds that rival terrestrial broadband in areas where no other option exists.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            But these technologies are not panaceas. Fixed wireless requires line-of-sight to a tower, which can be blocked by mountains or trees. Starlink requires a clear view of the sky and costs $120 per month — more than many tribal households can afford. And satellite internet is not a substitute for the reliability and capacity of a fiber network.
          </p>

          <div className="my-8 border-l-4 border-ochre bg-cream-dark py-4 pl-6 pr-4 italic text-earth-light/80">
            <p className="mb-2 text-base">"Starlink is a stopgap, not a solution. It's better than nothing, but it's not going to close the digital divide."</p>
            <p className="text-sm font-medium not-italic text-earth-light/60">— Tribal broadband consultant</p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* What's Needed Next */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            What's Needed Next
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Tribal broadband advocates have a clear set of policy priorities:
          </p>

          <ol className="mb-8 space-y-4 text-base leading-relaxed text-earth-light/80">
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turquoise/10 text-sm font-bold text-turquoise">1</span>
              <span><strong>Permanent funding.</strong> The Tribal Broadband Connectivity Program should be made permanent, with predictable annual appropriations rather than one-time grants.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turquoise/10 text-sm font-bold text-turquoise">2</span>
              <span><strong>Rights-of-way reform.</strong> The BIA permitting process should be streamlined, with clear timelines and a single point of contact for tribal broadband projects.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turquoise/10 text-sm font-bold text-turquoise">3</span>
              <span><strong>Tribal spectrum priority.</strong> The FCC should prioritize tribal access to spectrum, recognizing tribal sovereignty over the airwaves above tribal lands.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turquoise/10 text-sm font-bold text-turquoise">4</span>
              <span><strong>Digital inclusion funding.</strong> Federal programs should fund not just infrastructure, but also devices, digital literacy training, and affordable internet access for low-income households.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turquoise/10 text-sm font-bold text-turquoise">5</span>
              <span><strong>Tribal broadband offices.</strong> Every tribe should have the resources to establish a broadband office with dedicated staff, technical expertise, and the capacity to manage complex infrastructure projects.</span>
            </li>
          </ol>

          <hr className="my-10 border-earth/10" />

          {/* The Bottom Line */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Bottom Line
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The digital divide in Indian Country is not a technology problem — it is a policy problem, a funding problem, and a sovereignty problem. And tribes are not waiting for the federal government to solve it.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            From the Cherokee Nation's fiber network in Oklahoma to the Southern Ute's wireless system in Colorado, Native nations are building the digital infrastructure of the 21st century. They are doing it with their own resources, their own expertise, and their own vision of what connectivity means for their communities.
          </p>
          <p className="mb-8 text-lg font-semibold leading-relaxed text-earth">
            The last mile of the tribal broadband journey is the hardest. But for the tribes that have chosen to build their own futures, it is a mile they are determined to travel.
          </p>

          <div className="mb-10 rounded-2xl border border-earth/10 bg-cream-dark p-8 text-center">
            <p className="text-sm italic text-earth-light/60">
              This article is part of The Indigenous Beacon's ongoing series on technology, sovereignty, and infrastructure in Indian Country. <a href="#" className="font-medium text-ochre underline underline-offset-2 hover:text-ochre-dark">Subscribe to our newsletter</a> for weekly reporting on Native issues.
            </p>
            <p className="mt-3 text-sm italic text-earth-light/60">
              The Indigenous Beacon is a Native-led digital media and education platform. Our work is supported by members and foundations. <a href="/#join" className="font-medium text-ochre underline underline-offset-2 hover:text-ochre-dark">Become a member</a> to support independent Native journalism.
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