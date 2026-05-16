import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Wordmark from './components/Wordmark.jsx';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function App() {
  const location = useLocation();
  return (
    <div className="relative min-h-screen flex flex-col bg-cream text-ink">
      <div className="grain" />
      <header className="relative z-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <NavLink to="/" className="shrink-0 mr-4" aria-label="IROfit — home">
            <Wordmark size="md" className="!text-lg md:!text-xl" />
          </NavLink>
          <nav className="flex items-center gap-7 md:gap-10 text-[11px] uppercase tracking-ultra">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative pb-1 transition-colors ${
                    isActive ? 'text-ink' : 'text-ink/55 hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 right-0 -bottom-0.5 h-px bg-ink"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="relative z-20 border-t border-ink/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-ultra text-ink/55">
          <a
            href="https://www.instagram.com/iro.fit/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            @iro.fit
          </a>
          <span className="font-display normal-case tracking-normal text-sm italic text-ink/70">
            Octobre 2026
          </span>
          <a
            href="mailto:rim@irofit.fr"
            className="hover:text-ink transition-colors normal-case tracking-normal text-sm"
          >
            rim@irofit.fr
          </a>
        </div>
      </footer>
    </div>
  );
}
