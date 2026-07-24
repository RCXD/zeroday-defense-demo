import type { Messages } from '../types'

export const es: Messages = {
  meta: {
    title: 'Zeroday Defense — Demo de investigación sobre detección de malware zero-day',
    description:
      'Demo interactiva de investigación: detección de malware zero-day basada en perfilado con autoencoders y clasificación de una clase (Chiho Kim, Texas A&M University–Commerce).',
  },
  lang: {
    label: 'Idioma',
    chooseTitle: 'Elija su idioma',
    chooseSubtitle: 'Puede cambiarlo en cualquier momento desde la barra de navegación.',
    continue: 'Continuar',
    names: {
      en: 'English',
      ko: '한국어',
      es: 'Español',
      de: 'Deutsch',
    },
  },
  nav: {
    brand: 'Zeroday Defense',
    overview: 'Resumen',
    approaches: 'Enfoques',
    results: 'Resultados',
    research: 'Investigación',
    team: 'Equipo',
    story: 'Contexto',
    toggleTheme: 'Cambiar tema de color',
  },
  hero: {
    badge: 'Investigación en malware · Texas A&M University–Commerce',
    brand: 'Zeroday Defense',
    titleBefore: 'Detectar ',
    titleAccent: 'malware zero-day',
    titleAfter: ' sin umbrales manuales',
    subtitle:
      'Un recorrido interactivo por la detección basada en perfilado que combina autoencoders y clasificación de una clase, alcanzando hasta {detection} de detección en conjuntos públicos de malware Android sin actualizar firmas.',
    ctaApproaches: 'Explorar los enfoques',
    ctaResults: 'Ver los resultados',
    stats: {
      detection: 'Mejor detección reportada (AEOCC)',
      datasets: 'Conjuntos públicos de malware evaluados',
      models: 'Familia de arquitectura central',
      threat: 'Modelo de amenaza: familias de malware no vistas',
    },
  },
  overview: {
    eyebrow: 'La idea',
    title: 'Perfilar el comportamiento benigno — marcar lo que no encaja',
    subtitle:
      'Los detectores basados en firmas y el aprendizaje supervisado fallan ante malware nunca visto. El perfilado semi-supervisado aprende un modelo del comportamiento benigno y trata las desviaciones como amenazas zero-day.',
    cards: {
      profiling: {
        title: 'Perfilado con autoencoders',
        body: 'Los autoencoders reconstruyen vectores de características benignos a partir de perfiles de permisos y llamadas API de Android. El malware produce mayor error de reconstrucción, pero la selección del umbral es frágil.',
      },
      hybrid: {
        title: 'AE + clasificación de una clase',
        body: 'AEOCC combina la abstracción del autoencoder con un clasificador OC para eliminar el ajuste manual del umbral sin perder detección sólida — la arquitectura sin umbral de los artículos BigData y TNSM.',
      },
      datasets: {
        title: 'Meraz\'18, Drebin y EMBER',
        body: 'Los experimentos abarcan tres conjuntos públicos de malware Android del archivo de investigación, con diversas representaciones de características y particiones zero-day.',
      },
    },
  },
  contributions: {
    eyebrow: 'Relato de investigación',
    title: 'Limitaciones por enfoque en detección zero-day',
    subtitle:
      'Los experimentos previos confirman límites en la detección zero-day semi-supervisada (semi-supervised), proponen una arquitectura híbrida sin umbral (threshold) y evalúan la robustez (robustness) ante evasión (evasion) adversarial (adversarial).',
    problem: {
      title: 'Cuellos de botella en cada enfoque',
      body:
        'Para capturar malware no visto antes se usan tres familias de métodos — firmas y aprendizaje supervisado (supervised learning), clasificación de una clase (one-class) y perfilado (profiling) con autoencoder. Cada una muestra un cuello de botella distinto; el estado del arte y los experimentos previos los resumen así, y este trabajo parte de ese compromiso.',
      bullets: [
        'Firmas y aprendizaje supervisado (supervised learning): fuertes en familias conocidas, débiles ante malware nunca visto.',
        'Clasificación de una clase (one-class) (OCSVM, Isolation Forest, LOF): no exige umbral (threshold) manual, pero la detección suele ser baja en permisos/API de Android.',
        'Perfilado (profiling) con autoencoder: mejor separación, pero el rendimiento depende del umbral (threshold) sobre el error de reconstrucción (reconstruction error).',
      ],
    },
    solution: {
      title: 'Híbrido AE + OCC sin umbral (AEOCC)',
      body:
        'La propuesta central combina la abstracción neuronal del autoencoder con clasificación de una clase para que los operadores no ajusten umbrales de reconstrucción a mano.',
      bullets: [
        'Fusiona autoencoding y clasificación OC para mantener abstracción fuerte eliminando la selección frágil de umbrales.',
        'Aborda el entrenamiento concurrente AE+OCC — sin etiquetas de malware en entrenamiento — con un procedimiento de selección de modelos (AEOCC).',
        'Reporta hasta ~96% en Meraz\'18 (Big Data 2021) y 97,1% en Meraz\'18 y Drebin (TNSM 2023), comparable a baselines supervisados limitados a malware conocido.',
      ],
    },
    adversarial: {
      title: 'Perspectiva sobre evasión (evasion) adversarial (adversarial)',
      body:
        'Además de la precisión en familias holdout (holdout), se evalúa la robustez (robustness) cuando los atacantes perturban vectores de características.',
      bullets: [
        'Los modelos supervisados aprenden fronteras con malware etiquetado y pueden cruzarlas con ataques basados en gradientes (FGM) o consultas (HopSkipJump).',
        'Big Data 2021: el híbrido AEOCC identifica muestras sintéticas de evasión con más fiabilidad que aprendices supervisados entrenados con malware conocido.',
        'TNSM 2023: experimentos formales de evasión muestran AEOCC basado en perfilado manteniendo >99% de detección en variantes perturbadas — robustez por modelar comportamiento benigno, no memorizar firmas de ataque.',
      ],
    },
    venues: {
      title: 'Dónde se presentó esta investigación',
      body:
        'Publicada y revisada por pares en foros IEEE; la tesis de maestría documenta el archivo experimental completo detrás de esta demo.',
      items: [
        'IEEE International Conference on Big Data (BigData 2021) · Orlando, FL · 15–18 dic 2021',
        'IEEE Transactions on Network and Service Management (TNSM) · Vol. 20, No. 3 · sep 2023',
        'Tesis de maestría, Texas A&M University–Commerce · otoño 2022',
      ],
    },
  },
  approaches: {
    eyebrow: 'Los métodos',
    title: 'Cinco arquitecturas de perfilado comparadas',
    subtitle:
      'Seleccione un enfoque para inspeccionar su mapa de calor de sensibilidad a hiperparámetros — reconstruido como gráfico ilustrativo del mismo flujo de evaluación del artículo.',
    items: {
      ae: {
        name: 'Perfilado con autoencoder',
        short: 'Error de reconstrucción',
        description:
          'Un autoencoder feed-forward aprende a reconstruir perfiles de aplicaciones benignas. Las muestras de malware producen mayor error de reconstrucción, separando amenazas zero-day del manifold benigno aprendido.',
      },
      vae: {
        name: 'Perfilado con VAE',
        short: 'Regularización latente',
        description:
          'Un autoencoder variacional regulariza el espacio latente con penalización KL, favoreciendo representaciones benignas más suaves y exponiendo comportamiento anómalo mediante reconstrucción y divergencia latente.',
      },
      cnn1d: {
        name: 'CNN-AE (1D)',
        short: 'Codificador secuencial',
        description:
          'Capas convolucionales unidimensionales capturan patrones secuenciales locales en los vectores de características antes de decodificar, modelando la estructura en las representaciones de malware.',
      },
      cnn2d: {
        name: 'CNN-AE (2D)',
        short: 'Características tipo imagen',
        description:
          'Convoluciones bidimensionales tratan mapas de características reconfigurados como imágenes, aprendiendo correlaciones espaciales entre permisos y llamadas API para la detección basada en perfilado.',
      },
      aeocc: {
        name: 'Híbrido AE + OCC',
        short: 'Sin umbral',
        description:
          'Combina la abstracción del autoencoder con clasificación de una clase (AEOCC) para eliminar el ajuste manual del umbral manteniendo una detección sólida — la contribución central de las publicaciones BigData y TNSM.',
      },
    },
  },
  results: {
    eyebrow: 'Los resultados',
    title: 'Gráficos ilustrativos del mismo relato de evaluación',
    subtitle:
      'Los diagramas recrean los temas de evaluación del artículo — comparación de modelos, sensibilidad al umbral (threshold), robustez (robustness) adversarial (adversarial) — como gráficos interactivos originales (no copias de figuras publicadas).',
    galleryTitle: 'Vistas clave de resultados',
    galleryNote:
      'Gráficos ilustrativos: clasificadores OC (OCSVM, IF, LOF, EE) frente a AE-umbral y AEOCC, más vistas UMAP bajo ataque adversarial.',
    heatmapTitle: 'Cuadrículas de hiperparámetros por enfoque',
    heatmapBody:
      'Cada cuadrícula barre configuraciones de arquitectura y entrenamiento. Puntuaciones más altas indican mejor detección zero-day bajo un protocolo basado en perfilado.',
    galleryCaptions: {
      'model-comparison': 'Clasificadores OC vs. AE-umbral vs. AEOCC (ilustrativo)',
      'aeocc-bar': 'AEOCC destacado frente a detectores base',
      'ae-thresholds': 'Sensibilidad del perfilado AE a la selección manual del umbral',
      perturbation: 'Detección bajo perturbación de características (AEOCC vs supervisado)',
      'umap-fgm': 'Embedding estilo UMAP bajo perturbación adversarial FGM',
      'umap-hsj': 'Embedding estilo UMAP bajo ataque adversarial HopSkipJump',
    },
    galleryThumbLabels: {
      'model-comparison': 'Modelos',
      'aeocc-bar': 'AEOCC',
      'ae-thresholds': 'Umbral',
      perturbation: 'Perturb.',
      'umap-fgm': 'FGM',
      'umap-hsj': 'HSJ',
    },
  },
  research: {
    eyebrow: 'La ciencia',
    title: 'Publicaciones',
    subtitle:
      'Artículos revisados por pares y tesis detrás de esta demo. Los artículos IEEE se enlazan solo por DOI — no se redistribuyen PDFs aquí.',
    thesisLabel: 'Tesis de maestría',
    presentations: {
      'bigdata-2021':
        'Presentado en IEEE Big Data 2021 (Orlando, FL · 15–18 dic 2021) · artículo corto',
      'tnsm-2023':
        'Publicado en IEEE TNSM · Vol. 20, No. 3, pp. 3900–3914 · sep 2023',
      'thesis-2022': 'Tesis de maestría · Texas A&M University–Commerce · otoño 2022',
    },
    abstracts: {
      'bigdata-2021':
        'Combina autoencoding y clasificación de una clase para aprovechar las abstracciones de redes neuronales eliminando la necesidad de umbrales complejos — abordando limitaciones de clasificadores OC independientes y del perfilado AE sensible al umbral.',
      'tnsm-2023':
        'Versión extendida de revista con entrenamiento concurrente AE+OCC, método de selección de modelos (AEOCC), evaluación en Meraz\'18 y Drebin, y análisis de resiliencia ante ataques de evasión adversarial.',
      'thesis-2022':
        'Tesis de maestría que presenta el marco fundamental de detección zero-day basada en perfilado, la metodología experimental y la evaluación comparativa de arquitecturas de autoencoder y diseños híbridos AE+OCC.',
    },
  },
  team: {
    eyebrow: 'El equipo',
    title: 'Equipo de investigación',
    subtitle:
      'Colaboración entre Texas A&M University–Commerce, University of Colorado Colorado Springs y ETRI.',
    funding:
      'Colaboración de investigación entre Texas A&M University–Commerce y ETRI (Electronics and Telecommunications Research Institute), Corea — ciberseguridad y detección de amenazas zero-day.',
    roles: {
      'Jinoh Kim': 'Investigador principal / Director',
      'Chiho Kim': 'Autor principal / Estudiante de maestría',
      'Sang-Yoon Chang': 'Coautor',
      'Dongeun Lee': 'Coautor',
      'Jonghyun Kim': 'Coautor',
    },
    notes: {
      'Jinoh Kim': 'Senior Member, IEEE',
      'Chiho Kim': 'Member, IEEE',
    },
  },
  footer: {
    left: 'Zeroday Defense — demo interactiva de investigación en malware.',
    right: 'Gráficos ilustrativos · conjuntos Meraz\'18, Drebin, EMBER.',
  },
}
