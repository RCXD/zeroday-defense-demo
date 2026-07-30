import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { Section } from './Section'
import { useLanguage } from '../i18n/LanguageContext'

export function Acknowledgments() {
  const { t } = useLanguage()

  return (
    <Section
      id="acknowledgments"
      eyebrow={t.acknowledgments.eyebrow}
      title={t.acknowledgments.title}
      subtitle={t.acknowledgments.subtitle}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 md:p-8"
      >
        <div className="mb-5 inline-flex rounded-xl bg-accent-50 p-3 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
          <Heart className="h-5 w-5" />
        </div>
        <div className="space-y-4">
          {t.acknowledgments.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-relaxed text-neutral-600 md:text-base dark:text-neutral-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
