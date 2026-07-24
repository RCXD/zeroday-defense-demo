import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

/** Spread benign samples — left / lower region. */
const BENIGN = [
  { x: 38, y: 218 },
  { x: 62, y: 192 },
  { x: 48, y: 242 },
  { x: 78, y: 205 },
  { x: 92, y: 178 },
  { x: 70, y: 228 },
  { x: 105, y: 198 },
  { x: 55, y: 168 },
  { x: 118, y: 222 },
  { x: 82, y: 158 },
  { x: 100, y: 235 },
  { x: 125, y: 185 },
]

/** Known malware — dispersed across upper-right, mid-right, and lower-right. */
const KNOWN_MALWARE = [
  { x: 300, y: 52 },
  { x: 325, y: 68 },
  { x: 288, y: 78 },
  { x: 318, y: 118 },
  { x: 302, y: 142 },
  { x: 278, y: 128 },
  { x: 295, y: 188 },
  { x: 268, y: 208 },
  { x: 312, y: 200 },
  { x: 235, y: 72 },
  { x: 218, y: 108 },
  { x: 248, y: 135 },
  { x: 200, y: 92 },
]

/** Zero-day near the decision boundary — same (x,y) on both panels. */
const ZERO_DAY = [
  { x: 158, y: 115 },
  { x: 176, y: 132 },
  { x: 148, y: 125 },
]

const ADVERSARIAL_EVASION = [
  { fromX: 235, fromY: 72, toX: 168, toY: 126, label: 'FGSM', lx: 198, ly: 88 },
  { fromX: 318, fromY: 118, toX: 162, toY: 132, label: 'HSJ', lx: 228, ly: 108 },
  { fromX: 295, fromY: 188, toX: 175, toY: 140, label: 'Boundary', lx: 218, ly: 168 },
]

const POISON_POINT = { x: 55, y: 168, lx: 68, ly: 152 }

const PHASE_COUNT = 5
const PHASE_MS = 3000

const COLORS = {
  benign: '#14b8a6',
  malware: '#ef4444',
  zeroDay: '#f59e0b',
  boundary: '#64748b',
  region: '#14b8a6',
  adversarial: '#a855f7',
  poison: '#dc2626',
}

type Phase = 0 | 1 | 2 | 3 | 4
type Point = { x: number; y: number }
type PanelVariant = 'supervised' | 'profiling'

function centroid(points: Point[]) {
  const n = points.length
  return {
    x: points.reduce((s, p) => s + p.x, 0) / n,
    y: points.reduce((s, p) => s + p.y, 0) / n,
  }
}

function clusterEnvelope(points: Point[], padding = 1.38) {
  const c = centroid(points)
  let maxDx = 0
  let maxDy = 0
  for (const p of points) {
    maxDx = Math.max(maxDx, Math.abs(p.x - c.x))
    maxDy = Math.max(maxDy, Math.abs(p.y - c.y))
  }
  return {
    cx: c.x,
    cy: c.y,
    rx: maxDx * padding + 12,
    ry: maxDy * padding + 12,
  }
}

const PLOT_BOUNDS = { x: 14, y: 14, w: 332, h: 252 }

function clipLineToPlot(mx: number, my: number, vx: number, vy: number) {
  const { x: x0, y: y0, w, h } = PLOT_BOUNDS
  const x1 = x0 + w
  const y1 = y0 + h
  const ts: number[] = []

  if (Math.abs(vx) > 1e-9) {
    for (const x of [x0, x1]) {
      const t = (x - mx) / vx
      const y = my + t * vy
      if (y >= y0 - 1e-6 && y <= y1 + 1e-6) ts.push(t)
    }
  }
  if (Math.abs(vy) > 1e-9) {
    for (const y of [y0, y1]) {
      const t = (y - my) / vy
      const x = mx + t * vx
      if (x >= x0 - 1e-6 && x <= x1 + 1e-6) ts.push(t)
    }
  }

  if (ts.length < 2) return `M ${mx} ${my} L ${mx} ${my}`

  const tMin = Math.min(...ts)
  const tMax = Math.max(...ts)
  const xA = mx + tMin * vx
  const yA = my + tMin * vy
  const xB = mx + tMax * vx
  const yB = my + tMax * vy
  return `M ${xA} ${yA} L ${xB} ${yB}`
}

function separationBoundary(benign: Point[], malware: Point[]) {
  const b = centroid(benign)
  const m = centroid(malware)
  const mx = (b.x + m.x) / 2
  const my = (b.y + m.y) / 2
  const dx = m.x - b.x
  const dy = m.y - b.y
  const len = Math.hypot(dx, dy) || 1
  const vx = -dy / len
  const vy = dx / len
  return clipLineToPlot(mx, my, vx, vy)
}

