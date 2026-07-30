import { motion } from 'framer-motion'
import { Layers, Gauge, Zap } from 'lucide-react'
import { Section } from './Section'
import { AeOccCompareAnimation } from '../diagrams/AeOccCompareAnimation'
import { PoisonLatentAnimation } from '../diagrams/PoisonLatentAnimation'
import { useLanguage } from '../i18n/LanguageContext'

const ICONS = [Layers, Gauge, Zap]

export function AeOccSynergy() {
  const { t } = useLanguage()

  return (
    <Section
      id="hybrid"
      eyebrow={t.aeOcc.eyebrow}
      title={t.aeOcc.title}
      subtitle={t.aeOcc.subtitle}
    >
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {t.aeOcc.bullets.map((bullet, i) => {
          const Icon = ICONS[i] ?? Layers
          return (
            <motion.div
              key={bullet}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="mb-3 inline-flex rounded-lg bg-accent-50 p-2.5 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{bullet}</p>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55 }}
        className="mb-10"
      >
        <AeOccCompareAnimation />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        <PoisonLatentAnimation />
      </motion.div>
    </Section>
  )
}
