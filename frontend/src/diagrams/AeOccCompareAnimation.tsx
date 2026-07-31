import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { RichText } from '../i18n/RichText'
import { useAutoPhase } from '../hooks/useAutoPhase'
import { PhaseStepDots } from './PhaseStepDots'

const PHASE_COUNT = 5
const PHASE_MS = 3200

const COLORS = {
  benign: '#14b8a6',
  anomaly: '#f59e0b',
  malware: '#ef4444',
  threshold: '#64748b',
  region: '#14b8a6',
  latent: '#3b82f6',
  tune: '#a855f7',
  dim: '#94a3b8',
  pipeline: '#0d9488',
}

const BENIGN = [
  { x: 72, y: 195 },
  { x: 95, y: 210 },
  { x: 88, y: 178 },
  { x: 110, y: 188 },
  { x: 118, y: 215 },
  { x: 100, y: 165 },
  { x: 130, y: 200 },
  { x: 85, y: 225 },
]

const ANOMALY = { x: 210, y: 145, error: 48 }

type Phase = 0 | 1 | 2 | 3 | 4

function PanelCaption({ text }: { text: string }) {
  return (
    <motion.p
      key={text}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4 }}
      className="min-h-[3.5rem] text-center text-xs leading-snug text-neutral-500 dark:text-neutral-400 md:text-sm"
    >
      <RichText text={text} />
    </motion.p>
  )
}

function DimBars({
  count,
  x,
  y,
  label,
  highlight,
}: {
  count: number
  x: number
  y: number
  label: string
  highlight: boolean
}) {
  const barW = 11
  const gap = 3
  const totalW = count * barW + (count - 1) * gap
  return (
    <g opacity={highlight ? 1 : 0.35}>
      <text
        x={x + totalW / 2}
        y={y - 6}
        textAnchor="middle"
        fill={COLORS.dim}
        fontSize="9"
        fontWeight="600"
        fontFamily="IBM Plex Sans, sans-serif"
      >
        {label}
      </text>
      {Array.from({ length: count }, (_, i) => (
        <motion.rect
          key={i}
          x={x + i * (barW + gap)}
          y={y}
          width={barW}
          height={28 + (i % 3) * 6}
          rx={2}
          fill={highlight ? COLORS.tune : COLORS.dim}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 0.85, scaleY: 1 }}
          transition={{ delay: i * 0.03, duration: 0.25 }}
          style={{ transformOrigin: `${x + i * (barW + gap) + barW / 2}px ${y + 40}px` }}
        />
      ))}
      <rect
        x={x - 2}
        y={y - 2}
        width={totalW + 4}
        height={52}
        fill="none"
        stroke={highlight ? COLORS.tune : COLORS.dim}
        strokeWidth="1"
        strokeDasharray="4 3"
        rx={4}
        opacity={0.5}
      />
    </g>
  )
}

function TuningKnobs({ x, y, showResolved, active }: { x: number; y: number; showResolved: boolean; active: boolean }) {
  const params = ['ν', 'γ', 'σ']
  return (
    <g opacity={active ? 1 : 0.3}>
      {params.map((p, i) => (
        <g key={p} transform={`translate(${x + i * 42} ${y})`}>
          <circle
            cx={12}
            cy={12}
            r={11}
            fill="none"
            stroke={showResolved ? COLORS.benign : COLORS.tune}
            strokeWidth="1.5"
            strokeDasharray={showResolved ? undefined : '3 2'}
          />
          <text
            x={12}
            y={16}
            textAnchor="middle"
            fill={showResolved ? COLORS.benign : COLORS.tune}
            fontSize="10"
            fontWeight="700"
            fontFamily="IBM Plex Sans, sans-serif"
          >
            {showResolved ? '✓' : p}
          </text>
        </g>
      ))}
    </g>
  )
}

function ProgressBar({
  x,
  y,
  w,
  progress,
  active,
  speedLabels,
}: {
  x: number
  y: number
  w: number
  progress: number
  active: boolean
  speedLabels: { fast: string; slow: string }
}) {
  return (
    <g opacity={active ? 1 : 0.3}>
      <rect x={x} y={y} width={w} height={8} rx={4} fill="currentColor" className="text-neutral-200 dark:text-neutral-800" />
      <motion.rect
        x={x}
        y={y}
        height={8}
        rx={4}
        fill={progress > 0.7 ? COLORS.benign : COLORS.anomaly}
        initial={{ width: 0 }}
        animate={{ width: w * progress }}
        transition={{ duration: progress > 0.7 ? 0.6 : 2.2, ease: 'easeInOut' }}
      />
      <text
        x={x + w / 2}
        y={y + 20}
        textAnchor="middle"
        fill={COLORS.dim}
        fontSize="9"
        fontFamily="IBM Plex Sans, sans-serif"
      >
        {progress > 0.7 ? speedLabels.fast : speedLabels.slow}
      </text>
    </g>
  )
}

