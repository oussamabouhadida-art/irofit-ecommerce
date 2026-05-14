import { useEffect, useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Signature } from '../components/Wordmark.jsx';

const messages = [
  { lang: 'EN', text: 'Arriving October 2026.' },
  { lang: 'FR', text: 'Octobre 2026, parmi vous.' },
  { lang: 'ES', text: 'Octubre 2026, entre nosotros.' },
];

const universes = [
  {
    id: 'her',
    label: 'IRO HER',
    line: 'IROfit Flow',
    word: 'Flow',
    tagline: 'Her Flow.',
    body: 'Pilates, yoga, breath. Quiet practice for a steady body.',
    products: ['Socks', 'Ring', 'Bands', 'Ball'],
    swatches: [
      { name: 'Cream',  hex: '#F5F0EB' },
      { name: 'Forest', hex: '#2D4132' },
    ],
    status: 'First drop · October 2026',
    accent: 'forest',
  },
  {
    id: 'him',
    label: 'IRO HIM',
    line: 'IROfit Fire',
    word: 'Fire',
    tagline: 'His Fire.',
    body: 'Strength, conditioning, intent. Tools for the daily forge.',
    products: ['Rope', 'Grips'],
    swatches: [
      { name: 'Ink',      hex: '#1A1612' },
      { name: 'Charcoal', hex: '#3A332C' },
    ],
    status: 'First drop · October 2026',
    accent: 'ink',
  },
  {
    id: 'kids',
    label: 'IRO KIDS',
    line: 'IROfit Joy',
    word: 'Joy',
    tagline: 'Their Joy.',
    body: 'Movement as play. Built for small hands and free legs.',
    products: ['To be revealed'],
    swatches: [
      { name: 'Cream',  hex: '#F5F0EB' },
      { name: 'Forest', hex: '#2D4132' },
      { name: 'Ink',    hex: '#1A1612' },
    ],
    status: 'Phase II · Spring 2027',
    accent: 'cream',
  },
];

