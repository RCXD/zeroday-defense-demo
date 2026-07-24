import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from './Section'
import { APPROACHES, RESULT_GALLERY } from '../data/research'
import { useLanguage } from '../i18n/LanguageContext'

export function ResultsExplorer() {
  const { t } = useLanguage()
  const gallery = useMemo(
    () =>
      RESULT_GALLERY.map((f) => ({
        ...f,
        caption: t.results.galleryCaptions[f.id] ?? f.caption,
      })),
    [t],
  )
  const [galleryId, setGalleryId] = useState(gallery[0].id)
  const [approachId, setApproachId] = useState(APPROACHES[0].id)

  const activeFigure = gallery.find((f) => f.id === galleryId) ?? gallery[0]
  const activeApproach = APPROACHES.find((a) => a.id === approachId) ?? APPROACHES[0]

  return (
    <Section
      id="results"
      eyebrow={t.results.eyebrow}
      title={t.results.title}
      subtitle={t.results.subtitle}
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="mb-1 font-semibold text-neutral-900 dark:text-white">
            {t.results.galleryTitle}
          </h3>
          <p className="mb-5 text-sm text-neutral-500 dark:text-neutral-400">
            {t.results.galleryNote}
          </p>

          <AnimatePresence mode="wait">
            <motion.figure
              key={activeFigure.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800"
            >
              <img
                src={activeFigure.file}
                alt={activeFigure.caption}
                className="w-full bg-neutral-50 dark:bg-neutral-950"
                loading="lazy"
              />
              <figcaption className="bg-neutral-50 px-4 py-3 text-sm text-neutral-600 dark:bg-neutral-800/50 dark:text-neutral-400">
                {activeFigure.caption}
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {gallery.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setGalleryId(f.id)}
                className={`overflow-hidden rounded-lg border transition-all ${
                  f.id === galleryId
                    ? 'border-accent-500 ring-2 ring-accent-500/30'
                    : 'border-neutral-200 hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700'
                }`}
              >
                <img
                  src={f.file}
                  alt=""
                  className="aspect-video w-full object-cover object-top"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="mb-1 font-semibold text-neutral-900 dark:text-white">
            {t.results.heatmapTitle}
          </h3>
          <p className="mb-5 text-sm text-neutral-500 dark:text-neutral-400">
            {t.results.heatmapBody}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {APPROACHES.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setApproachId(a.id)}
                className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                  a.id === approachId
                    ? 'border-accent-500 bg-accent-50 text-accent-700 dark:bg-accent-500/10 dark:text-accent-400'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-300 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-700'
                }`}
              >
                {a.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeApproach.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800"
            >
              <img
                src={activeApproach.figure}
                alt={`${activeApproach.name} heatmap`}
                className="w-full bg-neutral-50 dark:bg-neutral-950"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
