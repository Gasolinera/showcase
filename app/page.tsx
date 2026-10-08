const CONTACT_EMAIL = "hola@lagasolinera.ai";
const CONTACT_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Hablemos 20 minutos")}`;

const NAV_LINKS = [
  { href: "#problema", label: "El problema" },
  { href: "#sprint", label: "Sprint" },
  { href: "#roles", label: "Roles" },
];

const METRICS = ["Tiempo de ciclo", "PRs por semana", "Tiempo de review", "Tickets en producción"];

const SIGNALS = [
  {
    title: "Licencias sin impacto",
    body: "Pagáis Copilot, Cursor o Claude Code, pero el uso es bajo y nadie mide qué ha cambiado.",
  },
  {
    title: "Lanzamientos lentos",
    body: "Code reviews eternas, tests manuales, un CI lento y código legacy que nadie quiere tocar.",
  },
  {
    title: "Un puesto que no se cubre",
    body: "La oferta de AI engineer lleva meses abierta y la presión por resultados no espera.",
  },
  {
    title: "Una iniciativa sin plan",
    body: "La dirección ha anunciado una iniciativa de IA, pero nadie sabe qué cambiar el lunes.",
  },
];

const SPRINT_STEPS = [
  {
    title: "Medimos",
    body: "Acordamos con vosotros la métrica que importa y tomamos la línea base.",
  },
  {
    title: "Montamos el flujo",
    body: "Estándares, configuración de las herramientas de IA, code review y tests, dentro de vuestro repo.",
  },
  {
    title: "Lanzamos",
    body: "Sacamos tickets reales a producción con el nuevo flujo, en pair programming con el equipo.",
  },
  {
    title: "Medimos otra vez",
    body: "Comparamos antes y después. Los flujos se quedan, y son vuestros.",
  },
];

const NEXT_STEPS = [
  { title: "Embedded", body: "Construimos dentro de vuestros equipos." },
  { title: "Transfer", body: "Formamos a vuestra gente en los nuevos roles." },
  { title: "Retainer", body: "Nos quedamos mientras evolucionan las herramientas." },
];

const ROLES = [
  {
    title: "AI Engagement Manager",
    body: "Traduce problemas de negocio en soluciones con IA y valida ideas con pruebas de concepto rápidas.",
  },
  {
    title: "Forward Deployed Engineer",
    body: "Entra en varios equipos y construye software listo para producción en distintos repos.",
  },
  {
    title: "AI Platform Engineer",
    body: "Define la gobernanza y los estándares de IA que comparten todos los equipos.",
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
          Hablemos
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
          Ingenieros de IA <span className="text-muted">dentro de tu equipo.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          Construimos los flujos de trabajo, lanzamos contigo y nos quedamos para mantener tus
          lanzamientos rápidos mientras evolucionan las herramientas.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={CONTACT_HREF}
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Reserva 20 minutos
          </a>
          <a
            href="#sprint"
            className="rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
          >
            Ver el sprint
          </a>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-24">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Lo que medimos, antes y después
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
    <section id="problema" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>El problema</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
          ¿Te suena?
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
            Cuatro semanas con un equipo real.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            Ni slides ni roadmaps. Entramos con un problema de ingeniería concreto y medible, y lo
            resolvemos con vosotros, en vuestro código.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {["4 semanas", "Precio fijo", "Tu equipo, tu código"].map((tag) => (
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
          Si funciona, seguimos
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
        <Eyebrow>Hacia dónde va tu equipo</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
          Tres roles para trabajar con IA.
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          Estos perfiles van a escasear. La mejor forma de tenerlos es formarlos dentro, a partir de
          vuestros propios desarrolladores. Venimos a que seáis vosotros.
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
          «¿Lleváis meses buscando un AI engineer? Mientras lo encontráis, trabajamos nosotros, y lo
          formamos cuando llegue.»
        </blockquote>
        <p className="mt-8 max-w-xl leading-relaxed text-background/60">
          Cuéntanos cómo trabaja hoy tu equipo. Una llamada de 20 minutos, sin compromiso.
        </p>
        <a
          href={CONTACT_HREF}
          className="mt-8 inline-block rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-85"
        >
          Reserva 20 minutos
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
        <p>© 2026 La Gasolinera SL</p>
      </div>
    </footer>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 font-semibold tracking-tight text-foreground">
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-accent">
        <path d="M12 2.5c-3.6 4.6-6.5 8.4-6.5 11.8a6.5 6.5 0 0 0 13 0C18.5 10.9 15.6 7.1 12 2.5z" />
      </svg>
      La Gasolinera
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