type DiagramLabels = {
  reconstructionError: string
  thresholdTau: string
  noManualTau: string
  inputDimHigh: string
  latentDimLow: string
  trainingTime: string
  trainingFast: string
  trainingSlow: string
  benignRegion: string
  hyperparameters: string
  dimReduction: string
  outlier: string
  encoder: string
  latentZ: string
  occ: string
}

function AePanel({
  phase,
  caption,
  title,
  diagram,
}: {
  phase: Phase
  caption: string
  title: string
  diagram: DiagramLabels
}) {
  const showThreshold = phase >= 1 && phase <= 2
  const showError = phase >= 1
  const showLatentOut = phase >= 3
  const resolved = phase >= 4

  return (
    <div className="relative flex flex-col">
      <h4 className="mb-3 px-1 font-display text-sm font-semibold text-neutral-900 dark:text-white md:text-base">
        <RichText text={title} />
      </h4>
      <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50/80 dark:border-neutral-800 dark:bg-neutral-950/60">
        <svg viewBox="0 0 360 280" className="relative h-auto w-full" role="img" aria-hidden>
          <defs>
            <pattern id="grid-ae" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-neutral-300 dark:text-neutral-800" />
            </pattern>
          </defs>
          <rect width="360" height="280" fill="url(#grid-ae)" />

          {BENIGN.map((p, i) => (
            <motion.circle
              key={`b-${i}`}
              cx={p.x}
              cy={p.y}
              r={5}
              fill={COLORS.benign}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03, duration: 0.25 }}
            />
          ))}

          {showError && (
            <g>
              <motion.circle
                cx={ANOMALY.x}
                cy={ANOMALY.y}
                r={6}
                fill={COLORS.anomaly}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
              />
              <motion.line
                x1={ANOMALY.x}
                y1={ANOMALY.y - 8}
                x2={ANOMALY.x}
                y2={ANOMALY.y - 8 - ANOMALY.error}
                stroke={COLORS.anomaly}
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
              <text
                x={ANOMALY.x + 10}
                y={ANOMALY.y - ANOMALY.error / 2}
                fill={COLORS.anomaly}
                fontSize="9"
                fontWeight="700"
                fontFamily="IBM Plex Sans, sans-serif"
              >
                {diagram.reconstructionError}
              </text>
            </g>
          )}

          {showThreshold && (
            <g>
              <motion.line
                x1={24}
                y1={128}
                x2={336}
                y2={128}
                stroke={COLORS.threshold}
                strokeWidth="2"
                strokeDasharray="8 5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
              />
              <text x={300} y={122} fill={COLORS.threshold} fontSize="11" fontWeight="700" fontFamily="IBM Plex Sans, sans-serif">
                {diagram.thresholdTau}
              </text>
            </g>
          )}

          {resolved && (
            <motion.text
              x={24}
              y={122}
              fill={COLORS.benign}
              fontSize="10"
              fontWeight="700"
              fontFamily="IBM Plex Sans, sans-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {diagram.noManualTau}
            </motion.text>
          )}

          {showLatentOut && (
            <g>
              <motion.path
                d="M 155 200 C 200 200, 230 170, 270 155"
                fill="none"
                stroke={COLORS.latent}
                strokeWidth="2"
                markerEnd="url(#arrow-latent)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.85 }}
                transition={{ duration: 0.7 }}
              />
              <motion.circle
                cx={275}
                cy={152}
                r={14}
                fill={COLORS.latent}
                opacity={0.2}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              />
              <text x={262} y={156} fill={COLORS.latent} fontSize="9" fontWeight="700" fontFamily="IBM Plex Sans, sans-serif">
                z
              </text>
            </g>
          )}

          <defs>
            <marker id="arrow-latent" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={COLORS.latent} />
            </marker>
          </defs>
        </svg>
      </div>
      <AnimatePresence mode="wait">
        <PanelCaption text={caption} />
      </AnimatePresence>
    </div>
  )
}

function dimBarsWidth(count: number) {
  const barW = 11
  const gap = 3
  return count * barW + (count - 1) * gap
}

