import type { Messages } from '../types'

export const de: Messages = {
  meta: {
    title: 'Zeroday Defense — Forschungsdemo zur Zero-Day-Malware-Erkennung',
    description:
      'Interaktive Forschungsdemo: profilbasierte **Zero-Day**-Malware-Erkennung mit **Autoencoder (autoencoder)**- und **One-Class-Klassifikation (one-class classification)**-Architekturen (Chiho Kim, Texas A&M University–Commerce).',
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
      'Master-Poster, 1. Platz (Business & Information Technology) in College Station, März 2022 — dieselbe **Profiling (profiling)**-basierte **Zero-Day**-Erkennungslinie später in IEEE Big Data (2021) und IEEE TNSM (2023).',
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
    category: 'Master’s Business and Information Technology — Poster Presentation',
    presenter: 'Chiho Kim (A&M–Commerce)',
    placement: '1st place',
    paperTitle: 'Zero-day Malware Detection using Threshold-free Autoencoding Architecture',
    categoryNote:
      'Bestätigt in der offiziellen TAMUS-Gewinnerliste des 17. Pathways (Master-Poster-Track). Der Campus-Artikel von ETAMU/Commerce kennzeichnet die Auszeichnung fälschlich als Undergraduate; Undergraduate-BIT-Platz 1 ging an eine andere Person (Tarleton). Der College-Station-Gastgeber veröffentlichte keinen systemweiten Beitrag zu dieser Auszeichnung.',
    sourceLabel: 'Campus-Meldung (ETAMU; Graduierungsstufe falsch):',
    sourceLink: 'Artikel lesen',
    officialSourceLabel: 'Offizielle Gewinnerliste (PDF):',
    officialSourceLink: 'PDF der Gewinner 2022 öffnen',
    evidenceCaption:
      'Auszug aus der offiziellen TAMUS-Gewinner-PDF — Master-Poster, Business & Information Technology, 1. Platz (Chiho Kim).',
    logoAlt: 'Offizielles Logo des 17. Texas A&M University System Pathways Student Research Symposium',
    evidenceAlt:
      'Auszug der offiziellen Gewinnerliste: Master’s Presentations, Business & Information Technology, 1st Place Chiho Kim',
    hostLogoAlt: 'Logo der Texas A&M University Graduate and Professional School',
  },
  hero: {
    badge: 'Malware-Forschung · Texas A&M University–Commerce',
    brand: 'Zeroday Defense',
    titleBefore: 'Forschung zur Erkennung von ',
    titleAccent: '**Zero-Day**-Malware',
    titleAfter: ' ohne manuelle Schwellenwerte',
    subtitle:
      'Von Angriffen auf Kernkraft- und Energienetze bis Ransomware und automatisierte Exploit-Kits — **Profiling (profiling)**-basierte Erkennung (ohne **Signatur (signature)**-Updates) mit bis zu {detection} auf Meraz\'18, Drebin und EMBER. **Zero-Day** = nie zuvor gesehene Malware-Familien.',
    ctaApproaches: 'Ansätze erkunden',
    ctaResults: 'Ergebnisse ansehen',
    stats: {
      detection: 'Beste berichtete Erkennung (**AEOCC**)',
      datasets: 'Bewertete öffentliche Malware-Datensätze',
      models: 'Zentrale Architektur (**AE** + **OCC**)',
      threat: 'Bedrohungsmodell: ungesehene **Zero-Day**-Familien',
    },
  },
  motivation: {
    eyebrow: 'Warum diese Forschung',
    title: 'Warum Forschung zur **Zero-Day**-Malware-Erkennung zählt',
    subtitle:
      'Angriffe auf Kernkraft- und Energieinfrastruktur, Ransomware und automatisierte Hacking-Tools — die Lücke, die **Signaturen (signature)** und überwachtes Lernen (**supervised learning**) bei nie gesehener Malware hinterlassen',
    paragraphs: [
      'Berichte von 2017 über Einbrüche in Unternehmensnetze US-amerikanischer Kernkraftbetreiber (u. a. Wolf Creek) zeigten, dass Energie- und Nuklearanlagen reale Cyberziele sind. Betriebssysteme blieben unberührt, doch die Episode schärfte — besonders in energiereichen Regionen wie Texas — das Bewusstsein, dass Firmennetze als Sprungbrett dienen können. Der Colonial-Pipeline-Ransomware-Angriff 2021 stoppte die Kraftstoffversorgung und machte die gesellschaftlichen Kosten von Malware gegen kritische Pipelines greifbar.',
      'Frühere Wellen wie WannaCry und NotPetya hatten bereits Krankenhäuser und Unternehmen lahmgelegt. Automatisierte Werkzeuge — Metasploit, Exploit-Kits und geleakte Fähigkeiten wie EternalBlue — beschleunigten Massenausnutzung. Varianten überholen oft **Signatur (signature)**-Updates — Fingerabdrücke bekannter Malware. **Zero-Day**-Familien — Malware, die im Training nie vorkam — zu erkennen wurde zu einem zentralen Forschungsproblem.',
      '**Signatur (signature)**-Listen und überwachtes Lernen (**supervised learning**) nur mit bekannter Malware lassen diese Lücke offen. Diese Forschungsrichtung nutzt unüberwachtes Profiling (**unsupervised profiling**) von benignem App-Verhalten und kombiniert **Autoencoder (AE)** mit **One-Class-Klassifikation (OCC)**, um Anomalien ohne fragile manuelle **Schwellenwert (threshold) τ**-Justierung zu markieren — veröffentlicht u. a. bei IEEE Big Data und IEEE TNSM.',
    ],
    stakesTitle: 'Warum die Forschung zählt',
    stakes:
      'Unbekannte Malware bleibt ein toter Winkel — von kritischer Infrastruktur bis zu mobilen Endpunkten. **Signatur (signature)**-Updates allein reichen nicht. Dieses Projekt modelliert benignes Verhalten mit einer **schwellenwertfreien (threshold-free)** **AEOCC**-Architektur — ohne handjustierten **Rekonstruktionsfehler (reconstruction error)**-Cut-off **τ**.',
    incidents: [
      {
        year: '2017',
        title: 'US-Kernkraft- & Energie-Einbrüche',
        body: 'Berichtete Angriffe auf Unternehmensnetze von Kernkraftbetreibern (z. B. Wolf Creek). Kein Anlagenbetrieb betroffen — aber ein Wendepunkt für Infrastruktur-Cybersicherheit.',
      },
      {
        year: '2016–17',
        title: 'Automatisierte Angriffswerkzeuge',
        body: 'Metasploit, Exploit-Kits und Lecks wie EternalBlue industrialisierten die Offensive. Varianten- und **Zero-Day**-Tempo überholte die **Signatur (signature)**-Reaktion.',
      },
      {
        year: '2017',
        title: 'WannaCry & NotPetya',
        body: 'Globale Ransomware-Wellen, die Krankenhäuser und Unternehmen lähmten — und zeigten, wie nie gesehene **Zero-Day**-Pfade **Signatur (signature)**-basierte Detektoren aushebeln.',
      },
      {
        year: '2021',
        title: 'Colonial-Pipeline-Ransomware',
        body: 'Stillstand einer großen US-Kraftstoffpipeline mit direkter Wirkung auf die Versorgung — inkl. Texas und Südosten — und greifbaren Malware-Kosten.',
      },
    ],
  },
  overview: {
    eyebrow: 'Die Idee',
    title: 'Forschung zur **Profilierung (profiling)** benignen Verhaltens',
    subtitle:
      'Was **Signatur (signature)**- und überwachte (**supervised learning**) Detektoren verfehlen — Abweichungen vom normalen App-Verhalten als **Zero-Day**-Bedrohung',
    cards: {
      profiling: {
        title: 'Profilierung mit **Autoencodern (autoencoder)**',
        body: '**Autoencoder (AE)** rekonstruieren benigne **Merkmalsvektoren (feature vector)** aus Android-Berechtigungs- und API-Aufrufprofilen. Malware erzeugt höhere **Rekonstruktionsfehler (reconstruction error)** — die Wahl des **Schwellenwerts (threshold) τ** (Cut-off auf diesem Fehler) bleibt jedoch fragil.',
      },
      hybrid: {
        title: '**AE** + **One-Class-Klassifikation (one-class classification)**',
        body: '**AEOCC** koppelt **Autoencoder**-Abstraktion mit einem OC-Klassifikator, um manuelle **Schwellenwert (threshold)**-Anpassung zu vermeiden und dennoch starke Erkennung zu liefern — die **schwellenwertfreie (threshold-free)** Architektur aus den BigData- und TNSM-Artikeln.',
      },
      datasets: {
        title: 'Meraz\'18, Drebin & EMBER',
        body: 'Experimente umfassen drei öffentliche Android-Malware-Datensätze aus dem Forschungsarchiv mit verschiedenen **Merkmalsvektor (feature vector)**-Darstellungen und **Zero-Day**-Holdout-Splits.',
      },
    },
    compare: {
      title: 'Überwachtes Lernen (**supervised learning**) vs. unüberwachtes Profiling (**unsupervised profiling**) — warum **Zero-Day** durchrutscht',
      stepLabel: 'Animationsschritte',
      stepNames: ['Gelabeltes Training', 'Entscheidungsgrenze', 'Zero-Day', 'Verpasst', 'Evasionsangriffe', 'Poison-Filterung'],
      groupLabels: { benign: 'Gruppe 0', malware: 'Gruppe 1' },
      attackLabels: { poison: 'Poison', fgsm: 'FGSM', hsj: 'HSJ', boundary: 'Boundary' },
      legend: {
        benign: 'Benigne Apps (Gruppe 0)',
        knownMalware: 'Bekannte Malware (Gruppe 1)',
        zeroDay: '**Zero-Day** (ungesehene Familie)',
      },
      supervised: {
        title: 'Überwachtes Lernen (**supervised learning**)',
        trainingCaption:
          'Lernt eine **Entscheidungsgrenze (decision boundary)** zwischen gelabelter Gruppe 0 (benign) und Gruppe 1 (bekannte Malware). Die Leistung hängt davon ab, wie sauber diese Gruppen kuratiert wurden und ob unbekannte Angriffsmuster aus dem Training ferngehalten wurden.',
        boundaryCaption:
          'Die Hyperebene trennt nur, was beim Training gelabelt war. Nie gesehene **Zero-Day**-Familien können prinzipiell nicht abgebildet werden.',
        zeroDayCaption:
          'Eine nie zuvor gesehene Familie erscheint dort, wo keine Labels existieren — oft neben benignen Samples im **Merkmalsraum (feature space)**.',
        missedCaption:
          'Kein Label für die neue Familie: als benign klassifiziert. Überwachtes Lernen (**supervised learning**) ist grundsätzlich ungeeignet für unbekannte Angriffsmuster.',
        adversarialCaption:
          '**Evasionsangriffe (evasion attack)** (FGSM, HopSkipJump, Boundary) schieben Malware über die Hyperebene — die überwachte **Entscheidungsgrenze (decision boundary)** ist brüchig.',
        poisonCaption:
          '**Poisoning (poisoning)**-Stichproben verstecken sich in benignen Trainingsdaten. Die Grenze verschiebt sich und akzeptiert korrupte Punkte.',
        missedBadge: 'Verpasst',
        vulnerableBadge: 'Ausnutzbar',
        poisonBadge: 'Vergiftet',
      },
      profiling: {
        title: 'Unüberwachtes Profiling (**unsupervised profiling**)',
        trainingCaption:
          'Lernt nur die Verteilung benignen Verhaltens — keine Malware-Labels, keine Abhängigkeit von der Gruppen-0/1-Trennung in fremden Datensätzen.',
        regionCaption:
          'Eine Hülle normalen Verhaltens umschließt den benignen Cluster — Abweichungen vom gelernten **Manifold (manifold)**, nicht auswendig gelernte Angriffssignaturen (**signature**), lösen Alarm aus.',
        zeroDayCaption:
          'Dieselben **Zero-Day**-Samples landen weit außerhalb der gelernten Normalregion im **Merkmalsraum (feature space)**.',
        detectedCaption:
          'Abweichung von Normal wird markiert — **Zero-Day** erkannt, ohne je Malware-Labels gesehen zu haben.',
        robustCaption:
          'Dieselben **Evasionsangriffe (evasion attack)** (FGSM, HopSkipJump, Boundary) werden auf beiden Panels angewendet — Perturbationen jenseits einer überwachten Hyperebene werden hier weiterhin markiert.',
        poisonCaption:
          'Dieselben **Poisoning (poisoning)**-Punkte liegen außerhalb der benignen Hülle und werden abgewiesen — **Profiling (profiling)** hält die Trainings-**Manifold (manifold)** sauber.',
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
          '**Poisoning (poisoning)**-Stichproben mischen sich unter benignen Trainingsdaten im **Merkmalsraum (feature space)** (x, y).',
          '45°-Ansicht entlang der **latenten (latent)** z-Achse: Poison liegt über der benignen **Manifold (manifold)**.',
          'Unüberwachtes Profiling (**unsupervised profiling**) lernt eine 3D-Hülle um benignes Verhalten im **Latentraum (latent space)**.',
          'Poison außerhalb der Hülle wird abgewiesen, bevor es das Training verschlechtert.',
          'Die benigne **Manifold (manifold)** bleibt sauber — **Profiling (profiling)** filtert **Data-Poisoning (data poisoning)**.',
        ],
      },
    },
  },
  contributions: {
    eyebrow: 'Forschungsbeiträge',
    title: 'Was Vorarbeit verfehlte — und wie wir es adressierten',
    subtitle:
      'Engpässe bei semi-überwachter **Zero-Day**-Erkennung · **schwellenwertfreie (threshold-free)** **AE+OCC**-Hybridarchitektur · Robustheit unter **adversarialer Evasion (adversarial evasion)**',
    problem: {
      title: 'Engpässe bei **Zero-Day**-Erkennungsansätzen',
      body:
        'Für ungesehene Malware werden drei Methodenfamilien genutzt — **Signaturen (signature)** und überwachtes Lernen (**supervised learning**), **One-Class-Klassifikation (one-class classification, OCC)** und **Autoencoder-Profilierung (autoencoder profiling)**. Jede hat einen anderen Engpass; Vorarbeit und Vorexperimente fassen sie so zusammen, und diese Forschung setzt an diesem Trade-off an.',
      bullets: [
        '**Signaturen (signature)** und überwachtes Lernen (**supervised learning**): stark bei bekannten Familien, schwach bei nie gesehener **Zero-Day**-Malware.',
        '**One-Class-Klassifikation (one-class classification, OCC)** (OCSVM, Isolation Forest, LOF): kein manueller **Rekonstruktionsfehler (reconstruction error)**-**Schwellenwert (threshold)**, aber oft niedrigere Erkennungsraten bei Android-Berechtigungs-/API-**Merkmalsvektoren (feature vector)**.',
        '**Autoencoder-Profilierung (autoencoder profiling)**: bessere Trennung, aber die Leistung hängt vom gewählten **Rekonstruktionsfehler (reconstruction error)**-Schwellenwert (**threshold**) **τ** ab.',
      ],
    },
    solution: {
      title: '**Schwellenwertfreier (threshold-free)** **AE** + **OCC** (**AEOCC**)',
      body:
        'Der Kernvorschlag kombiniert neuronale Abstraktion des **Autoencoders (autoencoder)** mit **One-Class-Klassifikation (one-class classification)**, sodass Betreiber **Rekonstruktionsfehler (reconstruction error)**-**Schwellenwerte (threshold)** nicht manuell justieren müssen.',
      bullets: [
        'Verbindet **Autoencoding** und OC-Klassifikation für starke **Merkmal (feature)**-Abstraktion ohne fragile **Schwellenwert (threshold) τ**-Wahl.',
        'Adressiert gleichzeitiges **AE+OCC**-Training — ohne Malware-Labels — mit einem Modellauswahlverfahren (**AEOCC**).',
        'Berichtet bis ~96% **Zero-Day**-Erkennung auf Meraz\'18 (Big Data 2021) und 97,1% auf Meraz\'18 und Drebin (TNSM 2023), vergleichbar mit überwachten(**supervised learning**) Baselines für bekannte Malware.',
      ],
    },
    adversarial: {
      title: 'Einsicht zu **adversarialer Evasion (adversarial evasion)**',
      body:
        'Neben Holdout-Familien-Genauigkeit wird Robustheit geprüft, wenn Angreifer **Merkmalsvektoren (feature vector)** stören, um die **Entscheidungsgrenze (decision boundary)** zu umgehen.',
      bullets: [
        'Überwachte (**supervised learning**) Modelle lernen Grenzen aus gelabelter Malware und können durch gradientenbasierte (FGM) oder abfragebasierte (HopSkipJump) **Evasionsangriffe (evasion attack)** angegriffen werden.',
        'Big Data 2021: das **AEOCC**-Hybrid erkennt synthetische Evasionssamples zuverlässiger als überwachte Lernverfahren mit bekannter Malware.',
        'TNSM 2023: formale Evasionsexperimente zeigen **Profiling (profiling)**-basiertes **AEOCC** mit >99% Erkennung bei perturbierten Malware-Varianten — Robustheit durch Modellierung benignen Verhaltens statt Angriffssignaturen (**signature**).',
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
    title: 'Warum **Autoencoder (autoencoder)** mit **One-Class-Klassifikation (one-class classification)** kombinieren?',
    subtitle:
      '**AE** und **OCC** lösen jeweils einen Teil des **Zero-Day-Profilings (zero-day profiling)** — allein hinterlassen sie operative Engpässe. **AEOCC** behält die Stärken beider und entfernt fragile **Schwellenwert (threshold) τ**-Justierung.',
    bullets: [
      '**Autoencoder-Profiling (autoencoder profiling)** ist ausdrucksstark, doch aus dem **Rekonstruktionsfehler (reconstruction error)** einen Detektor zu machen erfordert ein manuell gewähltes **Schwellenwert (threshold) τ** — den Cut-off auf dem Rekonstruktionsfehler — bei jedem Datensatzwechsel.',
      '**One-Class-Klassifikatoren (one-class classification)** vermeiden diesen **Schwellenwert (threshold)**, aber Hyperparameter-Tuning ist schwierig und die Trainingskosten wachsen mit der Eingabedimensionalität.',
      'Wenn **OCC** den **AE-Latentraum (AE latent space)** nutzt, schrumpft das Problem: Tuning wird handhabbar, Training beschleunigt sich, und der manuelle **Rekonstruktionsfehler (reconstruction error)**-Schwellenwert (**threshold**) **τ** entfällt.',
    ],
    compare: {
      title: '**AE** vs. **OCC** vs. **AEOCC** — komplementäre Stärken',
      stepLabel: 'Animationsschritte',
      stepNames: ['Benignes Profiling', 'AE-Schwellenwert-Lücke', 'OCC-Skalierungs-Lücke', 'Latenter Brückenschlag', 'AEOCC-Synergie'],
      legend: {
        benign: 'Benigne Trainingsstichproben',
        anomaly: 'Erhöhter **Rekonstruktionsfehler (reconstruction error)**',
        latent: '**Latente (latent)** Repräsentation',
      },
      ae: {
        title: '**Autoencoder (AE)**',
        captions: [
          'Lernt, benigne **Merkmalsvektoren (feature vector)** zu rekonstruieren — starke Abstraktion normalen App-Verhaltens.',
          'Zum Markieren von Anomalien muss ein **Rekonstruktionsfehler (reconstruction error)**-**Schwellenwert (threshold) τ** gesetzt werden — der Cut-off manuell bei jedem Datensatzshift.',
          'Zu niedriges **τ** erzeugt Fehlalarme; zu hohes lässt **Zero-Day** durch.',
          'Der Encoder liefert bereits einen kompakten **latenten Code (latent code)**, den **OCC** statt hochdimensionaler Rohmerkmale nutzen kann.',
          'Im Hybrid liefert **AE** die Repräsentation, **OCC** die Entscheidungsregel — kein manuelles **τ** auf **Rekonstruktionsfehler (reconstruction error)**.',
        ],
      },
      occ: {
        title: '**One-Class-Klassifikator (one-class classification, OCC)**',
        captions: [
          'Die gestrichelte Ellipse ist die gelernte benign Region — **OCC** passt eine **Entscheidungsgrenze (decision boundary)** um normales Verhalten ohne Malware-Labels.',
          'Hyperparameter (ν, γ, σ) müssen für jedes **Merkmalsvektor (feature vector)**-Setup getunt werden — kein universeller Standardwert.',
          'Hochdimensionale Berechtigungs-/API-**Merkmalsvektoren (feature vector)** (viele Balken) machen **OCC**-Training langsam — Kosten wachsen mit der Eingabegröße.',
          'Der **AE-Latentraum (AE latent space)** (wenige Balken) komprimiert die Eingabe — schnelleres Training und kleinerer Tuning-Suchraum.',
          '**OCC** auf **latenten Codes (latent codes)**: schnelles Training, getunte Hyperparameter und **schwellenwertfreie (threshold-free)** Detektion von Ausreißer (**outlier**) außerhalb der benign Region.',
        ],
      },
      aeocc: {
        title: '**AE** + **OCC** (**AEOCC**)',
        captions: [
          'Vorschau: Encoder komprimiert benignes Verhalten, **OCC** lernt eine **Entscheidungsgrenze (decision boundary)** im **Latentraum (latent space)**.',
          '**AE**-Engpass: manueller **Rekonstruktionsfehler (reconstruction error)**-**Schwellenwert (threshold) τ**.',
          '**OCC**-Engpass: hochdimensionale Roh-**Merkmalsvektoren (feature vector)** und schweres Tuning.',
          '**Latente (latent)** Brücke: Encoder-Ausgabe speist **OCC** — kompakter Raum, gemeinsames benignes **Manifold (manifold)**.',
          '**Schwellenwertfreie (threshold-free)** Detektion mit effizientem **OCC**-Tuning — das Hybrid behält, was von jedem Ansatz funktioniert.',
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
      title: '**Poisoning (poisoning)** in Trainingsdaten — gefiltert im **latenten (latent)** z-Raum',
      stepLabel: 'Poison-Animationsschritte',
      stepNames: ['Infiltration', 'z-Achse sichtbar', 'Unüberwachte Grenze', 'Poison gefiltert', 'Sauberes Profiling'],
      captions: [
        '**Poisoning (poisoning)**-Stichproben mischen sich unter benignen Trainingspunkten im **Merkmalsraum (feature space)** (x, y) — sie sollen das Training verschlechtern.',
        '45°-Ansicht entlang der **latenten (latent)** z-Achse: Poison liegt über der benignen **Manifold (manifold)** — Ausreißer (**outlier**) im **Latentraum (latent space)**.',
        'Unüberwachtes Profiling (**unsupervised profiling**) lernt eine Hülle um benignes Verhalten im 3D-**Latentraum (latent space)** (einschließlich z).',
        'Poison außerhalb der Hülle wird abgewiesen — ohne Normal-Tarnung kann die Grenze nicht gezogen werden.',
        'Nur benigne Stichproben innerhalb der **Manifold (manifold)** bleiben — **Profiling (profiling)** widersteht **Data-Poisoning (data poisoning)**.',
      ],
      legend: {
        benign: 'Benignes Training',
        poison: 'Poison-Stichprobe',
        boundary: 'Gelernte Hülle',
        filtered: 'Poison abgewiesen — saubere **Manifold (manifold)**',
      },
      axisLabels: { x: 'x', y: 'y', z: 'z (latent)' },
    },
  },
  approaches: {
    eyebrow: 'Die Methoden',
    title: 'Fünf verglichene **Profiling (profiling)**-Architekturen',
    subtitle:
      'Wählen Sie einen Ansatz, um seine Hyperparameter-Sensitivitäts-Heatmap zu sehen — als illustrative Grafik desselben Bewertungsablaufs wie im Artikel.',
    items: {
      ae: {
        name: '**Autoencoder (autoencoder)**-Profilierung',
        short: '**Rekonstruktionsfehler (reconstruction error)**',
        description:
          'Ein Feed-Forward-**Autoencoder** lernt, benigne App-Profile zu rekonstruieren. Malware-Proben erzeugen höhere **Rekonstruktionsfehler (reconstruction error)** und trennen **Zero-Day**-Bedrohungen vom gelernten benignen **Manifold (manifold)**.',
      },
      vae: {
        name: 'VAE-Profilierung',
        short: '**Latentraum (latent space)**-Regularisierung',
        description:
          'Ein variationaler **Autoencoder** regularisiert den **Latentraum (latent space)** mit KL-Strafe, fördert glattere benign Darstellungen und legt anomales Malware-Verhalten über Rekonstruktion und **latente (latent)** Divergenz offen.',
      },
      cnn1d: {
        name: 'CNN-AE (1D)',
        short: 'Sequenz-Encoder',
        description:
          'Eindimensionale Faltungsschichten erfassen lokale sequenzielle Muster in **Merkmalsvektoren (feature vector)** vor der Dekodierung und modellieren Struktur in Malware-Merkmalsdarstellungen.',
      },
      cnn2d: {
        name: 'CNN-AE (2D)',
        short: 'Bildähnliche Merkmale',
        description:
          'Zweidimensionale Faltungen behandeln umgeformte Merkmalskarten als Bilder und lernen räumliche Korrelationen zwischen Berechtigungs- und API-Aufrufmerkmalen für **profilbasierte (profiling)** Erkennung.',
      },
      aeocc: {
        name: '**AE** + **OCC**-Hybrid',
        short: '**Schwellenwertfrei (threshold-free)**',
        description:
          'Kombiniert **Autoencoder**-Abstraktion mit **One-Class-Klassifikation (one-class classification)** (**AEOCC**), um manuelle **Schwellenwert (threshold) τ**-Anpassung zu entfernen und dennoch starke Erkennung zu behalten — der Kernbeitrag der BigData- und TNSM-Publikationen.',
      },
    },
  },
  results: {
    eyebrow: 'Die Ergebnisse',
    title: 'Illustrative Diagramme derselben Bewertungsgeschichte',
    subtitle:
      'Die Diagramme rekonstruieren die Bewertungsthemen des Artikels — Modellvergleich, **Schwellenwert (threshold) τ**-Sensitivität, **adversariale Evasion (adversarial evasion)**-Robustheit — als originale interaktive Charts (keine Kopien veröffentlichter Abbildungen).',
    galleryTitle: 'Zentrale Ergebnisansichten',
    galleryNote:
      'Illustrative Charts: **OC (one-class classification)**-Klassifikatoren (OCSVM, IF, LOF, EE) vs. **AE**-**Schwellenwert (threshold)** vs. **AEOCC**, plus UMAP-ähnliche Ansichten unter **adversarialen (adversarial)** Angriffen.',
    heatmapTitle: 'Hyperparameter-Gitter je Ansatz',
    heatmapBody:
      'Jedes Gitter durchläuft Architektur- und Trainingseinstellungen. Höhere Werte bedeuten stärkere **Zero-Day**-Erkennung unter einem **profilbasierten (profiling)** Protokoll.',
    galleryCaptions: {
      'model-comparison': '**OC**-Klassifikatoren vs. **AE**-**Schwellenwert (threshold)** vs. **AEOCC** (illustrativ)',
      'aeocc-bar': '**AEOCC** im Vergleich zu Basisdetektoren hervorgehoben',
      'ae-thresholds': 'Sensitivität des **AE-Profilings (AE profiling)** gegenüber manueller **Schwellenwert (threshold) τ**-Wahl',
      perturbation: 'Erkennung unter **Merkmalsvektor (feature vector)**-Störung (**AEOCC** vs. überwacht (**supervised learning**))',
      'umap-fgm': 'UMAP-ähnliches Embedding unter **adversarialer (adversarial)** FGM-Störung',
      'umap-hsj': 'UMAP-ähnliches Embedding unter HopSkipJump-**Evasionsangriff (evasion attack)**',
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
      threshold: 'Rekonstruktions-**Schwellenwert (threshold) τ**',
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
        'Kombiniert **Autoencoding** und **One-Class-Klassifikation (one-class classification)**, um von neuronalen Abstraktionen zu profitieren und komplexe **Schwellenwert (threshold)**-Wahl zu vermeiden — und adressiert Grenzen eigenständiger **OC**-Klassifikatoren sowie **schwellenwertsensitiver (threshold-sensitive)** **AE-Profilierung (AE profiling)**.',
      'tnsm-2023':
        'Erweiterte Journalversion mit gleichzeitigem **AE+OCC**-Training, Modellauswahlverfahren (**AEOCC**), Evaluation auf Meraz\'18 und Drebin sowie Robustheitsanalyse unter **adversarialen Evasionsangriffen (adversarial evasion attack)**.',
      'thesis-2022':
        'Masterarbeit mit dem grundlegenden **profilbasierten (profiling)** **Zero-Day**-Malware-Erkennungsrahmen, experimenteller Methodik und vergleichender Bewertung von **Autoencoder (autoencoder)**-Architekturen und hybriden **AE+OCC**-Entwürfen.',
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
      'Forschungskooperation zwischen Texas A&M University–Commerce und ETRI (Electronics and Telecommunications Research Institute), Korea — Cybersicherheit und **Zero-Day**-Bedrohungserkennung.',
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
