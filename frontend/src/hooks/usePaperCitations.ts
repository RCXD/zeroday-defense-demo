import { useEffect, useState } from 'react'

export type CitationInfo = {
  count: number
  scholarUrl: string
}

async function fetchCitation(doi: string): Promise<CitationInfo | null> {
  const scholarUrl = `https://scholar.google.com/scholar?q=${encodeURIComponent(doi)}`
  try {
    const res = await fetch(
      `https://api.semanticscholar.org/graph/v1/paper/DOI:${doi}?fields=citationCount`,
    )
    if (!res.ok) return { count: -1, scholarUrl }
    const data = (await res.json()) as { citationCount?: number }
    if (typeof data.citationCount !== 'number') return { count: -1, scholarUrl }
    return { count: data.citationCount, scholarUrl }
  } catch {
    return null
  }
}

/** Fetches citation counts via Semantic Scholar (Google Scholar has no public API). */
export function usePaperCitations(dois: readonly string[]) {
  const [citations, setCitations] = useState<Record<string, CitationInfo>>({})

  useEffect(() => {
    let cancelled = false
    const unique = [...new Set(dois.filter(Boolean))]

    async function load() {
      const entries = await Promise.all(
        unique.map(async (doi) => {
          const info = await fetchCitation(doi)
          return [doi, info] as const
        }),
      )
      if (cancelled) return
      const next: Record<string, CitationInfo> = {}
      for (const [doi, info] of entries) {
        if (info) next[doi] = info
      }
      setCitations(next)
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [dois.join('|')])

  return citations
}
