import { motion } from 'framer-motion';

// IROFIT wordmark — Inter 300 with extreme tracking. The dot inside the "O"
// is the invisible-center motif from the seal, made just barely visible.
export default function Wordmark({
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  animated = false,
  className = '',
}) {
  const sizes = {
    sm: 'text-[11px]',
    md: 'text-sm',
    lg: 'text-lg',
    xl: 'text-2xl md:text-3xl',
  };

  const letters = 'IROFIT'.split('');

  if (!animated) {
    return (
      <span
        className={`font-sans font-light uppercase tracking-[0.42em] ${sizes[size]} ${className}`}
      >
        {letters.map((l, i) => (
          <span key={i} className={l === 'O' ? 'relative' : ''}>
            {l}
            {l === 'O' && (
              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[2px] rounded-full bg-current opacity-50"
              />
            )}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span
      className={`font-sans font-light uppercase tracking-[0.42em] ${sizes[size]} ${className}`}
    >
      {letters.map((l, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          className={l === 'O' ? 'relative inline-block' : 'inline-block'}
        >
          {l}
          {l === 'O' && (
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[2px] rounded-full bg-current opacity-50"
            />
          )}
        </motion.span>
      ))}
    </span>
  );
}
