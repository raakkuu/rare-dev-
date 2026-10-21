import { motion } from 'framer-motion';

/** Subtle scroll reveal used across the site. */
export default function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 0.84, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}