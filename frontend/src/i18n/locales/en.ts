import type { Messages } from '../types'

export const en: Messages = {
  meta: {
    title: 'Zeroday Defense — Zero-Day Malware Detection Research Demo',
    description:
      'Interactive research demo: profiling-based zero-day malware detection using autoencoder and one-class classification architectures (Chiho Kim, Texas A&M University–Commerce).',
  },
  lang: {
    label: 'Language',
    chooseTitle: 'Choose your language',
    chooseSubtitle: 'You can change this anytime from the navigation bar.',
    continue: 'Continue',
    names: {
      en: 'English',
      ko: '한국어',
      es: 'Español',
      de: 'Deutsch',
    },
  },
  nav: {
    brand: 'Zeroday Defense',
    overview: 'Overview',
    approaches: 'Approaches',
    results: 'Results',
    research: 'Research',
    team: 'Team',
    story: 'Background',
    toggleTheme: 'Toggle color theme',
  },
  hero: {
    badge: 'Malware research · Texas A&M University–Commerce',
    brand: 'Zeroday Defense',
    titleBefore: 'Detecting ',
    titleAccent: 'zero-day malware',
    titleAfter: ' without manual thresholds',
    subtitle:
      'An interactive walkthrough of profiling-based detection that combines autoencoders with one-class classification — reaching up to {detection} detection on public Android malware datasets without signature updates.',
    ctaApproaches: 'Explore the approaches',
    ctaResults: 'See the results',
    stats: {
      detection: 'Best reported detection (AEOCC)',
      datasets: 'Public malware datasets evaluated',
      models: 'Core architecture family',
      threat: 'Threat model: unseen malware families',
    },
  },
  overview: {
    eyebrow: 'The idea',
    title: 'Profile benign behavior — flag what does not fit',
    subtitle:
      'Signature-based and supervised detectors fail on never-before-seen malware. Semi-supervised profiling learns a model of benign application behavior and treats deviations as zero-day threats.',
    cards: {
      profiling: {
        title: 'Profiling with autoencoders',
        body: 'Autoencoders reconstruct benign feature vectors from Android permission and API-call profiles. Malware produces higher reconstruction error — but threshold selection is fragile.',
      },
      hybrid: {
        title: 'AE + one-class classification',
        body: 'AEOCC couples autoencoder abstraction with an OC classifier to remove manual threshold tuning while retaining strong detection — the threshold-free architecture from the BigData and TNSM papers.',
      },
      datasets: {
        title: 'Meraz\'18, Drebin & EMBER',
        body: 'Experiments span three public Android malware datasets from the research archive, covering diverse feature representations and zero-day holdout splits.',
      },
    },
  },
  contributions: {
    eyebrow: 'Research narrative',
    title: 'What prior work missed — and how we addressed it',
    subtitle:
      'The published work does more than report accuracy numbers: it diagnoses gaps in semi-supervised zero-day detection, proposes a threshold-free hybrid architecture, and analyzes resilience when attackers craft evasion samples.',
    problem: {
      title: 'Bottlenecks across zero-day detection approaches',
      body:
        'Three families of methods target unseen malware — signatures and supervised learning, one-class classification, and autoencoder profiling. Each carries a different bottleneck; prior work and preliminary experiments summarize them as follows, and this research sets out to address the trade-off jointly.',
      bullets: [
        'Signatures and supervised learning: strong on known families, weak at generalizing to never-before-seen malware.',
        'One-class classification (OCSVM, Isolation Forest, LOF): no manual reconstruction threshold, but often lower detection rates on Android permission/API features.',
        'Autoencoder profiling: better separation of malware from benign apps, but performance hinges on which reconstruction-error threshold is chosen.',
      ],
    },
    solution: {
      title: 'Threshold-free AE + OCC (AEOCC)',
      body:
        'The core proposal combines neural abstraction from the autoencoder with one-class classification so operators no longer tune reconstruction thresholds by hand.',
      bullets: [
        'Merge autoencoding and OC classification to keep strong feature abstraction while removing fragile threshold selection.',
        'Address concurrent AE+OCC training — where no malware labels are available at training time — with a model-selection procedure (AEOCC) that picks well-suited learner pairs.',
        'Report up to ~96% zero-day detection on Meraz\'18 (Big Data 2021) and 97.1% on Meraz\'18 and Drebin (TNSM 2023), comparable to supervised baselines limited to known malware.',
      ],
    },
    adversarial: {
      title: 'Adversarial evasion insight',
      body:
        'Beyond accuracy on holdout families, the papers ask whether detectors survive when attackers perturb feature vectors to evade the decision boundary.',
      bullets: [
        'Supervised models learn boundaries from labeled malware and can be pushed across them by gradient-based (FGM) or query-based (HopSkipJump) evasion attacks.',
        'Big Data 2021: the hybrid AEOCC identifies synthetic evasion samples more reliably than supervised learners trained on known malware.',
        'TNSM 2023: formal evasion experiments show profiling-based AEOCC maintaining over 99% detection on perturbed malware variants — robustness from modeling benign behavior instead of memorizing attack signatures.',
      ],
    },
    venues: {
      title: 'Where this research was presented',
      body:
        'Published and peer-reviewed at IEEE venues; the MS thesis documents the full experimental archive behind this demo.',
      items: [
        'IEEE International Conference on Big Data (BigData 2021) · Orlando, FL · Dec 15–18, 2021',
        'IEEE Transactions on Network and Service Management (TNSM) · Vol. 20, No. 3 · Sep 2023',
        'MS Thesis, Texas A&M University–Commerce · Fall 2022',
      ],
    },
  },
  approaches: {
    eyebrow: 'The methods',
    title: 'Five profiling architectures compared',
    subtitle:
      'Select an approach to inspect its hyperparameter sensitivity heatmap — recovered from recorded experiment outputs in the research archive.',
    items: {
      ae: {
        name: 'Autoencoder profiling',
        short: 'Reconstruction error',
        description:
          'A feed-forward autoencoder learns to reconstruct benign application profiles. Malware samples produce higher reconstruction error, separating zero-day threats from the learned benign manifold.',
      },
      vae: {
        name: 'VAE profiling',
        short: 'Latent regularization',
        description:
          'A variational autoencoder regularizes the latent space with a KL penalty, encouraging smoother benign representations and exposing anomalous malware behavior through reconstruction and latent divergence.',
      },
      cnn1d: {
        name: 'CNN-AE (1D)',
        short: 'Sequence encoder',
        description:
          'One-dimensional convolutional layers capture local sequential patterns in feature vectors before decoding, modeling spatial structure in malware feature representations.',
      },
      cnn2d: {
        name: 'CNN-AE (2D)',
        short: 'Image-like features',
        description:
          'Two-dimensional convolutions treat reshaped feature maps as images, learning spatial correlations across permission and API-call features for profiling-based detection.',
      },
      aeocc: {
        name: 'AE + OCC hybrid',
        short: 'Threshold-free',
        description:
          'Combines autoencoder abstraction with one-class classification (AEOCC) to remove manual threshold tuning while retaining strong detection — the core contribution across the BigData and TNSM publications.',
      },
    },
  },
  results: {
    eyebrow: 'The results',
    title: 'Illustrative charts of the same evaluation story',
    subtitle:
      'Diagrams below recreate the paper’s evaluation themes — model comparison, threshold sensitivity, adversarial resilience — as original interactive charts (not copies of published figures).',
    galleryTitle: 'Key result views',
    galleryNote:
      'Illustrative charts: OC classifiers (OCSVM, IF, LOF, EE) vs AE-threshold vs AEOCC, plus adversarial UMAP-style views.',
    heatmapTitle: 'Approach hyperparameter grids',
    heatmapBody:
      'Each grid sweeps architecture / training settings. Higher scores indicate stronger zero-day detection under a profiling-based protocol.',
    galleryCaptions: {
      'model-comparison': 'OC classifiers vs. AE-threshold vs. AEOCC (illustrative)',
      'aeocc-bar': 'AEOCC highlighted against baseline detectors',
      'ae-thresholds': 'Sensitivity of AE profiling to manual threshold selection',
      perturbation: 'Detection under feature perturbation (AEOCC vs supervised)',
      'umap-fgm': 'UMAP-style embedding under adversarial FGM perturbation',
      'umap-hsj': 'UMAP-style embedding under HopSkipJump adversarial attack',
    },
    galleryThumbLabels: {
      'model-comparison': 'Models',
      'aeocc-bar': 'AEOCC',
      'ae-thresholds': 'Thresh.',
      perturbation: 'Perturb.',
      'umap-fgm': 'FGM',
      'umap-hsj': 'HSJ',
    },
  },
  research: {
    eyebrow: 'The science',
    title: 'Publications',
    subtitle:
      'Peer-reviewed papers and thesis behind this demo. IEEE articles are linked via DOI only — PDFs are not redistributed here.',
    thesisLabel: 'MS Thesis',
    presentations: {
      'bigdata-2021':
        'Presented at IEEE Big Data 2021 (Orlando, FL · Dec 15–18, 2021) · short paper',
      'tnsm-2023':
        'Published in IEEE TNSM · Vol. 20, No. 3, pp. 3900–3914 · Sep 2023',
      'thesis-2022': 'MS Thesis · Texas A&M University–Commerce · Fall 2022',
    },
    abstracts: {
      'bigdata-2021':
        'Combines autoencoding and one-class classification to benefit from neural-network abstractions while removing the need for complex threshold selection — addressing limitations of standalone OC classifiers and threshold-sensitive AE profiling.',
      'tnsm-2023':
        'Extended journal version with concurrent AE+OCC training, a model-selection method (AEOCC) for well-suited learners, evaluation on Meraz\'18 and Drebin, and resilience analysis under adversarial evasion attacks.',
      'thesis-2022':
        'Master\'s thesis presenting the foundational profiling-based zero-day malware detection framework, experimental methodology, and comparative evaluation of autoencoder architectures and hybrid AE+OCC designs.',
    },
  },
  team: {
    eyebrow: 'The people',
    title: 'Research team',
    subtitle:
      'A collaboration across Texas A&M University–Commerce, University of Colorado Colorado Springs, and ETRI.',
    funding:
      'Research collaboration between Texas A&M University–Commerce and ETRI (Electronics and Telecommunications Research Institute), Korea — cybersecurity and zero-day threat detection.',
    roles: {
      'Jinoh Kim': 'Principal Investigator / Advisor',
      'Chiho Kim': 'Lead Author / MS Student',
      'Sang-Yoon Chang': 'Co-author',
      'Dongeun Lee': 'Co-author',
      'Jonghyun Kim': 'Co-author',
    },
    notes: {
      'Jinoh Kim': 'Senior Member, IEEE',
      'Chiho Kim': 'Member, IEEE',
    },
  },
  footer: {
    left: 'Zeroday Defense — interactive malware research demo.',
    right: 'Figures from recorded experiments · Meraz\'18, Drebin, EMBER datasets.',
  },
}
