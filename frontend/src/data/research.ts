// Curated metadata and figure paths from Chiho Kim's zero-day malware detection
// research (Texas A&M University–Commerce). Result figures are recovered from
// recorded experiment outputs; IEEE PDFs are linked via DOI only.

export const HEADLINE = {
  bestDetection: '~96%',
  datasets: 3,
  models: 'AE·OCC',
  threat: 'Zero-day',
}

export type Approach = {
  id: string
  key: string
  name: string
  short: string
  description: string
  figure: string
}

export const APPROACHES: Approach[] = [
  {
    id: 'ae',
    key: 'ae',
    name: 'Autoencoder profiling',
    short: 'Reconstruction error',
    description:
      'A feed-forward autoencoder learns to reconstruct benign application profiles. Malware samples produce higher reconstruction error, separating zero-day threats from the learned benign manifold.',
    figure: 'figures/1-1.AE_heatmap.png',
  },
  {
    id: 'vae',
    key: 'vae',
    name: 'VAE profiling',
    short: 'Latent regularization',
    description:
      'A variational autoencoder regularizes the latent space with a KL penalty, encouraging smoother benign representations and exposing anomalous malware behavior through reconstruction and latent divergence.',
    figure: 'figures/1-2.VAE_heatmap.png',
  },
  {
    id: 'cnn1d',
    key: 'cnn1d',
    name: 'CNN-AE (1D)',
    short: 'Sequence encoder',
    description:
      'One-dimensional convolutional layers capture local sequential patterns in feature vectors before decoding, modeling spatial structure in malware feature representations.',
    figure: 'figures/1-3.CNN-AE_1D_heatmap.png',
  },
  {
    id: 'cnn2d',
    key: 'cnn2d',
    name: 'CNN-AE (2D)',
    short: 'Image-like features',
    description:
      'Two-dimensional convolutions treat reshaped feature maps as images, learning spatial correlations across permission and API-call features for profiling-based detection.',
    figure: 'figures/1-4.CNN-AE_2D_heatmap.png',
  },
  {
    id: 'aeocc',
    key: 'aeocc',
    name: 'AE + OCC hybrid',
    short: 'Threshold-free',
    description:
      'Combines autoencoder abstraction with one-class classification (AEOCC) to remove manual threshold tuning while retaining strong detection — the core contribution across the BigData and TNSM publications.',
    figure: 'figures/AEOCCs-with-errorbar.png',
  },
]

export type ResultFigure = {
  id: string
  file: string
  caption: string
}

export const RESULT_GALLERY: ResultFigure[] = [
  {
    id: 'model-comparison',
    file: 'figures/ModelsComparisonWithErrorbar.png',
    caption: 'OC classifiers vs. AE-threshold vs. AEOCC (with error bars)',
  },
  {
    id: 'aeocc-bar',
    file: 'figures/AEOCCs-with-errorbar.png',
    caption: 'AEOCC variants across model-selection criteria',
  },
  {
    id: 'ae-thresholds',
    file: 'figures/AE-Thresholds_0to5_v2.png',
    caption: 'Sensitivity of AE profiling to manual threshold selection',
  },
  {
    id: 'perturbation',
    file: 'figures/Perturbation_v2.png',
    caption: 'Impact of feature perturbation on detection stability',
  },
  {
    id: 'umap-fgm',
    file: 'figures/UMAP-FGM-eps0_05.png',
    caption: 'UMAP embedding under adversarial FGM perturbation (ε=0.05)',
  },
  {
    id: 'umap-hsj',
    file: 'figures/UMAP-HSJ.png',
    caption: 'UMAP embedding under HopSkipJump adversarial attack',
  },
]

export type Publication = {
  id: string
  title: string
  venue: string
  year: number
  doi?: string
  authors: string[]
  abstract: string
}

export const PUBLICATIONS: Publication[] = [
  {
    id: 'bigdata-2021',
    title: 'Zero-day Malware Detection using Threshold-free Autoencoding Architecture',
    venue: 'IEEE International Conference on Big Data (Big Data)',
    year: 2021,
    doi: '10.1109/BigData52589.2021.9671355',
    authors: ['Chiho Kim', 'Sang-Yoon Chang', 'Jonghyun Kim', 'Dongeun Lee', 'Jinoh Kim'],
    abstract:
      'Combines autoencoding and one-class classification to benefit from neural-network abstractions while removing the need for complex threshold selection — addressing limitations of standalone OC classifiers and threshold-sensitive AE profiling.',
  },
  {
    id: 'tnsm-2023',
    title: 'Automated, Reliable Zero-Day Malware Detection Based on Autoencoding Architecture',
    venue: 'IEEE Transactions on Network and Service Management, vol. 20, no. 3, pp. 3900–3914',
    year: 2023,
    doi: '10.1109/TNSM.2023.3251282',
    authors: ['Chiho Kim', 'Sang-Yoon Chang', 'Jonghyun Kim', 'Dongeun Lee', 'Jinoh Kim'],
    abstract:
      'Extended journal version with concurrent AE+OCC training, a model-selection method (AEOCC) for well-suited learners, evaluation on Meraz\'18 and Drebin, and resilience analysis under adversarial evasion attacks.',
  },
  {
    id: 'thesis-2022',
    title: 'Automated Profiling-Based Zero-Day Malware Detection',
    venue: 'MS Thesis, Texas A&M University–Commerce',
    year: 2022,
    authors: ['Chiho Kim'],
    abstract:
      'Master\'s thesis presenting the foundational profiling-based zero-day malware detection framework, experimental methodology, and comparative evaluation of autoencoder architectures and hybrid AE+OCC designs.',
  },
]

export type TeamMember = {
  name: string
  role: string
  affiliation: string
  note?: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Jinoh Kim',
    role: 'Principal Investigator / Advisor',
    affiliation: 'Computer Science, Texas A&M University–Commerce',
    note: 'Senior Member, IEEE',
  },
  {
    name: 'Chiho Kim',
    role: 'Lead Author / MS Student',
    affiliation: 'Computer Science, Texas A&M University–Commerce',
    note: 'Member, IEEE',
  },
  {
    name: 'Sang-Yoon Chang',
    role: 'Co-author',
    affiliation: 'University of Colorado Colorado Springs',
  },
  {
    name: 'Dongeun Lee',
    role: 'Co-author',
    affiliation: 'Texas A&M University–Commerce',
  },
  {
    name: 'Jonghyun Kim',
    role: 'Co-author',
    affiliation: 'Cybersecurity Research Division, ETRI',
  },
]

export const FUNDING =
  'Research collaboration between Texas A&M University–Commerce and ETRI (Electronics and Telecommunications Research Institute), Korea — cybersecurity and zero-day threat detection.'

export const DATASETS = ['Meraz\'18', 'Drebin', 'EMBER'] as const
