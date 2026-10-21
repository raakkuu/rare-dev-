import { Link } from 'react-router-dom';
import { ArrowRight, Check, Play, Sparkles } from 'lucide-react';
import Reveal from '@/components/site/Reveal';

function Avatar({ label, tone }) {
  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[11px] font-semibold text-white md:h-12 md:w-12"
      style={{ background: tone }}
    >
      {label}
    </span>
  );
}

const AVATARS = [
  ['SR', 'linear-gradient(135deg,#2B63FF,#7C3AED)'],
  ['TK', 'linear-gradient(135deg,#145DFF,#00C2FF)'],
  ['MB', 'linear-gradient(135deg,#6E3BFF,#2B63FF)'],
  ['AL', 'linear-gradient(135deg,#00C2FF,#2B63FF)'],
  ['JD', 'linear-gradient(135deg,#7C3AED,#145DFF)'],
];

/** Floating glass card anchored to the hero mockup. */
function FloatCard({ className = '', pace = 'float-fast', children }) {
  return (
    <div
      className={`absolute z-10 hidden w-60 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md md:block ${pace} ${className}`}
    >
      {children}
    </div>
  );
}

function BrowserFrame() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0D14]/95 shadow-[0_40px_120px_rgba(20,93,255,0.28)]">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-electric/80" />
        </span>
        <span className="ml-2 hidden rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] text-muted-foreground sm:block">
          rare.dev — studio workspace
        </span>
      </div>
      <div className="flex">
        <aside className="hidden w-44 flex-col gap-1 border-r border-white/10 p-3 sm:flex">
          {['Overview', 'Catalogue', 'Orders', 'Messages', 'Analytics'].map((item, i) => (
            <span
              key={item}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                i === 0 ? 'bg-electric/15 text-foreground' : 'text-muted-foreground'
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-electric' : 'bg-white/20'}`} />
              {item}
            </span>
          ))}
          <span className="mt-auto flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            All systems live
          </span>
        </aside>

        <div className="flex-1 p-4 md:p-5">
          <div className="relative overflow-hidden rounded-xl border border-white/10 p-5 md:p-8"
            style={{ background: 'linear-gradient(120deg, rgba(20,93,255,0.35), rgba(10,13,20,0) 60%)' }}
          >
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground/80">
              Live preview
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold md:text-2xl">Your storefront, ready to sell</h3>
            <p className="mt-1 text-xs text-muted-foreground md:text-sm">Catalogue · Checkout · Payments — wired and tested</p>
            <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background md:bottom-6 md:right-6">
              <Play className="h-4 w-4 fill-current" />
            </span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              ['Orders', '128'],
              ['Revenue', '৳84,200'],
              ['Enquiries', '36'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 md:p-4">
                <p className="text-[10px] text-muted-foreground">{label}</p>
                <p className="mt-1 font-display text-sm font-semibold md:text-base">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Hero — centered headline over a blue glow, with a floating product mockup. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px]"
        style={{ background: 'radial-gradient(62% 55% at 50% 0%, rgba(20,93,255,0.5), rgba(8,10,16,0) 72%)' }}
      />
      <div aria-hidden="true" className="blueprint blueprint-fade pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] opacity-60" />

      <div className="container-rv">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h1 className="font-display text-[clamp(2.3rem,6.5vw,4.4rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground">
              Turn Your Business Into{' '}
              <span
                className="mx-1 inline-flex h-[0.85em] w-[1.5em] items-center justify-center rounded-xl align-[-0.08em] shadow-[0_0_36px_rgba(20,93,255,0.65)]"
                style={{ background: 'linear-gradient(135deg,#2B63FF,#7C3AED)' }}
              >
                <Sparkles className="h-[0.5em] w-[0.5em] text-white" />
              </span>{' '}
              <span className="bg-gradient-to-r from-electric via-signal to-electric bg-clip-text text-transparent">
                Digital Success
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We start by understanding your goals and requirements, then design, build, and deliver complete digital
              products — websites, online stores, web apps, and AI-powered systems — supporting your success every step
              of the way.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/start-a-project"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground py-2 pl-6 pr-2 text-sm font-medium text-background transition-colors duration-300 hover:bg-white"
              >
                Start a new project
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                to="/start-a-project?type=Request%20a%20quote"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-electric hover:text-electric"
              >
                Request a quote
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative mx-auto mt-14 max-w-5xl md:mt-20">
            <BrowserFrame />

            <FloatCard className="-left-2 top-12 lg:-left-20" pace="float-slow">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <p className="text-xs font-medium text-foreground">Client chat</p>
              </div>
              <div className="mt-3 space-y-2">
                <div className="rounded-xl rounded-tl-sm bg-white/10 px-3 py-2 text-[11px] leading-snug text-foreground/90">
                  Can we launch before the campaign?
                </div>
                <div className="ml-6 rounded-xl rounded-tr-sm bg-electric/30 px-3 py-2 text-[11px] leading-snug text-foreground">
                  Yes — checkout ships this week.
                </div>
              </div>
            </FloatCard>

            <FloatCard className="-right-2 top-6 lg:-right-20" pace="float-fast">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-electric/25 text-electric">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-medium text-foreground">New project enquiry</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">E-Commerce · ৳50k+ budget</p>
                </div>
              </div>
            </FloatCard>

            <FloatCard className="-right-2 bottom-8 lg:-right-14" pace="float-slow">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-foreground">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-medium text-foreground">Weekly report ready</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">Traffic +38% · uptime 100%</p>
                </div>
              </div>
            </FloatCard>

            <FloatCard className="-left-2 bottom-6 lg:-left-16" pace="float-fast">
              <p className="text-xs font-medium text-foreground">Launch checklist</p>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/5 rounded-full bg-electric" />
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">12 of 20 items done</p>
            </FloatCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Social-proof band with glowing cursors. */
export function StatsBand() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-[42rem] max-w-full -translate-x-1/2 -translate-y-1/2 opacity-70 blur-3xl"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(20,93,255,0.4), rgba(8,10,16,0) 70%)' }}
      />
      <div className="container-rv">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center">
          <div className="flex -space-x-3">
            {AVATARS.map(([label, tone]) => (
              <Avatar key={label} label={label} tone={tone} />
            ))}
            <Avatar label="20+" tone="linear-gradient(135deg,#0A0D14,#2B63FF)" />
          </div>
          <h2 className="mt-8 text-center font-display text-[clamp(1.9rem,5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
            <span className="text-muted-foreground/70">Empowering</span>{' '}
            <span className="text-foreground">25+ Brands</span>
            <br />
            <span className="text-foreground">& Founders Worldwide</span>
          </h2>
        </div>
      </div>
    </section>
  );
}