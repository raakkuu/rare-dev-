import Reveal from '@/components/site/Reveal';
import { PRINCIPLES } from '@/lib/content';

export default function Principles() {
  return (
    <section id="why" className="border-b border-border py-20 md:py-32">
      <div className="container-rv">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <h2 className="label-mono text-muted-foreground">Why RARE DEV</h2>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="font-display text-[clamp(1.75rem,4.1vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-foreground">
                Small studio. Serious output.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                We stay deliberately small: fewer projects at a time, senior attention on every one, and no layers
                between you and the people building your product.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((item, i) => (
            <div
              key={item.no}
              className="group border-t border-border py-8 transition-colors duration-500 hover:border-signal/60"
              style={{ transitionDelay: `${i * 15}ms` }}
            >
              <span className="label-mono text-muted-foreground/50">{item.no}</span>
              <h3 className="mt-5 font-display text-xl tracking-[-0.02em] text-foreground md:text-2xl">{item.title}</h3>
              <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}