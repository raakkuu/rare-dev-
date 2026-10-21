import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Check, Code2, PenTool } from 'lucide-react';
import Reveal from '@/components/site/Reveal';

const chipClass = 'rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-foreground/85';

/** Mini storefront panel used inside the big feature card. */
function StorefrontPanel() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0A0D14]/90 p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-foreground">NEXA — storefront</p>
        <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] text-emerald-300">Live</span>
      </div>
      <div className="mt-3 rounded-xl border border-white/10 p-4"
        style={{ background: 'linear-gradient(120deg, rgba(20,93,255,0.35), rgba(10,13,20,0) 65%)' }}
      >
        <div className="h-16 rounded-lg border border-white/10 bg-white/5 md:h-20" />
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="h-2 w-20 rounded bg-white/70" />
            <div className="mt-2 h-2 w-12 rounded bg-white/25" />
          </div>
          <span className="rounded-full bg-foreground px-3 py-1.5 text-[10px] font-medium text-background">Buy now</span>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {['Catalogue synced', 'Checkout tested', 'Payments live'].map((row) => (
          <div key={row} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] text-muted-foreground">
            <Check className="h-3 w-3 text-electric" />
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Build, Launch & Scale — layered feature cards. */
export default function BuildScale() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-rv">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,5vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
              Build, Launch & Scale
              <br />
              Superfast
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2">
          {/* Big card */}
          <Reveal className="md:col-span-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-10">
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-electric/25 to-transparent" />
              <div className="relative grid items-center gap-8 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">Services</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-foreground md:text-3xl">
                    Create And Sell
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Websites, online stores, web apps, and custom software — designed, built, and launched under one
                    roof.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Websites', 'Stores', 'Web Apps', 'AI', '+ more'].map((chip) => (
                      <span key={chip} className={chipClass}>
                        {chip}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/start-a-project"
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-electric"
                  >
                    Explore what we build
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
                <StorefrontPanel />
              </div>
            </div>
          </Reveal>

          {/* Conversion card */}
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-electric/20 to-transparent" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">Websites</p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.02em] text-foreground md:text-2xl">
                  High-Converting Websites
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Pages designed around one job: turning visitors into enquiries and customers.
                </p>
              </div>
              <div className="relative mt-6 rounded-2xl bg-white/90 p-4 shadow-xl">
                <p className="text-xs font-semibold text-black/80">Landing page</p>
                <div className="mt-3 space-y-2">
                  <div className="h-2.5 w-3/4 rounded bg-black/80" />
                  <div className="h-2 w-1/2 rounded bg-black/25" />
                </div>
                <div className="mt-3 flex items-end gap-1.5">
                  {[38, 52, 44, 68, 58, 82, 74].map((h, i) => (
                    <span key={i} className="w-4 rounded-sm bg-electric/80" style={{ height: `${h * 0.6}px` }} />
                  ))}
                </div>
                <span className="mt-3 inline-block rounded-full bg-black px-3 py-1.5 text-[10px] font-medium text-white">
                  Book a call
                </span>
              </div>
            </div>
          </Reveal>

          {/* Automation card */}
          <Reveal>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-electric/20 to-transparent" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">AI & Automation</p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.02em] text-foreground md:text-2xl">
                  Growth On Autopilot
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Orders, records, notifications, and reports — running themselves while you run the business.
                </p>
              </div>
              <div className="relative mt-auto pt-8">
                <div className="flex -space-x-2">
                  {['SR', 'TK', 'MB', 'AL', '+9'].map((label, i) => (
                    <span
                      key={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[10px] font-semibold text-white"
                      style={{ background: i === 4 ? '#0A0D14' : 'linear-gradient(135deg,#2B63FF,#7C3AED)' }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <Link
                  to="/start-a-project?type=AI%20%26%20Automation"
                  className="group mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-electric hover:text-electric"
                >
                  Launch a workflow
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Analytics card */}
          <Reveal className="md:col-span-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-10">
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-electric/20 to-transparent" />
              <div className="relative grid items-center gap-8 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">Analytics</p>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.02em] text-foreground md:text-2xl">
                    Precise Analytics & User Testing
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Every release measured against real usage — so decisions come from data, not opinions.
                  </p>
                  <div className="mt-6 flex gap-2">
                    <span className={chipClass}>Dashboards</span>
                    <span className={chipClass}>Reports</span>
                    <span className={chipClass}>A/B tests</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-2xl border border-white/10 bg-[#0A0D14]/90 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium text-foreground">Testing results</p>
                      <span className="rounded-full bg-electric/15 px-2.5 py-1 text-[10px] text-electric">Live</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      {[
                        ['Checkout flow', '94%', 'w-11/12'],
                        ['Mobile speed', '88%', 'w-4/5'],
                        ['Task success', '91%', 'w-10/12'],
                      ].map(([label, value, width]) => (
                        <div key={label}>
                          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                            <span>{label}</span>
                            <span className="text-foreground">{value}</span>
                          </div>
                          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                            <div className={`h-full rounded-full bg-electric ${width}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-4 hidden rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-[11px] text-foreground shadow-xl backdrop-blur-md sm:block">
                    +38% conversion after redesign
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const TEAM_CARDS = [
  {
    icon: Code2,
    title: 'Engineering Specialists',
    body: 'Senior developers who architect for scale — clean, maintainable systems that stay fast as you grow.',
  },
  {
    icon: PenTool,
    title: 'Design That Sells',
    body: 'Interfaces crafted around your customers, so the product looks credible and converts from day one.',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    body: 'Practical intelligence layered onto your product — assistants, automations, and insights that pay for themselves.',
  },
];

/** Why section — More Than A Platform. */
export function Why() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-rv">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">Why RARE DEV</p>
              <h2 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,3rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground">
                More Than A Platform —
                <br />
                A Partner For Your Growth
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                We don&apos;t just ship a product and disappear. Design, engineering, AI, and automation stay under one
                roof — and stay available to you after launch.
              </p>
              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-electric hover:text-electric"
              >
                View all
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {TEAM_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06}>
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-500 hover:border-electric/40">
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-electric/20 to-transparent" />
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-[0_0_24px_rgba(20,93,255,0.45)]"
                    style={{ background: 'linear-gradient(135deg,#2B63FF,#7C3AED)' }}
                  >
                    <card.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.01em] text-foreground md:text-xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.18} className="sm:col-span-2">
              <div className="relative overflow-hidden rounded-3xl border border-electric/40 p-7"
                style={{ background: 'linear-gradient(120deg, rgba(20,93,255,0.35), rgba(10,13,20,0.2) 70%)' }}
              >
                <h3 className="font-display text-lg font-semibold tracking-[-0.01em] text-foreground md:text-xl">
                  One team, end to end
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-foreground/80">
                  Strategy, design, build, launch, and support — handled by the same people who understood the brief on
                  day one.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}