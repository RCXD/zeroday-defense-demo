import type { ReactNode } from 'react'

/** Renders plain text with optional `**bold**` spans for professional terms. */
export function RichText({ text, className }: { text: string; className?: string }) {
  return <span className={className}>{parseRichText(text)}</span>
}

export function parseRichText(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={i} className="font-semibold text-neutral-900 dark:text-neutral-100">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <span key={i}>{part}</span>
  })
}
