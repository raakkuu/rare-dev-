import Reveal from '@/components/site/Reveal';
import { APPROACH } from '@/lib/content';

export default function Approach() {
  return (
    <section id="approach" className="py-16 md:py-24">
      <div className="container-rv">
        <Reveal>
          <h2 className="text-center font-display text-[clamp(1.9rem,5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
            Think clearly. <span className="text-muted-foreground/70">Build carefully.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            Five working principles. They decide which projects we take, how we build, and how we treat the people who
            pay for it.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {APPROACH.map((item, i) => (
            <Reveal key={item.no} delay={i * 0.05}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-500 hover:border-electric/40">
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-electric/15 to-transparent" />
                <span className="relative text-xs font-medium text-electric">{item.no}</span>
                <h3 className="relative mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-foreground">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}