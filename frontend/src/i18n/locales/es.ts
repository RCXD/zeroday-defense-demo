import type { Messages } from '../types'

export const es: Messages = {
  meta: {
    title: 'Zeroday Defense — Demo de investigación sobre detección de malware zero-day',
    description:
      'Demo interactiva: detección de malware zero-day basada en perfilado (**profiling**) con autoencoders (**autoencoder**) y clasificación de una clase (**one-class classification**) (Chiho Kim, Texas A&M University–Commerce).',
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
      'Póster de máster, 1.er lugar (Business & Information Technology) en College Station, marzo de 2022 — la misma línea de detección zero-day por perfilado (**profiling**) publicada después en IEEE Big Data (2021) e IEEE TNSM (2023).',
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
    category: 'Master’s Business and Information Technology — Poster Presentation',
    presenter: 'Chiho Kim (A&M–Commerce)',
    placement: '1st place',
    paperTitle: 'Zero-day Malware Detection using Threshold-free Autoencoding Architecture',
    categoryNote:
      'Confirmado en la lista oficial de ganadores TAMUS del 17.º Pathways (pista de póster de máster). La noticia del campus ETAMU/Commerce etiqueta erróneamente el premio como Undergraduate; el 1.er lugar Undergraduate BIT ese año fue otro estudiante (Tarleton). El anfitrión de College Station no publicó un reportaje a nivel de sistema sobre este premio.',
    sourceLabel: 'Noticia del campus (ETAMU; nivel de grado incorrecto):',
    sourceLink: 'Leer el artículo',
    officialSourceLabel: 'Lista oficial de ganadores (PDF):',
    officialSourceLink: 'Abrir el PDF de ganadores 2022',
    evidenceCaption:
      'Extracto del PDF oficial de ganadores TAMUS — póster de máster, Business & Information Technology, 1.er lugar (Chiho Kim).',
    logoAlt: 'Logo oficial del 17.º Texas A&M University System Pathways Student Research Symposium',
    evidenceAlt:
      'Extracto de la lista oficial: Master’s Presentations, Business & Information Technology, 1st Place Chiho Kim',
    hostLogoAlt: 'Logo de Texas A&M University Graduate and Professional School',
  },
  hero: {
    badge: 'Investigación en malware · Texas A&M University–Commerce',
    brand: 'Zeroday Defense',
    titleBefore: 'Investigación sobre la detección de ',
    titleAccent: 'malware zero-day',
    titleAfter: ' sin umbrales manuales',
    subtitle:
      'Desde intrusiones en el sector nuclear y energético hasta ransomware y kits de explotación automatizados — detección por perfilado (**profiling**) (sin actualizar firmas (**signature**)) con hasta {detection} en Meraz\'18, Drebin y EMBER. Zero-day = familias de malware nunca vistas antes.',
    ctaApproaches: 'Explorar los enfoques',
    ctaResults: 'Ver los resultados',
    stats: {
      detection: 'Mejor detección reportada (**AEOCC**)',
      datasets: 'Conjuntos públicos de malware evaluados',
      models: 'Arquitectura central (**AE** + **OCC**)',
      threat: 'Modelo de amenaza: familias zero-day no vistas',
    },
  },
  motivation: {
    eyebrow: 'Por qué esta investigación',
    title: 'Por qué importa la investigación en detección de malware zero-day',
    subtitle:
      'Intrusiones en infraestructuras nucleares y energéticas, ransomware y herramientas de hacking automatizadas — la brecha que dejan las firmas (**signature**) y el aprendizaje supervisado (**supervised learning**) ante malware nunca visto',
    paragraphs: [
      'En 2017 se informó de intrusiones contra redes corporativas de operadores nucleares en EE. UU. (incluido Wolf Creek). Los sistemas de operación no se vieron comprometidos, pero quedó claro que la energía y lo nuclear son blancos reales — con especial eco en regiones energéticas como Texas. El ransomware de Colonial Pipeline en 2021 detuvo el suministro de combustible y mostró el coste social del malware contra infraestructuras críticas.',
      'Oleadas previas como WannaCry y NotPetya ya habían paralizado hospitales y empresas. Herramientas automatizadas — Metasploit, kits de exploits y filtraciones como EternalBlue — aceleraron la explotación masiva. Las variantes suelen adelantarse a las actualizaciones de firmas (**signature**) — huellas de malware conocido. Detectar familias zero-day — malware nunca visto en entrenamiento — se volvió un problema central de investigación.',
      'Las listas de firmas (**signature**) y los modelos de aprendizaje supervisado (**supervised learning**) solo con malware conocido dejan esa brecha abierta. Esta línea de investigación usa perfilado no supervisado (**unsupervised profiling**) del comportamiento benigno y combina autoencoders (**autoencoder**, **AE**) con clasificación de una clase (**one-class classification**, **OCC**) para señalar anomalías sin umbrales manuales frágiles — trabajo presentado en IEEE Big Data y IEEE TNSM.',
    ],
    stakesTitle: 'Por qué importa la investigación',
    stakes:
      'El malware desconocido sigue siendo un punto ciego desde infraestructuras críticas hasta endpoints móviles. Solo renovar firmas (**signature**) no basta. Este proyecto modela el comportamiento benigno con una arquitectura sin umbral (**threshold-free**) **AEOCC** — sin ajustar manualmente el corte **τ** del error de reconstrucción (**reconstruction error**).',
    incidents: [
      {
        year: '2017',
        title: 'Intrusiones nucleares y energéticas en EE. UU.',
        body: 'Ataques reportados a redes corporativas de operadores nucleares (p. ej. Wolf Creek). Sin impacto en operaciones — pero un punto de inflexión para la ciberseguridad de infraestructuras.',
      },
      {
        year: '2016–17',
        title: 'Herramientas de ataque automatizadas',
        body: 'Metasploit, kits de exploits y filtraciones como EternalBlue industrializaron la ofensiva. La velocidad de variantes y zero-day superó la respuesta por firmas (**signature**).',
      },
      {
        year: '2017',
        title: 'WannaCry y NotPetya',
        body: 'Oleadas globales de ransomware que paralizaron hospitales y empresas — y expusieron cómo las rutas zero-day nunca vistas derrotan detectores basados en firmas (**signature**).',
      },
      {
        year: '2021',
        title: 'Ransomware Colonial Pipeline',
        body: 'Parada de un gran oleoducto de combustible en EE. UU., con impacto directo en el suministro — incluido Texas y el Sureste — y el coste real del malware.',
      },
    ],
  },
  overview: {
    eyebrow: 'La idea',
    title: 'Investigación sobre el perfilado (**profiling**) del comportamiento benigno',
    subtitle:
      'Lo que fallan firmas (**signature**) y detectores de aprendizaje supervisado (**supervised learning**) — tratar las desviaciones del comportamiento normal como amenazas zero-day',
    cards: {
      profiling: {
        title: 'Perfilado con autoencoders (**autoencoder**)',
        body: 'Los autoencoders (**autoencoder**, **AE**) reconstruyen vectores de características (**feature vector**) benignos a partir de perfiles de permisos y llamadas API de Android. El malware produce mayor error de reconstrucción (**reconstruction error**), pero elegir el umbral (**threshold**) **τ** — el corte sobre ese error — es frágil en producción.',
      },
      hybrid: {
        title: '**AE** + clasificación de una clase (**one-class classification**)',
        body: '**AEOCC** combina la abstracción del autoencoder (**autoencoder**) con un clasificador OC para eliminar el ajuste manual del umbral (**threshold**) sin perder detección sólida — la arquitectura sin umbral (**threshold-free**) de los artículos BigData y TNSM.',
      },
      datasets: {
        title: 'Meraz\'18, Drebin y EMBER',
        body: 'Los experimentos abarcan tres conjuntos públicos de malware Android del archivo de investigación, con diversas representaciones de vectores de características (**feature vector**) y particiones zero-day.',
      },
    },
    compare: {
      title: 'Aprendizaje supervisado (**supervised learning**) vs. perfilado no supervisado (**unsupervised profiling**): por qué se escapa el zero-day',
      stepLabel: 'Pasos de la animación',
      stepNames: ['Entrenamiento etiquetado', 'Frontera de decisión', 'Zero-day', 'No detectado', 'Ataques de evasión', 'Filtrado poison'],
      groupLabels: { benign: 'Grupo 0', malware: 'Grupo 1' },
      attackLabels: { poison: 'Poison', fgsm: 'FGSM', hsj: 'HSJ', boundary: 'Boundary' },
      legend: {
        benign: 'Apps benignas (Grupo 0)',
        knownMalware: 'Malware conocido (Grupo 1)',
        zeroDay: 'Zero-day (familia no vista)',
      },
      supervised: {
        title: 'Aprendizaje supervisado (**supervised learning**)',
        trainingCaption:
          'Aprende una frontera de decisión (**decision boundary**) entre el Grupo 0 (benigno) y el Grupo 1 (malware conocido) etiquetados. El rendimiento depende de la calidad de esos grupos y de si los patrones de ataque desconocidos quedaron fuera del entrenamiento.',
        boundaryCaption:
          'El hiperplano solo separa lo etiquetado en entrenamiento. No puede representar familias zero-day nunca vistas.',
        zeroDayCaption:
          'Una familia nunca vista aparece donde no hay etiqueta, a menudo junto a muestras benignas en el espacio de características (**feature space**).',
        missedCaption:
          'Sin etiqueta para la familia nueva: se clasifica como benigna. El aprendizaje supervisado (**supervised learning**) no es adecuado para patrones de ataque desconocidos.',
        adversarialCaption:
          'Los ataques de evasión (**evasion attack**) (FGSM, HopSkipJump, boundary) empujan malware más allá del hiperplano — la frontera de decisión (**decision boundary**) supervisada es frágil.',
        poisonCaption:
          'Muestras de envenenamiento (**poisoning**) se ocultan en datos benignos de entrenamiento. La frontera se desplaza y acepta puntos corruptos.',
        missedBadge: 'No detectado',
        vulnerableBadge: 'Explotable',
        poisonBadge: 'Envenenado',
      },
      profiling: {
        title: 'Perfilado no supervisado (**unsupervised profiling**)',
        trainingCaption:
          'Aprende solo la distribución del comportamiento benigno, sin etiquetas de malware ni depender de cómo otros separaron los grupos 0/1.',
        regionCaption:
          'Una envolvente de comportamiento normal envuelve el clúster benigno: las desviaciones del manifold aprendido, no firmas (**signature**) memorizadas, activan alertas.',
        zeroDayCaption:
          'Las mismas muestras zero-day caen lejos de la región normal aprendida en el espacio de características (**feature space**).',
        detectedCaption:
          'La desviación de lo normal se marca: zero-day detectado sin etiquetas de malware.',
        robustCaption:
          'Los mismos ataques de evasión (**evasion attack**) (FGSM, HopSkipJump, boundary) se aplican en ambos paneles: las perturbaciones que cruzan un hiperplano supervisado siguen marcándose aquí.',
        poisonCaption:
          'Los mismos puntos de envenenamiento (**poisoning**) quedan fuera de la envolvente benigna y se rechazan — el perfilado (**profiling**) mantiene limpio el manifold de entrenamiento.',
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
          'Muestras de envenenamiento (**poisoning**) se mezclan con datos benignos de entrenamiento en el espacio de características (**feature space**) (x, y).',
          'Vista a 45° del eje latente (**latent**) z: el poison queda sobre el manifold benigno.',
          'El perfilado no supervisado (**unsupervised profiling**) aprende una envolvente 3D del comportamiento benigno en el espacio latente (**latent space**).',
          'El poison fuera de la envolvente se rechaza antes de degradar el entrenamiento.',
          'El manifold benigno permanece limpio: el perfilado (**profiling**) filtra la infiltración por envenenamiento de datos (**data poisoning**).',
        ],
      },
    },
  },
  contributions: {
    eyebrow: 'Contribuciones de investigación',
    title: 'Lo que el trabajo previo pasó por alto — y cómo lo abordamos',
    subtitle:
      'Cuellos de botella en detección zero-day semi-supervisada · híbrido **AE+OCC** sin umbral (**threshold-free**) · resiliencia ante evasión adversarial (**adversarial evasion**)',
    problem: {
      title: 'Cuellos de botella en enfoques de detección zero-day',
      body:
        'Tres familias de métodos apuntan a malware no visto — firmas (**signature**) y aprendizaje supervisado (**supervised learning**), clasificación de una clase (**one-class classification**, **OCC**) y perfilado con autoencoder (**autoencoder profiling**). Cada una muestra un cuello de botella distinto; el estado del arte y los experimentos previos los resumen así, y este trabajo parte de ese compromiso.',
      bullets: [
        'Firmas (**signature**) y aprendizaje supervisado (**supervised learning**): fuertes en familias conocidas, débiles ante malware zero-day nunca visto.',
        'Clasificación de una clase (**one-class classification**, **OCC**) (OCSVM, Isolation Forest, LOF): no exige umbral (**threshold**) manual de error de reconstrucción (**reconstruction error**), pero la detección suele ser baja en vectores de características (**feature vector**) de permisos/API de Android.',
        'Perfilado con autoencoder (**autoencoder profiling**): mejor separación, pero el rendimiento depende del umbral (**threshold**) **τ** elegido sobre el error de reconstrucción (**reconstruction error**).',
      ],
    },
    solution: {
      title: '**AE** + **OCC** sin umbral (**threshold-free**) (**AEOCC**)',
      body:
        'La propuesta central combina la abstracción neuronal del autoencoder (**autoencoder**) con clasificación de una clase (**one-class classification**) para que los operadores no ajusten umbrales (**threshold**) de error de reconstrucción (**reconstruction error**) a mano.',
      bullets: [
        'Fusiona autoencoding (**autoencoding**) y clasificación OC para mantener abstracción fuerte de características (**feature**) eliminando la selección frágil del umbral (**threshold**) **τ**.',
        'Aborda el entrenamiento concurrente **AE+OCC** — sin etiquetas de malware en entrenamiento — con un procedimiento de selección de modelos (**AEOCC**).',
        'Reporta hasta ~96% de detección zero-day en Meraz\'18 (Big Data 2021) y 97,1% en Meraz\'18 y Drebin (TNSM 2023), comparable a baselines de aprendizaje supervisado (**supervised learning**) limitados a malware conocido.',
      ],
    },
    adversarial: {
      title: 'Perspectiva sobre evasión adversarial (**adversarial evasion**)',
      body:
        'Además de la precisión en familias holdout, se evalúa la robustez cuando los atacantes perturban vectores de características (**feature vector**) para evadir la frontera de decisión (**decision boundary**).',
      bullets: [
        'Los modelos de aprendizaje supervisado (**supervised learning**) aprenden fronteras con malware etiquetado y pueden cruzarlas con ataques de evasión (**evasion attack**) basados en gradientes (FGM) o consultas (HopSkipJump).',
        'Big Data 2021: el híbrido **AEOCC** identifica muestras sintéticas de evasión con más fiabilidad que aprendices supervisados entrenados con malware conocido.',
        'TNSM 2023: experimentos formales de evasión muestran **AEOCC** basado en perfilado (**profiling**) manteniendo >99% de detección en variantes perturbadas — robustez por modelar comportamiento benigno, no memorizar firmas (**signature**) de ataque.',
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
    title: '¿Por qué combinar autoencoders (**autoencoder**) con clasificación one-class (**one-class classification**)?',
    subtitle:
      '**AE** y **OCC** resuelven partes distintas del perfilado zero-day (**zero-day profiling**), pero por separado dejan cuellos de botella operativos. **AEOCC** conserva lo mejor de ambos y elimina el ajuste frágil del umbral (**threshold**) **τ**.',
    bullets: [
      'El perfilado con autoencoder (**autoencoder profiling**) es expresivo, pero convertir el error de reconstrucción (**reconstruction error**) en detector exige fijar el umbral (**threshold**) **τ** — el corte sobre el error — a mano en cada cambio de datos.',
      'Los clasificadores one-class (**one-class classification**) evitan ese umbral (**threshold**), pero el ajuste de hiperparámetros es difícil y el coste de entrenamiento crece con la dimensionalidad de entrada.',
      'Alimentar al **OCC** con el espacio latente del AE (**AE latent space**) comprime el problema: el ajuste es más manejable, el entrenamiento es más rápido y desaparece el umbral (**threshold**) **τ** manual sobre el error de reconstrucción (**reconstruction error**).',
    ],
    compare: {
      title: '**AE** vs **OCC** vs **AEOCC**: fortalezas complementarias',
      stepLabel: 'Pasos de la animación',
      stepNames: ['Perfilado benigno', 'Brecha umbral AE', 'Brecha escala OCC', 'Puente latente', 'Sinergia AEOCC'],
      legend: {
        benign: 'Muestras benignas de entrenamiento',
        anomaly: 'Error de reconstrucción (**reconstruction error**) elevado',
        latent: 'Representación latente (**latent**)',
      },
      ae: {
        title: 'Autoencoder (**autoencoder**, **AE**)',
        captions: [
          'Aprende a reconstruir vectores de características (**feature vector**) benignos: fuerte abstracción del comportamiento normal.',
          'Para marcar anomalías hay que fijar un umbral (**threshold**) **τ** del error de reconstrucción (**reconstruction error**) — el corte ajustado a mano en cada desplazamiento del dataset.',
          'Un **τ** demasiado bajo genera falsas alarmas; demasiado alto deja pasar zero-day.',
          'El codificador (**encoder**) ya produce un código latente (**latent code**) compacto que el **OCC** puede usar en lugar de características de alta dimensión.',
          'En el híbrido, el **AE** aporta la representación y el **OCC** la regla de decisión, sin **τ** manual sobre el error de reconstrucción (**reconstruction error**).',
        ],
      },
      occ: {
        title: 'Clasificador one-class (**one-class classification**, **OCC**)',
        captions: [
          'La elipse discontinua es la región benigna aprendida: el **OCC** ajusta una frontera de decisión (**decision boundary**) alrededor del comportamiento normal sin etiquetas de malware.',
          'Los hiperparámetros (ν, γ, σ) deben ajustarse para cada configuración de vectores de características (**feature vector**) — no hay un valor por defecto universal.',
          'Los vectores de características (**feature vector**) de permisos/API de alta dimensión (muchas barras) hacen lento el entrenamiento del **OCC** — el coste crece con el tamaño de entrada.',
          'El espacio latente del AE (**AE latent space**) comprime la entrada (pocas barras): reducción de dimensión, entrenamiento más rápido y menor espacio de ajuste.',
          '**OCC** sobre códigos latentes (**latent codes**): entrenamiento rápido, hiperparámetros ajustados y detección sin umbral (**threshold-free**) de anomalías (**outlier**) fuera de la región benigna.',
        ],
      },
      aeocc: {
        title: '**AE** + **OCC** (**AEOCC**)',
        captions: [
          'Vista previa: el codificador (**encoder**) comprime el comportamiento benigno y el **OCC** aprende una frontera de decisión (**decision boundary**) en el espacio latente (**latent space**).',
          'Cuello de botella solo-**AE**: umbral (**threshold**) **τ** manual de error de reconstrucción (**reconstruction error**).',
          'Cuello de botella solo-**OCC**: vectores de características (**feature vector**) crudos de alta dimensión y ajuste pesado.',
          'Puente latente (**latent bridge**): la salida del codificador (**encoder**) alimenta al **OCC** — espacio compacto, manifold benigno compartido.',
          'Detección sin umbral (**threshold-free**) y ajuste eficiente del **OCC**: el híbrido conserva lo que funciona de cada enfoque.',
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
      title: 'Envenenamiento (**poisoning**) en datos de entrenamiento — filtrado en el espacio latente (**latent**) z',
      stepLabel: 'Pasos de animación poison',
      stepNames: ['Infiltración', 'Eje z visible', 'Frontera no supervisada', 'Poison filtrado', 'Perfilado limpio'],
      captions: [
        'Muestras de envenenamiento (**poisoning**) se mezclan con datos benignos de entrenamiento en el espacio de características (**feature space**) (x, y) — buscan degradar el modelo aprendido.',
        'Vista a 45° del eje latente (**latent**) z: los poison quedan sobre el manifold benigno — anomalías (**outlier**) en el espacio latente (**latent space**).',
        'El perfilado no supervisado (**unsupervised profiling**) aprende una envolvente del comportamiento benigno en el espacio latente (**latent space**) 3D (incluido z).',
        'Los poison fuera de la envolvente se rechazan — no pueden degradar el límite sin parecer normales.',
        'Solo permanecen muestras benignas dentro del manifold — el perfilado (**profiling**) resiste la infiltración por envenenamiento de datos (**data poisoning**).',
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
    title: 'Cinco arquitecturas de perfilado (**profiling**) comparadas',
    subtitle:
      'Seleccione un enfoque para inspeccionar su mapa de calor de sensibilidad a hiperparámetros — reconstruido como gráfico ilustrativo del mismo flujo de evaluación del artículo.',
    items: {
      ae: {
        name: 'Perfilado con autoencoder (**autoencoder**)',
        short: 'Error de reconstrucción (**reconstruction error**)',
        description:
          'Un autoencoder (**autoencoder**) feed-forward aprende a reconstruir perfiles de aplicaciones benignas. Las muestras de malware producen mayor error de reconstrucción (**reconstruction error**), separando amenazas zero-day del manifold benigno aprendido.',
      },
      vae: {
        name: 'Perfilado con VAE',
        short: 'Regularización del espacio latente (**latent space**)',
        description:
          'Un autoencoder (**autoencoder**) variacional regulariza el espacio latente (**latent space**) con penalización KL, favoreciendo representaciones benignas más suaves y exponiendo comportamiento anómalo mediante reconstrucción y divergencia latente (**latent**).',
      },
      cnn1d: {
        name: 'CNN-AE (1D)',
        short: 'Codificador secuencial',
        description:
          'Capas convolucionales unidimensionales capturan patrones secuenciales locales en vectores de características (**feature vector**) antes de decodificar, modelando la estructura en las representaciones de malware.',
      },
      cnn2d: {
        name: 'CNN-AE (2D)',
        short: 'Características tipo imagen',
        description:
          'Convoluciones bidimensionales tratan mapas de características reconfigurados como imágenes, aprendiendo correlaciones espaciales entre permisos y llamadas API para la detección basada en perfilado (**profiling**).',
      },
      aeocc: {
        name: 'Híbrido **AE** + **OCC**',
        short: 'Sin umbral (**threshold-free**)',
        description:
          'Combina la abstracción del autoencoder (**autoencoder**) con clasificación de una clase (**one-class classification**) (**AEOCC**) para eliminar el ajuste manual del umbral (**threshold**) **τ** manteniendo una detección sólida — la contribución central de las publicaciones BigData y TNSM.',
      },
    },
  },
  results: {
    eyebrow: 'Los resultados',
    title: 'Gráficos ilustrativos del mismo relato de evaluación',
    subtitle:
      'Los diagramas recrean los temas de evaluación del artículo — comparación de modelos, sensibilidad al umbral (**threshold**) **τ**, robustez ante evasión adversarial (**adversarial evasion**) — como gráficos interactivos originales (no copias de figuras publicadas).',
    galleryTitle: 'Vistas clave de resultados',
    galleryNote:
      'Gráficos ilustrativos: clasificadores OC (**one-class classification**) (OCSVM, IF, LOF, EE) frente a **AE**-umbral (**threshold**) y **AEOCC**, más vistas UMAP bajo ataque adversarial (**adversarial**).',
    heatmapTitle: 'Cuadrículas de hiperparámetros por enfoque',
    heatmapBody:
      'Cada cuadrícula barre configuraciones de arquitectura y entrenamiento. Puntuaciones más altas indican mejor detección zero-day bajo un protocolo basado en perfilado (**profiling**).',
    galleryCaptions: {
      'model-comparison': 'Clasificadores OC vs. **AE**-umbral (**threshold**) vs. **AEOCC** (ilustrativo)',
      'aeocc-bar': '**AEOCC** destacado frente a detectores base',
      'ae-thresholds': 'Sensibilidad del perfilado AE (**AE profiling**) a la selección manual del umbral (**threshold**) **τ**',
      perturbation: 'Detección bajo perturbación de vectores de características (**feature vector**) (**AEOCC** vs aprendizaje supervisado (**supervised learning**))',
      'umap-fgm': 'Embedding estilo UMAP bajo perturbación adversarial (**adversarial**) FGM',
      'umap-hsj': 'Embedding estilo UMAP bajo ataque de evasión (**evasion attack**) HopSkipJump',
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
      threshold: 'Umbral (**threshold**) **τ** de reconstrucción',
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
        'Combina autoencoding (**autoencoding**) y clasificación de una clase (**one-class classification**) para aprovechar las abstracciones de redes neuronales eliminando la necesidad de umbrales complejos — abordando limitaciones de clasificadores OC independientes y del perfilado AE (**AE profiling**) sensible al umbral (**threshold**).',
      'tnsm-2023':
        'Versión extendida de revista con entrenamiento concurrente **AE+OCC**, método de selección de modelos (**AEOCC**), evaluación en Meraz\'18 y Drebin, y análisis de resiliencia ante ataques de evasión adversarial (**adversarial evasion attack**).',
      'thesis-2022':
        'Tesis de maestría que presenta el marco fundamental de detección de malware zero-day basada en perfilado (**profiling**), la metodología experimental y la evaluación comparativa de arquitecturas autoencoder (**autoencoder**) y diseños híbridos **AE+OCC**.',
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
