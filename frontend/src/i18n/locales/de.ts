import type { Messages } from '../types'
import { en } from './en'

export const de: Messages = {
  ...en,
  meta: {
    title: 'Zeroday Defense — Forschungsdemo zur Zero-Day-Malware-Erkennung',
    description:
      'Interaktive Forschungsdemo: profilbasierte Zero-Day-Malware-Erkennung mit Autoencoder- und One-Class-Klassifikationsarchitekturen (Chiho Kim, Texas A&M University–Commerce).',
  },
  lang: {
    ...en.lang,
    label: 'Sprache',
    chooseTitle: 'Sprache wählen',
    chooseSubtitle: 'Sie können dies jederzeit in der Navigationsleiste ändern.',
    continue: 'Weiter',
  },
  nav: {
    ...en.nav,
    overview: 'Überblick',
    approaches: 'Ansätze',
    results: 'Ergebnisse',
    research: 'Forschung',
    team: 'Team',
    toggleTheme: 'Farbschema umschalten',
  },
  research: {
    ...en.research,
    thesisLabel: 'Masterarbeit',
  },
}
