import { motion } from 'framer-motion';

export default function About() {
  return (
    <article className="px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-[1000px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] uppercase tracking-ultra text-ink/55"
        >
          À propos — L'idée IROfit
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 font-display italic text-5xl md:text-7xl font-normal leading-[1.05]"
        >
          Notre histoire.
        </motion.h1>

        <div className="mt-16 md:mt-24 space-y-7 max-w-[680px] text-ink/80 text-[17px] md:text-xl leading-[1.65] font-light">
          <Para delay={0.05}>
            IROfit est née d'une envie simple : <em className="italic">créer ensemble</em>.
          </Para>

          <Para delay={0.1}>
            Trois personnes. Trois énergies. Une vision commune :
            <em className="italic"> le fitness sans limites</em>.
          </Para>

          <Para delay={0.15}>
            Nous pratiquons, nous bougeons, nous vivons. Et nous avons réalisé
            que le fitness n'avait pas besoin d'être genré. Qu'il pouvait être
            inclusif.
          </Para>

          <Para delay={0.2}>
            Nous pensons au quotidien. À la vraie vie. Aux familles actives.
            À ceux qui font du Pilates le matin et du CrossFit l'après-midi.
            À ceux qui bougent parce que c'est une première langue.
          </Para>

          <Para delay={0.25}>
            Nous avons créé trois univers :<br />
            <em className="italic">FLOW</em> pour le mouvement doux et intentionnel.<br />
            <em className="italic">FIRE</em> pour la force et l'intensité.<br />
            <em className="italic">JOY</em> pour partager ça avec les enfants.
          </Para>

          <Para delay={0.3}>
            Chaque produit est pensé avec obsession :<br />
            <em className="italic">Premium. Minimaliste. Vrai.</em><br />
            Pas plus fort, pas plus dur — plus authentique.
          </Para>

          <Para delay={0.35}>
            IROfit porte ces trois énergies dans une seule marque.
          </Para>
        </div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-24 md:mt-36 max-w-3xl mx-auto text-center font-display text-3xl md:text-5xl font-normal leading-tight"
        >
          <em className="italic font-light">Trois beats. One rhythm.</em>
          <span className="block mt-6 text-[10px] uppercase tracking-ultra text-ink/45 not-italic font-sans">
            — L'idée IROfit
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
