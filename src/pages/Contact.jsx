import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const INSTAGRAM_URL =
  'https://www.instagram.com/iro.fit?igsh=MWJvMnBlenQ5NDh4dg%3D%3D&utm_source=qr';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    if (!email) return;
    try {
      const list = JSON.parse(localStorage.getItem('irofit:waitlist') || '[]');
      list.push({ email, at: new Date().toISOString(), source: 'contact' });
      localStorage.setItem('irofit:waitlist', JSON.stringify(list));
    } catch {}
    setSent(true);
  }

  return (
    <article className="px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-ultra text-ink/55"
          >
            Contact — Reste proche
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-8 font-display text-5xl md:text-6xl font-normal leading-[1.05]"
          >
            Écris-nous.
            <br />
            <em className="italic font-light text-ink/70">On répond lentement.</em>
          </motion.h1>

          <div className="mt-12 space-y-6 text-ink/70 text-sm leading-relaxed">
            <Row label="Email">
              <a href="mailto:team@irofit.fr" className="hover:text-ink transition-colors">
                team@irofit.fr
              </a>
            </Row>
            <Row label="Instagram">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors"
              >
                @iro.fit ↗
              </a>
            </Row>
            <Row label="Horaires">Lun — Ven · 09:00 — 18:00 CET</Row>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="border-t border-ink/15 pt-10"
          >
            <p className="text-[10px] uppercase tracking-ultra text-ink/45 mb-6">
              Sois parmi les premiers
            </p>

            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={onSubmit}
                  className="space-y-6"
                >
                  <label className="block">
                    <span className="text-[10px] uppercase tracking-ultra text-ink/45">
                      Ton email
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
                  <label className="block">
                    <span className="text-[10px] uppercase tracking-ultra text-ink/45">
                      Un mot (optionnel)
                    </span>
                    <textarea
                      rows={3}
                      placeholder="Tout ce que tu veux qu'on sache."
                      className="mt-2 w-full bg-transparent border-b border-ink/25 focus:border-ink outline-none py-3 text-base placeholder:text-ink/30 resize-none transition-colors"
                    />
                  </label>
                  <button
                    type="submit"
                    className="mt-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-ultra px-7 py-4 text-cream transition-colors duration-300 hover:opacity-90"
                    style={{ background: '#2D4132' }}
                  >
                    Envoyer
                    <span aria-hidden>→</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="py-6"
                >
                  <p className="font-display text-3xl md:text-4xl font-normal leading-snug">
                    Merci. <em className="italic font-light text-ink/70">À octobre.</em>
                  </p>
                  <p className="mt-4 text-ink/65 text-sm leading-relaxed">
                    On revient vers toi quand le premier chapitre est prêt — octobre 2026.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </article>
  );
}

function Row({ label, children }) {
  return (
    <div className="grid grid-cols-12 gap-4 border-b border-ink/10 pb-5">
      <div className="col-span-4 text-[10px] uppercase tracking-ultra text-ink/45 pt-1">
        {label}
      </div>
      <div className="col-span-8">{children}</div>
    </div>
  );
}
