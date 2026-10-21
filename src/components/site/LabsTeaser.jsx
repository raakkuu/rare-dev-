import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/site/Reveal';

export default function LabsTeaser() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-rv">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-white/10 p-8 text-center md:p-14"
            style={{ background: 'radial-gradient(80% 130% at 50% 100%, rgba(20,93,255,0.35), rgba(8,10,16,0) 75%)' }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">RARE Labs</p>
            <p className="mx-auto mt-6 max-w-3xl font-display text-[clamp(1.5rem,3.4vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground">
              Some ideas are built for clients.{' '}
              <span className="text-muted-foreground/70">Some are built because they need to exist.</span>
            </p>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              RARE LABS is where the second kind lives — the product side of the ecosystem, quietly turning our own
              ideas into applications, games, and software we own end to end.
            </p>
            <Link
              to="/labs"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-foreground py-2 pl-6 pr-2 text-sm font-medium text-background transition-colors duration-300 hover:bg-white"
            >
              Explore RARE Labs
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}