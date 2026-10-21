import Reveal from '@/components/site/Reveal';
import HandArrow from '@/components/site/HandArrow';
import { DISCIPLINES } from '@/lib/content';

export default function Intro() {
  return (
    <section id="about" className="border-b border-border py-20 md:py-32">
      <div className="container-rv grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-3">
          <h2 className="label-mono text-muted-foreground">What we do</h2>
        </div>

        <div className="lg:col-span-9">
          <Reveal>
            <div className="relative">
              <p className="max-w-4xl font-display text-[clamp(1.75rem,4.1vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-foreground">
                We turn ideas into <span className="text-electric">digital experiences</span> people remember.
              </p>
              <HandArrow className="absolute -top-9 right-0 hidden w-24 rotate-6 lg:block" />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-2 md:gap-12">
            <Reveal>
              <p className="leading-relaxed text-muted-foreground">
                RARE DEV combines design, development, technology, automation, and AI into a single studio. Every
                project starts with the business problem, not the technology — then we design and engineer the product
                that actually solves it.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="leading-relaxed text-muted-foreground">
                We take on a small number of clients at a time, which means senior attention from the first
                conversation to long after launch. Websites, platforms, internal systems, and AI features are built as
                one coherent product rather than a set of disconnected deliverables.
              </p>
            </Reveal>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            {DISCIPLINES.map((item) => (
              <li key={item} className="label-mono flex items-center gap-2.5 text-muted-foreground/70">
                <span className="h-1 w-1 bg-signal" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}