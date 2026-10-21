import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '@/components/site/Nav';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import Approach from '@/components/site/Approach';
import Ecosystem from '@/components/site/Ecosystem';
import LabsTeaser from '@/components/site/LabsTeaser';
import Contact from '@/components/site/Contact';
import { EXPERTISE, STUDIO } from '@/lib/content';

export default function About() {
  const { hash } = useLocation();

  // Restore scroll position when arriving from another page (e.g. /about#ecosystem)
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="page-in">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 md:pt-44">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px]"
            style={{ background: 'radial-gradient(60% 60% at 50% 0%, rgba(20,93,255,0.4), rgba(8,10,16,0) 72%)' }}
          />
          <div className="container-rv pb-16 text-center md:pb-24">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">About RARE DEV</p>
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.4rem,6.5vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
              Technology should feel simple.{' '}
              <span className="bg-gradient-to-r from-electric via-signal to-electric bg-clip-text text-transparent">
                Building it shouldn&apos;t.
              </span>
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {STUDIO.description}
            </p>
          </div>
        </section>

        {/* The studio */}
        <section className="py-14 md:py-20">
          <div className="container-rv">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <p className="font-display text-[clamp(1.4rem,3vw,2.1rem)] font-medium leading-[1.25] tracking-[-0.02em] text-foreground">
                  RARE DEV is a technology studio focused on building useful, polished digital products — for
                  businesses that care how things are made.
                </p>
              </Reveal>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <p className="leading-relaxed text-muted-foreground">
                    Most projects need more than one skill at the same time. Something has to be designed. Something
                    has to be engineered. Something should run on its own. So we keep all of it under one roof, and one
                    standard.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <p className="leading-relaxed text-muted-foreground">
                    No account managers and no handovers to whoever happens to be free that week. You talk to the
                    people who design and build the thing — from the first conversation to long after launch.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <h2 className="mt-16 text-center font-display text-[clamp(1.6rem,4vw,2.4rem)] font-semibold tracking-[-0.02em] text-foreground">
                What we combine
              </h2>
            </Reveal>
            <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {EXPERTISE.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-500 hover:border-electric/40">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-electric/15 to-transparent" />
                    <span className="relative text-xs font-medium text-electric">{`0${i + 1}`}</span>
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

        <Approach />
        <Ecosystem />
        <LabsTeaser />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}