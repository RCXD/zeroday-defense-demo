import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { RichText } from '../i18n/RichText'
import { useAutoPhase } from '../hooks/useAutoPhase'
import { PhaseStepDots } from './PhaseStepDots'
import { PoisonLatentScene, POISON_SCENE_PHASE_COUNT, type PoisonScenePhase } from './PoisonLatentScene'

const PHASE_MS = 3500

const COLORS = {
  benign: '#14b8a6',
  poison: '#dc2626',
  boundary: '#14b8a6',
}

export function PoisonLatentAnimation() {
  const { t } = useLanguage()
  const c = t.aeOcc.poison3d
  const { phase: phaseRaw, goToPhase, paused, togglePause } = useAutoPhase(POISON_SCENE_PHASE_COUNT, PHASE_MS)
  const phase = phaseRaw as PoisonScenePhase

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 md:p-6">
      <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-white md:text-xl">
          <RichText text={c.title} />
        </h3>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS.benign }} />
            {c.legend.benign}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS.poison }} />
            {c.legend.poison}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full border border-accent-500 bg-accent-500/20" />
            {c.legend.boundary}
          </span>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50/80 dark:border-neutral-800 dark:bg-neutral-950/60">
        <PoisonLatentScene
          scenePhase={phase}
          axisLabels={c.axisLabels}
          filteredLabel={c.legend.filtered}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={c.captions[phase]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="mt-4 min-h-[3rem] text-center text-xs leading-snug text-neutral-500 dark:text-neutral-400 md:text-sm"
        >
          <RichText text={c.captions[phase]} />
        </motion.p>
      </AnimatePresence>

      <PhaseStepDots
        phase={phase}
        stepNames={c.stepNames}
        stepLabel={c.stepLabel}
        paused={paused}
        pauseLabel={t.animation.pause}
        playLabel={t.animation.play}
        onSelect={goToPhase}
        onTogglePause={togglePause}
      />
    </div>
  )
}
