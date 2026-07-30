import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink, Quote } from 'lucide-react'
import { Section } from './Section'
import { PUBLICATIONS } from '../data/research'
import { useLanguage } from '../i18n/LanguageContext'
import { usePaperCitations } from '../hooks/usePaperCitations'

function PublicationCard({
  p,
  index,
  thesisLabel,
  presentation,
  abstract,
  citation,
}: {
  p: (typeof PUBLICATIONS)[number]
  index: number
  thesisLabel: string
  presentation?: string
  abstract: string
  citation?: { count: number; scholarUrl: string }
}) {
  const { t } = useLanguage()

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
      {p.doi && citation && citation.count >= 0 && (
        <p className="mt-2 flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
          <Quote className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span>
            {t.research.citations
              .replace('{count}', String(citation.count))
              .replace('{source}', t.research.citationSource)}
          </span>
        </p>
      )}
      {presentation && (
        <p className="mt-2 text-xs font-medium leading-relaxed text-neutral-500 dark:text-neutral-400">
          {presentation}
        </p>
      )}
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
        <div className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-accent-400 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-accent-500">
          <a
            href={`https://doi.org/${p.doi}`}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 flex-col"
          >
            {inner}
          </a>
          {citation && citation.count >= 0 && (
            <a
              href={citation.scholarUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-xs font-medium text-accent-600 hover:underline dark:text-accent-400"
            >
              {t.research.scholarLink}
            </a>
          )}
        </div>
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
  const dois = useMemo(
    () => PUBLICATIONS.map((p) => p.doi).filter((d): d is string => Boolean(d)),
    [],
  )
  const citations = usePaperCitations(dois)

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
            presentation={t.research.presentations[p.id]}
            abstract={t.research.abstracts[p.id] ?? p.abstract}
            citation={p.doi ? citations[p.doi] : undefined}
          />
        ))}
      </div>
    </Section>
  )
}
