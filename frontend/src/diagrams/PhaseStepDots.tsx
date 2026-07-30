import { Pause, Play } from 'lucide-react'

type PhaseStepDotsProps = {
  phase: number
  stepNames: string[]
  stepLabel: string
  paused: boolean
  pauseLabel: string
  playLabel: string
  onSelect: (index: number) => void
  onTogglePause: () => void
}

export function PhaseStepDots({
  phase,
  stepNames,
  stepLabel,
  paused,
  pauseLabel,
  playLabel,
  onSelect,
  onTogglePause,
}: PhaseStepDotsProps) {
  return (
    <div className="relative z-10 mt-4 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={onTogglePause}
        aria-label={paused ? playLabel : pauseLabel}
        aria-pressed={!paused}
        className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-colors hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 dark:hover:text-white"
      >
        {paused ? <Play className="h-3.5 w-3.5 fill-current" /> : <Pause className="h-3.5 w-3.5" />}
      </button>

      <div className="flex gap-0.5" role="tablist" aria-label={stepLabel}>
        {stepNames.map((name, i) => {
          const active = phase === i
          return (
            <button
              key={`${i}-${name}`}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={name}
              onClick={() => onSelect(i)}
              className="flex h-8 min-w-8 cursor-pointer items-center justify-center rounded-full px-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
            >
              <span
                aria-hidden
                className={`block rounded-full transition-all duration-300 ${
                  active
                    ? 'h-1.5 w-6 bg-accent-500'
                    : 'h-1.5 w-1.5 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-500'
                }`}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
