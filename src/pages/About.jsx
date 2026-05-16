import { motion } from 'framer-motion';

export default function About() {
  return (
    <article className="px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] uppercase tracking-ultra text-ink/55"
        >
          About — L'histoire
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 font-display text-5xl md:text-7xl font-normal leading-[1.05]"
        >
          Une famille, écrite en <em className="italic font-light">mouvement</em>.
        </motion.h1>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <p className="text-[10px] uppercase tracking-ultra text-ink/45 mb-4">Origine</p>
            <p className="font-display text-2xl md:text-3xl leading-snug font-normal">
              IROfit est née dans une maison, pas dans une salle de réunion —
              trois rythmes vivant sous un même toit, apprenant à battre ensemble.
            </p>
          </motion.div>

          <div className="md:col-span-6 md:col-start-7 space-y-6 text-ink/70 text-[15px] leading-relaxed">
            <Para delay={0.05}>
              Rim avance comme l'eau — la main la plus régulière. Oussama
              s'entraîne comme le feu — la force comme promesse silencieuse.
              Ilyan bouge parce que la joie y tient ; preuve vivante que
              le mouvement est une première langue.
            </Para>
            <Para delay={0.15}>
              IROfit porte ces trois énergies dans une seule marque. Pas plus
              fort, pas plus dur — plus vrai. Des objets et des rituels pensés
              pour la vraie vie, telle qu'on la vit.
            </Para>
          </div>
        </div>

        <div className="mt-24 md:mt-36 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-ink/15 pt-14">
          <Pillar n="01" title="Slow craft" body="Peu de pièces. Considérées. Faites pour durer." />
          <Pillar n="02" title="Quiet design" body="Pas de logos qui crient. Laisser le corps et la ligne parler." />
          <Pillar n="03" title="Le mouvement comme vie" body="Pas un entraînement. Une façon d'habiter le monde." />
        </div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-28 md:mt-40 max-w-3xl mx-auto text-center font-display text-3xl md:text-5xl font-normal leading-tight"
        >
          « Three beats. <em className="italic font-light">One rhythm.</em> »
          <span className="block mt-6 text-[10px] uppercase tracking-ultra text-ink/45 not-italic">
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

function Pillar({ n, title, body }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-[10px] uppercase tracking-ultra text-ink/45 mb-4">{n}</div>
      <h3 className="font-display text-2xl mb-3 font-normal italic">{title}</h3>
      <p className="text-ink/65 text-sm leading-relaxed">{body}</p>
    </motion.div>
  );
}
