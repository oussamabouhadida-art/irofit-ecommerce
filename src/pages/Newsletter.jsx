import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INSTAGRAM_URL =
  'https://www.instagram.com/iro.fit?igsh=MWJvMnBlenQ5NDh4dg%3D%3D&utm_source=qr';

const promises = [
  {
    n: '01',
    title: 'Une lettre, pas dix.',
    body: 'On écrit seulement quand quelque chose mérite ton attention. Aucune pression, jamais.',
  },
  {
    n: '02',
    title: 'En avant-première.',
    body: 'Drops, films, coulisses de l\'atelier — tu sauras avant tout le monde, dès octobre 2026.',
  },
  {
    n: '03',
    title: 'Tu pars quand tu veux.',
    body: 'Un clic pour te désinscrire. Aucune question. On respecte ton temps.',
  },
];

export default function Newsletter() {
  return (
    <article className="px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto">
        {/* HEADER */}
        <div className="max-w-[820px]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-ultra text-ink/55"
          >
            Newsletter — Octobre 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 font-display text-5xl md:text-7xl font-normal leading-[1.05]"
          >
            Rejoins le{' '}
            <em className="italic font-light">cercle</em>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 text-ink/70 text-lg md:text-xl leading-relaxed font-light max-w-[580px]"
          >
            Sois parmi les premiers à entrer chez IROfit. Pas de bruit,
            pas de spam — juste une lettre quand on a quelque chose à
            te dire qui en vaut la peine.
          </motion.p>
        </div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-20 max-w-[680px]"
        >
          <SignupForm />
          <p className="mt-5 text-xs text-ink/50 leading-relaxed max-w-md">
            En t'inscrivant, tu acceptes de recevoir nos lettres. On ne partage
            jamais ton email. Tu peux te désabonner à tout moment.
          </p>
        </motion.div>

        {/* PROMISES */}
        <div className="mt-28 md:mt-36 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-ink/15 pt-14">
          {promises.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <div className="text-[10px] uppercase tracking-ultra text-ink/45 mb-4">
                {p.n}
              </div>
              <h3 className="font-display italic text-2xl mb-3 font-normal">
                {p.title}
              </h3>
              <p className="text-ink/65 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* ALTERNATE PATH */}
        <div className="mt-28 md:mt-36 border-t border-ink/10 pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-ultra text-ink/50 mb-3">
              Tu préfères Instagram ?
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display italic text-3xl md:text-4xl font-normal hover:opacity-75 transition-opacity"
            >
              @iro.fit ↗
            </a>
          </div>
          <a
            href="mailto:team@irofit.fr"
            className="text-sm text-ink/65 hover:text-ink transition-colors"
          >
            team@irofit.fr
          </a>
        </div>
      </div>
    </article>
  );
}

function SignupForm() {
  const [email, setEmail] = useState('');
  const [first, setFirst] = useState('');
  const [sent, setSent] = useState(false);

  // TODO: brancher Mailchimp / Brevo
  // Remplacer onSubmit par un POST vers l'URL d'action du form (Mailchimp)
  // ou une fonction serverless qui appelle l'API Brevo.
  function onSubmit(e) {
    e.preventDefault();
    if (!email) return;
    try {
      const list = JSON.parse(localStorage.getItem('irofit:waitlist') || '[]');
      list.push({ email, first, at: new Date().toISOString(), source: 'newsletter' });
      localStorage.setItem('irofit:waitlist', JSON.stringify(list));
    } catch {}
    setSent(true);
  }

  return (
    <AnimatePresence mode="wait">
      {!sent ? (
        <motion.form
          key="form"
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          onSubmit={onSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <label className="block">
              <span className="text-[10px] uppercase tracking-ultra text-ink/45">
                Prénom (optionnel)
              </span>
              <input
                type="text"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                placeholder="Rim"
                className="mt-2 w-full bg-transparent border-b border-ink/25 focus:border-ink outline-none py-3 text-lg placeholder:text-ink/30 transition-colors"
              />
            </label>
            <label className="block">
              <span className="text-[10px] uppercase tracking-ultra text-ink/45">
                Email
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ton@email.com"
                className="mt-2 w-full bg-transparent border-b border-ink/25 focus:border-ink outline-none py-3 text-lg placeholder:text-ink/30 transition-colors"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center gap-3 text-[11px] uppercase tracking-ultra px-8 py-4 text-cream transition-colors duration-300 hover:opacity-90"
            style={{ background: '#2D4132' }}
          >
            Rejoindre le cercle
            <span aria-hidden>→</span>
          </button>
        </motion.form>
      ) : (
        <motion.div
          key="thanks"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-4"
        >
          <p className="font-display text-3xl md:text-5xl font-normal leading-snug">
            Merci{first ? `, ${first}` : ''}.{' '}
            <em className="italic font-light text-ink/70">À octobre.</em>
          </p>
          <p className="mt-5 text-ink/65 text-base leading-relaxed max-w-md">
            On t'écrit dès qu'on a quelque chose à te montrer.
            En attendant, suis-nous sur Instagram —{' '}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:no-underline"
            >
              @iro.fit
            </a>
            .
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
