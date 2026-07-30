/** Illustrative diagram data — conceptually similar to recorded experiment charts, not paper reproductions. */

export type HeatmapCell = { x: string; y: string; v: number }

/** Synthetic hyperparameter heatmaps (accuracy-like scores 0–1). */
export const HEATMAPS: Record<string, { xLabels: string[]; yLabels: string[]; cells: HeatmapCell[] }> = {
  ae: {
    xLabels: ['32', '64', '128', '256'],
    yLabels: ['1e-4', '1e-3', '1e-2', '1e-1'],
    cells: buildGrid(['32', '64', '128', '256'], ['1e-4', '1e-3', '1e-2', '1e-1'], [
      [0.72, 0.81, 0.88, 0.84],
      [0.78, 0.89, 0.93, 0.9],
      [0.74, 0.86, 0.91, 0.87],
      [0.61, 0.7, 0.76, 0.73],
    ]),
  },
  vae: {
    xLabels: ['32', '64', '128', '256'],
    yLabels: ['β=0.1', 'β=0.5', 'β=1.0', 'β=2.0'],
    cells: buildGrid(['32', '64', '128', '256'], ['β=0.1', 'β=0.5', 'β=1.0', 'β=2.0'], [
      [0.7, 0.79, 0.85, 0.82],
      [0.76, 0.87, 0.91, 0.88],
      [0.73, 0.84, 0.89, 0.86],
      [0.65, 0.74, 0.8, 0.77],
    ]),
  },
  cnn1d: {
    xLabels: ['k=3', 'k=5', 'k=7', 'k=9'],
    yLabels: ['16ch', '32ch', '64ch', '128ch'],
    cells: buildGrid(['k=3', 'k=5', 'k=7', 'k=9'], ['16ch', '32ch', '64ch', '128ch'], [
      [0.75, 0.83, 0.86, 0.84],
      [0.8, 0.88, 0.92, 0.9],
      [0.82, 0.9, 0.94, 0.91],
      [0.79, 0.87, 0.91, 0.89],
    ]),
  },
  cnn2d: {
    xLabels: ['3×3', '5×5', '7×7', '9×9'],
    yLabels: ['16', '32', '64', '128'],
    cells: buildGrid(['3×3', '5×5', '7×7', '9×9'], ['16', '32', '64', '128'], [
      [0.71, 0.78, 0.82, 0.8],
      [0.77, 0.85, 0.89, 0.87],
      [0.8, 0.88, 0.92, 0.9],
      [0.76, 0.84, 0.88, 0.86],
    ]),
  },
  aeocc: {
    xLabels: ['OCSVM', 'IF', 'LOF', 'EE'],
    yLabels: ['AE-32', 'AE-64', 'AE-128', 'AE-256'],
    cells: buildGrid(['OCSVM', 'IF', 'LOF', 'EE'], ['AE-32', 'AE-64', 'AE-128', 'AE-256'], [
      [0.88, 0.85, 0.83, 0.84],
      [0.92, 0.9, 0.87, 0.89],
      [0.96, 0.93, 0.91, 0.92],
      [0.94, 0.91, 0.89, 0.9],
    ]),
  },
}

export const MODEL_BARS = [
  { model: 'OCSVM', score: 78 },
  { model: 'IF', score: 81 },
  { model: 'LOF', score: 76 },
  { model: 'EE', score: 79 },
  { model: 'AE-thr', score: 90 },
  { model: 'AEOCC', score: 96 },
]

export const THRESHOLD_TICKS = [0, 1, 2, 3, 4, 5] as const

export const THRESHOLD_CURVE = Array.from({ length: 11 }, (_, i) => {
  const thr = i * 0.5
  const score = 96 - Math.abs(thr - 2.5) * 16 - (thr < 0.5 || thr > 4.5 ? 8 : 0)
  return { threshold: thr, accuracy: Math.max(55, Math.min(96, score)) }
})

export const PERTURBATION_EPS_TICKS = [0, 0.05, 0.1, 0.15, 0.2] as const

export const PERTURBATION_SERIES = [
  { key: 'aeocc', name: 'AEOCC', color: '#0d9488', width: 2.5, dash: undefined },
  { key: 'svm', name: 'SVM', color: '#f59e0b', width: 2, dash: '6 4' },
  { key: 'rf', name: 'RF', color: '#ef4444', width: 2, dash: '6 4' },
  { key: 'dnn', name: 'DNN', color: '#8b5cf6', width: 2, dash: '6 4' },
  { key: 'knn', name: 'k-NN', color: '#3b82f6', width: 2, dash: '6 4' },
  { key: 'lr', name: 'LR', color: '#ec4899', width: 2, dash: '6 4' },
] as const

export const PERTURBATION_CURVE = [
  { eps: 0, aeocc: 96, svm: 97, rf: 96, dnn: 98, knn: 95, lr: 94 },
  { eps: 0.05, aeocc: 93, svm: 88, rf: 85, dnn: 82, knn: 87, lr: 84 },
  { eps: 0.1, aeocc: 90, svm: 79, rf: 76, dnn: 71, knn: 80, lr: 75 },
  { eps: 0.15, aeocc: 86, svm: 71, rf: 67, dnn: 62, knn: 72, lr: 66 },
  { eps: 0.2, aeocc: 82, svm: 64, rf: 59, dnn: 54, knn: 65, lr: 58 },
]

/** Deterministic pseudo-random scatter for UMAP-style illustration. */
export function makeScatter(seed: number, n: number, cx: number, cy: number, spread: number) {
  const pts: { x: number; y: number }[] = []
  let s = seed
  for (let i = 0; i < n; i++) {
    s = (s * 1664525 + 1013904223) >>> 0
    const u = (s >>> 8) / 0xffffff
    s = (s * 1664525 + 1013904223) >>> 0
    const v = (s >>> 8) / 0xffffff
    const a = u * Math.PI * 2
    const r = Math.sqrt(v) * spread
    pts.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r * 0.85 })
  }
  return pts
}

export const UMAP_VIEWS = {
  'umap-clean': {
    benign: makeScatter(1, 80, 35, 40, 18),
    malware: makeScatter(2, 50, 70, 62, 14),
  },
  'umap-fgm': {
    benign: makeScatter(3, 80, 36, 42, 18),
    malware: [
      ...makeScatter(4, 35, 68, 60, 12),
      ...makeScatter(5, 25, 48, 48, 10), // drifted toward benign under FGM
    ],
  },
  'umap-hsj': {
    benign: makeScatter(6, 80, 34, 41, 17),
    malware: [
      ...makeScatter(7, 30, 72, 64, 11),
      ...makeScatter(8, 30, 42, 45, 9),
    ],
  },
} as const

export type GalleryDiagramId =
  | 'model-comparison'
  | 'aeocc-bar'
  | 'ae-thresholds'
  | 'perturbation'
  | 'umap-fgm'
  | 'umap-hsj'

function buildGrid(xs: string[], ys: string[], values: number[][]): HeatmapCell[] {
  const cells: HeatmapCell[] = []
  ys.forEach((y, yi) => {
    xs.forEach((x, xi) => {
      cells.push({ x, y, v: values[yi][xi] })
    })
  })
  return cells
}
