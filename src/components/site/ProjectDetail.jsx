import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import ProjectVisual from '@/components/site/ProjectVisual';

export default function ProjectDetail({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (project) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] overflow-y-auto bg-background/95 backdrop-blur-sm"
        >
          <div className="container-rv py-8 md:py-14">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="label-mono text-muted-foreground/60">
                  {project.no} / {project.category}
                </p>
                <h3 className="mt-4 font-display text-[2.25rem] font-medium uppercase leading-none tracking-[-0.03em] text-foreground md:text-[3.5rem]">
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project"
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-border text-foreground transition-colors duration-300 hover:border-signal hover:text-signal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-10 border border-border">
              <ProjectVisual variant={project.visual} label="Concept project" />
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="max-w-2xl text-lg leading-relaxed text-foreground/90">{project.description}</p>
                <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                  This is a demonstration concept, not a client engagement — it shows how the studio approaches a
                  project of this kind. Real case studies will replace these entries.
                </p>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <dl className="grid grid-cols-2 gap-6 border-t border-border pt-5">
                  <div>
                    <dt className="label-mono text-muted-foreground/50">Status</dt>
                    <dd className="mt-2 text-sm text-foreground/85">{project.sector}</dd>
                  </div>
                  <div>
                    <dt className="label-mono text-muted-foreground/50">Year</dt>
                    <dd className="mt-2 text-sm text-foreground/85">{project.year}</dd>
                  </div>
                </dl>
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="label-mono text-muted-foreground/70">
                      {tag}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/start-a-project"
                  className="group mt-8 inline-flex w-full items-center justify-between gap-6 border border-foreground bg-foreground px-6 py-4 label-mono text-background transition-colors duration-300 hover:border-signal hover:bg-signal"
                >
                  Start a project like this
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}