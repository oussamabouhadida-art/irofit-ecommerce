import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Mark from '../components/Mark.jsx';

const messages = [
  { lang: 'EN', text: 'Arriving soon.' },
  { lang: 'FR', text: 'Bientôt parmi vous.' },
  { lang: 'ES', text: 'Pronto entre nosotros.' },
];

const energies = [
  {
    name: 'Flow',
    person: 'Rim',
    line: 'Balance, softness, precision.',
    weight: 0.9,
    delay: 0,
  },
  {
    name: 'Joy',
    person: 'Ilyan',
    line: 'Spontaneous movement, free energy.',
    weight: 1.8,
    delay: 0.12,
  },
  {
    name: 'Fire',
    person: 'Oussama',
    line: 'Strength, intensity, power.',
    weight: 3.2,
    delay: 0.24,
  },
];

export default function Home() {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % messages.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex flex-col justify-center px-6 md:px-10">
        <div className="max-w-[1400px] w-full mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[11px] uppercase tracking-ultra text-cream/55"
          >
            A premium fitness lifestyle brand
          </motion.p>

          <h1 className="mt-8 font-display font-light leading-[0.95] text-[15vw] md:text-[10vw] lg:text-[9rem]">
            <Word delay={0.15}>Her&nbsp;Flow.</Word>
            <br />
            <Word delay={0.35} italic>His&nbsp;Fire.</Word>
            <br />
            <Word delay={0.55}>Their&nbsp;Joy.</Word>
          </h1>

          <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-md text-cream/70 text-sm leading-relaxed"
            >
              Three energies, one rhythm. IROFIT is movement woven into daily life —
              quiet, intentional, alive.
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="flex items-center gap-5"
            >
              <span className="text-[10px] uppercase tracking-ultra text-cream/45">
                {messages[idx].lang}
              </span>
              <motion.span
                key={idx}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5 }}
                className="font-display text-2xl md:text-3xl font-light"
              >
                {messages[idx].text}
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* corner mark */}
        <div className="absolute bottom-8 right-6 md:right-10 opacity-70">
          <Mark size={36} />
        </div>
      </section>

      {/* THREE ENERGIES */}
      <section className="relative px-6 md:px-10 py-28 md:py-40 border-t border-cream/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-baseline justify-between mb-16 md:mb-24">
            <h2 className="font-display text-3xl md:text-5xl font-light">Three beats.</h2>
            <span className="text-[10px] uppercase tracking-ultra text-cream/45">
              01 — The family
            </span>
          </div>

          <EnergiesVisual />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            {energies.map((e, i) => (
              <motion.div
                key={e.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="border-t border-cream/15 pt-6"
              >
                <div className="flex items-center justify-between text-[10px] uppercase tracking-ultra text-cream/45 mb-5">
                  <span>0{i + 1}</span>
                  <span>{e.person}</span>
                </div>
                <h3 className="font-display text-4xl font-light mb-3">{e.name}</h3>
                <p className="text-cream/65 text-sm leading-relaxed">{e.line}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 md:px-10 py-28 md:py-40 border-t border-cream/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[11px] uppercase tracking-ultra text-cream/55"
          >
            The first chapter
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-4xl md:text-6xl font-light leading-tight"
          >
            We are still drawing the lines.
            <br />
            <em className="font-light text-cream/70">Stay close.</em>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-ultra px-7 py-4 border border-cream/30 hover:border-cream hover:bg-cream hover:text-ink transition-colors duration-500"
            >
              Be among the first
              <span aria-hidden>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Word({ children, delay = 0, italic = false }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-block ${italic ? 'italic text-cream/85' : ''}`}
    >
      {children}
    </motion.span>
  );
}

function EnergiesVisual() {
  // Three lines converging toward an invisible center, never touching.
  const reduce = useReducedMotion();
  return (
    <div className="relative h-56 md:h-80 w-full">
      <svg viewBox="0 0 800 280" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* invisible center marker hint */}
        <motion.circle
          cx="400"
          cy="140"
          r="2"
          fill="#F5F0EB"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.35 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />
        {[
          { x1: 60, y1: 240, x2: 360, y2: 152, w: 0.9 },   // flow
          { x1: 400, y1: 250, x2: 400, y2: 152, w: 1.8 },  // joy
          { x1: 740, y1: 240, x2: 440, y2: 152, w: 3.4 },  // fire
        ].map((l, i) => (
          <motion.line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="#F5F0EB"
            strokeWidth={l.w}
            strokeLinecap="round"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.4, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex justify-between text-[10px] uppercase tracking-ultra text-cream/45 px-2 md:px-4">
        <span>Flow</span>
        <span>Joy</span>
        <span>Fire</span>
      </div>
    </div>
  );
}
