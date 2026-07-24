import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { HEADLINE } from '../data/research'
import { fill } from '../i18n'
import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  const stats = [
    { value: HEADLINE.bestDetection, label: t.hero.stats.detection },
    { value: `${HEADLINE.datasets}`, label: t.hero.stats.datasets },
    { value: HEADLINE.models, label: t.hero.stats.models },
    { value: HEADLINE.threat, label: t.hero.stats.threat },
  ]

  return (
    <div id="top" className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
      <div className="pointer-events-none absolute inset-0 bg-grid text-neutral-400 opacity-40 dark:text-neutral-700" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-500/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-64 w-64 rounded-full bg-accent-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-4 py-1.5 text-sm font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300"
        >
          <span className="h-2 w-2 rounded-full bg-accent-500" />
          {t.hero.badge}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-neutral-900 md:text-7xl dark:text-white"
        >
          {t.hero.brand}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-3xl text-2xl font-medium leading-snug text-neutral-700 md:text-3xl dark:text-neutral-300"
        >
          {t.hero.titleBefore}
          <span className="text-accent-600 dark:text-accent-400">{t.hero.titleAccent}</span>
          {t.hero.titleAfter}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl dark:text-neutral-400"
        >
          {fill(t.hero.subtitle, { detection: HEADLINE.bestDetection })}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#approaches"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-accent-700"
          >
            {t.hero.ctaApproaches} <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#results"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-5 py-3 font-semibold text-neutral-800 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
          >
            {t.hero.ctaResults}
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-6 border-t border-neutral-200 pt-10 dark:border-neutral-800"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
            >
              <dt className="font-display text-2xl font-bold tracking-tight text-accent-600 md:text-3xl dark:text-accent-400">
                {s.value}
              </dt>
              <dd className="mt-1 max-w-[10rem] text-sm leading-snug text-neutral-500 dark:text-neutral-400">
                {s.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  )
}
