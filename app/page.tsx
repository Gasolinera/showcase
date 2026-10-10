const CONTACT_EMAIL = "hello@lagasolinera.ai";
const CONTACT_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("20-minute intro call")}`;

const NAV_LINKS = [
  { href: "#problem", label: "The problem" },
  { href: "#sprint", label: "Sprint" },
  { href: "#roles", label: "Roles" },
];

const METRICS = ["Cycle time", "PRs per week", "Review time", "Tickets shipped to production"];

const SIGNALS = [
  {
    title: "Licenses without impact",
    body: "You pay for Copilot, Cursor or Claude Code, but usage is low and nobody measures what changed.",
  },
  {
    title: "Slow shipping",
    body: "Endless code reviews, manual testing, a slow CI and legacy code nobody wants to touch.",
  },
  {
    title: "A role you can't fill",
    body: "Your AI engineer opening has been up for months, and the pressure for results won't wait.",
  },
  {
    title: "An initiative without a plan",
    body: "Leadership announced an AI initiative, but nobody knows what to change on Monday.",
  },
];

const SPRINT_STEPS = [
  {
    title: "Measure",
    body: "We agree with you on the metric that matters and take a baseline.",
  },
  {
    title: "Set up the workflow",
    body: "Standards, AI tooling setup, code review and testing, right inside your repo.",
  },
  {
    title: "Ship",
    body: "We ship real tickets to production with the new workflow, pair programming with your team.",
  },
  {
    title: "Measure again",
    body: "We compare before and after. The workflows stay, and they're yours.",
  },
];

const NEXT_STEPS = [
  { title: "Embedded", body: "We build inside your teams." },
  { title: "Transfer", body: "We train your people into the new roles." },
  { title: "Retainer", body: "We stay on as the tools evolve." },
];

const ROLES = [
  {
    title: "AI Engagement Manager",
    body: "Turns business problems into AI solutions and validates ideas with fast proofs of concept.",
  },
  {
    title: "Forward Deployed Engineer",
    body: "Embeds across teams and builds production-ready software in different repos.",
  },
  {
    title: "AI Platform Engineer",
    body: "Defines the AI governance and standards that every team shares.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Sprint />
        <Roles />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={CONTACT_HREF}
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-36 md:pb-28">
        <Eyebrow>Forward-deployed AI engineers</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          AI engineers <span className="text-muted">inside your team.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          We build the workflows, ship with you, and stay to keep you shipping fast as the tools
          evolve.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={CONTACT_HREF}
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Book 20 minutes
          </a>
          <a
            href="#sprint"
            className="rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
          >
            See the sprint
          </a>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-24">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          What we measure, before and after
        </p>
        <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-line gap-px md:grid-cols-4">
          {METRICS.map((metric) => (
            <div key={metric} className="bg-surface px-6 py-8">
              <p className="text-lg font-medium tracking-tight md:text-xl">{metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="problem" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>The problem</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
          Sound familiar?
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SIGNALS.map((signal) => (
            <article key={signal.title} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-medium">{signal.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{signal.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sprint() {
  return (
    <section id="sprint" className="scroll-mt-16 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Eyebrow>AI Engineering Sprint</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Four weeks with a real team.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            No slides, no roadmaps. We pick one concrete, measurable engineering problem and solve it
            with you, in your codebase.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {["4 weeks", "Fixed price", "Your team, your code"].map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <ol className="divide-y divide-line border-y border-line">
          {SPRINT_STEPS.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-4 py-6">
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          If it works, we keep going
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {NEXT_STEPS.map((step) => (
            <div key={step.title} className="rounded-2xl border border-line bg-background p-6">
              <h3 className="font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roles() {
  return (
    <section id="roles" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>Where your team is heading</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
          Three roles for working with AI.
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          These profiles will be scarce. The best way to have them is to grow them in-house, from
          your own developers. We&apos;re here to make that happen.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {ROLES.map((role) => (
            <article key={role.title} className="rounded-2xl border border-line bg-surface p-8">
              <h3 className="text-lg font-medium tracking-tight">{role.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{role.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl rounded-3xl bg-foreground px-8 py-16 text-background md:px-16 md:py-24">
        <blockquote className="max-w-3xl text-2xl font-medium leading-snug tracking-tight md:text-4xl">
          “Been looking for an AI engineer for months? We&apos;ll do the work until you find one, and
          train them when they arrive.”
        </blockquote>
        <p className="mt-8 max-w-xl leading-relaxed text-background/60">
          Tell us how your team works today. A 20-minute call, no strings attached.
        </p>
        <a
          href={CONTACT_HREF}
          className="mt-8 inline-block rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-85"
        >
          Book 20 minutes
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <Logo />
        <a href={CONTACT_HREF} className="transition-colors hover:text-foreground">
          {CONTACT_EMAIL}
        </a>
        <p>© 2026 Vogata SL</p>
      </div>
    </footer>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 font-semibold tracking-tight text-foreground">
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-5 w-5"
        fill="none"
        strokeWidth={3.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 5l6 7-6 7" stroke="currentColor" />
        <path d="M13 5l6 7-6 7" className="stroke-accent" />
      </svg>
      Vogata
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </p>
  );
}
