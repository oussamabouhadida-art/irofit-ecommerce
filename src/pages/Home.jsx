import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Signature } from '../components/Wordmark.jsx';

const universes = [
  {
    id: 'flow',
    title: 'FLOW',
    emoji: '🌊',
    description: 'Mouvement doux. Intentionnel. Pour tous.',
    sub: 'Pilates, yoga, bien-être.',
    products: ['Chaussettes', 'Anneau', 'Bandes', 'Balle', 'Sac'],
    accent: '#2D4132', // forest
    accentName: 'Vert forêt',
    onDark: true,
  },
  {
    id: 'fire',
    title: 'FIRE',
    emoji: '🔥',
    description: 'Mouvement puissant. Intense. Pour tous.',
    sub: 'CrossFit, musculation, force.',
    products: ['Corde à sauter', 'Grips', 'Protège poignet'],
    accent: '#1A1612', // ink
    accentName: 'Noir chaud',
    onDark: true,
  },
  {
    id: 'joy',
    title: 'JOY',
    emoji: '🎉',
    description: 'Enfants & famille.',
    sub: 'Printemps 2027.',
    products: ['À révéler'],
    accent: '#F5F0EB', // cream
    accentName: 'Crème ivoire',
    onDark: false,
    comingSoon: true,
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center px-6 md:px-10 pt-10 pb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-[11px] uppercase tracking-ultra text-ink/55"
        >
          IROfit
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display italic font-normal text-ink leading-[0.95] text-[14vw] md:text-[8.5vw] lg:text-[7.5rem] max-w-[18ch]"
        >
          Three Beats. One Rhythm.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 font-sans font-light text-lg md:text-2xl text-ink/70 max-w-xl"
        >
          Premium fitness pour familles actives.
        </motion.p>

        {/* Palette swatches */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-14 flex items-center justify-center gap-2"
          aria-hidden
        >
          <span className="block w-10 h-10 md:w-12 md:h-12 border border-ink/15" style={{ background: '#F5F0EB' }} />
          <span className="block w-10 h-10 md:w-12 md:h-12" style={{ background: '#2D4132' }} />
          <span className="block w-10 h-10 md:w-12 md:h-12" style={{ background: '#1A1612' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="mt-12 text-[11px] uppercase tracking-ultra text-ink/55"
        >
          Lancement · Octobre 2026
        </motion.p>
      </section>

      {/* THREE UNIVERSES */}
      <section className="relative px-6 md:px-10 py-24 md:py-32 border-t border-ink/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-baseline justify-between mb-14 md:mb-20">
            <h2 className="font-display italic text-3xl md:text-5xl font-normal">
              Trois univers.
            </h2>
            <span className="text-[10px] uppercase tracking-ultra text-ink/45">
              Les collections
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {universes.map((u, i) => (
              <UniverseCard key={u.id} u={u} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="relative px-6 md:px-10 py-28 md:py-36 border-t border-ink/10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[11px] uppercase tracking-ultra text-ink/55"
          >
            Newsletter
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 font-display text-3xl md:text-5xl font-normal leading-tight"
          >
            Rejoins <em className="italic font-light">1000+</em> en attente d'octobre.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-5 text-ink/65 text-base leading-relaxed"
          >
            Sois le premier à savoir quand IROfit lance.
          </motion.p>

          <NewsletterForm />
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="relative px-6 md:px-10 py-24 md:py-32 border-t border-ink/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-baseline justify-between mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-normal">
              Suis <em className="italic font-light">@iro.fit</em>
            </h2>
            <a
              href="https://www.instagram.com/iro.fit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-ultra text-ink/55 hover:text-ink transition-colors"
            >
              Voir le feed ↗
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[0, 1, 2, 3].map((i) => (
              <InstagramTile key={i} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function UniverseCard({ u, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col border border-ink/15 overflow-hidden group"
      style={{
        background: u.onDark ? u.accent : '#FFFFFF',
        color: u.onDark ? '#F5F0EB' : '#1A1612',
      }}
    >
      {/* Top : emoji + title block */}
      <div className="px-8 pt-10 pb-8 flex flex-col items-start">
        <span
          className="text-[10px] uppercase tracking-ultra mb-6"
          style={{ color: u.onDark ? 'rgba(245,240,235,0.55)' : 'rgba(26,22,18,0.55)' }}
        >
          0{index + 1} · IROfit {u.title.charAt(0) + u.title.slice(1).toLowerCase()}
        </span>

        <div className="text-5xl md:text-6xl mb-5" aria-hidden>
          {u.emoji}
        </div>

        <h3 className="font-display italic font-normal text-5xl md:text-6xl leading-none">
          {u.title.toLowerCase().charAt(0).toUpperCase() + u.title.toLowerCase().slice(1)}
        </h3>
      </div>

      {/* Middle : description */}
      <div
        className="px-8 py-8 border-t flex-1"
        style={{ borderColor: u.onDark ? 'rgba(245,240,235,0.18)' : 'rgba(26,22,18,0.12)' }}
      >
        <p className="text-base md:text-lg leading-relaxed font-light">
          {u.description}
        </p>
        <p
          className="mt-2 text-sm font-light"
          style={{ color: u.onDark ? 'rgba(245,240,235,0.7)' : 'rgba(26,22,18,0.65)' }}
        >
          {u.sub}
        </p>
      </div>

      {/* Bottom : products */}
      <div
        className="px-8 py-6 border-t"
        style={{ borderColor: u.onDark ? 'rgba(245,240,235,0.18)' : 'rgba(26,22,18,0.12)' }}
      >
        <p
          className="text-[10px] uppercase tracking-ultra mb-3"
          style={{ color: u.onDark ? 'rgba(245,240,235,0.5)' : 'rgba(26,22,18,0.5)' }}
        >
          Pièces
        </p>
        <ul className="space-y-1 text-sm">
          {u.products.map((p) => (
            <li key={p}>· {p}</li>
          ))}
        </ul>
      </div>

      {u.comingSoon && (
        <span
          className="absolute top-4 right-4 text-[9px] uppercase tracking-ultra border px-2.5 py-1 rounded-full"
          style={{
            borderColor: 'rgba(26,22,18,0.25)',
            color: 'rgba(26,22,18,0.65)',
          }}
        >
          Printemps 2027
        </span>
      )}
    </motion.article>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  // TODO: brancher Mailchimp/Brevo
  // Quand l'URL d'action sera disponible (ex.
  // https://xxx.us-X.list-manage.com/subscribe/post?u=XXX&id=YYY),
  // remplacer onSubmit par un POST vers cette URL.
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
            className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ton@email.com"
              className="flex-1 bg-transparent border border-ink/25 focus:border-ink outline-none py-4 px-5 text-base placeholder:text-ink/30 transition-colors"
            />
            <button
              type="submit"
              className="text-[11px] uppercase tracking-ultra px-7 py-4 text-cream transition-colors duration-300 hover:opacity-90"
              style={{ background: '#2D4132' }}
            >
              S'abonner
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display italic text-2xl md:text-3xl font-normal py-6"
          >
            Merci ! À octobre !
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InstagramTile({ index }) {
  // Placeholder tiles linking to Instagram. To wire up the real feed later,
  // replace this component with an Instagram Graph API fetch (or use a
  // lightweight third party like SnapWidget / EmbedSocial).
  const palettes = [
    { bg: '#2D4132', fg: '#F5F0EB' },
    { bg: '#F5F0EB', fg: '#1A1612', border: true },
    { bg: '#1A1612', fg: '#F5F0EB' },
    { bg: '#EFE7DE', fg: '#1A1612', border: true },
  ];
  const p = palettes[index % palettes.length];
  const captions = ['Flow', 'Atelier', 'Fire', 'En coulisses'];

  return (
    <a
      href="https://www.instagram.com/iro.fit/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-square block overflow-hidden group"
      style={{
        background: p.bg,
        color: p.fg,
        border: p.border ? '1px solid rgba(26,22,18,0.12)' : 'none',
      }}
      aria-label={`Instagram · ${captions[index]}`}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
        <span className="text-[10px] uppercase tracking-ultra opacity-70">
          @iro.fit
        </span>
        <div>
          <div className="font-display italic text-2xl md:text-3xl font-normal">
            {captions[index]}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-ultra opacity-70">
            Voir sur Instagram ↗
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ background: 'rgba(45,65,50,0.12)' }}
      />
    </a>
  );
}
