import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
            className="text-[11px] uppercase tracking-ultra text-cream/55"
          >
            Contact — Stay close
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-8 font-display text-5xl md:text-6xl font-normal leading-[1.05]"
          >
            Write to us.
            <br />
            <em className="italic font-light text-cream/75">We answer slowly.</em>
          </motion.h1>

          <div className="mt-12 space-y-6 text-cream/70 text-sm leading-relaxed">
            <Row label="Email">
              <a href="mailto:team@irofit.fr" className="hover:text-cream transition-colors">
                team@irofit.fr
              </a>
            </Row>
            <Row label="Instagram">
              <a
                href="https://www.instagram.com/iro.fit/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream transition-colors"
              >
                @iro.fit ↗
              </a>
            </Row>
            <Row label="Atelier">Paris · Casablanca</Row>
            <Row label="Hours">Mon — Fri · 09:00 — 18:00 CET</Row>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="border-t border-cream/15 pt-10"
          >
            <p className="text-[10px] uppercase tracking-ultra text-cream/45 mb-6">
              Be among the first
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
                    <span className="text-[10px] uppercase tracking-ultra text-cream/45">
                      Your email
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@everywhere.com"
                      className="mt-2 w-full bg-transparent border-b border-cream/25 focus:border-cream outline-none py-3 text-lg placeholder:text-cream/30 transition-colors"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[10px] uppercase tracking-ultra text-cream/45">
                      A note (optional)
                    </span>
                    <textarea
                      rows={3}
                      placeholder="Anything you'd like us to know."
                      className="mt-2 w-full bg-transparent border-b border-cream/25 focus:border-cream outline-none py-3 text-base placeholder:text-cream/30 resize-none transition-colors"
                    />
                  </label>
                  <button
                    type="submit"
                    className="mt-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-ultra px-7 py-4 border border-cream/30 hover:border-cream hover:bg-cream hover:text-ink transition-colors duration-500"
                  >
                    Send
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
                    Thank you. <em className="italic font-light text-cream/75">We've heard you.</em>
                  </p>
                  <p className="mt-4 text-cream/65 text-sm leading-relaxed">
                    We'll write back when the first chapter is ready — October 2026.
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
    <div className="grid grid-cols-12 gap-4 border-b border-cream/10 pb-5">
      <div className="col-span-4 text-[10px] uppercase tracking-ultra text-cream/45 pt-1">
        {label}
      </div>
      <div className="col-span-8">{children}</div>
    </div>
  );
}
