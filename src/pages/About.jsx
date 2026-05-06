import { motion } from 'framer-motion';

export default function About() {
  return (
    <article className="px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] uppercase tracking-ultra text-cream/55"
        >
          About — The story
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 font-display text-5xl md:text-7xl font-light leading-[1.05]"
        >
          A family, written in <em className="font-light">movement</em>.
        </motion.h1>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <p className="text-[10px] uppercase tracking-ultra text-cream/45 mb-4">Origin</p>
            <p className="font-display text-2xl md:text-3xl leading-snug font-light">
              IROFIT was born inside a home, not a boardroom — three rhythms living
              under one roof, learning to keep time together.
            </p>
          </motion.div>

          <div className="md:col-span-6 md:col-start-7 space-y-6 text-cream/70 text-[15px] leading-relaxed">
            <Para delay={0.05}>
              Rim moves like water — the steadiest hand in the room. Oussama trains
              like fire — strength as a quiet promise. Ilyan moves because joy
              insists on it; he is the proof that movement is a first language.
            </Para>
            <Para delay={0.15}>
              IROFIT carries those three energies into a single brand. Not louder,
              not harder — truer. Garments and rituals built for the way real life
              is actually lived.
            </Para>
          </div>
        </div>

        <div className="mt-24 md:mt-36 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-cream/15 pt-14">
          <Pillar n="01" title="Slow craft" body="Few pieces. Considered. Made to outlast the season." />
          <Pillar n="02" title="Quiet design" body="No logos shouting. Let the body and the line speak." />
          <Pillar n="03" title="Movement as life" body="Not a workout. A way of standing in the world." />
        </div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-28 md:mt-40 max-w-3xl mx-auto text-center font-display text-3xl md:text-5xl font-light leading-tight"
        >
          “Three beats. <em>One heart.</em>”
          <span className="block mt-6 text-[10px] uppercase tracking-ultra text-cream/45 not-italic">
            — The IROFIT idea
          </span>
        </motion.blockquote>
      </div>
    </article>
  );
}

function Para({ children, delay = 0 }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.p>
  );
}

function Pillar({ n, title, body }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-[10px] uppercase tracking-ultra text-cream/45 mb-4">{n}</div>
      <h3 className="font-display text-2xl mb-3 font-light">{title}</h3>
      <p className="text-cream/65 text-sm leading-relaxed">{body}</p>
    </motion.div>
  );
}