/** OCC panel viewBox center — all chrome/geometry anchors here. */
const OCC_CX = 180

const OCC_BENIGN = [
  { x: -28, y: -8 },
  { x: -10, y: 6 },
  { x: 12, y: -12 },
  { x: -18, y: 14 },
  { x: 22, y: 4 },
  { x: 4, y: -2 },
]

function OccPanel({
  phase,
  caption,
  title,
  diagram,
}: {
  phase: Phase
  caption: string
  title: string
  diagram: DiagramLabels
}) {
  const showTuning = phase >= 1 && phase <= 2
  const showTuningResolved = phase >= 4
  const showHighDim = phase === 2
  const showDimTransition = phase === 3
  const showLatentOnly = phase >= 4
  const showProgress = phase >= 2
  const progress = phase === 2 ? 0.32 : phase === 3 ? 0.68 : phase >= 4 ? 0.94 : 0
  // Leave room for progress speed label under the bar in later phases
  const boundaryY = phase <= 1 ? 168 : phase === 2 ? 188 : 198
  const regionCy = 52
  const regionRx = 70
  const regionRy = 46

  const highDimX = OCC_CX - dimBarsWidth(18) / 2
  const latentOnlyX = OCC_CX - dimBarsWidth(4) / 2

  // Phase 3: high→low bars — center by visual mass so the wider left block does not pull left
  const dimTransLeftW = dimBarsWidth(10)
  const dimTransRightW = dimBarsWidth(4)
  const dimTransGap = 36
  const dimTransLeftCenter = dimTransLeftW / 2
  const dimTransRightCenter = dimTransLeftW + dimTransGap + dimTransRightW / 2
  const dimTransCom =
    (dimTransLeftW * dimTransLeftCenter + dimTransRightW * dimTransRightCenter) /
    (dimTransLeftW + dimTransRightW)
  const dimTransLeftX = OCC_CX - dimTransCom
  const dimTransRightX = dimTransLeftX + dimTransLeftW + dimTransGap
  const dimTransArrowX1 = dimTransLeftX + dimTransLeftW + 6
  const dimTransArrowX2 = dimTransRightX - 6
  const dimTransMidX = (dimTransArrowX1 + dimTransArrowX2) / 2

  const knobsW = 2 * 42 + 24
  const knobsX = OCC_CX - knobsW / 2
  const progressW = 180
  const progressX = OCC_CX - progressW / 2
  const hasMidChrome = showTuning || showTuningResolved
  const progressLabelY = hasMidChrome ? 108 : 86
  const progressBarY = hasMidChrome ? 114 : 92

  return (
    <div className="relative flex flex-col">
      <h4 className="mb-3 px-1 text-center font-display text-sm font-semibold text-neutral-900 dark:text-white md:text-base">
        <RichText text={title} />
      </h4>
      <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50/80 dark:border-neutral-800 dark:bg-neutral-950/60">
        <svg viewBox="0 0 360 280" className="relative h-auto w-full" role="img" aria-hidden>
          <defs>
            <pattern id="grid-occ" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-neutral-300 dark:text-neutral-800" />
            </pattern>
            <marker id="arrow-dim-reduce" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={COLORS.latent} />
            </marker>
          </defs>
          <rect width="360" height="280" fill="url(#grid-occ)" />

          {/* Phase 2: high-dimensional raw features */}
          {showHighDim && (
            <DimBars count={18} x={highDimX} y={14} label={diagram.inputDimHigh} highlight />
          )}

          {/* Phase 3: high → low dimension transition */}
          {showDimTransition && (
            <g>
              <DimBars count={10} x={dimTransLeftX} y={14} label={diagram.inputDimHigh} highlight={false} />
              <motion.line
                x1={dimTransArrowX1}
                y1={36}
                x2={dimTransArrowX2}
                y2={36}
                stroke={COLORS.latent}
                strokeWidth="2"
                markerEnd="url(#arrow-dim-reduce)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
              <text
                x={dimTransMidX}
                y={26}
                textAnchor="middle"
                fill={COLORS.latent}
                fontSize="8"
                fontWeight="700"
                fontFamily="IBM Plex Sans, sans-serif"
              >
                {diagram.dimReduction}
              </text>
              <DimBars count={4} x={dimTransRightX} y={14} label={diagram.latentDimLow} highlight />
            </g>
          )}

          {/* Phase 4: latent space only */}
          {showLatentOnly && (
            <DimBars count={4} x={latentOnlyX} y={14} label={diagram.latentDimLow} highlight />
          )}

          {/* Phase 1–2: hyperparameter tuning */}
          {showTuning && (
            <g>
              <text
                x={OCC_CX}
                y={72}
                textAnchor="middle"
                fill={COLORS.tune}
                fontSize="8"
                fontWeight="700"
                fontFamily="IBM Plex Sans, sans-serif"
              >
                {diagram.hyperparameters}
              </text>
              <TuningKnobs x={knobsX} y={80} showResolved={false} active />
            </g>
          )}

          {/* Phase 4: tuning resolved */}
          {showTuningResolved && (
            <g>
              <text
                x={OCC_CX}
                y={72}
                textAnchor="middle"
                fill={COLORS.benign}
                fontSize="8"
                fontWeight="700"
                fontFamily="IBM Plex Sans, sans-serif"
              >
                {diagram.hyperparameters}
              </text>
              <TuningKnobs x={knobsX} y={80} showResolved active />
            </g>
          )}

          {/* Phase 2–4: training time bar */}
          {showProgress && (
            <g>
              <text
                x={OCC_CX}
                y={progressLabelY}
                textAnchor="middle"
                fill={COLORS.dim}
                fontSize="8"
                fontWeight="600"
                fontFamily="IBM Plex Sans, sans-serif"
              >
                {diagram.trainingTime}
              </text>
              <ProgressBar
                x={progressX}
                y={progressBarY}
                w={progressW}
                progress={progress}
                active
                speedLabels={{ fast: diagram.trainingFast, slow: diagram.trainingSlow }}
              />
            </g>
          )}

          {/* Benign region — absolute coords around OCC_CX */}
          <g>
            <motion.ellipse
              cx={OCC_CX}
              cy={boundaryY + regionCy}
              rx={regionRx}
              ry={regionRy}
              fill={COLORS.region}
              fillOpacity={0.06}
              stroke={COLORS.region}
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 0.95, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ transformOrigin: `${OCC_CX}px ${boundaryY + regionCy}px` }}
            />
            <text
              x={OCC_CX}
              y={boundaryY + 14}
              textAnchor="middle"
              fill={COLORS.region}
              fontSize="9"
              fontWeight="700"
              fontFamily="IBM Plex Sans, sans-serif"
            >
              {diagram.benignRegion}
            </text>
            {OCC_BENIGN.map((p, i) => (
              <motion.circle
                key={`ob-${i}`}
                cx={OCC_CX + p.x}
                cy={boundaryY + regionCy + p.y}
                r={4}
                fill={COLORS.benign}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 0.1 + i * 0.04 }}
              />
            ))}
            {phase >= 4 && (
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                style={{ transformOrigin: `${OCC_CX + regionRx + 18}px ${boundaryY + regionCy - 10}px` }}
              >
                <circle
                  cx={OCC_CX + regionRx + 18}
                  cy={boundaryY + regionCy - 10}
                  r={5}
                  fill={COLORS.anomaly}
                  stroke={COLORS.malware}
                  strokeWidth="1.5"
                />
                <text
                  x={OCC_CX + regionRx + 28}
                  y={boundaryY + regionCy - 7}
                  fill={COLORS.anomaly}
                  fontSize="8"
                  fontWeight="700"
                  fontFamily="IBM Plex Sans, sans-serif"
                >
                  {diagram.outlier}
                </text>
              </motion.g>
            )}
          </g>
        </svg>
      </div>
      <AnimatePresence mode="wait">
        <PanelCaption text={caption} />
      </AnimatePresence>
    </div>
  )
}

