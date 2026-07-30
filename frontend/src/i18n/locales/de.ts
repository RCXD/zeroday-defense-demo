import type { Messages } from '../types'

export const de: Messages = {
  meta: {
    title: 'Zeroday Defense — Forschungsdemo zur Zero-Day-Malware-Erkennung',
    description:
      'Interaktive Forschungsdemo: profilbasierte Zero-Day-Malware-Erkennung mit Autoencoder- und One-Class-Klassifikationsarchitekturen (Chiho Kim, Texas A&M University–Commerce).',
  },
  lang: {
    label: 'Sprache',
    chooseTitle: 'Sprache wählen',
    chooseSubtitle: 'Sie können dies jederzeit über die Navigationsleiste ändern.',
    continue: 'Weiter',
    names: {
      en: 'English',
      ko: '한국어',
      es: 'Español',
      de: 'Deutsch',
    },
  },
  nav: {
    brand: 'Zeroday Defense',
    overview: 'Überblick',
    approaches: 'Ansätze',
    results: 'Ergebnisse',
    research: 'Forschung',
    team: 'Team',
    story: 'Hintergrund',
    hybrid: 'AE+OCC',
    acknowledgments: 'Danksagung',
    toggleTheme: 'Farbschema umschalten',
  },
  pathways: {
    eyebrow: 'Frühe Anerkennung',
    title: '1. Platz beim 17. TAMUS Pathways Student Research Symposium',
    subtitle:
      'East Texas A&M University (damals A&M–Commerce) meldete diese Undergraduate-Poster-Auszeichnung im März 2022 — dieselbe Forschungslinie, die später in IEEE Big Data (2021) und IEEE TNSM (2023) erschien.',
    placementBadge: '1. Platz',
    labels: {
      event: 'Symposium',
      dates: 'Termine',
      location: 'Ort',
      category: 'Kategorie',
      presenter: 'Vortragende Person',
      placement: 'Auszeichnung',
      paperTitle: 'Postertitel',
    },
    event: '17th Annual TAMUS Pathways Student Research Symposium',
    dates: '3.–4. März 2022',
    location: 'Texas A&M University, College Station',
    category: 'Undergraduate Business and Information Technology — Poster Presentation',
    presenter: 'Chiho Kim (A&M–Commerce)',
    placement: '1st place',
    paperTitle: 'Zero-day Malware Detection using Threshold-free Autoencoding Architecture',
    categoryNote:
      'Offizielle Einträge führen die Kategorie Business and Information Technology — Poster, nicht eine reine Computer-Science-Sparte. Das 16. Symposium (Nov. 2019, Laredo) und der verschobene College-Station-Zyklus 2020 sind separate Veranstaltungen; diese Auszeichnung entspricht dem Symposium im März 2022 in College Station.',
    sourceLabel: 'Quelle: offizielle Meldung der East Texas A&M University (15. März 2022)',
    sourceLink: 'Artikel lesen',
  },
  hero: {
    badge: 'Malware-Forschung · Texas A&M University–Commerce',
    brand: 'Zeroday Defense',
    titleBefore: '',
    titleAccent: 'Zero-Day-Malware',
    titleAfter: ' ohne manuelle Schwellenwerte erkennen',
    subtitle:
      'Ein interaktiver Einblick in profilbasierte Erkennung, die Autoencoder und One-Class-Klassifikation kombiniert — mit bis zu {detection} Erkennung auf Meraz\'18, Drebin, EMBER und weiteren öffentlichen Android-Malware-Datensätzen ohne Signatur-Updates.',
    ctaApproaches: 'Ansätze erkunden',
    ctaResults: 'Ergebnisse ansehen',
    stats: {
      detection: 'Beste berichtete Erkennung (AEOCC)',
      datasets: 'Bewertete öffentliche Malware-Datensätze',
      models: 'Zentrale Architekturfamilie',
      threat: 'Bedrohungsmodell: unbekannte Malware-Familien',
    },
  },
  overview: {
    eyebrow: 'Die Idee',
    title: 'Benignes Verhalten profilieren — Abweichungen markieren',
    subtitle:
      'Signaturbasierte und überwachte Detektoren versagen bei nie zuvor gesehener Malware. Semi-überwachtes Profiling lernt ein Modell benignen App-Verhaltens und wertet Abweichungen als Zero-Day-Bedrohungen.',
    cards: {
      profiling: {
        title: 'Profilierung mit Autoencodern',
        body: 'Autoencoder rekonstruieren benigne Merkmalsvektoren aus Android-Berechtigungs- und API-Aufrufprofilen. Malware erzeugt höhere Rekonstruktionsfehler — die Schwellenwertwahl bleibt jedoch fragil.',
      },
      hybrid: {
        title: 'AE + One-Class-Klassifikation',
        body: 'AEOCC koppelt Autoencoder-Abstraktion mit einem OC-Klassifikator, um manuelle Schwellenwertanpassung zu vermeiden und dennoch starke Erkennung zu liefern — die schwellenwertfreie Architektur aus den BigData- und TNSM-Artikeln.',
      },
      datasets: {
        title: 'Meraz\'18, Drebin & EMBER',
        body: 'Experimente umfassen drei öffentliche Android-Malware-Datensätze aus dem Forschungsarchiv mit verschiedenen Merkmalsdarstellungen und Zero-Day-Holdout-Splits.',
      },
    },
    compare: {
      title: 'Überwacht vs. unüberwachtes Profiling — warum Zero-Day durchrutscht',
      stepLabel: 'Animationsschritte',
      stepNames: ['Gelabeltes Training', 'Entscheidungsgrenze', 'Zero-Day', 'Verpasst', 'Adversariale Angriffe', 'Poison-Filterung'],
      groupLabels: { benign: 'Gruppe 0', malware: 'Gruppe 1' },
      attackLabels: { poison: 'Poison', fgsm: 'FGSM', hsj: 'HSJ', boundary: 'Boundary' },
      legend: {
        benign: 'Benigne Apps (Gruppe 0)',
        knownMalware: 'Bekannte Malware (Gruppe 1)',
        zeroDay: 'Zero-Day (ungesehen)',
      },
      supervised: {
        title: 'Überwachtes Lernen',
        trainingCaption:
          'Lernt eine Grenze zwischen gelabelter Gruppe 0 (benign) und Gruppe 1 (bekannte Malware). Die Leistung hängt vollständig davon ab, wie sauber diese Gruppen kuratiert wurden und ob unbekannte Angriffsmuster aus dem Training ferngehalten wurden.',
        boundaryCaption:
          'Die Hyperebene trennt nur, was beim Training gelabelt war. Nie gesehene Familien können prinzipiell nicht abgebildet werden.',
        zeroDayCaption:
          'Eine nie zuvor gesehene Familie erscheint dort, wo keine Labels existieren — oft neben benignen Samples.',
        missedCaption:
          'Kein Label für die neue Familie: als benign klassifiziert. Überwachtes Lernen ist grundsätzlich ungeeignet für unbekannte Angriffsmuster.',
        adversarialCaption:
          'Evasionsangriffe (FGSM, HopSkipJump, Boundary) schieben Malware über die Hyperebene — die überwachte Grenze ist brüchig.',
        poisonCaption:
          'Poison-Stichproben verstecken sich in benignen Trainingsdaten. Die Grenze verschiebt sich und akzeptiert korrupte Punkte.',
        missedBadge: 'Verpasst',
        vulnerableBadge: 'Ausnutzbar',
        poisonBadge: 'Vergiftet',
      },
      profiling: {
        title: 'Unüberwachtes Profiling',
        trainingCaption:
          'Lernt nur die Verteilung benignen Verhaltens — keine Malware-Labels, keine Abhängigkeit von der Gruppen-0/1-Trennung in fremden Datensätzen.',
        regionCaption:
          'Eine Hülle normalen Verhaltens umschließt den benignen Cluster — Abweichungen, nicht auswendig gelernte Angriffssignaturen, lösen Alarm aus.',
        zeroDayCaption:
          'Dieselben Zero-Day-Samples landen weit außerhalb der gelernten Normalregion.',
        detectedCaption:
          'Abweichung von Normal wird markiert — Zero-Day erkannt, ohne je Malware-Labels gesehen zu haben.',
        robustCaption:
          'Dieselben Evasionsangriffe (FGSM, HopSkipJump, Boundary) werden auf beiden Panels angewendet — Perturbationen jenseits einer überwachten Hyperebene werden hier weiterhin markiert.',
        poisonCaption:
          'Dieselben Poison-Punkte liegen außerhalb der benignen Hülle und werden abgewiesen — Profiling hält die Trainings-Mannigfaltigkeit sauber.',
        detectedBadge: 'Erkannt',
        robustBadge: 'Robuster',
        poisonFilteredBadge: 'Gefiltert',
      },
      poison: {
        legend: {
          benign: 'Benignes Training',
          poison: 'Poison-Stichprobe',
          boundary: 'Gelernte Hülle',
          filtered: 'Poison abgewiesen',
        },
        axisLabels: { x: 'x', y: 'y', z: 'z (latent)' },
        captions: [
          'Poison-Stichproben mischen sich unter benignen Trainingsdaten im Merkmalsraum (x, y).',
          '45°-Ansicht entlang der latenten z-Achse: Poison liegt über der benignen Mannigfaltigkeit.',
          'Unüberwachtes Profiling lernt eine 3D-Hülle um benignes Verhalten.',
          'Poison außerhalb der Hülle wird abgewiesen, bevor es das Training verschlechtert.',
          'Die benigne Mannigfaltigkeit bleibt sauber — Profiling filtert Data-Poisoning.',
        ],
      },
    },
  },
  contributions: {
    eyebrow: 'Forschungsnarrativ',
    title: 'Engpässe je Erkennungsansatz für Zero-Day',
    subtitle:
      'Vorexperimente bestätigen Grenzen bei semi-überwachter (semi-supervised) Zero-Day-Erkennung, schlagen eine schwellenwertfreie (threshold-free) Hybridarchitektur vor und bewerten Robustheit (robustness) unter adversarialer (adversarial) Evasion (evasion).',
    problem: {
      title: 'Engpässe der drei Hauptansätze',
      body:
        'Für ungesehene Malware werden drei Methodenfamilien genutzt — Signaturen und überwachtes Lernen (supervised learning), One-Class-Klassifikation (one-class) und Autoencoder-Profilierung (profiling). Jede hat einen anderen Engpass; Vorarbeit und Vorexperimente fassen sie so zusammen, und diese Forschung setzt an diesem Trade-off an.',
      bullets: [
        'Signaturen und überwachtes Lernen (supervised learning): stark bei bekannten Familien, schwach bei nie gesehener Malware.',
        'One-Class-Klassifikation (one-class) (OCSVM, Isolation Forest, LOF): kein manueller Schwellenwert (threshold), aber oft niedrigere Erkennungsraten bei Android-Berechtigungs-/API-Merkmalen.',
        'Autoencoder-Profilierung (profiling): bessere Trennung, aber die Leistung hängt vom gewählten Rekonstruktionsfehler-Schwellenwert (reconstruction-error threshold) ab.',
      ],
    },
    solution: {
      title: 'Schwellenwertfreier AE + OCC (AEOCC)',
      body:
        'Der Kernvorschlag kombiniert neuronale Abstraktion des Autoencoders mit One-Class-Klassifikation, sodass Betreiber Rekonstruktionsschwellen nicht manuell justieren müssen.',
      bullets: [
        'Verbindet Autoencoding und OC-Klassifikation für starke Merkmalsabstraktion ohne fragile Schwellenwertwahl.',
        'Adressiert gleichzeitiges AE+OCC-Training — ohne Malware-Labels — mit einem Modellauswahlverfahren (AEOCC).',
        'Berichtet bis ~96% auf Meraz\'18 (Big Data 2021) und 97,1% auf Meraz\'18 und Drebin (TNSM 2023), vergleichbar mit überwachten Baselines für bekannte Malware.',
      ],
    },
    adversarial: {
      title: 'Einsicht zu adversarialer (adversarial) Evasion (evasion)',
      body:
        'Neben Holdout-Familien-Genauigkeit wird Robustheit (robustness) geprüft, wenn Angreifer Merkmalsvektoren stören.',
      bullets: [
        'Überwachte Modelle lernen Grenzen aus gelabelter Malware und können durch gradientenbasierte (FGM) oder abfragebasierte (HopSkipJump) Evasion angegriffen werden.',
        'Big Data 2021: das AEOCC-Hybrid erkennt synthetische Evasionssamples zuverlässiger als überwachte Lernverfahren mit bekannter Malware.',
        'TNSM 2023: formale Evasionsexperimente zeigen profilbasiertes AEOCC mit >99% Erkennung bei perturbierten Malware-Varianten — Robustheit durch Modellierung benignen Verhaltens statt Angriffssignaturen.',
      ],
    },
    venues: {
      title: 'Wo diese Forschung präsentiert wurde',
      body:
        'Begutachtet in IEEE-Foren veröffentlicht; die Masterarbeit dokumentiert das vollständige Experimentarchiv hinter dieser Demo.',
      items: [
        'IEEE International Conference on Big Data (BigData 2021) · Orlando, FL · 15.–18. Dez. 2021',
        'IEEE Transactions on Network and Service Management (TNSM) · Bd. 20, Nr. 3 · Sep. 2023',
        'Masterarbeit, Texas A&M University–Commerce · Herbst 2022',
      ],
    },
  },
  aeOcc: {
    eyebrow: 'Hybrid-Begründung',
    title: 'Warum Autoencoder mit One-Class-Klassifikation kombinieren?',
    subtitle:
      'AE und OCC lösen jeweils einen Teil des Zero-Day-Profilings — allein hinterlassen sie jedoch operative Engpässe. AEOCC behält die Stärken beider und entfernt die fragilen Teile.',
    bullets: [
      'Autoencoder-Profiling ist ausdrucksstark, doch aus dem Rekonstruktionsfehler einen Detektor zu machen erfordert ein manuell gewähltes Schwellenwert-τ bei jedem Datensatzwechsel.',
      'One-Class-Klassifikatoren vermeiden diesen Schwellenwert, aber Hyperparameter-Tuning ist schwierig und die Trainingskosten wachsen mit der Eingabedimensionalität.',
      'Wenn OCC den latenten AE-Raum nutzt, schrumpft das Problem: Tuning wird handhabbar, Training beschleunigt sich, und der manuelle Rekonstruktionsschwellenwert entfällt.',
    ],
    compare: {
      title: 'AE vs. OCC vs. AE-OCC — komplementäre Stärken',
      stepLabel: 'Animationsschritte',
      stepNames: ['Benignes Profiling', 'AE-Schwellenwert-Lücke', 'OCC-Skalierungs-Lücke', 'Latenter Brückenschlag', 'AEOCC-Synergie'],
      legend: {
        benign: 'Benigne Trainingsstichproben',
        anomaly: 'Erhöhter Rekonstruktionsfehler',
        latent: 'Latente Repräsentation',
      },
      ae: {
        title: 'Autoencoder (AE)',
        captions: [
          'Lernt, benigne Merkmalsvektoren zu rekonstruieren — starke Abstraktion normalen App-Verhaltens.',
          'Zum Markieren von Anomalien muss ein Rekonstruktionsfehler-Schwellenwert τ gesetzt werden — manuell bei jedem Datensatzshift.',
          'Zu niedriges τ erzeugt Fehlalarme; zu hohes lässt Zero-Day durch.',
          'Der Encoder liefert bereits einen kompakten latenten Code, den OCC statt hochdimensionaler Rohmerkmale nutzen kann.',
          'Im Hybrid liefert AE die Repräsentation, OCC die Entscheidungsregel — kein manuelles τ auf Rekonstruktionsfehler.',
        ],
      },
      occ: {
        title: 'One-Class-Klassifikator (OCC)',
        captions: [
          'Modelliert die benignen Region direkt — keine Malware-Labels und kein Rekonstruktionsschwellenwert bei der Inferenz.',
          'Erfordert dennoch sorgfältiges Hyperparameter-Tuning (Kernelbreite, ν, Kontaminationsrate usw.) pro Merkmalsetup.',
          'Trainingskosten skalieren mit der Eingabedimension: Berechtigungs-/API-Profile mit Hunderten Merkmalen verlangsamen OCC spürbar.',
          'Im AE-Latentraum schrumpft die Eingabe — weniger Dimensionen, schnelleres Training und kleinerer Tuning-Suchraum.',
          'OCC auf latenten Codes erbt die AE-Abstraktion und behält schwellenwertfreie Detektion bei der Inferenz.',
        ],
      },
      aeocc: {
        title: 'AE + OCC (AEOCC)',
        captions: [
          'Vorschau: Encoder komprimiert benignes Verhalten, OCC lernt eine Grenze im Latentraum.',
          'AE-Engpass: manueller Rekonstruktionsschwellenwert.',
          'OCC-Engpass: hochdimensionale Rohmerkmale und schweres Tuning.',
          'Latente Brücke: Encoder-Ausgabe speist OCC — kompakter Raum, gemeinsame benignen Mannigfaltigkeit.',
          'Schwellenwertfreie Detektion mit effizientem OCC-Tuning — das Hybrid behält, was von jedem Ansatz funktioniert.',
        ],
        thresholdFreeBadge: 'Kein manuelles τ',
        efficientBadge: 'Effizientes Tuning',
      },
      diagram: {
        reconstructionError: 'Fehler',
        thresholdTau: 'τ ?',
        noManualTau: '✓ kein manuelles τ',
        inputDimHigh: 'Eingabedim. (hoch)',
        latentDimLow: 'Latente Dim. (niedrig)',
        trainingTime: 'Trainingszeit',
        trainingFast: 'schnell',
        trainingSlow: 'langsam',
        benignRegion: 'Benign-Region',
        hyperparameters: 'Hyperparameter',
        dimReduction: 'Dim.-Reduktion',
        outlier: 'Ausreißer',
        encoder: 'Encoder',
        latentZ: 'latentes z',
        occ: 'OCC',
      },
    },
    poison3d: {
      title: 'Poison in Trainingsdaten — gefiltert im latenten z-Raum',
      stepLabel: 'Poison-Animationsschritte',
      stepNames: ['Infiltration', 'z-Achse sichtbar', 'Unüberwachte Grenze', 'Poison gefiltert', 'Sauberes Profiling'],
      captions: [
        'Poison-Stichproben mischen sich unter benignen Trainingspunkten im Merkmalsraum (x, y) — sie sollen das Training verschlechtern.',
        '45°-Ansicht entlang der latenten z-Achse: Poison liegt über der benignen Mannigfaltigkeit — Ausreißer im Repräsentationsraum.',
        'Unüberwachtes Profiling lernt eine Hülle um benignes Verhalten im 3D-Latentraum (einschließlich z).',
        'Poison außerhalb der Hülle wird abgewiesen — ohne Normal-Tarnung kann die Grenze nicht gezogen werden.',
        'Nur benigne Stichproben innerhalb der Mannigfaltigkeit bleiben — Profiling widersteht Data-Poisoning.',
      ],
      legend: {
        benign: 'Benignes Training',
        poison: 'Poison-Stichprobe',
        boundary: 'Gelernte Hülle',
        filtered: 'Poison abgewiesen — saubere Mannigfaltigkeit',
      },
      axisLabels: { x: 'x', y: 'y', z: 'z (latent)' },
    },
  },
  approaches: {
    eyebrow: 'Die Methoden',
    title: 'Fünf verglichene Profiling-Architekturen',
    subtitle:
      'Wählen Sie einen Ansatz, um seine Hyperparameter-Sensitivitäts-Heatmap zu sehen — als illustrative Grafik desselben Bewertungsablaufs wie im Artikel.',
    items: {
      ae: {
        name: 'Autoencoder-Profilierung',
        short: 'Rekonstruktionsfehler',
        description:
          'Ein Feed-Forward-Autoencoder lernt, benigne App-Profile zu rekonstruieren. Malware-Proben erzeugen höhere Rekonstruktionsfehler und trennen Zero-Day-Bedrohungen vom gelernten benignen Manifold.',
      },
      vae: {
        name: 'VAE-Profilierung',
        short: 'Latente Regularisierung',
        description:
          'Ein variationaler Autoencoder regularisiert den latenten Raum mit KL-Strafe, fördert glattere benign Darstellungen und legt anomales Malware-Verhalten über Rekonstruktion und latente Divergenz offen.',
      },
      cnn1d: {
        name: 'CNN-AE (1D)',
        short: 'Sequenz-Encoder',
        description:
          'Eindimensionale Faltungsschichten erfassen lokale sequenzielle Muster in Merkmalsvektoren vor der Dekodierung und modellieren Struktur in Malware-Merkmalsdarstellungen.',
      },
      cnn2d: {
        name: 'CNN-AE (2D)',
        short: 'Bildähnliche Merkmale',
        description:
          'Zweidimensionale Faltungen behandeln umgeformte Merkmalskarten als Bilder und lernen räumliche Korrelationen zwischen Berechtigungs- und API-Aufrufmerkmalen für profilbasierte Erkennung.',
      },
      aeocc: {
        name: 'AE + OCC-Hybrid',
        short: 'Schwellenwertfrei',
        description:
          'Kombiniert Autoencoder-Abstraktion mit One-Class-Klassifikation (AEOCC), um manuelle Schwellenwertanpassung zu entfernen und dennoch starke Erkennung zu behalten — der Kernbeitrag der BigData- und TNSM-Publikationen.',
      },
    },
  },
  results: {
    eyebrow: 'Die Ergebnisse',
    title: 'Illustrative Diagramme derselben Bewertungsgeschichte',
    subtitle:
      'Die Diagramme rekonstruieren die Bewertungsthemen des Artikels — Modellvergleich, Schwellenwertsensitivität (threshold sensitivity), adversariale (adversarial) Robustheit (robustness) — als originale interaktive Charts (keine Kopien veröffentlichter Abbildungen).',
    galleryTitle: 'Zentrale Ergebnisansichten',
    galleryNote:
      'Illustrative Charts: OC-Klassifikatoren (OCSVM, IF, LOF, EE) vs. AE-Schwellenwert vs. AEOCC, plus UMAP-ähnliche Ansichten unter adversarialen Angriffen.',
    heatmapTitle: 'Hyperparameter-Gitter je Ansatz',
    heatmapBody:
      'Jedes Gitter durchläuft Architektur- und Trainingseinstellungen. Höhere Werte bedeuten stärkere Zero-Day-Erkennung unter einem profilbasierten Protokoll.',
    galleryCaptions: {
      'model-comparison': 'OC-Klassifikatoren vs. AE-Schwellenwert vs. AEOCC (illustrativ)',
      'aeocc-bar': 'AEOCC im Vergleich zu Basisdetektoren hervorgehoben',
      'ae-thresholds': 'Sensitivität des AE-Profilings gegenüber manueller Schwellenwertwahl',
      perturbation: 'Erkennung unter Merkmalsstörung (AEOCC vs. überwacht)',
      'umap-fgm': 'UMAP-ähnliches Embedding unter adversarialer FGM-Störung',
      'umap-hsj': 'UMAP-ähnliches Embedding unter HopSkipJump-Angriff',
    },
    galleryThumbLabels: {
      'model-comparison': 'Modelle',
      'aeocc-bar': 'AEOCC',
      'ae-thresholds': 'Schwelle',
      perturbation: 'Störung',
      'umap-fgm': 'FGM',
      'umap-hsj': 'HSJ',
    },
    chartAxes: {
      detectionRate: 'Erkennungsrate (%)',
      threshold: 'Rekonstruktionsschwelle τ',
      perturbation: 'Perturbation ε',
    },
  },
  research: {
    eyebrow: 'Die Wissenschaft',
    title: 'Publikationen',
    subtitle:
      'Begutachtete Artikel und Thesis hinter dieser Demo. IEEE-Artikel werden nur per DOI verlinkt — PDFs werden hier nicht weiterverteilt.',
    thesisLabel: 'Masterarbeit',
    presentations: {
      'bigdata-2021':
        'Präsentiert auf IEEE Big Data 2021 (Orlando, FL · 15.–18. Dez. 2021) · Kurzbeitrag',
      'tnsm-2023':
        'Veröffentlicht in IEEE TNSM · Bd. 20, Nr. 3, S. 3900–3914 · Sep. 2023',
      'thesis-2022': 'Masterarbeit · Texas A&M University–Commerce · Herbst 2022',
    },
    abstracts: {
      'bigdata-2021':
        'Kombiniert Autoencoding und One-Class-Klassifikation, um von neuronalen Abstraktionen zu profitieren und komplexe Schwellenwertwahl zu vermeiden — und adressiert Grenzen eigenständiger OC-Klassifikatoren sowie schwellenwertsensitiver AE-Profilierung.',
      'tnsm-2023':
        'Erweiterte Journalversion mit gleichzeitigem AE+OCC-Training, Modellauswahlverfahren (AEOCC), Evaluation auf Meraz\'18 und Drebin sowie Robustheitsanalyse unter adversarialen Evasionsangriffen.',
      'thesis-2022':
        'Masterarbeit mit dem grundlegenden profilbasierten Zero-Day-Malware-Erkennungsrahmen, experimenteller Methodik und vergleichender Bewertung von Autoencoder-Architekturen und hybriden AE+OCC-Entwürfen.',
    },
    citations: '{count} Zitationen ({source}) ·',
    citationSource: 'Semantic Scholar',
    scholarLink: 'Google Scholar',
  },
  team: {
    eyebrow: 'Das Team',
    title: 'Forschungsteam',
    subtitle:
      'Eine Kooperation von Texas A&M University–Commerce, University of Colorado Colorado Springs und ETRI.',
    funding:
      'Forschungskooperation zwischen Texas A&M University–Commerce und ETRI (Electronics and Telecommunications Research Institute), Korea — Cybersicherheit und Zero-Day-Bedrohungserkennung.',
    roles: {
      'Jinoh Kim': 'Principal Investigator / Betreuer',
      'Chiho Kim': 'Erstautor / Masterstudent',
      'Sang-Yoon Chang': 'Koautor',
      'Dongeun Lee': 'Koautor',
      'Jonghyun Kim': 'Koautor',
    },
    notes: {
      'Jinoh Kim': 'Senior Member, IEEE',
      'Chiho Kim': 'Member, IEEE',
    },
  },
  acknowledgments: {
    eyebrow: 'Danksagung',
    title: 'Danksagung',
    subtitle:
      'Angelehnt an die Danksagungen der IEEE-Big-Data-(2021)-, IEEE-TNSM-(2023)- und Masterarbeit-Publikationen, auf denen diese Demo basiert.',
    paragraphs: [
      'Diese Arbeit wurde teilweise durch das Electronics and Telecommunications Research Institute (ETRI), Republik Korea, im Rahmen der Cybersicherheitskooperation mit Texas A&M University–Commerce unterstützt.',
      'Die Autoren danken Dr. Jinoh Kim für die Betreuung dieses Forschungsprogramms sowie Sang-Yoon Chang, Jonghyun Kim und Dongeun Lee für ihre Zusammenarbeit und Rückmeldungen zu den veröffentlichten Manuskripten.',
      'Wir danken außerdem den anonymen Gutachtern der IEEE International Conference on Big Data (2021) und des IEEE Transactions on Network and Service Management (2023) für konstruktive Kommentare.',
      'Diese interaktive Demo fasst die Arbeit zusammen, die ursprünglich in der Masterarbeit Automated Profiling-Based Zero-Day Malware Detection (Texas A&M University–Commerce, 2022) entwickelt wurde.',
    ],
  },
  footer: {
    left: 'Zeroday Defense — interaktive Malware-Forschungsdemo.',
    right: 'Illustrative Diagramme · Meraz\'18, Drebin, EMBER-Datensätze.',
    visitors: '{count} Seitenaufrufe',
    visitorsLoading: 'Besucher werden gezählt…',
  },
  animation: {
    pause: 'Animation pausieren',
    play: 'Animation abspielen',
  },
}
