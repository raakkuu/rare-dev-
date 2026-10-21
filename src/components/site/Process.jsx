import Reveal from '@/components/site/Reveal';
import { PROCESS_STEPS } from '@/lib/content';

export default function Process() {
  return (
    <section id="process" className="border-b border-border py-20 md:py-32">
      <div className="container-rv">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <h2 className="label-mono text-muted-foreground">Process</h2>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="max-w-3xl font-display text-[clamp(1.75rem,4.1vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-foreground">
                Seven steps. No mystery.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                Projects are not built randomly. Every one follows the same structured path — you always know which
                step you&apos;re on and what comes next.
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="mt-16 border-t border-border">
          {PROCESS_STEPS.map((step) => (
            <li
              key={step.no}
              className="group grid gap-2 border-b border-border py-7 sm:grid-cols-[7rem_14rem_1fr] sm:items-baseline sm:gap-8"
            >
              <span className="font-display text-4xl font-semibold leading-none text-border transition-colors duration-500 group-hover:text-electric md:text-5xl">
                {step.no}
              </span>
              <h3 className="font-display text-xl tracking-[-0.02em] text-foreground md:text-2xl">{step.title}</h3>
              <p className="max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}