function AeOccPanel({
  phase,
  caption,
  title,
  badges,
  diagram,
}: {
  phase: Phase
  caption: string
  title: string
  badges: { thresholdFree: string; efficient: string }
  diagram: DiagramLabels
}) {
  const showPipeline = phase >= 3
  const showFull = phase >= 4

  return (
    <div className="relative flex flex-col">
      <div className="mb-3 flex items-center justify-between gap-2 px-1">
        <h4 className="font-display text-sm font-semibold text-neutral-900 dark:text-white md:text-base">
          <RichText text={title} />
        </h4>
        {showFull && (
          <div className="flex flex-wrap justify-end gap-1">
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-full bg-accent-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-700 dark:text-accent-400"
            >
              {badges.thresholdFree}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="rounded-full bg-blue-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-700 dark:text-blue-400"
            >
              {badges.efficient}
            </motion.span>
          </div>
        )}
      </div>
      <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50/80 dark:border-neutral-800 dark:bg-neutral-950/60">
        <svg viewBox="0 0 360 280" className="relative h-auto w-full" role="img" aria-hidden>
          <defs>
            <pattern id="grid-aeocc" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-neutral-300 dark:text-neutral-800" />
            </pattern>
            <marker id="arrow-pipe" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={COLORS.pipeline} />
            </marker>
          </defs>
          <rect width="360" height="280" fill="url(#grid-aeocc)" />

          <motion.g animate={{ opacity: phase < 3 ? 0.35 : 1 }} transition={{ duration: 0.4 }}>
            <rect x={28} y={108} width={72} height={44} rx={8} fill={COLORS.pipeline} opacity={0.12} stroke={COLORS.pipeline} strokeWidth="1.5" />
            <text x={64} y={128} textAnchor="middle" fill={COLORS.pipeline} fontSize="10" fontWeight="700" fontFamily="IBM Plex Sans, sans-serif">
              {diagram.encoder}
            </text>
            <text x={64} y={142} textAnchor="middle" fill={COLORS.pipeline} fontSize="8" fontFamily="IBM Plex Sans, sans-serif">
              AE
            </text>

            {showPipeline && (
              <>
                <motion.line
                  x1={100}
                  y1={130}
                  x2={138}
                  y2={130}
                  stroke={COLORS.pipeline}
                  strokeWidth="2"
                  markerEnd="url(#arrow-pipe)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4 }}
                />
                {[0, 1, 2].map((i) => (
                  <motion.circle
                    key={i}
                    cx={155 + i * 14}
                    cy={130}
                    r={5}
                    fill={COLORS.latent}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  />
                ))}
                <text x={155} y={118} fill={COLORS.latent} fontSize="9" fontWeight="600" fontFamily="IBM Plex Sans, sans-serif">
                  {diagram.latentZ}
                </text>

                <motion.line
                  x1={200}
                  y1={130}
                  x2={228}
                  y2={130}
                  stroke={COLORS.pipeline}
                  strokeWidth="2"
                  markerEnd="url(#arrow-pipe)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                />

                <motion.ellipse
                  cx={285}
                  cy={130}
                  rx={52}
                  ry={38}
                  fill="none"
                  stroke={COLORS.region}
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                />
                <text x={285} y={134} textAnchor="middle" fill={COLORS.region} fontSize="10" fontWeight="700" fontFamily="IBM Plex Sans, sans-serif">
                  {diagram.occ}
                </text>
              </>
            )}
          </motion.g>

          {showFull && (
            <motion.circle
              cx={248}
              cy={88}
              r={7}
              fill={COLORS.anomaly}
              stroke={COLORS.malware}
              strokeWidth="2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
          )}

          {phase === 1 && (
            <motion.rect
              x={14}
              y={14}
              width={332}
              height={252}
              rx={10}
              fill="none"
              stroke={COLORS.anomaly}
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
            />
          )}
          {phase === 2 && (
            <motion.rect
              x={14}
              y={14}
              width={332}
              height={252}
              rx={10}
              fill="none"
              stroke={COLORS.tune}
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
            />
          )}
        </svg>
      </div>
      <AnimatePresence mode="wait">
        <PanelCaption text={caption} />
      </AnimatePresence>
    </div>
  )
}

export function AeOccCompareAnimation() {
  const { t } = useLanguage()
  const c = t.aeOcc.compare
  const { phase: phaseRaw, goToPhase, paused, togglePause } = useAutoPhase(PHASE_COUNT, PHASE_MS)
  const phase = phaseRaw as Phase

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 md:p-6">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-white md:text-xl">
            <RichText text={c.title} />
          </h3>
          <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">
            {c.stepLabel} {phase + 1}/{PHASE_COUNT}: {c.stepNames[phase]}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS.benign }} />
            {c.legend.benign}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS.anomaly }} />
            {c.legend.anomaly}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS.latent }} />
            {c.legend.latent}
          </span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 lg:gap-4">
        <AePanel phase={phase} title={c.ae.title} caption={c.ae.captions[phase]} diagram={c.diagram} />
        <OccPanel phase={phase} title={c.occ.title} caption={c.occ.captions[phase]} diagram={c.diagram} />
        <AeOccPanel
          phase={phase}
          title={c.aeocc.title}
          caption={c.aeocc.captions[phase]}
          badges={{ thresholdFree: c.aeocc.thresholdFreeBadge, efficient: c.aeocc.efficientBadge }}
          diagram={c.diagram}
        />
      </div>

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
