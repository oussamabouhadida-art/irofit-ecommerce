import { motion, useReducedMotion } from 'framer-motion';

// IROFIT seal — 3 rays at 120° apart converging toward an invisible center.
// thin = flow (Rim), medium = joy (Ilyan), thick = fire (Oussama).
// They never touch the center — three beats, one heart.
//
// Geometry (viewBox 64x64, center 32,32, outer r=28):
//   joy  → 270° (top)         · medium 1.4
//   fire → 30°  (bottom-right) · thick  2.6
//   flow → 150° (bottom-left)  · thin   0.7
const RAYS = [
  { angle: 270, width: 1.4 }, // joy
  { angle: 30, width: 2.6 },  // fire
  { angle: 150, width: 0.7 }, // flow
];

const OUTER_R = 27;
const INNER_R = 8; // gap radius — keeps the heart hollow

function endpoints(angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  return {
    x1: 32 + OUTER_R * cos,
    y1: 32 + OUTER_R * sin,
    x2: 32 + INNER_R * cos,
    y2: 32 + INNER_R * sin,
  };
}

export default function Logo({
  size = 36,
  animated = true,
  ring = true,
  color = '#F5F0EB',
  ringOpacity = 0.35,
  className = '',
}) {
  const reduce = useReducedMotion();
  const shouldAnimate = animated && !reduce;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="IROFIT"
      className={className}
    >
      {ring && (
        <motion.circle
          cx="32"
          cy="32"
          r="30"
          stroke={color}
          strokeWidth="0.6"
          fill="none"
          initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : false}
          animate={shouldAnimate ? { pathLength: 1, opacity: ringOpacity } : { opacity: ringOpacity }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      {RAYS.map((r, i) => {
        const p = endpoints(r.angle);
        return (
          <motion.line
            key={i}
            x1={p.x1}
            y1={p.y1}
            x2={p.x2}
            y2={p.y2}
            stroke={color}
            strokeWidth={r.width}
            strokeLinecap="round"
            initial={shouldAnimate ? { pathLength: 0, opacity: 0 } : false}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.3 + i * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        );
      })}

      {/* invisible center, hinted only on hover via parent */}
      <circle cx="32" cy="32" r="0.9" fill={color} opacity="0.35" />
    </svg>
  );
}
