import { useMemo } from 'react'
import { motion } from 'framer-motion'

type Point3 = { x: number; y: number; z: number; id: string; kind: 'benign' | 'poison' }

export type PoisonScenePhase = 0 | 1 | 2 | 3 | 4

const COLORS = {
  benign: '#14b8a6',
  poison: '#dc2626',
  boundary: '#14b8a6',
  axis: '#64748b',
}

const BENIGN: Point3[] = [
  { id: 'b0', kind: 'benign', x: -42, y: 8, z: -6 },
  { id: 'b1', kind: 'benign', x: -28, y: 14, z: 4 },
  { id: 'b2', kind: 'benign', x: -18, y: -6, z: -2 },
  { id: 'b3', kind: 'benign', x: -8, y: 18, z: 8 },
  { id: 'b4', kind: 'benign', x: 6, y: 4, z: -8 },
  { id: 'b5', kind: 'benign', x: 18, y: 12, z: 2 },
  { id: 'b6', kind: 'benign', x: 28, y: -4, z: 6 },
  { id: 'b7', kind: 'benign', x: 38, y: 10, z: -4 },
  { id: 'b8', kind: 'benign', x: -32, y: -12, z: 0 },
  { id: 'b9', kind: 'benign', x: 12, y: -14, z: 4 },
  { id: 'b10', kind: 'benign', x: -4, y: 6, z: -10 },
  { id: 'b11', kind: 'benign', x: 22, y: 20, z: 0 },
]

const POISON: Point3[] = [
  { id: 'p0', kind: 'poison', x: -12, y: 10, z: 58 },
  { id: 'p1', kind: 'poison', x: 8, y: 2, z: 52 },
  { id: 'p2', kind: 'poison', x: -2, y: -8, z: 64 },
  { id: 'p3', kind: 'poison', x: 20, y: 8, z: 55 },
]

const ENVELOPE = { cx: 0, cy: 4, cz: 0, rx: 52, ry: 28, rz: 22 }

const ISO_COS = Math.cos(Math.PI / 4)
const ISO_SIN = Math.sin(Math.PI / 4)
const DEPTH = 0.38

function project(x: number, y: number, z: number, ox: number, oy: number, tilt: number) {
  const zVis = z * tilt
  const sx = ox + (x - zVis) * ISO_COS * 1.12
  const sy = oy - y * 1.05 + (x + zVis) * ISO_SIN * DEPTH
  return { sx, sy, depth: x + zVis }
}

function ellipsoidOutside(x: number, y: number, z: number) {
  const dx = (x - ENVELOPE.cx) / ENVELOPE.rx
  const dy = (y - ENVELOPE.cy) / ENVELOPE.ry
  const dz = (z - ENVELOPE.cz) / ENVELOPE.rz
  return dx * dx + dy * dy + dz * dz > 1
}

function envelopeSlices(tilt: number, ox: number, oy: number) {
  const slices: { d: string; depth: number }[] = []
  const steps = 10
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const z = ENVELOPE.cz - ENVELOPE.rz + t * 2 * ENVELOPE.rz
    const rzScale = Math.sqrt(Math.max(0, 1 - ((z - ENVELOPE.cz) / ENVELOPE.rz) ** 2))
    const rx = ENVELOPE.rx * rzScale
    const ry = ENVELOPE.ry * rzScale
    const pts: string[] = []
    let avgDepth = 0
    for (let a = 0; a <= 32; a++) {
      const ang = (a / 32) * Math.PI * 2
      const px = ENVELOPE.cx + Math.cos(ang) * rx
      const py = ENVELOPE.cy + Math.sin(ang) * ry
      const { sx, sy, depth } = project(px, py, z, ox, oy, tilt)
      pts.push(`${a === 0 ? 'M' : 'L'} ${sx} ${sy}`)
      avgDepth += depth
    }
    slices.push({ d: `${pts.join(' ')} Z`, depth: avgDepth / 33 })
  }
  return slices.sort((a, b) => a.depth - b.depth)
}

function AxisGizmo({
  ox,
  oy,
  tilt,
  labels,
}: {
  ox: number
  oy: number
  tilt: number
  labels: { x: string; y: string; z: string }
}) {
  const o = project(0, 0, 0, ox, oy, tilt)
  const xEnd = project(55, 0, 0, ox, oy, tilt)
  const yEnd = project(0, 42, 0, ox, oy, tilt)
  const zEnd = project(0, 0, 55, ox, oy, tilt)

  return (
    <g opacity={0.75}>
      <line x1={o.sx} y1={o.sy} x2={xEnd.sx} y2={xEnd.sy} stroke={COLORS.axis} strokeWidth="1.5" />
      <line x1={o.sx} y1={o.sy} x2={yEnd.sx} y2={yEnd.sy} stroke={COLORS.axis} strokeWidth="1.5" />
      <line x1={o.sx} y1={o.sy} x2={zEnd.sx} y2={zEnd.sy} stroke={COLORS.axis} strokeWidth="1.5" strokeDasharray="4 3" />
      <text x={xEnd.sx + 4} y={xEnd.sy + 4} fill={COLORS.axis} fontSize="9" fontWeight="600" fontFamily="IBM Plex Sans, sans-serif">
        {labels.x}
      </text>
      <text x={yEnd.sx - 4} y={yEnd.sy - 6} fill={COLORS.axis} fontSize="9" fontWeight="600" fontFamily="IBM Plex Sans, sans-serif">
        {labels.y}
      </text>
      <text x={zEnd.sx + 4} y={zEnd.sy} fill={COLORS.axis} fontSize="9" fontWeight="600" fontFamily="IBM Plex Sans, sans-serif">
        {labels.z}
      </text>
    </g>
  )
}

