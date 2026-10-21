import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Nav from '@/components/site/Nav';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';

export default function Labs() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="page-in">
        <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-32">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]"
            style={{ background: 'radial-gradient(60% 60% at 50% 10%, rgba(20,93,255,0.45), rgba(8,10,16,0) 72%)' }}
          />
          <div aria-hidden="true" className="blueprint blueprint-fade pointer-events-none absolute inset-0 opacity-40" />

          <div className="container-rv relative py-16 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
              RARE ecosystem — product studio
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,8vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-foreground">
              RARE{' '}
              <span className="bg-gradient-to-r from-electric via-signal to-electric bg-clip-text text-transparent">
                LABS
              </span>
            </h1>
            <span className="mt-6 inline-block rounded-full border border-electric/50 bg-electric/10 px-4 py-1.5 text-xs font-medium text-electric">
              In build — coming soon
            </span>
            <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              RARE LABS is the product-building side of the RARE ecosystem — applications, games, and software we
              create and own ourselves. The first products are taking shape now.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/start-a-project"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground py-2 pl-6 pr-2 text-sm font-medium text-background transition-colors duration-300 hover:bg-white"
              >
                Start a Project
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                to="/"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-electric hover:text-electric"
              >
                Back to RARE DEV
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}