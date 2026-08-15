import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/article/native-representation-in-tech")({
  component: NativeRepInTechArticle,
  head: () => ({
    meta: [
      { title: "Coded Invisibility: Native Americans in Tech — The Indigenous Beacon" },
      {
        name: "description",
        content:
          "Native people make up less than 1% of the tech workforce. A growing movement is trying to change that — and reshape the future of technology itself.",
      },
      { name: "og:title", content: "Coded Invisibility: Native Americans in the Tech Industry and the Fight for Representation" },
      {
        name: "og:description",
        content:
          "Native people make up less than 1% of the tech workforce. A growing movement is trying to change that — and reshape the future of technology itself.",
      },
      { name: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/* ─── Article Page ─── */

function NativeRepInTechArticle() {
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
            Coded Invisibility: Native Americans in the Tech Industry and the Fight for Representation
          </h1>
          <p className="mb-6 text-lg font-medium italic text-earth-light/80">
            Native people make up less than 1% of the tech workforce. A growing movement is trying to change that — and reshape the future of technology itself.
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
            When Joy Harjo, the former US Poet Laureate, was invited to speak at a major tech conference in 2024, she opened with a question that stunned the ballroom: "How many of you have a Native American coworker?"
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Out of more than 2,000 attendees, fewer than a dozen hands went up.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The moment crystallized a reality that Native technologists have been pointing to for decades: In an industry that prides itself on building the future, Native American people are essentially invisible. According to annual diversity reports, Native employees make up less than 1% of the workforce at Google, Microsoft, Meta, and Apple — in some cases, less than 0.5%. At Amazon, Native representation is so low that the company's diversity report does not break out Native employees as a separate category.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            "Native people are the asterisk on the diversity report," says Amelia Winger-Bearskin, a Haudenosaunee artist and technologist who has worked at Google and Mozilla. "We're there, barely, but no one is paying attention to us."
          </p>

          <div className="my-8 border-l-4 border-ochre bg-cream-dark py-4 pl-6 pr-4 italic text-earth-light/80">
            <p className="mb-2 text-base">"Native people are the asterisk on the diversity report. We're there, barely, but no one is paying attention."</p>
            <p className="text-sm font-medium not-italic text-earth-light/60">— Amelia Winger-Bearskin, Haudenosaunee artist and technologist</p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* Why Representation Matters */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Why Representation Matters
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The absence of Native voices in tech is not just a hiring problem — it is a design problem. The people who build technology shape how it works, whose faces it recognizes, whose languages it understands, and whose communities it serves.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Consider facial recognition. Multiple studies have shown that commercial facial recognition systems are significantly less accurate at identifying people with darker skin tones and Indigenous facial features. In one widely cited study, Amazon's Rekognition system was unable to reliably distinguish between individual Native American faces at all — a failure that has real-world consequences in a world where law enforcement increasingly relies on these systems.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Consider language. AI language models — the technology behind ChatGPT, Google Translate, and voice assistants — are trained predominantly on English and a handful of other widely spoken languages. Of the approximately 150 Indigenous languages still spoken in the United States, virtually none are represented in major AI training datasets. When a Cherokee elder asks a voice assistant a question in their language, the assistant has no idea what was said.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Consider data. Native communities generate enormous amounts of data — health data from Indian Health Service facilities, environmental data from tribal natural resource departments, educational data from Bureau of Indian Education schools. But Native communities rarely control this data. It is stored on servers owned by governments and corporations, governed by policies that tribes had no role in shaping.
          </p>

          <div className="mb-8 rounded-2xl border border-earth/10 bg-cream p-5">
            <p className="text-base leading-relaxed text-earth-light/70">
              "If you are not at the table, you are on the menu," says Alishia Seok, a Navajo software engineer and co-founder of the Native-led startup Indigital. "Right now, Native people are not at the table when the most important technology in the world is being built."
            </p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* The Pipeline Problem */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Pipeline Problem — And What's Being Done About It
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The barriers to Native representation in tech begin long before the hiring process. On many reservations, computer science education is virtually nonexistent. The Bureau of Indian Education, which operates 183 schools on tribal lands, has historically lacked funding for STEM programs, technology infrastructure, and teacher training in computer science. In some rural reservation schools, the only computers are a decade old and shared among dozens of students.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            But the pipeline is being rebuilt from the ground up.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The <strong>American Indian Science and Engineering Society (AISES)</strong> has become one of the most important organizations for Native technologists. Founded in 1977, AISES now supports more than 6,000 Native students and professionals in STEM fields through scholarships, mentorship programs, and an annual conference that draws thousands of attendees. AISES's "Full-Circle Mentorship" program pairs Native college students with Native STEM professionals — creating a support network that many non-Native students take for granted.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            <strong>Natives in Tech</strong>, a nonprofit founded in 2017, has become a hub for the Native tech community. The organization hosts an annual confab that draws Native engineers, designers, and founders from across the country, and runs programs focused on everything from open-source contribution to career development.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            <strong>Code for Native America</strong> brings coding bootcamps directly to tribal communities, partnering with tribal colleges to offer free or low-cost training in web development, data science, and cybersecurity. The program has graduated more than 200 students since 2022, many of whom have gone on to jobs at major tech companies or launched their own startups.
          </p>

          <div className="mb-8 rounded-2xl border border-earth/10 bg-cream p-5">
            <p className="text-base leading-relaxed text-earth-light/70">
              "We're not waiting for the tech industry to come to us," says a Code for Native America instructor. "We're building our own pipeline."
            </p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* Native-Led Startups */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Native-Led Startups and Innovation
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Despite the odds, Native founders are launching companies that are redefining what technology can look like when it is built with Indigenous values.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            <strong>Indigital</strong>, founded by Mikaela Jade (Cabrogal) in Australia and now operating in North America, uses augmented reality to bring Indigenous cultural sites and stories to life. The company's platform allows users to point their phones at a landscape and see Indigenous place names, stories, and ecological knowledge overlaid on the real world — a technology that has applications in education, tourism, and cultural preservation.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            <strong>Tara-Nicholle Nelson</strong>, a Muscogee (Creek) entrepreneur, is building AI-powered tools specifically for community-based organizations — tools that she says are designed with an understanding of collective decision-making and Indigenous governance structures, rather than the individualistic assumptions embedded in most Silicon Valley products.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            In 2025, <strong>Natives Rising</strong>, a nonprofit focused on Indigenous representation in tech leadership, placed 15 Native engineers into internships at companies ranging from Google to early-stage startups. The program, which provides wraparound support including housing stipends and cultural mentorship, is expanding rapidly.
          </p>

          <div className="mb-8 rounded-2xl border border-earth/10 bg-cream p-5">
            <p className="text-base leading-relaxed text-earth-light/70">
              "Native founders are building companies that solve problems for Native communities," says a venture capital analyst who tracks Indigenous-led startups. "They're building telehealth platforms for IHS, data sovereignty tools for tribal governments, and language apps for Indigenous language learners. These are real businesses solving real problems."
            </p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* The Remote Work Revolution */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Remote Work Revolution
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The shift to remote work, accelerated by the pandemic, has been transformative for Native technologists — and for the communities they come from.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Before remote work became widespread, Native people who wanted careers in tech had to make a painful choice: leave their communities for cities like San Francisco, Seattle, or Austin, or give up on tech careers entirely. For many, the choice was not just about jobs — it was about leaving behind family, culture, language, and the responsibilities of community membership.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Remote work has changed that calculus. A Navajo software engineer can now work for Microsoft from her home in Window Rock, contributing to her community while building a career. A Cherokee data scientist can work for a startup from Tahlequah, staying connected to his language and culture.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            "The remote work revolution is the single most important development for Native tech representation in a generation," says an AISES board member. "It removes the geographic barrier that has kept Native talent out of the industry."
          </p>
          <p className="mb-8 text-lg leading-relaxed text-earth-light/80">
            But remote work is not a silver bullet. It requires broadband — and as The Indigenous Beacon has reported, broadband access remains a serious problem on many tribal lands. Without reliable internet, remote work is not possible. And remote work can also mean isolation — Native employees at large companies may be the only Native person on their team, with no community of peers to support them.
          </p>

          <hr className="my-10 border-earth/10" />

          {/* What Big Tech Is (and Isn't) Doing */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            What Big Tech Is (and Isn't) Doing
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The major tech companies have all made public commitments to diversity and inclusion. Most publish annual diversity reports and have invested in programs aimed at increasing representation of underrepresented groups.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            But the results for Native representation have been disappointing. Between 2014 and 2024, Native representation at Google increased from 0.5% to 0.7% — a gain of 0.2 percentage points over a decade. At the current rate, it would take more than 200 years to reach proportional representation.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            Some companies are making more serious investments. Microsoft's Native American Employee Resource Group has advocated for tribal broadband funding and partnered with tribal colleges on curriculum development. Apple's Racial Equity and Justice Initiative has funded Native-led nonprofits and supported Indigenous developers. Google has partnered with the National Congress of American Indians on digital inclusion programs.
          </p>

          <div className="mb-8 rounded-2xl border border-earth/10 bg-cream p-5">
            <p className="text-base leading-relaxed text-earth-light/70">
              "Philanthropy is not a strategy," says a Native tech advocate. "What we need is a sustained commitment to hiring, retaining, and promoting Native talent — not one-time grants and PR statements."
            </p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* Indigenous Data Sovereignty */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            Indigenous Data Sovereignty
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            One of the most important developments in the Native tech landscape is the growing movement for Indigenous data sovereignty — the principle that Native communities should control their own data.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            This movement has concrete manifestations. The <strong>Indigenous Data Sovereignty Network</strong> has developed frameworks for data governance that are being adopted by tribal governments. The <strong>Seventh Generation Fund for Indigenous Peoples</strong> has funded technology projects that are community-owned and community-controlled. And the <strong>Native BioData Consortium</strong> is building Indigenous-led infrastructure for genomic data — ensuring that Native DNA, which has historically been exploited by researchers, is protected by and governed by Native communities.
          </p>

          <div className="my-8 border-l-4 border-turquoise bg-cream-dark py-4 pl-6 pr-4 italic text-earth-light/80">
            <p className="mb-2 text-base">"Data sovereignty is the modern expression of tribal sovereignty. If you don't control your data, you don't control your future."</p>
            <p className="text-sm font-medium not-italic text-earth-light/60">— Tribal data governance expert</p>
          </div>

          <hr className="my-10 border-earth/10" />

          {/* What's Needed Next */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            What's Needed Next
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The path forward for Native representation in tech requires action on multiple fronts:
          </p>

          <ol className="mb-8 space-y-4 text-base leading-relaxed text-earth-light/80">
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turquoise/10 text-sm font-bold text-turquoise">1</span>
              <span><strong>Computer science education on tribal lands.</strong> Every tribal school should have the resources and teachers to offer computer science coursework — starting in elementary school, not just high school.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turquoise/10 text-sm font-bold text-turquoise">2</span>
              <span><strong>Targeted hiring and retention.</strong> Tech companies should set specific, measurable goals for Native hiring, partner with AISES and Natives in Tech on recruitment, and invest in retention programs that support Native employees.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turquoise/10 text-sm font-bold text-turquoise">3</span>
              <span><strong>Funding for Native-led startups.</strong> Venture capital firms and foundations should create dedicated funds for Native founders, who currently receive a fraction of a percent of all VC funding.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turquoise/10 text-sm font-bold text-turquoise">4</span>
              <span><strong>Indigenous data sovereignty policies.</strong> Federal and state governments should recognize Indigenous data sovereignty and support tribal data governance infrastructure.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turquoise/10 text-sm font-bold text-turquoise">5</span>
              <span><strong>Broadband access.</strong> None of this matters without connectivity. Universal broadband access on tribal lands is a prerequisite for everything else.</span>
            </li>
          </ol>

          <hr className="my-10 border-earth/10" />

          {/* The Bottom Line */}
          <h2 className="mb-6 text-2xl font-bold text-earth sm:text-3xl">
            The Bottom Line
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The tech industry is building the infrastructure of the 21st century — the platforms, algorithms, and data systems that will shape how humanity communicates, works, and governs itself for generations to come. Native people have a right to be part of that project — not just as users, but as builders, designers, and leaders.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-earth-light/80">
            The current numbers are dire. But the movement to change them is growing — led by Native engineers, founders, and advocates who refuse to accept invisibility. They are building their own pipelines, launching their own companies, and asserting their own vision of what technology can be when it is built for — and by — Indigenous communities.
          </p>
          <p className="mb-8 text-lg font-semibold leading-relaxed text-earth">
            The question for the tech industry is whether it will get serious about partnership — or continue to treat Native people as an afterthought on the diversity report.
          </p>

          <div className="mb-10 rounded-2xl border border-earth/10 bg-cream-dark p-8 text-center">
            <p className="text-sm italic text-earth-light/60">
              This article is part of The Indigenous Beacon's ongoing series on technology, sovereignty, and the future of Indian Country. <a href="#" className="font-medium text-ochre underline underline-offset-2 hover:text-ochre-dark">Subscribe to our newsletter</a> for weekly reporting.
            </p>
            <p className="mt-3 text-sm italic text-earth-light/60">
              The Indigenous Beacon is a Native-led digital media and education platform. <a href="/#join" className="font-medium text-ochre underline underline-offset-2 hover:text-ochre-dark">Become a member</a> to support independent Native journalism.
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