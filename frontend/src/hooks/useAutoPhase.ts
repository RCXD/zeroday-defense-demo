import { useCallback, useEffect, useState } from 'react'

/** Auto-advancing phase index with manual selection and pause/resume. */
export function useAutoPhase(count: number, intervalMs: number) {
  const [phase, setPhase] = useState(0)
  const [timerKey, setTimerKey] = useState(0)
  const [paused, setPaused] = useState(false)

  const goToPhase = useCallback(
    (next: number) => {
      const clamped = ((next % count) + count) % count
      setPhase(clamped)
      setTimerKey((k) => k + 1)
    },
    [count],
  )

  const togglePause = useCallback(() => {
    setPaused((p) => !p)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setPhase((p) => (p + 1) % count)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [count, intervalMs, timerKey, paused])

  return { phase, goToPhase, paused, togglePause }
}
