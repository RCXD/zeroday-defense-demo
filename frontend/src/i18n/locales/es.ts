import type { Messages } from '../types'
import { en } from './en'

export const es: Messages = {
  ...en,
  meta: {
    title: 'Zeroday Defense — Demo de investigación sobre detección de malware zero-day',
    description:
      'Demo interactiva de investigación: detección de malware zero-day basada en perfilado con autoencoders y clasificación de una clase (Chiho Kim, Texas A&M University–Commerce).',
  },
  lang: {
    ...en.lang,
    label: 'Idioma',
    chooseTitle: 'Elija su idioma',
    chooseSubtitle: 'Puede cambiarlo en cualquier momento desde la barra de navegación.',
    continue: 'Continuar',
  },
  nav: {
    ...en.nav,
    overview: 'Resumen',
    approaches: 'Enfoques',
    results: 'Resultados',
    research: 'Investigación',
    team: 'Equipo',
    toggleTheme: 'Cambiar tema de color',
  },
  research: {
    ...en.research,
    thesisLabel: 'Tesis de maestría',
  },
}
