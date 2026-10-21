import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/site/Reveal';
import { CONTACT_CHANNELS } from '@/lib/content';

export default function Contact() {
  const showChannels = () => {
    document.getElementById('contact-channels')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container-rv">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-14 text-center md:py-20"
            style={{ background: 'radial-gradient(70% 100% at 50% 100%, rgba(20,93,255,0.4), rgba(8,10,16,0) 75%)' }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">Contact</p>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-[clamp(2rem,5.5vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground">
              Have an idea{' '}
              <span className="bg-gradient-to-r from-electric via-signal to-electric bg-clip-text text-transparent">
                worth building?
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Tell us what you&apos;re working on. We&apos;ll help you define the right digital solution.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/start-a-project"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground py-2 pl-6 pr-2 text-sm font-medium text-background transition-colors duration-300 hover:bg-white"
              >
                Start a Project
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <button
                type="button"
                onClick={showChannels}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-electric hover:text-electric"
              >
                Request a demo
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div id="contact-channels" className="mx-auto mt-5 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">Direct lines</h3>
            <ul className="mt-4 grid gap-x-10 sm:grid-cols-2">
              {CONTACT_CHANNELS.map((channel) => (
                <li
                  key={channel.label}
                  className="flex items-baseline justify-between gap-6 border-t border-white/10 py-3.5"
                >
                  <span className="text-sm text-foreground/90">{channel.label}</span>
                  <span className="text-xs text-muted-foreground/50">{channel.note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-white/10 pt-5 text-xs leading-relaxed text-muted-foreground/60">
              Direct details are being finalised. Today, the fastest way to reach us is the project brief — it lands
              straight with the team.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}