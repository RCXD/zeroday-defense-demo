import { motion } from 'framer-motion'
import { Section } from './Section'
import { RichText } from '../i18n/RichText'
import { useLanguage } from '../i18n/LanguageContext'

export function Motivation() {
  const { t } = useLanguage()
  const m = t.motivation

  return (
    <Section id="story" eyebrow={m.eyebrow} title={m.title} subtitle={m.subtitle}>
      <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
        <div className="space-y-5">
          {m.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-300"
            >
              <RichText text={p} />
            </motion.p>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="border-l-2 border-accent-500 pl-5"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
              {m.stakesTitle}
            </p>
            <p className="mt-2 text-base leading-relaxed text-neutral-800 dark:text-neutral-200">
              <RichText text={m.stakes} />
            </p>
          </motion.div>
        </div>

        <ol className="space-y-4">
          {m.incidents.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="relative border-b border-neutral-200 pb-4 last:border-b-0 dark:border-neutral-800"
            >
              <p className="font-display text-sm font-semibold tabular-nums text-accent-600 dark:text-accent-400">
                {item.year}
              </p>
              <h3 className="mt-1 font-display text-base font-semibold text-neutral-900 dark:text-white">
                <RichText text={item.title} />
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                <RichText text={item.body} />
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