export default function Home() {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % messages.length), 3400);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-10 pt-10 pb-20">
        <div className="max-w-[1400px] w-full mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-[11px] uppercase tracking-ultra text-cream/55"
          >
            A premium fitness lifestyle brand
          </motion.p>

          <h1 className="mt-8 font-display font-normal leading-[0.95] text-[14vw] md:text-[9.5vw] lg:text-[8.5rem]">
            <Word delay={0.15}>Her <em className="italic font-light">Flow</em>.</Word>
            <br />
            <Word delay={0.35}>His <em className="italic font-light">Fire</em>.</Word>
            <br />
            <Word delay={0.55}>Their <em className="italic font-light">Joy</em>.</Word>
          </h1>

          <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-md text-cream/70 text-sm leading-relaxed"
            >
              Three energies under one roof, woven into a single rhythm.
              IROfit is movement made for real life — quiet, intentional, alive.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="flex items-center gap-5"
            >
              <span className="text-[10px] uppercase tracking-ultra text-cream/45">
                {messages[idx].lang}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={idx}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5 }}
                  className="font-display italic text-2xl md:text-3xl font-normal"
                >
                  {messages[idx].text}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MANIFESTO STRIP */}
      <section className="relative px-6 md:px-10 py-16 md:py-24 border-t border-cream/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-2xl md:text-4xl leading-snug font-normal"
          >
            Three beats. <em className="italic font-light">One rhythm.</em>
            <span className="block mt-4 text-cream/65 text-base md:text-xl">
              A family brand born of three energies. Designed slowly, made to be lived in.
            </span>
          </motion.p>
        </div>
      </section>

      {/* THREE UNIVERSES */}
      <section className="relative px-6 md:px-10 pt-20 md:pt-28 pb-10 border-t border-cream/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-baseline justify-between mb-14 md:mb-20">
            <h2 className="font-display text-3xl md:text-5xl font-normal">
              Three universes.
            </h2>
            <span className="text-[10px] uppercase tracking-ultra text-cream/45">
              The collections
            </span>
          </div>

          <div className="space-y-8 md:space-y-10">
            {universes.map((u, i) => (
              <UniverseCard key={u.id} u={u} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER + INSTAGRAM */}
      <section className="relative px-6 md:px-10 py-28 md:py-36 border-t border-cream/10 mt-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[11px] uppercase tracking-ultra text-cream/55"
            >
              The first chapter — October 2026
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mt-6 font-display text-3xl md:text-5xl font-normal leading-tight"
            >
              Be the first to <em className="italic font-light">step in</em>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-5 text-cream/65 text-sm md:text-base max-w-md leading-relaxed"
            >
              No noise, no spam. One letter when there's something worth telling
              you — drops, films, behind the atelier.
            </motion.p>

            <NewsletterForm />
          </div>

          <div className="md:col-span-5 md:border-l md:border-cream/10 md:pl-12">
            <p className="text-[11px] uppercase tracking-ultra text-cream/55">
              Follow the rhythm
            </p>
            <a
              href="https://www.instagram.com/iro.fit/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 group block"
            >
              <div className="font-display text-3xl md:text-4xl font-normal flex items-baseline gap-3">
                <em className="italic font-light">@iro.fit</em>
                <span className="text-cream/40 group-hover:text-cream transition-colors text-2xl">
                  ↗
                </span>
              </div>
              <p className="mt-3 text-cream/55 text-sm">
                Reels, mood, and the early sketches.
              </p>
            </a>

            <div className="mt-10 pt-6 border-t border-cream/10 text-cream/55 text-sm">
              <p>For everything else:</p>
              <a
                href="mailto:team@irofit.fr"
                className="font-display italic text-xl text-cream hover:opacity-80 transition-opacity"
              >
                team@irofit.fr
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Word({ children, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}

function UniverseCard({ u, index }) {
  // Each universe gets its own color treatment via inline tokens.
  const isHer  = u.id === 'her';
  const isHim  = u.id === 'him';
  const isKids = u.id === 'kids';
  const reverse = index % 2 === 1;

  const cardBg =
    isHer  ? 'bg-forest/15 border-forest/30' :
    isHim  ? 'bg-cream/[0.04] border-cream/15' :
             'bg-cream/[0.025] border-cream/10';

  const wordColor =
    isHer  ? 'text-cream' :
    isHim  ? 'text-cream' :
             'text-cream/85';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 border ${cardBg} px-6 md:px-10 py-10 md:py-14`}
    >
      {/* Left meta */}
      <div className={`md:col-span-4 ${reverse ? 'md:order-last' : ''}`}>
        <div className="flex items-center justify-between md:justify-start md:gap-4 text-[10px] uppercase tracking-ultra text-cream/50">
          <span>0{index + 1}</span>
          <span>{u.label}</span>
        </div>
        <h3 className={`mt-6 font-display text-5xl md:text-6xl font-normal leading-none ${wordColor}`}>
          <span className="block text-cream/55 text-xl md:text-2xl mb-3 not-italic font-normal">
            IROfit
          </span>
          <Signature>{u.word}</Signature>
        </h3>
        <p className="mt-6 font-display italic text-lg md:text-xl text-cream/80">
          {u.tagline}
        </p>
      </div>

      {/* Right content */}
      <div className="md:col-span-8 flex flex-col justify-between gap-8">
        <p className="text-cream/75 text-base md:text-lg leading-relaxed max-w-xl">
          {u.body}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-6 border-t border-cream/10">
          <div>
            <p className="text-[10px] uppercase tracking-ultra text-cream/45 mb-3">Pieces</p>
            <ul className="space-y-1.5 text-sm text-cream/80">
              {u.products.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-ultra text-cream/45 mb-3">Palette</p>
            <div className="flex items-center gap-3">
              {u.swatches.map((s) => (
                <div key={s.name} className="flex flex-col items-start gap-1.5">
                  <span
                    className="block w-8 h-8 rounded-full border border-cream/15"
                    style={{ background: s.hex }}
                    title={s.name}
                  />
                  <span className="text-[9px] uppercase tracking-[0.2em] text-cream/45">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-ultra text-cream/45 mb-3">Status</p>
            <p className="text-sm text-cream/80 leading-snug">{u.status}</p>
          </div>
        </div>
      </div>

      {isKids && (
        <span className="absolute top-4 right-4 md:top-6 md:right-6 text-[9px] uppercase tracking-ultra text-cream/45 border border-cream/20 px-2.5 py-1 rounded-full">
          Coming 2027
        </span>
      )}
    </motion.div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email) return;
    try {
      const list = JSON.parse(localStorage.getItem('irofit:waitlist') || '[]');
      list.push({ email, at: new Date().toISOString(), source: 'home' });
      localStorage.setItem('irofit:waitlist', JSON.stringify(list));
    } catch {}
    setSent(true);
  }

  return (
    <div className="mt-10">
      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0 sm:border-b border-cream/25 focus-within:border-cream transition-colors"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent outline-none py-4 text-lg placeholder:text-cream/30 border-b border-cream/25 sm:border-0"
            />
            <button
              type="submit"
              className="text-[11px] uppercase tracking-ultra px-6 py-4 border sm:border-0 sm:border-l border-cream/30 hover:bg-cream hover:text-ink transition-colors duration-500 sm:pl-8"
            >
              Join the rhythm →
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl md:text-3xl font-normal leading-snug py-4"
          >
            Thank you. <em className="italic font-light">We'll write soon.</em>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