function FloorGrid({ ox, oy, tilt }: { ox: number; oy: number; tilt: number }) {
  const lines: { x1: number; y1: number; x2: number; y2: number; depth: number }[] = []
  for (let i = -3; i <= 3; i++) {
    const a = project(i * 22, 0, -66, ox, oy, tilt)
    const b = project(i * 22, 0, 66, ox, oy, tilt)
    lines.push({ x1: a.sx, y1: a.sy, x2: b.sx, y2: b.sy, depth: a.depth })
    const c = project(-66, 0, i * 22, ox, oy, tilt)
    const d = project(66, 0, i * 22, ox, oy, tilt)
    lines.push({ x1: c.sx, y1: c.sy, x2: d.sx, y2: d.sy, depth: c.depth })
  }
  return (
    <g>
      {lines
        .sort((a, b) => a.depth - b.depth)
        .map((l, i) => (
          <line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-neutral-300 dark:text-neutral-800"
          />
        ))}
    </g>
  )
}

export function PoisonLatentScene({
  scenePhase,
  axisLabels,
  filteredLabel,
  viewBox = '0 0 390 300',
  origin = { x: 195, y: 210 },
}: {
  scenePhase: PoisonScenePhase
  axisLabels: { x: string; y: string; z: string }
  filteredLabel: string
  viewBox?: string
  origin?: { x: number; y: number }
}) {
  const tilt = scenePhase === 0 ? 0 : 1
  const showEnvelope = scenePhase >= 2
  const showFiltered = scenePhase >= 3
  const showClean = scenePhase >= 4
  const ox = origin.x
  const oy = origin.y

  const allPoints = useMemo(() => [...BENIGN, ...POISON], [])

  const sortedPoints = useMemo(() => {
    return [...allPoints].sort((a, b) => {
      const da = project(a.x, a.y, a.z, ox, oy, tilt).depth
      const db = project(b.x, b.y, b.z, ox, oy, tilt).depth
      return da - db
    })
  }, [allPoints, ox, oy, tilt])

  const slices = useMemo(() => envelopeSlices(tilt, ox, oy), [tilt, ox, oy])

  return (
    <svg viewBox={viewBox} className="relative h-auto w-full" role="img" aria-hidden>
      <FloorGrid ox={ox} oy={oy} tilt={tilt} />
      <AxisGizmo ox={ox} oy={oy} tilt={tilt} labels={axisLabels} />

      {showEnvelope &&
        slices.map((s, i) => (
          <motion.path
            key={`env-${i}`}
            d={s.d}
            fill={COLORS.boundary}
            fillOpacity={0.04}
            stroke={COLORS.boundary}
            strokeWidth="1"
            strokeOpacity={0.35}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
          />
        ))}

      {sortedPoints.map((p) => {
        const { sx, sy } = project(p.x, p.y, p.z, ox, oy, tilt)
        const outside = ellipsoidOutside(p.x, p.y, p.z)
        const isPoison = p.kind === 'poison'
        const filtered = showFiltered && isPoison && outside
        const faded = showClean && isPoison
        const r = isPoison ? 7 : 5.5

        return (
          <g key={p.id}>
            {filtered && (
              <motion.g initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
                <circle cx={sx} cy={sy} r={12} fill="none" stroke={COLORS.poison} strokeWidth="2" strokeDasharray="4 3" />
                <text
                  x={sx}
                  y={sy + 3}
                  textAnchor="middle"
                  fill={COLORS.poison}
                  fontSize="11"
                  fontWeight="800"
                  fontFamily="IBM Plex Sans, sans-serif"
                >
                  ×
                </text>
              </motion.g>
            )}
            <motion.circle
              cx={sx}
              cy={sy}
              r={r}
              fill={isPoison ? COLORS.poison : COLORS.benign}
              stroke="#fff"
              strokeWidth={1}
              animate={{
                opacity: faded ? 0.2 : filtered ? 0.45 : 1,
              }}
              transition={{ duration: 0.5 }}
            />
            {isPoison && scenePhase === 1 && tilt > 0.5 && (
              <motion.line
                x1={sx}
                y1={sy}
                x2={project(p.x, p.y, 0, ox, oy, tilt).sx}
                y2={project(p.x, p.y, 0, ox, oy, tilt).sy}
                stroke={COLORS.poison}
                strokeWidth="1"
                strokeDasharray="3 2"
                opacity={0.5}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
              />
            )}
          </g>
        )
      })}

      {showClean && (
        <motion.text
          x={ox}
          y={36}
          textAnchor="middle"
          fill={COLORS.benign}
          fontSize="11"
          fontWeight="700"
          fontFamily="IBM Plex Sans, sans-serif"
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 36 }}
        >
          {filteredLabel}
        </motion.text>
      )}
    </svg>
  )
}

export const POISON_SCENE_PHASE_COUNT = 5
