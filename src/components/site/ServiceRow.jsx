import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceRow({ service }) {
  return (
    <article className="group relative -mx-5 grid grid-cols-1 gap-x-6 gap-y-4 border-b border-border px-5 py-8 transition-colors duration-500 hover:bg-surface/60 md:-mx-8 md:grid-cols-12 md:items-baseline md:px-8 md:py-10">
      <span className="font-display text-4xl font-semibold leading-none text-border transition-colors duration-500 group-hover:text-electric md:col-span-2 md:text-5xl">
        {service.no}
      </span>

      <h3 className="font-display text-2xl font-medium uppercase leading-none tracking-[-0.03em] text-foreground md:col-span-3 md:text-[2rem] lg:text-[2.5rem]">
        <span className="relative inline-block">
          {service.title}
          <span className="absolute -bottom-2 left-0 h-px w-0 bg-electric transition-all duration-500 group-hover:w-1/2" />
        </span>
      </h3>

      <p className="max-w-md text-[0.95rem] leading-relaxed text-muted-foreground md:col-span-3">{service.body}</p>

      <div className="flex flex-col items-start gap-4 md:col-span-4 md:items-end">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100">
          {service.tags.map((tag) => (
            <li key={tag} className="label-mono text-muted-foreground/70">
              {tag}
            </li>
          ))}
        </ul>
        <Link
          to={`/start-a-project?type=${encodeURIComponent(service.title)}`}
          className="group/cta inline-flex items-center gap-2 label-mono text-muted-foreground transition-colors duration-300 hover:text-electric"
        >
          Start this project
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}