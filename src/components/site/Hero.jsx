import HeroLead from '@/components/site/HeroLead';
import HeroRail from '@/components/site/HeroRail';
import SystemDiagram from '@/components/site/SystemDiagram';
import { STUDIO } from '@/lib/content';

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border pt-32 md:pt-40">
      <div aria-hidden="true" className="blueprint blueprint-fade pointer-events-none absolute inset-0 opacity-70" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-border/50 lg:block" />

      <div className="container-rv relative">
        <p className="label-mono flex items-center gap-3 text-muted-foreground">
          <span className="h-px w-10 bg-signal" />
          {STUDIO.name} / {STUDIO.discipline}
        </p>

        <h1 className="mt-8 font-display text-[clamp(2.4rem,8.4vw,6.75rem)] font-semibold uppercase leading-[0.92] tracking-[-0.035em] text-foreground">
          <span className="block">
            <span className="block animate-[line-in_900ms_cubic-bezier(0.16,0.84,0.24,1)_both]">Digital products,</span>
          </span>
          <span className="block">
            <span className="block animate-[line-in_900ms_cubic-bezier(0.16,0.84,0.24,1)_both] [animation-delay:140ms]">
              Built to be <span className="text-electric">rare.</span>
            </span>
          </span>
        </h1>

        <div className="mt-12 grid gap-12 pb-16 lg:mt-20 lg:grid-cols-12 lg:gap-10 lg:pb-24">
          <div className="lg:col-span-6 xl:col-span-5">
            <HeroLead />
          </div>
          <div className="relative lg:col-span-6 lg:col-start-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 -z-10 opacity-60 blur-3xl"
              style={{
                background:
                  'radial-gradient(ellipse at 55% 40%, rgba(20,93,255,0.35), rgba(8,9,11,0) 70%)',
              }}
            />
            <SystemDiagram />
          </div>
        </div>
      </div>

      <HeroRail />
    </section>
  );
}