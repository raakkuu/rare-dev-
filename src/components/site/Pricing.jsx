import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/site/Reveal';
import { PRICING_NOTES, PRICING_TIERS } from '@/lib/content';

/** Editorial pricing rows on a light surface — the one deliberate contrast section. */
export default function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-20 text-paper-foreground md:py-32">
      <div className="container-rv">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <h2 className="label-mono text-black/50">Pricing</h2>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="max-w-3xl font-display text-[clamp(1.75rem,4.1vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em]">
                Transparent pricing, settled before we build.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-2xl leading-relaxed text-black/60">
                Starting points, not final numbers. What a project costs depends on requirements, functionality,
                integrations, and scope — and every quote is fixed and agreed in writing before work starts.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16">
          {PRICING_TIERS.map((tier) => (
            <Link
              key={tier.no}
              to={`/start-a-project?type=${encodeURIComponent(tier.type)}`}
              className="group grid gap-2 border-t border-black/10 py-7 transition-colors duration-500 hover:border-black/40 sm:grid-cols-[3rem_1fr_auto_auto] sm:items-baseline sm:gap-8"
            >
              <span className="label-mono text-black/35">{tier.no}</span>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] md:text-3xl">{tier.name}</h3>
                <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-black/60">{tier.body}</p>
              </div>
              <p className="font-display text-xl font-medium tracking-[-0.01em] sm:text-right md:text-2xl">
                {tier.price}
              </p>
              <span className="inline-flex items-center gap-2 label-mono text-electric">
                Enquire
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
          <div className="border-t border-black/10" />
        </div>

        <div className="mt-14 grid gap-x-12 md:grid-cols-3">
          {PRICING_NOTES.map((note) => (
            <div key={note.no} className="border-t border-black/10 py-7">
              <span className="label-mono text-electric">{note.no}</span>
              <h3 className="mt-4 font-display text-lg tracking-[-0.02em] md:text-xl">{note.title}</h3>
              <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-black/60">{note.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[0.95rem] leading-relaxed text-black/60">
            Not sure which tier fits? Describe the problem — we&apos;ll tell you what it takes to solve it.
          </p>
          <Link
            to="/start-a-project"
            className="group inline-flex items-center justify-between gap-6 border border-paper-foreground bg-paper-foreground px-6 py-4 label-mono text-paper transition-colors duration-300 hover:border-electric hover:bg-electric sm:justify-start"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}