function PanelCaption({ text }: { text: string }) {
  return (
    <motion.p
      key={text}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4 }}
      className="min-h-[3rem] text-center text-xs leading-snug text-neutral-500 dark:text-neutral-400 md:text-sm"
    >
      {text}
    </motion.p>
  )
}

function GroupLabels({ labels }: { labels: { benign: string; malware: string } }) {
  return (
    <>
      <rect
        x={8}
        y={10}
        width={72}
        height={18}
        rx={5}
        className="fill-white/92 dark:fill-neutral-950/92"
      />
      <text
        x={14}
        y={23}
        fill={COLORS.benign}
        fontSize="10"
        fontWeight="700"
        fontFamily="IBM Plex Sans, sans-serif"
      >
        {labels.benign}
      </text>
      <rect
        x={276}
        y={10}
        width={76}
        height={18}
        rx={5}
        className="fill-white/92 dark:fill-neutral-950/92"
      />
      <text
        x={346}
        y={23}
        textAnchor="end"
        fill={COLORS.malware}
        fontSize="10"
        fontWeight="700"
        fontFamily="IBM Plex Sans, sans-serif"
      >
        {labels.malware}
      </text>
    </>
  )
}

function AdversarialEffects({
  variant,
  markerId,
  showDetected,
}: {
  variant: PanelVariant
  markerId: string
  showDetected: boolean
}) {
  return (
    <>
      {ADVERSARIAL_EVASION.map((a, i) => (
        <g key={`adv-${variant}-${i}`}>
          <motion.line
            x1={a.fromX}
            y1={a.fromY}
            x2={a.toX}
            y2={a.toY}
            stroke={COLORS.adversarial}
            strokeWidth="1.5"
            strokeDasharray="4 3"
            markerEnd={`url(#${markerId})`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: i * 0.12, duration: 0.55 }}
          />
          {showDetected && variant === 'profiling' && (
            <motion.circle
              cx={a.toX}
              cy={a.toY}
              r={9}
              fill="none"
              stroke={COLORS.malware}
              strokeWidth="2"
              initial={{ opacity: 0.75, scale: 0.7 }}
              animate={{ opacity: 0, scale: 2.4 }}
              transition={{
                duration: 1.3,
                delay: 0.35 + i * 0.18,
                repeat: Infinity,
                repeatDelay: 1.1,
              }}
            />
          )}
          <motion.circle
            cx={a.toX}
            cy={a.toY}
            r={5}
            fill={COLORS.adversarial}
            stroke={showDetected && variant === 'profiling' ? COLORS.malware : '#fff'}
            strokeWidth={showDetected && variant === 'profiling' ? 2 : 1}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.28 + i * 0.12, duration: 0.35 }}
          />
          <text
            x={a.lx}
            y={a.ly}
            fill={COLORS.adversarial}
            fontSize="9"
            fontWeight="700"
            fontFamily="IBM Plex Sans, sans-serif"
          >
            {a.label}
          </text>
        </g>
      ))}
      <motion.circle
        cx={POISON_POINT.x}
        cy={POISON_POINT.y}
        r={8}
        fill="none"
        stroke={COLORS.poison}
        strokeWidth="2"
        strokeDasharray="3 2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      />
      <text
        x={POISON_POINT.lx}
        y={POISON_POINT.ly}
        fill={COLORS.poison}
        fontSize="9"
        fontWeight="700"
        fontFamily="IBM Plex Sans, sans-serif"
      >
        Poison
      </text>
    </>
  )
}

