/** Shared Recharts axis styling for Results gallery plots. */

export const CHART_MARGIN = { top: 12, right: 20, bottom: 28, left: 52 } as const

export const DETECTION_TICKS = [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100] as const

export function detectionYAxisLabel(label: string) {
  return {
    value: label,
    angle: -90,
    position: 'insideLeft' as const,
    offset: 12,
    style: { textAnchor: 'middle' as const, fontSize: 11, fill: '#737373' },
  }
}

export const AXIS_TICK = { fontSize: 11, fill: '#737373' }
