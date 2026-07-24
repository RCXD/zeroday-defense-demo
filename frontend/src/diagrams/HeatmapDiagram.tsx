import { HEATMAPS } from './data'

const TEAL = ['#ccfbf1', '#99f6e4', '#5eead4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e']

function colorFor(v: number) {
  const i = Math.min(TEAL.length - 1, Math.max(0, Math.floor(v * (TEAL.length - 1))))
  return TEAL[i]
}

export function HeatmapDiagram({ approachKey }: { approachKey: string }) {
  const data = HEATMAPS[approachKey] ?? HEATMAPS.ae
  const cellW = 56
  const cellH = 40
  const left = 72
  const top = 28
  const w = left + data.xLabels.length * cellW + 16
  const h = top + data.yLabels.length * cellH + 36

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" role="img" aria-label="Hyperparameter heatmap">
      <rect width={w} height={h} fill="transparent" />
      {data.xLabels.map((lab, i) => (
        <text
          key={lab}
          x={left + i * cellW + cellW / 2}
          y={18}
          textAnchor="middle"
          className="fill-neutral-500"
          fontSize={11}
          fontFamily="IBM Plex Sans, sans-serif"
        >
          {lab}
        </text>
      ))}
      {data.yLabels.map((lab, i) => (
        <text
          key={lab}
          x={left - 10}
          y={top + i * cellH + cellH / 2 + 4}
          textAnchor="end"
          className="fill-neutral-500"
          fontSize={11}
          fontFamily="IBM Plex Sans, sans-serif"
        >
          {lab}
        </text>
      ))}
      {data.cells.map((c) => {
        const xi = data.xLabels.indexOf(c.x)
        const yi = data.yLabels.indexOf(c.y)
        return (
          <g key={`${c.x}-${c.y}`}>
            <rect
              x={left + xi * cellW + 2}
              y={top + yi * cellH + 2}
              width={cellW - 4}
              height={cellH - 4}
              rx={6}
              fill={colorFor(c.v)}
            />
            <text
              x={left + xi * cellW + cellW / 2}
              y={top + yi * cellH + cellH / 2 + 4}
              textAnchor="middle"
              fill={c.v > 0.82 ? '#fff' : '#134e4a'}
              fontSize={11}
              fontWeight={600}
              fontFamily="IBM Plex Sans, sans-serif"
            >
              {(c.v * 100).toFixed(0)}
            </text>
          </g>
        )
      })}
      <text
        x={left + (data.xLabels.length * cellW) / 2}
        y={h - 8}
        textAnchor="middle"
        className="fill-neutral-400"
        fontSize={10}
        fontFamily="IBM Plex Sans, sans-serif"
      >
        Illustrative hyperparameter grid (detection score)
      </text>
    </svg>
  )
}
