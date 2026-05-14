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
    <div className="relative min-h-screen flex flex-col bg-ink text-cream">
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
                    isActive ? 'text-cream' : 'text-cream/55 hover:text-cream'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 right-0 -bottom-0.5 h-px bg-cream"
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

      <footer className="relative z-20 border-t border-cream/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-ultra text-cream/50">
          <span>© {new Date().getFullYear()} IROfit · irofit.fr</span>
          <span className="font-display normal-case tracking-normal text-xs italic text-cream/65">
            Three Beats. One Rhythm.
          </span>
          <a
            href="mailto:team@irofit.fr"
            className="hover:text-cream transition-colors"
          >
            team@irofit.fr
          </a>
        </div>
      </footer>
    </div>
  );
}
