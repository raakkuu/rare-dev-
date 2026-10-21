import { ArrowUpRight } from 'lucide-react';
import ProjectVisual from '@/components/site/ProjectVisual';

export default function WorkCard({ project, index, onOpen }) {
  const flipped = index % 2 === 1;

  return (
    <article className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View project ${project.title}`}
        className={`group relative block w-full border border-border text-left transition-colors duration-500 hover:border-foreground/25 ${
          flipped ? 'lg:order-2 lg:col-span-7 lg:col-start-6' : 'lg:col-span-7'
        }`}
      >
        <ProjectVisual variant={project.visual} />
        <span className="label-mono absolute bottom-4 right-4 inline-flex items-center gap-2 bg-background/80 px-3 py-2 text-muted-foreground opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
          View project
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </button>

      <div className={`lg:col-span-4 ${flipped ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-9'}`}>
        <p className="label-mono text-muted-foreground/60">
          {project.no} / {project.category}
        </p>
        <h3 className="mt-5 font-display text-[2rem] font-medium uppercase leading-none tracking-[-0.03em] text-foreground md:text-[2.5rem]">
          {project.title}
        </h3>
        <p className="mt-6 leading-relaxed text-muted-foreground">{project.description}</p>

        <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-5">
          <div>
            <dt className="label-mono text-muted-foreground/50">Status</dt>
            <dd className="mt-2 text-sm text-foreground/85">{project.sector}</dd>
          </div>
          <div>
            <dt className="label-mono text-muted-foreground/50">Year</dt>
            <dd className="mt-2 text-sm text-foreground/85">{project.year}</dd>
          </div>
        </dl>

        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
          {project.tags.map((tag) => (
            <li key={tag} className="label-mono text-muted-foreground/70">
              {tag}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onOpen}
          className="group mt-8 inline-flex items-center gap-3 border-b border-transparent pb-1 label-mono text-foreground transition-colors duration-300 hover:border-signal hover:text-signal"
        >
          View project
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
}