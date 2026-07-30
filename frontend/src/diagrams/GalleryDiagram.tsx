import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'
import {
  MODEL_BARS,
  PERTURBATION_CURVE,
  PERTURBATION_EPS_TICKS,
  PERTURBATION_SERIES,
  THRESHOLD_CURVE,
  THRESHOLD_TICKS,
  UMAP_VIEWS,
  type GalleryDiagramId,
} from './data'
import { AXIS_TICK, CHART_MARGIN, DETECTION_TICKS, detectionYAxisLabel } from './chartConfig'
import { useLanguage } from '../i18n/LanguageContext'

const ACCENT = '#0d9488'
const MUTED = '#94a3b8'
const WARN = '#f59e0b'

export function GalleryDiagram({ id }: { id: GalleryDiagramId }) {
  const { t } = useLanguage()
  const yLabel = t.results.chartAxes.detectionRate

  if (id === 'model-comparison' || id === 'aeocc-bar') {
    return (
      <div className="h-80 w-full p-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={MODEL_BARS} margin={CHART_MARGIN}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-neutral-200 dark:stroke-neutral-800" />
            <XAxis
              dataKey="model"
              tick={AXIS_TICK}
              interval={0}
              angle={-28}
              textAnchor="end"
              height={52}
            />
            <YAxis
              domain={[50, 100]}
              ticks={[...DETECTION_TICKS]}
              tick={AXIS_TICK}
              width={40}
              label={detectionYAxisLabel(yLabel)}
            />
            <Tooltip
              formatter={(v) => [`${v}%`, yLabel]}
              contentStyle={{ borderRadius: 12, border: '1px solid #e5e5e5', fontSize: 13 }}
            />
            <Bar dataKey="score" radius={[6, 6, 0, 0]}>
              {MODEL_BARS.map((d) => (
                <Cell key={d.model} fill={d.model === 'AEOCC' ? ACCENT : MUTED} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }

  if (id === 'ae-thresholds') {
    return (
      <div className="h-80 w-full p-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={THRESHOLD_CURVE} margin={CHART_MARGIN}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-neutral-200 dark:stroke-neutral-800" />
            <XAxis
              dataKey="threshold"
              type="number"
              domain={[0, 5]}
              ticks={[...THRESHOLD_TICKS]}
              tickFormatter={(v) => Number(v).toFixed(1)}
              tick={AXIS_TICK}
              label={{
                value: t.results.chartAxes.threshold,
                position: 'insideBottom',
                offset: -4,
                fontSize: 11,
                fill: '#737373',
              }}
            />
            <YAxis
              domain={[50, 100]}
              ticks={[...DETECTION_TICKS]}
              tick={AXIS_TICK}
              width={40}
              label={detectionYAxisLabel(yLabel)}
            />
            <Tooltip formatter={(v) => [`${Number(v).toFixed(1)}%`, yLabel]} />
            <Line type="monotone" dataKey="accuracy" stroke={ACCENT} strokeWidth={2.5} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }

  if (id === 'perturbation') {
    return (
      <div className="h-80 w-full p-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={PERTURBATION_CURVE} margin={{ ...CHART_MARGIN, bottom: 36 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-neutral-200 dark:stroke-neutral-800" />
            <XAxis
              dataKey="eps"
              type="number"
              domain={[0, 0.2]}
              ticks={[...PERTURBATION_EPS_TICKS]}
              tickFormatter={(v) => Number(v).toFixed(2)}
              tick={AXIS_TICK}
              label={{
                value: t.results.chartAxes.perturbation,
                position: 'insideBottom',
                offset: -4,
                fontSize: 11,
                fill: '#737373',
              }}
            />
            <YAxis
              domain={[50, 100]}
              ticks={[...DETECTION_TICKS]}
              tick={AXIS_TICK}
              width={40}
              label={detectionYAxisLabel(yLabel)}
            />
            <Legend wrapperStyle={{ fontSize: 11, paddingTop: 4 }} />
            <Tooltip formatter={(v) => [`${Number(v).toFixed(1)}%`, yLabel]} />
            {PERTURBATION_SERIES.map((s) => (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.name}
                stroke={s.color}
                strokeWidth={s.width}
                strokeDasharray={s.dash}
                dot={{ r: 2.5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }

  const view = id === 'umap-hsj' ? UMAP_VIEWS['umap-hsj'] : UMAP_VIEWS['umap-fgm']
  return <UmapScatter benign={view.benign} malware={view.malware} label={id === 'umap-hsj' ? 'HopSkipJump' : 'FGM ε=0.05'} />
}

function UmapScatter({
  benign,
  malware,
  label,
}: {
  benign: readonly { x: number; y: number }[]
  malware: readonly { x: number; y: number }[]
  label: string
}) {
  return (
    <svg viewBox="0 0 100 80" className="h-72 w-full" role="img" aria-label={`UMAP under ${label}`}>
      <rect width="100" height="80" className="fill-neutral-50 dark:fill-neutral-950" rx="2" />
      {[20, 40, 60, 80].map((x) => (
        <line key={`vx${x}`} x1={x} y1={5} x2={x} y2={72} className="stroke-neutral-200 dark:stroke-neutral-800" strokeWidth={0.3} />
      ))}
      {[20, 40, 60].map((y) => (
        <line key={`hy${y}`} x1={8} y1={y} x2={95} y2={y} className="stroke-neutral-200 dark:stroke-neutral-800" strokeWidth={0.3} />
      ))}
      {benign.map((p, i) => (
        <circle key={`b${i}`} cx={p.x} cy={p.y} r={0.9} fill={ACCENT} opacity={0.55} />
      ))}
      {malware.map((p, i) => (
        <circle key={`m${i}`} cx={p.x} cy={p.y} r={0.9} fill={WARN} opacity={0.7} />
      ))}
      <text x="50" y="78" textAnchor="middle" fontSize="3.2" className="fill-neutral-400" fontFamily="IBM Plex Sans, sans-serif">
        Illustrative UMAP under {label} · teal=benign · amber=malware
      </text>
    </svg>
  )
}
