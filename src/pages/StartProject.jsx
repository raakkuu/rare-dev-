import { Link } from 'react-router-dom';
import Nav from '@/components/site/Nav';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import ProjectForm from '@/components/site/ProjectForm';

const NEXT_STEPS = [
  {
    no: '01',
    title: 'We read it properly',
    body: 'No automated sequence and no sales follow-up — a person reads your brief.',
  },
  {
    no: '02',
    title: 'We come back with questions',
    body: 'If something is unclear we ask, rather than assume and quote the wrong thing.',
  },
  {
    no: '03',
    title: 'You get scope and a number',
    body: 'A fixed quote and a realistic timeline, in writing, before any work starts.',
  },
];

export default function StartProject() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="page-in relative pt-32 md:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"
          style={{ background: 'radial-gradient(55% 60% at 50% 0%, rgba(20,93,255,0.35), rgba(8,10,16,0) 72%)' }}
        />
        <div className="container-rv pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">Start a project</p>
            <h1 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
              Tell us what you&apos;re building.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              A few lines is enough. The more you tell us about the problem, the more useful our first reply will be.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {NEXT_STEPS.map((step, i) => (
                <Reveal key={step.no} delay={i * 0.05}>
                  <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-electric/15 to-transparent" />
                    <span className="relative text-xs font-medium text-electric">{step.no}</span>
                    <h3 className="relative mt-3 font-display text-lg font-semibold tracking-[-0.01em] text-foreground">
                      {step.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.15}>
                <p className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-sm leading-relaxed text-muted-foreground">
                  Prefer to look around first?{' '}
                  <Link
                    to="/"
                    className="text-foreground underline decoration-white/20 underline-offset-4 transition-colors duration-300 hover:text-electric"
                  >
                    Back to the homepage
                  </Link>
                  .
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ProjectForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}