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
    hybrid: string
    acknowledgments: string
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
  motivation: {
    eyebrow: string
    title: string
    subtitle: string
    paragraphs: [string, string, string]
    stakesTitle: string
    stakes: string
    incidents: [
      { year: string; title: string; body: string },
      { year: string; title: string; body: string },
      { year: string; title: string; body: string },
      { year: string; title: string; body: string },
    ]
  }
  pathways: {
    eyebrow: string
    title: string
    subtitle: string
    placementBadge: string
    labels: {
      event: string
      dates: string
      location: string
      category: string
      presenter: string
      placement: string
      paperTitle: string
    }
    event: string
    dates: string
    location: string
    category: string
    presenter: string
    placement: string
    paperTitle: string
    categoryNote: string
    sourceLabel: string
    sourceLink: string
    officialSourceLabel: string
    officialSourceLink: string
    evidenceCaption: string
    logoAlt: string
    evidenceAlt: string
    hostLogoAlt: string
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
    compare: {
      title: string
      stepLabel: string
      stepNames: [string, string, string, string, string, string]
      groupLabels: { benign: string; malware: string }
      attackLabels: { poison: string; fgsm: string; hsj: string; boundary: string }
      legend: {
        benign: string
        knownMalware: string
        zeroDay: string
      }
      poison: {
        legend: {
          benign: string
          poison: string
          boundary: string
          filtered: string
        }
        axisLabels: { x: string; y: string; z: string }
        captions: [string, string, string, string, string]
      }
      supervised: {
        title: string
        trainingCaption: string
        boundaryCaption: string
        zeroDayCaption: string
        missedCaption: string
        adversarialCaption: string
        poisonCaption: string
        missedBadge: string
        vulnerableBadge: string
        poisonBadge: string
      }
      profiling: {
        title: string
        trainingCaption: string
        regionCaption: string
        zeroDayCaption: string
        detectedCaption: string
        robustCaption: string
        poisonCaption: string
        detectedBadge: string
        robustBadge: string
        poisonFilteredBadge: string
      }
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
  aeOcc: {
    eyebrow: string
    title: string
    subtitle: string
    bullets: string[]
    compare: {
      title: string
      stepLabel: string
      stepNames: [string, string, string, string, string]
      legend: {
        benign: string
        anomaly: string
        latent: string
      }
      ae: {
        title: string
        captions: [string, string, string, string, string]
      }
      occ: {
        title: string
        captions: [string, string, string, string, string]
      }
      aeocc: {
        title: string
        captions: [string, string, string, string, string]
        thresholdFreeBadge: string
        efficientBadge: string
      }
      diagram: {
        reconstructionError: string
        thresholdTau: string
        noManualTau: string
        inputDimHigh: string
        latentDimLow: string
        trainingTime: string
        trainingFast: string
        trainingSlow: string
        benignRegion: string
        hyperparameters: string
        dimReduction: string
        outlier: string
        encoder: string
        latentZ: string
        occ: string
      }
    }
    poison3d: {
      title: string
      stepLabel: string
      stepNames: [string, string, string, string, string]
      captions: [string, string, string, string, string]
      legend: {
        benign: string
        poison: string
        boundary: string
        filtered: string
      }
      axisLabels: { x: string; y: string; z: string }
    }
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
    chartAxes: {
      detectionRate: string
      threshold: string
      perturbation: string
    }
  }
  research: {
    eyebrow: string
    title: string
    subtitle: string
    thesisLabel: string
    presentations: Record<string, string>
    abstracts: Record<string, string>
    citations: string
    citationSource: string
    scholarLink: string
  }
  team: {
    eyebrow: string
    title: string
    subtitle: string
    funding: string
    roles: Record<string, string>
    notes: Record<string, string>
  }
  acknowledgments: {
    eyebrow: string
    title: string
    subtitle: string
    paragraphs: string[]
  }
  footer: {
    left: string
    right: string
    visitors: string
    visitorsLoading: string
  }
  animation: {
    pause: string
    play: string
  }
}
