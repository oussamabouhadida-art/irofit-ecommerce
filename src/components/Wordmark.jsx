import { motion } from 'framer-motion';

// IROfit wordmark — EB Garamond, "IRO" upright + "fit" italic.
// Inspired by Asif Mulla typographic refinement: subtle, legible, considered.
export default function Wordmark({
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  animated = false,
  className = '',
}) {
  const sizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-5xl md:text-6xl',
    '2xl': 'text-6xl md:text-8xl',
  };

  const content = (
    <>
      <span className="font-normal lowercase">iro</span>
      <span className="italic font-light lowercase">fit</span>
    </>
  );

  if (!animated) {
    return (
      <span
        className={`font-display tracking-[0.02em] ${sizes[size]} ${className}`}
        aria-label="IROfit"
      >
        {content}
      </span>
    );
  }

  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`font-display tracking-[0.02em] ${sizes[size]} ${className}`}
      aria-label="IROfit"
    >
      {content}
    </motion.span>
  );
}

// Small italic sub-signature used under product line names ("Flow", "Fire", "Joy").
export function Signature({ children, className = '' }) {
  return (
    <span className={`font-display italic font-normal ${className}`}>{children}</span>
  );
}
