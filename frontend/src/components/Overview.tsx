import { motion } from 'framer-motion'
import { BrainCircuit, Layers, Database } from 'lucide-react'
import { Section } from './Section'
import { LearningCompareAnimation } from '../diagrams/LearningCompareAnimation'
import { RichText } from '../i18n/RichText'
import { useLanguage } from '../i18n/LanguageContext'

export function Overview() {
  const { t } = useLanguage()
  const cards = [
    { icon: BrainCircuit, ...t.overview.cards.profiling },
    { icon: Layers, ...t.overview.cards.hybrid },
    { icon: Database, ...t.overview.cards.datasets },
  ]

  return (
    <Section
      id="overview"
      eyebrow={t.overview.eyebrow}
      title={t.overview.title}
      subtitle={t.overview.subtitle}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55 }}
        className="mb-10"
      >
        <LearningCompareAnimation />
      </motion.div>

      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="mb-4 inline-flex rounded-xl bg-accent-50 p-3 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-white">
              <RichText text={c.title} />
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              <RichText text={c.body} />
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
