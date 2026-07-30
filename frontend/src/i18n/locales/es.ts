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
    hybrid: 'AE+OCC',
    acknowledgments: 'Agradecimientos',
    toggleTheme: 'Cambiar tema de color',
  },
  pathways: {
    eyebrow: 'Reconocimiento temprano',
    title: '1.er lugar en el 17.º TAMUS Pathways Student Research Symposium',
    subtitle:
      'East Texas A&M University (entonces A&M–Commerce) reportó este premio de póster undergraduate en marzo de 2022 — la misma línea de investigación publicada después en IEEE Big Data (2021) e IEEE TNSM (2023).',
    placementBadge: '1.er lugar',
    labels: {
      event: 'Simposio',
      dates: 'Fechas',
      location: 'Lugar',
      category: 'Categoría',
      presenter: 'Presentador',
      placement: 'Premio',
      paperTitle: 'Título del póster',
    },
    event: '17th Annual TAMUS Pathways Student Research Symposium',
    dates: '3–4 de marzo de 2022',
    location: 'Texas A&M University, College Station',
    category: 'Undergraduate Business and Information Technology — Poster Presentation',
    presenter: 'Chiho Kim (A&M–Commerce)',
    placement: '1st place',
    paperTitle: 'Zero-day Malware Detection using Threshold-free Autoencoding Architecture',
    categoryNote:
      'Los registros oficiales listan la categoría de póster Business and Information Technology — no una división exclusiva de Computer Science. El 16.º simposio (nov. 2019, Laredo) y el ciclo aplazado de 2020 en College Station son eventos distintos; este premio corresponde al simposio de marzo de 2022 en College Station.',
    sourceLabel: 'Fuente: noticia oficial de East Texas A&M University (15 mar. 2022)',
    sourceLink: 'Leer el artículo',
  },
  hero: {
    badge: 'Investigación en malware · Texas A&M University–Commerce',
    brand: 'Zeroday Defense',
    titleBefore: 'Detectar ',
    titleAccent: 'malware zero-day',
    titleAfter: ' sin umbrales manuales',
    subtitle:
      'Un recorrido interactivo por la detección basada en perfilado que combina autoencoders y clasificación de una clase, alcanzando hasta {detection} de detección en Meraz\'18, Drebin, EMBER y otros conjuntos públicos de malware Android sin actualizar firmas.',
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
    compare: {
      title: 'Supervisado vs. perfilado no supervisado: por qué se escapa el zero-day',
      stepLabel: 'Pasos de la animación',
      stepNames: ['Entrenamiento etiquetado', 'Frontera', 'Zero-day', 'No detectado', 'Ataques adversarios', 'Filtrado poison'],
      groupLabels: { benign: 'Grupo 0', malware: 'Grupo 1' },
      attackLabels: { poison: 'Poison', fgsm: 'FGSM', hsj: 'HSJ', boundary: 'Boundary' },
      legend: {
        benign: 'Apps benignas (Grupo 0)',
        knownMalware: 'Malware conocido (Grupo 1)',
        zeroDay: 'Zero-day (no visto)',
      },
      supervised: {
        title: 'Aprendizaje supervisado',
        trainingCaption:
          'Aprende una frontera entre el Grupo 0 (benigno) y el Grupo 1 (malware conocido) etiquetados. El rendimiento depende por completo de la calidad de esos grupos y de si los patrones de ataque desconocidos quedaron fuera del entrenamiento.',
        boundaryCaption:
          'El hiperplano solo separa lo etiquetado en entrenamiento. No puede representar familias nunca vistas.',
        zeroDayCaption:
          'Una familia nunca vista aparece donde no hay etiqueta, a menudo junto a muestras benignas.',
        missedCaption:
          'Sin etiqueta para la familia nueva: se clasifica como benigna. El aprendizaje supervisado no es adecuado para patrones de ataque desconocidos.',
        adversarialCaption:
          'Los ataques de evasión (FGSM, HopSkipJump, boundary) empujan malware más allá del hiperplano — la frontera supervisada es frágil.',
        poisonCaption:
          'Muestras poison se ocultan en datos benignos de entrenamiento. La frontera se desplaza y acepta puntos corruptos.',
        missedBadge: 'No detectado',
        vulnerableBadge: 'Explotable',
        poisonBadge: 'Envenenado',
      },
      profiling: {
        title: 'Perfilado no supervisado',
        trainingCaption:
          'Aprende solo la distribución del comportamiento benigno, sin etiquetas de malware ni depender de cómo otros separaron los grupos 0/1.',
        regionCaption:
          'Una envolvente de comportamiento normal envuelve el clúster benigno: las desviaciones, no firmas memorizadas, activan alertas.',
        zeroDayCaption:
          'Las mismas muestras zero-day caen lejos de la región normal aprendida.',
        detectedCaption:
          'La desviación de lo normal se marca: zero-day detectado sin etiquetas de malware.',
        robustCaption:
          'Los mismos ataques de evasión (FGSM, HopSkipJump, boundary) se aplican en ambos paneles: las perturbaciones que cruzan un hiperplano supervisado siguen marcándose aquí.',
        poisonCaption:
          'Los mismos puntos poison quedan fuera de la envolvente benigna y se rechazan — el perfilado mantiene limpia la variedad de entrenamiento.',
        detectedBadge: 'Detectado',
        robustBadge: 'Más robusto',
        poisonFilteredBadge: 'Filtrado',
      },
      poison: {
        legend: {
          benign: 'Entrenamiento benigno',
          poison: 'Muestra poison',
          boundary: 'Envolvente aprendida',
          filtered: 'Poison rechazado',
        },
        axisLabels: { x: 'x', y: 'y', z: 'z (latente)' },
        captions: [
          'Muestras poison se mezclan con datos benignos de entrenamiento en el espacio (x, y).',
          'Vista a 45° del eje latente z: el poison queda sobre el manifold benigno.',
          'El perfilado no supervisado aprende una envolvente 3D del comportamiento benigno.',
          'El poison fuera de la envolvente se rechaza antes de degradar el entrenamiento.',
          'El manifold benigno permanece limpio: el perfilado filtra la infiltración por poison.',
        ],
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
  aeOcc: {
    eyebrow: 'Razonamiento híbrido',
    title: '¿Por qué combinar autoencoders con clasificación one-class?',
    subtitle:
      'AE y OCC resuelven partes distintas del perfilado zero-day, pero por separado dejan cuellos de botella operativos. AEOCC conserva lo mejor de ambos y elimina lo frágil.',
    bullets: [
      'El perfilado con autoencoder es expresivo, pero convertir el error de reconstrucción en detector exige fijar un umbral a mano en cada cambio de datos.',
      'Los clasificadores one-class evitan ese umbral, pero el ajuste de hiperparámetros es difícil y el coste de entrenamiento crece con la dimensionalidad de entrada.',
      'Alimentar al OCC con el espacio latente del AE comprime el problema: el ajuste es más manejable, el entrenamiento es más rápido y desaparece el umbral manual de reconstrucción.',
    ],
    compare: {
      title: 'AE vs OCC vs AE-OCC: fortalezas complementarias',
      stepLabel: 'Pasos de la animación',
      stepNames: ['Perfilado benigno', 'Brecha umbral AE', 'Brecha escala OCC', 'Puente latente', 'Sinergia AEOCC'],
      legend: {
        benign: 'Muestras benignas de entrenamiento',
        anomaly: 'Error de reconstrucción elevado',
        latent: 'Representación latente',
      },
      ae: {
        title: 'Autoencoder (AE)',
        captions: [
          'Aprende a reconstruir vectores de características benignos: fuerte abstracción del comportamiento normal.',
          'Para marcar anomalías hay que fijar un umbral τ del error de reconstrucción, ajustado a mano en cada desplazamiento del dataset.',
          'Un τ demasiado bajo genera falsas alarmas; demasiado alto deja pasar zero-day.',
          'El codificador ya produce un código latente compacto que el OCC puede usar en lugar de características de alta dimensión.',
          'En el híbrido, el AE aporta la representación y el OCC la regla de decisión, sin τ manual sobre el error de reconstrucción.',
        ],
      },
      occ: {
        title: 'Clasificador one-class (OCC)',
        captions: [
          'Modela la región benigna directamente: sin etiquetas de malware ni umbral de reconstrucción en inferencia.',
          'Aun así requiere un ajuste cuidadoso de hiperparámetros (ancho de kernel, ν, tasa de contaminación, etc.).',
          'El coste escala con la dimensión de entrada: perfiles de permisos/API con cientos de características ralentizan el ajuste del OCC.',
          'Operar en el espacio latente del AE reduce la entrada: menos dimensiones, entrenamiento más rápido y un espacio de ajuste menor.',
          'OCC sobre códigos latentes hereda la abstracción del AE y mantiene detección sin umbral en inferencia.',
        ],
      },
      aeocc: {
        title: 'AE + OCC (AEOCC)',
        captions: [
          'Vista previa: el codificador comprime el comportamiento benigno y el OCC aprende un límite en el espacio latente.',
          'Cuello de botella solo-AE: umbral manual de reconstrucción.',
          'Cuello de botella solo-OCC: características crudas de alta dimensión y ajuste pesado.',
          'Puente latente: la salida del codificador alimenta al OCC en un espacio compacto.',
          'Detección sin umbral y ajuste eficiente del OCC: el híbrido conserva lo que funciona de cada enfoque.',
        ],
        thresholdFreeBadge: 'Sin τ manual',
        efficientBadge: 'Ajuste eficiente',
      },
      diagram: {
        reconstructionError: 'error',
        thresholdTau: 'τ ?',
        noManualTau: '✓ sin τ manual',
        inputDimHigh: 'dim. entrada (alta)',
        latentDimLow: 'dim. latente (baja)',
        trainingTime: 'tiempo de entrenamiento',
        trainingFast: 'rápido',
        trainingSlow: 'lento',
        benignRegion: 'región benigna',
        hyperparameters: 'hiperparámetros',
        dimReduction: 'reducción dim.',
        outlier: 'anomalía',
        encoder: 'Codificador',
        latentZ: 'z latente',
        occ: 'OCC',
      },
    },
    poison3d: {
      title: 'Poison en datos de entrenamiento — filtrado en el espacio latente z',
      stepLabel: 'Pasos de animación poison',
      stepNames: ['Infiltración', 'Eje z visible', 'Frontera no supervisada', 'Poison filtrado', 'Perfilado limpio'],
      captions: [
        'Muestras poison se mezclan con datos benignos de entrenamiento en el espacio de características (x, y).',
        'Vista a 45° del eje latente z: los poison quedan sobre el manifold benigno — atípicos en el espacio de representación.',
        'El perfilado no supervisado aprende una envolvente del comportamiento benigno en el espacio latente 3D (incluido z).',
        'Los poison fuera de la envolvente se rechazan — no pueden degradar el límite sin parecer normales.',
        'Solo permanecen muestras benignas dentro del manifold — el perfilado resiste la infiltración por poison.',
      ],
      legend: {
        benign: 'Entrenamiento benigno',
        poison: 'Muestra poison',
        boundary: 'Envolvente aprendida',
        filtered: 'Poison rechazado — manifold limpio',
      },
      axisLabels: { x: 'x', y: 'y', z: 'z (latente)' },
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
    chartAxes: {
      detectionRate: 'Tasa de detección (%)',
      threshold: 'Umbral de reconstrucción τ',
      perturbation: 'Perturbación ε',
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
    citations: '{count} citas ({source}) ·',
    citationSource: 'Semantic Scholar',
    scholarLink: 'Google Scholar',
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
  acknowledgments: {
    eyebrow: 'Agradecimientos',
    title: 'Agradecimientos',
    subtitle:
      'Adaptado de los agradecimientos de las publicaciones IEEE Big Data (2021), IEEE TNSM (2023) y la tesis de maestría que sustentan esta demo.',
    paragraphs: [
      'Este trabajo fue apoyado en parte por el Electronics and Telecommunications Research Institute (ETRI), República de Corea, mediante la colaboración en ciberseguridad con Texas A&M University–Commerce.',
      'Los autores agradecen al Dr. Jinoh Kim por orientar este programa de investigación, y a Sang-Yoon Chang, Jonghyun Kim y Dongeun Lee por su colaboración y comentarios en los manuscritos publicados.',
      'También agradecemos a los revisores anónimos de la IEEE International Conference on Big Data (2021) y de IEEE Transactions on Network and Service Management (2023) por sus comentarios constructivos.',
      'Esta demo interactiva resume el trabajo desarrollado originalmente en la tesis de maestría Automated Profiling-Based Zero-Day Malware Detection (Texas A&M University–Commerce, 2022).',
    ],
  },
  footer: {
    left: 'Zeroday Defense — demo interactiva de investigación en malware.',
    right: 'Gráficos ilustrativos · conjuntos Meraz\'18, Drebin, EMBER.',
    visitors: '{count} visitas al sitio',
    visitorsLoading: 'Contando visitas…',
  },
  animation: {
    pause: 'Pausar animación',
    play: 'Reproducir animación',
  },
}
