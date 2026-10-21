import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProjectDetail from '@/components/site/ProjectDetail';
import Reveal from '@/components/site/Reveal';
import WorkCard from '@/components/site/WorkCard';
import { PROJECTS } from '@/lib/content';

export default function Work() {
  const [active, setActive] = useState(null);

  return (
    <section id="work" className="border-b border-border py-20 md:py-32">
      <div className="container-rv">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <h2 className="label-mono text-muted-foreground">Selected work</h2>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="max-w-3xl font-display text-[clamp(1.75rem,4.1vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-foreground">
                Digital experiences built with purpose.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                Concept projects, designed and built in-studio to show how we approach each kind of work. Real client
                case studies take their place here as they complete.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-16 md:gap-24">
          {PROJECTS.map((project, i) => (
            <WorkCard key={project.title} project={project} index={i} onOpen={() => setActive(project)} />
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
            Every entry is labelled as a concept — we don&apos;t present studio experiments as client engagements.
          </p>
          <Link
            to="/start-a-project"
            className="group inline-flex items-center justify-between gap-6 border border-border px-6 py-4 label-mono text-foreground transition-colors duration-300 hover:border-electric hover:text-electric sm:justify-start"
          >
            Start a project like these
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <ProjectDetail project={active} onClose={() => setActive(null)} />
    </section>
  );
}