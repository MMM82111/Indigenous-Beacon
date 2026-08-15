import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/article/data-centers-tribal-lands")({
  component: DataCentersArticle,
  head: () => ({
    meta: [
      { title: "The Cloud's New Frontier: Data Centers and Tribal Lands — The Indigenous Beacon" },
      {
        name: "description",
        content:
          "As tech giants race to build data centers across the American West, Native American tribes are facing a complex new challenge — and an unexpected opportunity.",
      },
      { name: "og:title", content: "The Cloud's New Frontier: Data Centers and Tribal Lands" },
      {
        name: "og:description",
        content:
          "How the AI data center boom is reshaping tribal lands — and what it means for sovereignty.",
      },
      { name: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/* ─── Article Page ─── */

function DataCentersArticle() {
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
            The Cloud's New Frontier: Data Centers and Tribal Lands
          </h1>
          <p className="mb-6 text-lg font-medium italic text-earth-light/80">
            As tech giants race to build data centers across the American West, Native American tribes are facing a complex new challenge — and an unexpected opportunity.
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
            The data center construction boom is reshaping the American landscape. From Northern Virginia to the California desert, massive facilities housing thousands of servers are rising to power the artificial intelligence revolution. These buildings — each the size of several football fields, consuming enough electricity to power a small city — are the physical infrastructure of the digital age.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            And increasingly, they are being built on or near Native American lands.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The reasons are straightforward: tribal lands often offer cheap land, favorable tax incentives, access to water, and fewer regulatory hurdles than adjacent non-tribal jurisdictions. For cash-strapped tribal nations, a data center deal can mean millions in annual revenue, hundreds of construction jobs, and a path toward economic self-sufficiency. For the tech companies — Amazon, Google, Microsoft, and a growing list of AI startups — tribal lands represent an efficient path to the computing power they need.
          </p>
          <p className="mb-8 text-lg font-semibold leading-relaxed text-earth">
            But the rush to build is raising urgent questions about environmental justice, tribal sovereignty, and whether the promises of economic development will match the reality.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* The Scale of the Boom */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Scale of the Boom
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The numbers are staggering. Global data center electricity consumption is projected to reach 1,000 terawatt-hours by 2026 — roughly equivalent to the entire electricity consumption of Japan. In the United States alone, data center construction spending has more than doubled since 2020, driven by the explosive growth of cloud computing and generative AI.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The American West has become a particularly hot market. The region offers cheap land, abundant solar and wind energy, and — crucially — tax incentives that can make a multi-billion-dollar data center project pencil out. Arizona, New Mexico, Oregon, and Oklahoma have all seen a surge in data center development proposals, many of them on or adjacent to tribal lands.
          </p>
          <div className="mb-8 rounded-2xl border border-earth/10 bg-cream p-5">
            <p className="text-base leading-relaxed text-earth-light/70">
              "We're seeing a gold rush," says Ashley LaMont, an Indigenous environmental justice organizer with Honor the Earth. "The tech industry sees tribal lands as the last frontier — places where they can build fast and cheap, often without the community pushback they'd face in suburban Virginia or California."
            </p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* Arizona */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Arizona: Water in the Desert
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Nowhere is the tension more visible than in Arizona. The state has become a data center hub, with major facilities operated by Google, Amazon, and Microsoft in the Phoenix metropolitan area. But the city of Phoenix is running out of space — and water.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The Gila River Indian Community, located south of Phoenix, has emerged as a key player in the region's water dynamics. In 2023, the community signed a landmark water rights settlement that secured its access to Colorado River water — a deal that also freed up water for the growing Phoenix metro area. But as data centers proliferate, questions about water usage have intensified.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            A single large data center can consume 1 to 5 million gallons of water per day for cooling — enough to supply a small town. In the Sonoran Desert, where the Gila River Indian Community has fought for decades to secure its water rights, the prospect of data centers drawing on the same aquifers is deeply concerning.
          </p>

          <div className="my-8 border-l-4 border-ochre bg-cream-dark py-4 pl-6 pr-4 italic text-earth-light/80">
            <p className="mb-2 text-base">"Water is life. We fought too long and too hard for our water rights to watch them get pumped into cooling towers for server farms."</p>
            <p className="text-sm font-medium not-italic text-earth-light/60">— Gila River Indian Community member, quoted in tribal council testimony</p>
          </div>

          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            The community has taken a cautious approach. Rather than signing blanket deals with tech companies, the Gila River Indian Community has insisted on tribal oversight of water usage, environmental impact assessments, and revenue-sharing agreements that fund community priorities like healthcare, education, and language preservation.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* New Mexico */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            New Mexico: A Deal Forged in Tension
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            In New Mexico, the Isleta Pueblo found itself at the center of a data center controversy that illustrates the complexity of these deals. In 2022, Meta (then Facebook) announced plans to build a $1.5 billion data center in Los Lunas, New Mexico — just miles from the Isleta Pueblo's southern boundary.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The deal promised 100 permanent jobs and hundreds of construction jobs. For a community with high unemployment, the offer was significant. But tribal leaders raised concerns about water usage, environmental impacts, and whether the jobs would go to tribal members or be filled by workers commuting from Albuquerque.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The negotiations that followed offer a case study in how tribes can assert sovereignty in the data center era. The Isleta Pueblo demanded — and won — a community benefits agreement that included guaranteed job training for tribal members, environmental monitoring, and a commitment to use renewable energy for the facility's power needs.
          </p>
          <div className="mb-8 rounded-2xl border border-earth/10 bg-cream p-5">
            <p className="text-base leading-relaxed text-earth-light/70">
              "Our sovereignty is not for sale," said Isleta Pueblo Governor Vernon Abeita in a statement at the time. "But we are open to partnerships that respect our people, our land, and our future."
            </p>
          </div>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            Not all tribes have been as successful in negotiating terms. In Oklahoma, where data center developers have approached multiple tribal nations with proposals, critics say the deals are often structured to extract maximum value for the companies while leaving tribes with long-term environmental liabilities.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* The Sovereignty Question */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Sovereignty Question
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Data center deals on tribal lands raise a fundamental question: who has jurisdiction?
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            When a tech company builds a data center on fee land (privately owned land within a reservation's boundaries), the company is subject to state and local regulations — not tribal jurisdiction. This means that a tribe may have limited ability to enforce environmental standards, water usage limits, or labor protections on a facility that sits within its ancestral territory.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The jurisdictional complexity is a legacy of the Dawes Act of 1887, which broke up collectively held tribal lands and opened them to private ownership. Today, many reservations are a checkerboard of tribal trust land, fee land owned by non-Natives, and land held by the federal government. Data center developers can exploit this checkerboard by building on fee land, effectively avoiding tribal oversight.
          </p>

          <div className="my-8 border-l-4 border-turquoise bg-cream-dark py-4 pl-6 pr-4 italic text-earth-light/80">
            <p className="mb-2 text-base">"The checkerboard is a tool of colonization. Tech companies are using it to build on our land without our consent."</p>
            <p className="text-sm font-medium not-italic text-earth-light/60">— Indigenous sovereignty scholar, interview with The Indigenous Beacon</p>
          </div>

          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            Some tribes are pushing back by asserting their sovereignty more aggressively. The Navajo Nation, which has one of the largest land bases of any tribe, has developed its own environmental review process for major development projects. The Gila River Indian Community has established a tribal water rights commission that reviews all water-intensive development proposals. And the Confederated Tribes of Warm Springs in Oregon are exploring the development of their own data center — owned and operated by the tribe — that would use the tribe's hydropower resources.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* Environmental Justice */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Environmental Justice: The Hidden Costs
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Beyond water usage, data centers carry significant environmental costs that disproportionately affect tribal communities. The facilities require massive amounts of electricity — much of it still generated by fossil fuels, including coal-fired power plants that are disproportionately located near tribal lands. The air pollution from these plants contributes to high rates of asthma and respiratory disease in Native communities.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Data centers also generate significant noise pollution — the constant hum of cooling fans and backup generators can be heard for miles. And they require backup diesel generators, which can leak or fail, contaminating soil and groundwater.
          </p>
          <div className="mb-8 rounded-2xl border border-earth/10 bg-cream p-5">
            <p className="text-base leading-relaxed text-earth-light/70">
              "What the tech companies don't tell you is that these facilities are essentially industrial factories," says LaMont. "They're not clean. They're not silent. They're not going to make your community healthier."
            </p>
          </div>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            For tribes that have already endured decades of environmental injustice — uranium mining on the Navajo Nation, oil and gas extraction in the Bakken, coal mining on the Crow Reservation — the data center boom represents a new chapter in a familiar story.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* The Promise and the Risk */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Promise and the Risk
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Proponents of data center development on tribal lands point to the economic benefits. A single large data center can generate $10-20 million in annual tax revenue — money that can fund schools, health clinics, and infrastructure. Construction projects create hundreds of jobs, and permanent operations require technicians, security personnel, and maintenance staff.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            For tribes with limited economic options, the appeal is obvious. The Navajo Nation, which has unemployment rates as high as 40% in some communities, has actively courted data center investment. The tribe's vast land base, solar energy potential, and fiber optic connectivity make it an attractive location for tech companies.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            But critics argue that the economic benefits are often overstated. Data centers are capital-intensive, not labor-intensive — a $1 billion facility may employ only 50-100 people. The jobs that are created often require technical skills that tribal members may not have, leading companies to import workers from outside the community. And the tax revenue, while significant, may not offset the long-term costs of water depletion, environmental degradation, and infrastructure strain.
          </p>

          <div className="my-8 border-l-4 border-crimson bg-cream-dark py-4 pl-6 pr-4 italic text-earth-light/80">
            <p className="mb-2 text-base">"They promise jobs, but the jobs go to people from outside. They promise revenue, but the revenue comes with strings attached. We've seen this movie before."</p>
            <p className="text-sm font-medium not-italic text-earth-light/60">— Tribal economic development director, speaking on condition of anonymity</p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* A Path Forward */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            A Path Forward
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            As the data center boom continues, some tribes are charting a different path — one that asserts sovereignty, demands accountability, and prioritizes community well-being over corporate profits.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The template is emerging: tribal nations are developing their own environmental review processes, hiring independent technical experts to evaluate proposals, negotiating community benefits agreements that include job training and local hiring preferences, and insisting on tribal oversight of water usage and environmental monitoring.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Some are going further. The Confederated Tribes of Warm Springs are exploring the development of a tribally owned and operated data center that would use the tribe's renewable hydropower resources. The project would allow the tribe to capture the full economic value of the data center — not just lease payments, but the profits from operating the facility itself.
          </p>
          <div className="mb-8 rounded-2xl border border-earth/10 bg-cream p-5">
            <p className="text-base leading-relaxed text-earth-light/70">
              "This is about sovereignty," says an Indigenous economic development consultant. "It's not about whether data centers are good or bad. It's about who controls the terms. If we have the power to say no, we also have the power to say yes — on our own terms."
            </p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* What Comes Next */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            What Comes Next
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The AI data center boom is not slowing down. Analysts project that data center construction will continue to accelerate through the end of the decade, with much of the new development concentrated in the American West. For Native American tribes, the question is not whether data centers will be built — it is whether they will be built <em>with</em> tribes or <em>on</em> tribes.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The answer will depend on tribal sovereignty. Tribes that have the legal infrastructure, political will, and technical expertise to negotiate from a position of strength will be better positioned to secure deals that benefit their communities. Tribes that lack those resources may find themselves repeating the patterns of extraction that have defined so much of Native American history.
          </p>
          <p className="mb-8 text-lg font-semibold leading-relaxed text-earth">
            The data center boom is a test — of whether the lessons of the past have been learned, and of whether tribal sovereignty is strong enough to shape the future.
          </p>

          <div className="mb-10 rounded-2xl border border-earth/10 bg-cream-dark p-8 text-center">
            <p className="text-sm italic text-earth-light/60">
              This article is part of The Indigenous Beacon's ongoing series on technology, environment, and Indigenous sovereignty.
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