function ScatterPanel({
  variant,
  phase,
  caption,
  title,
  outcome,
  outcomeLabel,
  boundary,
  normalRegion,
  groupLabels,
}: {
  variant: PanelVariant
  phase: Phase
  caption: string
  title: string
  outcome?: 'missed' | 'detected' | 'vulnerable' | 'robust'
  outcomeLabel?: string
  boundary: string
  normalRegion: { cx: number; cy: number; rx: number; ry: number }
  groupLabels: { benign: string; malware: string }
}) {
  const markerId = `arrow-${variant}`
  const showBoundary = phase >= 1
  const showZeroDay = phase >= 2
  const showZeroDayOutcome = phase >= 3
  const showAdversarial = phase >= 4
  const showOutcomeBadge = outcome && outcomeLabel && phase >= 3
  const malwareOpacity = variant === 'supervised' ? 1 : 0.38

  return (
    <div className="relative flex flex-col">
      <div className="mb-3 flex items-center justify-between gap-2 px-1">
        <h4 className="font-display text-sm font-semibold text-neutral-900 dark:text-white md:text-base">
          {title}
        </h4>
        {showOutcomeBadge && (
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide md:text-xs ${
              outcome === 'missed' || outcome === 'vulnerable'
                ? 'bg-red-500/15 text-red-600 dark:text-red-400'
                : 'bg-accent-500/15 text-accent-700 dark:text-accent-400'
            }`}
          >
            {outcomeLabel}
          </motion.span>
        )}
      </div>

      <motion.div
        className="relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50/80 dark:border-neutral-800 dark:bg-neutral-950/60"
      >
        <div
          className={`pointer-events-none absolute inset-0 opacity-30 ${
            variant === 'supervised'
              ? 'bg-gradient-to-br from-red-500/10 via-transparent to-teal-500/10'
              : 'bg-gradient-to-bl from-accent-500/15 via-transparent to-accent-400/5'
          }`}
        />
        <svg viewBox="0 0 360 280" className="relative h-auto w-full" role="img" aria-hidden>
          <defs>
            <pattern id={`grid-${variant}`} width="24" height="24" patternUnits="userSpaceOnUse">
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-neutral-300 dark:text-neutral-800"
              />
            </pattern>
            <radialGradient id={`glow-${variant}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={COLORS.region} stopOpacity="0.22" />
              <stop offset="100%" stopColor={COLORS.region} stopOpacity="0" />
            </radialGradient>
            <marker id={markerId} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={COLORS.adversarial} />
            </marker>
          </defs>

          <rect width="360" height="280" fill={`url(#grid-${variant})`} />

          {variant === 'profiling' && (
            <g transform={`translate(${normalRegion.cx} ${normalRegion.cy})`}>
              <motion.g
                initial={false}
                animate={{
                  scale: showBoundary ? 1 : 0.01,
                  opacity: showBoundary ? 1 : 0,
                }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
              >
                <ellipse
                  cx={0}
                  cy={0}
                  rx={normalRegion.rx}
                  ry={normalRegion.ry}
                  fill={`url(#glow-${variant})`}
                />
                <ellipse
                  cx={0}
                  cy={0}
                  rx={normalRegion.rx}
                  ry={normalRegion.ry}
                  fill="none"
                  stroke={COLORS.region}
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  opacity={0.9}
                />
              </motion.g>
              {showBoundary && (
                <motion.ellipse
                  cx={0}
                  cy={0}
                  rx={normalRegion.rx}
                  ry={normalRegion.ry}
                  fill="none"
                  stroke={COLORS.region}
                  strokeWidth="1.5"
                  initial={{ opacity: 0.45, scale: 0.96 }}
                  animate={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                />
              )}
            </g>
          )}

          {variant === 'supervised' && (
            <motion.path
              key={`boundary-${phase >= 1 ? 'on' : 'off'}`}
              d={boundary}
              fill="none"
              stroke={COLORS.boundary}
              strokeWidth="2.5"
              strokeDasharray="8 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: showBoundary ? 1 : 0,
                opacity: showBoundary ? 0.95 : 0,
              }}
              transition={{ duration: 0.85, ease: 'easeInOut' }}
            />
          )}

          {BENIGN.map((p, i) => (
            <motion.circle
              key={`b-${i}`}
              cx={p.x}
              cy={p.y}
              r={5}
              fill={COLORS.benign}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.025, duration: 0.3 }}
            />
          ))}

          {KNOWN_MALWARE.map((p, i) => (
            <motion.circle
              key={`m-${i}`}
              cx={p.x}
              cy={p.y}
              r={5}
              fill={COLORS.malware}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: malwareOpacity, scale: 1 }}
              transition={{ delay: 0.15 + i * 0.025, duration: 0.3 }}
            />
          ))}

          {showAdversarial && (
            <AdversarialEffects
              variant={variant}
              markerId={markerId}
              showDetected
            />
          )}

          <AnimatePresence>
          {showZeroDay &&
            ZERO_DAY.map((p, i) => {
              const detected = variant === 'profiling'
              return (
                <g key={`z-${i}`}>
                  {detected && showZeroDayOutcome && (
                    <motion.circle
                      cx={p.x}
                      cy={p.y}
                      r={8}
                      fill="none"
                      stroke={COLORS.malware}
                      strokeWidth="2"
                      initial={{ opacity: 0.7, scale: 0.6 }}
                      animate={{ opacity: 0, scale: 2.8 }}
                      transition={{
                        duration: 1.4,
                        delay: i * 0.25,
                        repeat: phase === 3 ? Infinity : 0,
                        repeatDelay: 1.2,
                      }}
                    />
                  )}
                  <motion.circle
                    cx={p.x}
                    cy={p.y}
                    r={6}
                    fill={COLORS.zeroDay}
                    stroke={detected && showZeroDayOutcome ? COLORS.malware : '#fff'}
                    strokeWidth={detected && showZeroDayOutcome ? 2 : 1}
                    initial={{ opacity: 0, scale: 0, y: -24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: i * 0.16,
                      duration: 0.55,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  />
                  {variant === 'supervised' && showZeroDayOutcome && phase === 3 && (
                    <motion.text
                      x={p.x}
                      y={p.y - 10}
                      textAnchor="middle"
                      fill={COLORS.malware}
                      fontSize="10"
                      fontWeight="700"
                      fontFamily="IBM Plex Sans, sans-serif"
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 + i * 0.1, duration: 0.3 }}
                    >
                      ?
                    </motion.text>
                  )}
                </g>
              )
            })}
          </AnimatePresence>
          {phase === 0 && <GroupLabels labels={groupLabels} />}
        </svg>
      </motion.div>

      <AnimatePresence mode="wait">
        <PanelCaption text={caption} />
      </AnimatePresence>
    </div>
  )
}

