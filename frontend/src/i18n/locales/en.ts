import type { Messages } from '../types'

export const en: Messages = {
  meta: {
    title: 'Zeroday Defense — Zero-Day Malware Detection Research Demo',
    description:
      'Interactive research demo: **profiling**-based **zero-day malware** detection using **autoencoder** and **one-class classification** architectures (Chiho Kim, Texas A&M University–Commerce).',
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
    hybrid: 'AE+OCC',
    acknowledgments: 'Acknowledgments',
    toggleTheme: 'Toggle color theme',
  },
  pathways: {
    eyebrow: 'Early recognition',
    title: '1st place at the 17th TAMUS Pathways Student Research Symposium',
    subtitle:
      'Master’s poster, 1st place (Business & Information Technology) at College Station, March 2022 — the same **profiling**-based **zero-day** detection line later published at IEEE Big Data (2021) and IEEE TNSM (2023).',
    placementBadge: '1st place',
    labels: {
      event: 'Symposium',
      dates: 'Dates',
      location: 'Location',
      category: 'Category',
      presenter: 'Presenter',
      placement: 'Award',
      paperTitle: 'Poster title',
    },
    event: '17th Annual TAMUS Pathways Student Research Symposium',
    dates: 'March 3–4, 2022',
    location: 'Texas A&M University, College Station',
    category: 'Master’s Business and Information Technology — Poster Presentation',
    presenter: 'Chiho Kim (A&M–Commerce)',
    placement: '1st place',
    paperTitle: 'Zero-day Malware Detection using Threshold-free Autoencoding Architecture',
    categoryNote:
      'Confirmed on the official TAMUS 17th Annual Pathways Winners List (Master’s poster track). The East Texas A&M / Commerce campus news article mislabels this award as Undergraduate; Undergraduate BIT 1st place that year was a different student (Tarleton). The College Station host did not publish a system-wide feature naming this award.',
    sourceLabel: 'Campus news (ETAMU; degree level mislabeled):',
    sourceLink: 'Read the article',
    officialSourceLabel: 'Official winners list (PDF):',
    officialSourceLink: 'Open the 2022 winners PDF',
    evidenceCaption:
      'Excerpt from the official TAMUS winners PDF — Master’s poster, Business & Information Technology, 1st place (Chiho Kim).',
    logoAlt: '17th Texas A&M University System Pathways Student Research Symposium logo',
    evidenceAlt:
      'Official winners list excerpt: Master’s Presentations, Business & Information Technology, 1st Place Chiho Kim',
    hostLogoAlt: 'Texas A&M University Graduate and Professional School logo',
  },
  hero: {
    badge: 'Malware research · Texas A&M University–Commerce',
    brand: 'Zeroday Defense',
    titleBefore: 'Research on detecting ',
    titleAccent: '**zero-day malware**',
    titleAfter: ' without manual thresholds',
    subtitle:
      'From nuclear and energy-sector intrusions to ransomware and automated exploit kits — **profiling**-based detection (no **signature** refresh) reaching up to {detection} on Meraz\'18, Drebin, and EMBER. **Zero-day** = never-before-seen malware families.',
    ctaApproaches: 'Explore the approaches',
    ctaResults: 'See the results',
    stats: {
      detection: 'Best reported detection (**AEOCC**)',
      datasets: 'Public malware datasets evaluated',
      models: 'Core architecture (**AE** + **OCC**)',
      threat: 'Threat model: unseen **zero-day** families',
    },
  },
  motivation: {
    eyebrow: 'Why this research',
    title: 'Why **zero-day malware** detection research matters',
    subtitle:
      'Nuclear and energy-sector intrusions, ransomware, and automated hacking tools — the gap left when **signatures** and **supervised learning** cannot see never-before-seen malware',
    paragraphs: [
      'Public reporting in 2017 on intrusions aimed at U.S. nuclear operators’ business networks (including Wolf Creek) showed that energy and nuclear infrastructure are real cyber targets. Operations systems were not compromised, yet the episode sharpened concern—especially in energy-heavy regions such as Texas—that corporate networks can become staging grounds. The 2021 Colonial Pipeline ransomware attack then halted fuel delivery and made the societal cost of malware against critical pipelines unmistakable.',
      'Earlier waves such as WannaCry and NotPetya had already shown how ransomware can freeze hospitals and enterprises. Automated tooling—Metasploit, exploit kits, and leaked capabilities like EternalBlue—sped up mass exploitation. Variants often outrun **signature** updates (known-malware fingerprints). Detecting **zero-day** families—malware never seen in training—became a central research problem.',
      '**Signature** lists and **supervised learning** models trained only on known malware leave that gap open. This research line uses **unsupervised profiling** of benign app behavior and couples **autoencoders (AE)** with **one-class classification (OCC)** to flag anomalies without fragile manual **threshold τ** tuning—work presented in IEEE Big Data and IEEE TNSM.',
    ],
    stakesTitle: 'Why the research matters',
    stakes:
      'Unknown malware remains a blind spot from critical infrastructure to mobile endpoints. **Signature** refresh alone cannot keep pace. This project models benign behavior with a **threshold-free** **AEOCC** architecture—no hand-tuned **reconstruction-error** cut-off.',
    incidents: [
      {
        year: '2017',
        title: 'U.S. nuclear & energy intrusions',
        body: 'Reported targeting of nuclear operators’ business networks (e.g. Wolf Creek). No plant operations impacted—but a turning point for infrastructure cyber awareness.',
      },
      {
        year: '2016–17',
        title: 'Automated attack tooling',
        body: 'Metasploit, exploit kits, and leaked exploits such as EternalBlue industrialized offense. **Zero-day** and variant speed outpaced **signature** response.',
      },
      {
        year: '2017',
        title: 'WannaCry & NotPetya',
        body: 'Global ransomware waves that paralyzed hospitals and enterprises—and exposed how never-seen **zero-day** paths defeat **signature**-based detectors.',
      },
      {
        year: '2021',
        title: 'Colonial Pipeline ransomware',
        body: 'Major U.S. fuel pipeline shutdown with direct impact on energy supply—including Texas and the Southeast—underscoring malware’s real-world cost.',
      },
    ],
  },
  overview: {
    eyebrow: 'The idea',
    title: 'Research on **profiling** benign behavior',
    subtitle:
      'What **signature** and **supervised learning** miss — flagging deviations from normal app behavior as **zero-day** threats',
    cards: {
      profiling: {
        title: 'Profiling with **autoencoders**',
        body: '**Autoencoders (AE)** reconstruct benign **feature vectors** from Android permission and API-call profiles. Malware yields higher **reconstruction error**—but choosing **threshold τ** (the cut-off on that error) is fragile in production.',
      },
      hybrid: {
        title: '**AE** + **one-class classification**',
        body: '**AEOCC** couples **autoencoder** abstraction with an **OC** classifier to remove manual **threshold** tuning while retaining strong detection—the **threshold-free** architecture from the BigData and TNSM papers.',
      },
      datasets: {
        title: 'Meraz\'18, Drebin & EMBER',
        body: 'Experiments span three public Android malware datasets from the research archive, covering diverse **feature vector** representations and **zero-day** holdout splits.',
      },
    },
    compare: {
      title: '**Supervised learning** vs. **unsupervised profiling** — why **zero-day** slips through',
      stepLabel: 'Animation steps',
      stepNames: ['Labeled training', 'Decision boundary', 'Zero-day', 'Missed', 'Evasion attacks', 'Poison filtering'],
      groupLabels: { benign: 'Group 0', malware: 'Group 1' },
      attackLabels: { poison: 'Poison', fgsm: 'FGSM', hsj: 'HSJ', boundary: 'Boundary' },
      legend: {
        benign: 'Benign apps (Group 0)',
        knownMalware: 'Known malware (Group 1)',
        zeroDay: '**Zero-day** (unseen family)',
      },
      supervised: {
        title: '**Supervised learning**',
        trainingCaption:
          'Learns a **decision boundary** between labeled Group 0 (benign) and Group 1 (known malware). Performance depends on how cleanly those groups were curated—and whether unseen attack patterns stayed out of training.',
        boundaryCaption:
          'The hyperplane separates only what was labeled during training. It cannot represent **zero-day** families never seen before.',
        zeroDayCaption:
          'A never-before-seen family lands where no label exists—often beside benign samples in **feature space**.',
        missedCaption:
          'No label for the new family: classified as benign. **Supervised learning** is ill-suited for unknown attack patterns.',
        adversarialCaption:
          '**Evasion attacks** (FGSM, HopSkipJump, boundary) push malware across the hyperplane—the supervised **decision boundary** is brittle and easy to bypass.',
        poisonCaption:
          '**Poisoning** samples hide inside benign training data. The boundary shifts and accepts corrupted points—training is compromised.',
        missedBadge: 'Missed',
        vulnerableBadge: 'Exploitable',
        poisonBadge: 'Poisoned',
      },
      profiling: {
        title: '**Unsupervised profiling**',
        trainingCaption:
          'Learns only the distribution of benign behavior—no malware labels, no reliance on how well Group 0/1 were separated in someone else\'s dataset.',
        regionCaption:
          'A normal-behavior envelope wraps the benign cluster—deviations from the learned **manifold**, not memorized attack **signatures**, trigger alerts.',
        zeroDayCaption:
          'The same **zero-day** samples fall far outside the learned normal region in **feature space**.',
        detectedCaption:
          'Deviation from normal is flagged—**zero-day** caught without ever seeing malware labels.',
        robustCaption:
          'The same **evasion attacks** (FGSM, HopSkipJump, boundary) are applied on both panels—perturbations that slip past a supervised hyperplane are still flagged here.',
        poisonCaption:
          'The same **poisoning** points sit outside the learned benign envelope and are rejected—**profiling** keeps the training **manifold** clean.',
        detectedBadge: 'Detected',
        robustBadge: 'More robust',
        poisonFilteredBadge: 'Filtered',
      },
      poison: {
        legend: {
          benign: 'Benign training',
          poison: 'Poison sample',
          boundary: 'Learned envelope',
          filtered: 'Poison rejected',
        },
        axisLabels: { x: 'x', y: 'y', z: 'z (latent)' },
        captions: [
          '**Poisoning** samples mingle with benign training data in **feature space** (x, y).',
          'At a 45° view along **latent** z, poison sits above the benign **manifold**.',
          '**Unsupervised profiling** learns a 3D boundary envelope around benign behavior in **latent space**.',
          'Poison outside the envelope is rejected before it can degrade training.',
          'The benign **manifold** stays clean—**profiling** filters **data poisoning** infiltration.',
        ],
      },
    },
  },
  contributions: {
    eyebrow: 'Research contributions',
    title: 'What prior work missed — and how we addressed it',
    subtitle:
      'Bottlenecks in semi-supervised **zero-day** detection · a **threshold-free** **AE+OCC** hybrid · resilience under **adversarial evasion**',
    problem: {
      title: 'Bottlenecks across **zero-day** detection approaches',
      body:
        'Three families of methods target unseen malware—**signatures** and **supervised learning**, **one-class classification (OCC)**, and **autoencoder profiling**. Each carries a different bottleneck; prior work and preliminary experiments summarize them as follows, and this research sets out to address the trade-off jointly.',
      bullets: [
        '**Signatures** and **supervised learning**: strong on known families, weak at generalizing to never-before-seen **zero-day** malware.',
        '**One-class classification (OCC)** (OCSVM, Isolation Forest, LOF): no manual **reconstruction-error** **threshold**, but often lower detection rates on Android permission/API **feature vectors**.',
        '**Autoencoder profiling**: better separation of malware from benign apps, but performance hinges on which **reconstruction-error** **threshold τ** is chosen.',
      ],
    },
    solution: {
      title: '**Threshold-free** **AE** + **OCC** (**AEOCC**)',
      body:
        'The core proposal combines neural abstraction from the **autoencoder** with **one-class classification** so operators no longer tune **reconstruction-error** **thresholds** by hand.',
      bullets: [
        'Merge **autoencoding** and **OC classification** to keep strong **feature** abstraction while removing fragile **threshold τ** selection.',
        'Address concurrent **AE+OCC** training—where no malware labels are available at training time—with a model-selection procedure (**AEOCC**) that picks well-suited learner pairs.',
        'Report up to ~96% **zero-day** detection on Meraz\'18 (Big Data 2021) and 97.1% on Meraz\'18 and Drebin (TNSM 2023), comparable to **supervised** baselines limited to known malware.',
      ],
    },
    adversarial: {
      title: '**Adversarial evasion** insight',
      body:
        'Beyond accuracy on holdout families, the papers ask whether detectors survive when attackers perturb **feature vectors** to evade the **decision boundary**.',
      bullets: [
        '**Supervised** models learn boundaries from labeled malware and can be pushed across them by gradient-based (FGM) or query-based (HopSkipJump) **evasion attacks**.',
        'Big Data 2021: the hybrid **AEOCC** identifies synthetic evasion samples more reliably than **supervised** learners trained on known malware.',
        'TNSM 2023: formal evasion experiments show **profiling**-based **AEOCC** maintaining over 99% detection on perturbed malware variants—robustness from modeling benign behavior instead of memorizing attack **signatures**.',
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
  aeOcc: {
    eyebrow: 'Hybrid rationale',
    title: 'Why combine **autoencoders** with **one-class classification**?',
    subtitle:
      '**AE** and **OCC** each solve part of **zero-day profiling**—but used alone they carry operational bottlenecks. **AEOCC** keeps the strengths of both while removing fragile **threshold τ** tuning.',
    bullets: [
      '**Autoencoder profiling** is expressive, yet turning **reconstruction error** into a detector requires picking **threshold τ** by hand—a brittle cut-off on reconstruction error in production.',
      '**One-class classifiers** avoid that **threshold**, but hyperparameter tuning is difficult and training cost grows quickly as input dimensionality rises.',
      'Feeding **OCC** the **AE latent space** compresses the problem: tuning becomes tractable, training is faster, and the manual **reconstruction-error** **threshold τ** disappears.',
    ],
    compare: {
      title: '**AE** vs. **OCC** vs. **AEOCC** — complementary strengths',
      stepLabel: 'Animation steps',
      stepNames: ['Benign profiling', 'AE threshold gap', 'OCC scaling gap', 'Latent bridge', 'AEOCC synergy'],
      legend: {
        benign: 'Benign training samples',
        anomaly: 'Elevated **reconstruction error**',
        latent: '**Latent** representation',
      },
      ae: {
        title: '**Autoencoder (AE)**',
        captions: [
          'Learns to reconstruct benign **feature vectors**—strong abstraction of normal app behavior.',
          'To flag anomalies you must set a **reconstruction-error** **threshold τ**—operators tune this cut-off by hand for every dataset shift.',
          'A **threshold τ** set too low floods false alarms; too high and **zero-day** samples slip through undetected.',
          'The encoder still produces a compact **latent code**—the same abstraction **OCC** can consume instead of raw high-dimensional features.',
          'In the hybrid, **AE** supplies representation; **OCC** supplies the decision rule—no manual **τ** on **reconstruction error**.',
        ],
      },
      occ: {
        title: '**One-class classifier (OCC)**',
        captions: [
          'The dashed ellipse is the learned benign region—**OCC** fits a **decision boundary** around normal behavior without malware labels.',
          'Hyperparameters (ν, γ, σ) must be tuned for every **feature vector** setup—there is no fixed default that works across datasets.',
          'High-dimensional permission/API **feature vectors** (many bars) make **OCC** training slow—cost grows with input size.',
          '**AE latent space** compresses the input (few bars)—dimension reduction speeds up training and shrinks the tuning search space.',
          '**OCC** on **latent codes**: fast training, tuned hyperparameters, and **threshold-free** detection of outliers outside the benign region.',
        ],
      },
      aeocc: {
        title: '**AE** + **OCC** (**AEOCC**)',
        captions: [
          'Preview: encoder compresses benign behavior, **OCC** learns a **decision boundary** in the **latent space**.',
          '**AE**-only bottleneck highlighted—manual **reconstruction-error** **threshold τ**.',
          '**OCC**-only bottleneck highlighted—high-dimensional raw **feature vectors** and heavy tuning.',
          '**Latent bridge**: encoder output feeds **OCC**—compact space, shared benign **manifold**.',
          '**Threshold-free** detection with efficient **OCC** tuning—the hybrid keeps what works from each approach.',
        ],
        thresholdFreeBadge: 'No manual τ',
        efficientBadge: 'Efficient tuning',
      },
      diagram: {
        reconstructionError: 'error',
        thresholdTau: 'τ ?',
        noManualTau: '✓ no manual τ',
        inputDimHigh: 'input dim (high)',
        latentDimLow: 'latent dim (low)',
        trainingTime: 'training time',
        trainingFast: 'fast',
        trainingSlow: 'slow',
        benignRegion: 'benign region',
        hyperparameters: 'hyperparameters',
        dimReduction: 'dim. reduction',
        outlier: 'outlier',
        encoder: 'Encoder',
        latentZ: 'latent z',
        occ: 'OCC',
      },
    },
    poison3d: {
      title: '**Poisoning** in training data — filtered in **latent z-space**',
      stepLabel: 'Poison animation steps',
      stepNames: ['Infiltration', 'z-axis revealed', 'Unsupervised boundary', 'Poison filtered', 'Clean profiling'],
      captions: [
        '**Poisoning** samples mingle with benign training points in **feature space** (x, y)—they aim to degrade the learned model.',
        'A 45° view along the **latent** z-axis shows poison points sitting above the benign **manifold**—outliers in **latent space**.',
        '**Unsupervised profiling** learns a boundary envelope around benign behavior in 3D **latent space** (including z).',
        'Poison points outside the envelope are rejected—they cannot pull the benign boundary without passing as normal.',
        'Only in-**manifold** benign samples remain for training—**profiling** resists **data poisoning** infiltration.',
      ],
      legend: {
        benign: 'Benign training',
        poison: 'Poison sample',
        boundary: 'Learned envelope',
        filtered: 'Poison rejected — clean manifold',
      },
      axisLabels: { x: 'x', y: 'y', z: 'z (latent)' },
    },
  },
  approaches: {
    eyebrow: 'The methods',
    title: 'Five **profiling** architectures compared',
    subtitle:
      'Select an approach to inspect its hyperparameter sensitivity heatmap—recovered from recorded experiment outputs in the research archive.',
    items: {
      ae: {
        name: '**Autoencoder** profiling',
        short: '**Reconstruction error**',
        description:
          'A feed-forward **autoencoder** learns to reconstruct benign application profiles. Malware samples produce higher **reconstruction error**, separating **zero-day** threats from the learned benign **manifold**.',
      },
      vae: {
        name: 'VAE profiling',
        short: '**Latent space** regularization',
        description:
          'A variational **autoencoder** regularizes the **latent space** with a KL penalty, encouraging smoother benign representations and exposing anomalous malware behavior through reconstruction and **latent** divergence.',
      },
      cnn1d: {
        name: 'CNN-AE (1D)',
        short: 'Sequence encoder',
        description:
          'One-dimensional convolutional layers capture local sequential patterns in **feature vectors** before decoding, modeling spatial structure in malware feature representations.',
      },
      cnn2d: {
        name: 'CNN-AE (2D)',
        short: 'Image-like features',
        description:
          'Two-dimensional convolutions treat reshaped feature maps as images, learning spatial correlations across permission and API-call features for **profiling**-based detection.',
      },
      aeocc: {
        name: '**AE** + **OCC** hybrid',
        short: '**Threshold-free**',
        description:
          'Combines **autoencoder** abstraction with **one-class classification** (**AEOCC**) to remove manual **threshold τ** tuning while retaining strong detection—the core contribution across the BigData and TNSM publications.',
      },
    },
  },
  results: {
    eyebrow: 'The results',
    title: 'Illustrative charts of the same evaluation story',
    subtitle:
      'Diagrams below recreate the paper’s evaluation themes—model comparison, **threshold τ** sensitivity, **adversarial evasion** resilience—as original interactive charts (not copies of published figures).',
    galleryTitle: 'Key result views',
    galleryNote:
      'Illustrative charts: **OC** classifiers (OCSVM, IF, LOF, EE) vs **AE**-**threshold** vs **AEOCC**, plus adversarial UMAP-style views.',
    heatmapTitle: 'Approach hyperparameter grids',
    heatmapBody:
      'Each grid sweeps architecture / training settings. Higher scores indicate stronger **zero-day** detection under a **profiling**-based protocol.',
    galleryCaptions: {
      'model-comparison': '**OC** classifiers vs. **AE**-**threshold** vs. **AEOCC** (illustrative)',
      'aeocc-bar': '**AEOCC** highlighted against baseline detectors',
      'ae-thresholds': 'Sensitivity of **AE profiling** to manual **threshold τ** selection',
      perturbation: 'Detection under **feature vector** perturbation (**AEOCC** vs **supervised**)',
      'umap-fgm': 'UMAP-style embedding under **adversarial** FGM perturbation',
      'umap-hsj': 'UMAP-style embedding under HopSkipJump **evasion attack**',
    },
    galleryThumbLabels: {
      'model-comparison': 'Models',
      'aeocc-bar': 'AEOCC',
      'ae-thresholds': 'Thresh.',
      perturbation: 'Perturb.',
      'umap-fgm': 'FGM',
      'umap-hsj': 'HSJ',
    },
    chartAxes: {
      detectionRate: 'Detection rate (%)',
      threshold: 'Reconstruction **threshold τ**',
      perturbation: 'Perturbation ε',
    },
  },
  research: {
    eyebrow: 'The science',
    title: 'Publications',
    subtitle:
      'Peer-reviewed papers and thesis behind this demo. IEEE articles are linked via DOI only—PDFs are not redistributed here.',
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
        'Combines **autoencoding** and **one-class classification** to benefit from neural-network abstractions while removing the need for complex **threshold** selection—addressing limitations of standalone **OC** classifiers and **threshold**-sensitive **AE profiling**.',
      'tnsm-2023':
        'Extended journal version with concurrent **AE+OCC** training, a model-selection method (**AEOCC**) for well-suited learners, evaluation on Meraz\'18 and Drebin, and resilience analysis under **adversarial evasion attacks**.',
      'thesis-2022':
        'Master\'s thesis presenting the foundational **profiling**-based **zero-day malware** detection framework, experimental methodology, and comparative evaluation of **autoencoder** architectures and hybrid **AE+OCC** designs.',
    },
    citations: '{count} citations ({source}) ·',
    citationSource: 'Semantic Scholar',
    scholarLink: 'Google Scholar',
  },
  team: {
    eyebrow: 'The people',
    title: 'Research team',
    subtitle:
      'A collaboration across Texas A&M University–Commerce, University of Colorado Colorado Springs, and ETRI.',
    funding:
      'Research collaboration between Texas A&M University–Commerce and ETRI (Electronics and Telecommunications Research Institute), Korea—cybersecurity and **zero-day** threat detection.',
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
  acknowledgments: {
    eyebrow: 'Acknowledgments',
    title: 'Acknowledgments',
    subtitle:
      'Adapted from the acknowledgments in the IEEE Big Data (2021), IEEE TNSM (2023), and MS thesis publications that underpin this demo.',
    paragraphs: [
      'This work was supported in part by the Electronics and Telecommunications Research Institute (ETRI), Republic of Korea, through collaborative cybersecurity research with Texas A&M University–Commerce.',
      'The authors thank Dr. Jinoh Kim for advising and guiding this research program, and Sang-Yoon Chang, Jonghyun Kim, and Dongeun Lee for their collaboration and feedback across the published manuscripts.',
      'We also thank the anonymous reviewers of the IEEE International Conference on Big Data (2021) and IEEE Transactions on Network and Service Management (2023) for constructive comments that strengthened the final papers.',
      'This interactive demo summarizes work originally developed in the MS thesis Automated Profiling-Based Zero-Day Malware Detection (Texas A&M University–Commerce, 2022).',
    ],
  },
  footer: {
    left: 'Zeroday Defense — interactive malware research demo.',
    right: 'Figures from recorded experiments · Meraz\'18, Drebin, EMBER datasets.',
    visitors: '{count} site visits',
    visitorsLoading: 'Counting visitors…',
  },
  animation: {
    pause: 'Pause animation',
    play: 'Play animation',
  },
}
