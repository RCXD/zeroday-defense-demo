import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'
import { Section } from './Section'
import { PUBLICATIONS } from '../data/research'
import { useLanguage } from '../i18n/LanguageContext'

function PublicationCard({
  p,
  index,
  thesisLabel,
  abstract,
}: {
  p: (typeof PUBLICATIONS)[number]
  index: number
  thesisLabel: string
  abstract: string
}) {
  const inner = (
    <>
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex rounded-xl bg-accent-50 p-3 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
          <FileText className="h-5 w-5" />
        </span>
        {p.doi && (
          <ExternalLink className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-accent-600 dark:group-hover:text-accent-400" />
        )}
      </div>
      <h3 className="text-lg font-semibold leading-snug text-neutral-900 dark:text-white">
        {p.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">
        {p.doi ? `${p.venue} · ${p.year}` : `${thesisLabel} · ${p.year}`}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {abstract}
      </p>
      <p className="mt-4 text-xs text-neutral-400">{p.authors.join(', ')}</p>
      {p.doi && <p className="mt-1 font-mono text-xs text-neutral-400">doi:{p.doi}</p>}
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      {p.doi ? (
        <a
          href={`https://doi.org/${p.doi}`}
          target="_blank"
          rel="noreferrer"
          className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-accent-400 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-accent-500"
        >
          {inner}
        </a>
      ) : (
        <div className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          {inner}
        </div>
      )}
    </motion.div>
  )
}

export function Research() {
  const { t } = useLanguage()

  return (
    <Section
      id="research"
      eyebrow={t.research.eyebrow}
      title={t.research.title}
      subtitle={t.research.subtitle}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PUBLICATIONS.map((p, i) => (
          <PublicationCard
            key={p.id}
            p={p}
            index={i}
            thesisLabel={t.research.thesisLabel}
            abstract={t.research.abstracts[p.id] ?? p.abstract}
          />
        ))}
      </div>
    </Section>
  )
}
