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
    toggleTheme: 'Farbschema umschalten',
  },
  hero: {
    badge: 'Malware-Forschung · Texas A&M University–Commerce',
    brand: 'Zeroday Defense',
    titleBefore: '',
    titleAccent: 'Zero-Day-Malware',
    titleAfter: ' ohne manuelle Schwellenwerte erkennen',
    subtitle:
      'Ein interaktiver Einblick in profilbasierte Erkennung, die Autoencoder und One-Class-Klassifikation kombiniert — mit bis zu {detection} Erkennung auf öffentlichen Android-Malware-Datensätzen ohne Signatur-Updates.',
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
      stepNames: ['Gelabeltes Training', 'Entscheidungsgrenze', 'Zero-Day', 'Verpasst', 'Adversariale Angriffe'],
      groupLabels: { benign: 'Gruppe 0', malware: 'Gruppe 1' },
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
          'Adversariale Angriffe nutzen diese fragile Grenze aus: Poison vergiftet Trainingsdaten; Evasion (FGSM, HopSkipJump, Boundary-Angriffe) schiebt Samples über die Hyperebene.',
        missedBadge: 'Verpasst',
        vulnerableBadge: 'Ausnutzbar',
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
          'Dieselben Poison- und Evasionsangriffe (FGSM, HopSkipJump, Boundary) erscheinen in beiden Panels — Profiling markiert Perturbationen, die eine überwachte Hyperebene überqueren.',
        detectedBadge: 'Erkannt',
        robustBadge: 'Robuster',
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
  footer: {
    left: 'Zeroday Defense — interaktive Malware-Forschungsdemo.',
    right: 'Illustrative Diagramme · Meraz\'18, Drebin, EMBER-Datensätze.',
  },
}
