import { motion } from 'framer-motion'
import { Award, ExternalLink, FileText } from 'lucide-react'
import { PATHWAYS_ARTICLE_URL, PATHWAYS_ASSETS, PATHWAYS_WINNERS_PDF_URL } from '../data/research'
import { RichText } from '../i18n/RichText'
import { useLanguage } from '../i18n/LanguageContext'

function assetUrl(path: string) {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}

export function PathwaysSpotlight() {
  const { t } = useLanguage()
  const p = t.pathways
  const logoSrc = assetUrl(PATHWAYS_ASSETS.logo)
  const evidenceSrc = assetUrl(PATHWAYS_ASSETS.evidence)
  const hostLogoSrc = assetUrl(PATHWAYS_ASSETS.hostLogo)
  const pdfLocalSrc = assetUrl(PATHWAYS_ASSETS.pdfLocal)

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
          <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <a
                href={PATHWAYS_WINNERS_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-block"
              >
                <img
                  src={logoSrc}
                  alt={p.logoAlt}
                  className="h-auto w-full max-w-[16rem] object-contain dark:brightness-110 sm:max-w-[18rem]"
                />
              </a>
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
                <RichText text={p.subtitle} />
              </p>
            </div>
            <div className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-accent-500/10 px-4 py-2 text-sm font-semibold text-accent-700 dark:text-accent-300">
              <Award className="h-4 w-4" />
              {p.placementBadge}
            </div>
          </div>

          <figure className="mt-5 overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800">
            <a
              href={PATHWAYS_WINNERS_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-x-auto p-2 sm:p-3"
            >
              <img
                src={evidenceSrc}
                alt={p.evidenceAlt}
                className="mx-auto h-auto w-full min-w-[40rem] object-contain md:min-w-0"
              />
            </a>
            <figcaption className="border-t border-neutral-200 bg-neutral-50 px-4 py-2.5 text-xs leading-relaxed text-neutral-500 dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-neutral-400 md:text-sm">
              {p.evidenceCaption}{' '}
              <a
                href={PATHWAYS_WINNERS_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400"
              >
                <FileText className="h-3.5 w-3.5" />
                {p.officialSourceLink}
              </a>
            </figcaption>
          </figure>

          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
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

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-neutral-500 dark:text-neutral-400">{p.officialSourceLabel}</span>
                <a
                  href={PATHWAYS_WINNERS_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
                >
                  {p.officialSourceLink}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={pdfLocalSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-neutral-500 transition-colors hover:text-accent-600 dark:text-neutral-400"
                >
                  <FileText className="h-3.5 w-3.5" />
                  PDF
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
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
            </div>
            <img
              src={hostLogoSrc}
              alt={p.hostLogoAlt}
              className="h-8 w-auto rounded-sm object-contain shadow-sm sm:h-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
