import { motion } from 'framer-motion';

// Three lines converging toward an invisible center, never touching.
// thin = flow, medium = joy, thick = fire.
export default function Mark({ size = 28, animated = true }) {
  const stroke = '#F5F0EB';
  const lines = [
    { x1: 4, y1: 22, x2: 12, y2: 14, w: 0.9 },   // flow
    { x1: 14, y1: 24, x2: 14, y2: 14, w: 1.8 },  // joy
    { x1: 24, y1: 22, x2: 16, y2: 14, w: 3.2 },  // fire
  ];

  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-label="IROFIT mark">
      {lines.map((l, i) =>
        animated ? (
          <motion.line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke={stroke}
            strokeWidth={l.w}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : (
          <line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke={stroke}
            strokeWidth={l.w}
            strokeLinecap="round"
          />
        )
      )}
    </svg>
  );
}