export function LearningCompareAnimation() {
  const { t } = useLanguage()

  const geometry = useMemo(
    () => ({
      boundary: separationBoundary(BENIGN, KNOWN_MALWARE),
      normalRegion: clusterEnvelope(BENIGN),
    }),
    [],
  )

  const [phase, setPhase] = useState<Phase>(0)

  const advance = useCallback(() => {
    setPhase((p) => ((p + 1) % PHASE_COUNT) as Phase)
  }, [])

  useEffect(() => {
    const id = window.setInterval(advance, PHASE_MS)
    return () => window.clearInterval(id)
  }, [advance])

  const c = t.overview.compare

  const supervisedCaption =
    phase === 0
      ? c.supervised.trainingCaption
      : phase === 1
        ? c.supervised.boundaryCaption
        : phase === 2
          ? c.supervised.zeroDayCaption
          : phase === 3
            ? c.supervised.missedCaption
            : c.supervised.adversarialCaption

  const profilingCaption =
    phase === 0
      ? c.profiling.trainingCaption
      : phase === 1
        ? c.profiling.regionCaption
        : phase === 2
          ? c.profiling.zeroDayCaption
          : phase === 3
            ? c.profiling.detectedCaption
            : c.profiling.robustCaption

  const supervisedOutcome =
    phase === 3 ? 'missed' : phase === 4 ? 'vulnerable' : undefined
  const supervisedBadge =
    phase === 3 ? c.supervised.missedBadge : phase === 4 ? c.supervised.vulnerableBadge : undefined

  const profilingOutcome = phase >= 3 ? 'robust' : undefined
  const profilingBadge =
    phase === 3 ? c.profiling.detectedBadge : phase === 4 ? c.profiling.robustBadge : undefined

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 md:p-6">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-white md:text-xl">
          {c.title}
        </h3>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS.benign }} />
            {c.legend.benign}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS.malware }} />
            {c.legend.knownMalware}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS.zeroDay }} />
            {c.legend.zeroDay}
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-5">
        <ScatterPanel
          variant="supervised"
          phase={phase}
          title={c.supervised.title}
          caption={supervisedCaption}
          outcome={supervisedOutcome}
          outcomeLabel={supervisedBadge}
          boundary={geometry.boundary}
          normalRegion={geometry.normalRegion}
          groupLabels={c.groupLabels}
        />
        <ScatterPanel
          variant="profiling"
          phase={phase}
          title={c.profiling.title}
          caption={profilingCaption}
          outcome={profilingOutcome}
          outcomeLabel={profilingBadge}
          boundary={geometry.boundary}
          normalRegion={geometry.normalRegion}
          groupLabels={c.groupLabels}
        />
      </div>

      <div className="mt-4 flex justify-center gap-1.5" role="tablist" aria-label={c.stepLabel}>
        {c.stepNames.map((name, i) => (
          <motion.button
            key={name}
            type="button"
            role="tab"
            aria-selected={phase === i}
            aria-label={name}
            onClick={() => setPhase(i as Phase)}
            animate={{
              width: phase === i ? 24 : 6,
              backgroundColor: phase === i ? '#14b8a6' : undefined,
            }}
            transition={{ duration: 0.3 }}
            className={`h-1.5 rounded-full ${
              phase === i
                ? 'bg-accent-500'
                : 'bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-500'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
