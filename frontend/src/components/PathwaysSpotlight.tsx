import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { PATHWAYS_ARTICLE_URL } from '../data/research'
import { useLanguage } from '../i18n/LanguageContext'

export function PathwaysSpotlight() {
  const { t } = useLanguage()
  const p = t.pathways

  const rows = [
    { label: p.labels.event, value: p.event },
    { label: p.labels.dates, value: p.dates },
    { label: p.labels.location, value: p.location },
    { label: p.labels.category, value: p.category },
    { label: p.labels.presenter, value: p.presenter },
    { label: p.labels.placement, value: p.placement },
    { label: p.labels.paperTitle, value: p.paperTitle },
  ]

  return (
    <section
      aria-labelledby="pathways-spotlight-title"
      className="border-b border-neutral-200 bg-neutral-50/80 dark:border-neutral-800 dark:bg-neutral-900/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-accent-200/80 bg-white p-6 shadow-sm dark:border-accent-500/20 dark:bg-neutral-900 md:p-8"
        >
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
                {p.eyebrow}
              </p>
              <h2
                id="pathways-spotlight-title"
                className="font-display text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl dark:text-white"
              >
                {p.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base dark:text-neutral-400">
                {p.subtitle}
              </p>
            </div>
            <div className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-accent-500/10 px-4 py-2 text-sm font-semibold text-accent-700 dark:text-accent-300">
              <Award className="h-4 w-4" />
              {p.placementBadge}
            </div>
          </div>

          <dl className="grid gap-3 sm:grid-cols-2">
            {rows.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-neutral-200 bg-neutral-50/80 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950/50"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  {label}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">{p.categoryNote}</p>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="text-neutral-500 dark:text-neutral-400">{p.sourceLabel}</span>
            <a
              href={PATHWAYS_ARTICLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
            >
              {p.sourceLink}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
