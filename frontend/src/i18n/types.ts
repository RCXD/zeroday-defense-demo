export type Locale = 'en' | 'ko' | 'es' | 'de'

export type Messages = {
  meta: {
    title: string
    description: string
  }
  lang: {
    label: string
    chooseTitle: string
    chooseSubtitle: string
    continue: string
    names: Record<Locale, string>
  }
  nav: {
    brand: string
    overview: string
    approaches: string
    results: string
    research: string
    team: string
    toggleTheme: string
    story: string
  }
  hero: {
    badge: string
    brand: string
    titleBefore: string
    titleAccent: string
    titleAfter: string
    subtitle: string
    ctaApproaches: string
    ctaResults: string
    stats: {
      detection: string
      datasets: string
      models: string
      threat: string
    }
  }
  overview: {
    eyebrow: string
    title: string
    subtitle: string
    cards: {
      profiling: { title: string; body: string }
      hybrid: { title: string; body: string }
      datasets: { title: string; body: string }
    }
  }
  contributions: {
    eyebrow: string
    title: string
    subtitle: string
    problem: { title: string; body: string; bullets: string[] }
    solution: { title: string; body: string; bullets: string[] }
    adversarial: { title: string; body: string; bullets: string[] }
    venues: { title: string; body: string; items: string[] }
  }
  approaches: {
    eyebrow: string
    title: string
    subtitle: string
    items: Record<string, { name: string; short: string; description: string }>
  }
  results: {
    eyebrow: string
    title: string
    subtitle: string
    galleryTitle: string
    galleryNote: string
    heatmapTitle: string
    heatmapBody: string
    galleryCaptions: Record<string, string>
    galleryThumbLabels: Record<string, string>
  }
  research: {
    eyebrow: string
    title: string
    subtitle: string
    thesisLabel: string
    presentations: Record<string, string>
    abstracts: Record<string, string>
  }
  team: {
    eyebrow: string
    title: string
    subtitle: string
    funding: string
    roles: Record<string, string>
    notes: Record<string, string>
  }
  footer: {
    left: string
    right: string
  }
}
