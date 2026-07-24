import type { Messages } from '../types'

export const ko: Messages = {
  meta: {
    title: 'Zeroday Defense — 제로데이 악성코드 탐지 연구 데모',
    description:
      '오토인코더와 원클래스 분류를 활용한 프로파일링 기반 제로데이 악성코드 탐지 인터랙티브 연구 데모 (김치호, Texas A&M University–Commerce).',
  },
  lang: {
    label: '언어',
    chooseTitle: '언어를 선택하세요',
    chooseSubtitle: '이후에도 상단 메뉴에서 언제든 변경할 수 있습니다.',
    continue: '시작하기',
    names: {
      en: 'English',
      ko: '한국어',
      es: 'Español',
      de: 'Deutsch',
    },
  },
  nav: {
    brand: 'Zeroday Defense',
    overview: '개요',
    approaches: '탐지 방법',
    results: '실험 결과',
    research: '연구',
    team: '연구팀',
    toggleTheme: '테마 전환',
  },
  hero: {
    badge: '악성코드 연구 · Texas A&M University–Commerce',
    brand: 'Zeroday Defense',
    titleBefore: '수동 임계값 없이 ',
    titleAccent: '제로데이 악성코드',
    titleAfter: '를 탐지합니다',
    subtitle:
      '오토인코더와 원클래스 분류를 결합한 프로파일링 기반 탐지 방법을 인터랙티브하게 소개합니다. 공개 Android 악성코드 데이터셋에서 시그니처 갱신 없이 최대 {detection}의 탐지 성능을 달성했습니다.',
    ctaApproaches: '탐지 방법 살펴보기',
    ctaResults: '실험 결과 보기',
    stats: {
      detection: '최고 탐지율 (AEOCC)',
      datasets: '평가한 공개 악성코드 데이터셋',
      models: '핵심 아키텍처',
      threat: '위협 모델: 미지의 악성코드 패밀리',
    },
  },
  overview: {
    eyebrow: '핵심 아이디어',
    title: '정상 행동을 학습하고, 그 범위를 벗어나는 패턴을 탐지',
    subtitle:
      '시그니처 기반·지도 학습 탐지기는 이전에 보지 못한 악성코드에 취약합니다. 반지도 프로파일링은 정상 앱의 행동 모델을 학습한 뒤, 그 분포에서 벗어난 샘플을 제로데이 위협으로 판별합니다.',
    cards: {
      profiling: {
        title: '오토인코더 프로파일링',
        body: '오토인코더는 Android 권한·API 호출 프로파일에서 정상 특징 벡터를 재구성하도록 학습합니다. 악성코드는 더 큰 재구성 오차를 보이지만, 임계값 설정에 민감합니다.',
      },
      hybrid: {
        title: 'AE + 원클래스 분류',
        body: 'AEOCC는 오토인코더의 표현력과 원클래스 분류기를 결합해 수동 임계값 조정 없이도 안정적인 탐지를 가능하게 합니다. BigData·TNSM 논문의 핵심 기여입니다.',
      },
      datasets: {
        title: 'Meraz\'18, Drebin & EMBER',
        body: '연구 아카이브의 세 가지 공개 Android 악성코드 데이터셋에서 실험했으며, 다양한 특징 표현과 제로데이 홀드아웃 분할을 다룹니다.',
      },
    },
  },
  approaches: {
    eyebrow: '방법론',
    title: '비교한 다섯 가지 프로파일링 아키텍처',
    subtitle:
      '탐지 방법을 선택하면 하이퍼파라미터 민감도 히트맵을 확인할 수 있습니다. 논문 실험과 동일한 평가 흐름을 설명용 차트로 재구성했습니다.',
    items: {
      ae: {
        name: '오토인코더 프로파일링',
        short: '재구성 오차',
        description:
          '피드포워드 오토인코더가 정상 앱 프로파일을 재구성하도록 학습합니다. 악성코드 샘플은 더 큰 재구성 오차를 보여, 학습된 정상 분포에서 분리됩니다.',
      },
      vae: {
        name: 'VAE 프로파일링',
        short: '잠재 공간 정규화',
        description:
          '변분 오토인코더가 KL 페널티로 잠재 공간을 정규화해 정상 표현을 더 매끄럽게 학습하고, 재구성 오차와 잠재 발산을 통해 이상 행동을 드러냅니다.',
      },
      cnn1d: {
        name: 'CNN-AE (1D)',
        short: '시퀀스 인코더',
        description:
          '1차원 합성곱 층이 디코딩 전 특징 벡터의 국소적 시퀀스 패턴을 포착하여, 악성코드 특징 표현의 구조를 모델링합니다.',
      },
      cnn2d: {
        name: 'CNN-AE (2D)',
        short: '이미지형 특징',
        description:
          '2차원 합성곱이 재구성된 특징 맵을 이미지로 취급하여, 권한·API 호출 특징 간의 공간적 상관관계를 학습합니다.',
      },
      aeocc: {
        name: 'AE + OCC 하이브리드',
        short: '임계값 설정 불필요',
        description:
          '오토인코더의 추상화 능력과 원클래스 분류(AEOCC)를 결합해 수동 임계값 조정을 없애면서도 높은 탐지 성능을 유지합니다. BigData·TNSM 논문의 핵심 기여입니다.',
      },
    },
  },
  results: {
    eyebrow: '실험 결과',
    title: '논문 평가 흐름을 보여 주는 설명용 차트',
    subtitle:
      '아래 차트는 모델 비교, 임계값 민감도, 적대적 강건성 등 논문의 평가 주제를 원본 figure 복제가 아닌 인터랙티브 차트로 재구성한 것입니다.',
    galleryTitle: '핵심 결과 차트',
    galleryNote:
      'OC 분류기(OCSVM, IF, LOF, EE)와 AE-임계값, AEOCC를 비교하고, 적대적 공격 하 UMAP 스타일 임베딩을 함께 보여 줍니다.',
    heatmapTitle: '탐지 방법별 하이퍼파라미터 그리드',
    heatmapBody:
      '각 그리드는 아키텍처·학습 설정을 바꿔 가며 성능을 비교합니다. 점수가 높을수록 프로파일링 기반 프로토콜에서 제로데이 탐지가 더 잘 이루어짐을 의미합니다.',
    galleryCaptions: {
      'model-comparison': 'OC 분류기 vs. AE-임계값 vs. AEOCC (설명용)',
      'aeocc-bar': '베이스라인 대비 AEOCC 성능 강조',
      'ae-thresholds': '수동 임계값 선택에 따른 AE 프로파일링 민감도',
      perturbation: '특징 섭동 환경에서의 탐지 (AEOCC vs 지도 학습)',
      'umap-fgm': '적대적 FGM 섭동 하 UMAP 스타일 임베딩',
      'umap-hsj': 'HopSkipJump 공격 하 UMAP 스타일 임베딩',
    },
    galleryThumbLabels: {
      'model-comparison': '모델',
      'aeocc-bar': 'AEOCC',
      'ae-thresholds': '임계값',
      perturbation: '섭동',
      'umap-fgm': 'FGM',
      'umap-hsj': 'HSJ',
    },
  },
  research: {
    eyebrow: '연구 성과',
    title: '논문',
    subtitle:
      '본 데모의 기반이 된 동료심사 논문과 학위 논문입니다. IEEE 논문은 DOI 링크만 제공하며, PDF는 재배포하지 않습니다.',
    thesisLabel: '석사 학위 논문',
    abstracts: {
      'bigdata-2021':
        '오토인코딩과 원클래스 분류를 결합해 신경망의 표현력을 활용하면서도 복잡한 임계값 선택을 없앱니다. 독립적인 OC 분류기와 임계값에 민감한 AE 프로파일링의 한계를 해소합니다.',
      'tnsm-2023':
        'AE와 OCC를 동시에 학습하는 방식, 적합한 학습기를 고르는 모델 선택 방법(AEOCC), Meraz\'18·Drebin 평가, 적대적 회피 공격에 대한 강건성 분석을 담은 확장 저널 논문입니다.',
      'thesis-2022':
        '프로파일링 기반 제로데이 악성코드 탐지의 기초 프레임워크, 실험 방법론, 오토인코더 아키텍처 및 하이브리드 AE+OCC 설계의 비교 평가를 제시한 석사 학위 논문입니다.',
    },
  },
  team: {
    eyebrow: '연구진',
    title: '연구팀',
    subtitle:
      'Texas A&M University–Commerce, University of Colorado Colorado Springs, ETRI의 공동 연구입니다.',
    funding:
      'Texas A&M University–Commerce와 ETRI(한국전자통신연구원) 간 사이버보안·제로데이 위협 탐지 연구 협력.',
    roles: {
      'Jinoh Kim': '연구책임자 / 지도교수',
      'Chiho Kim': '제1저자 / 석사과정',
      'Sang-Yoon Chang': '공동저자',
      'Dongeun Lee': '공동저자',
      'Jonghyun Kim': '공동저자',
    },
    notes: {
      'Jinoh Kim': 'IEEE Senior Member',
      'Chiho Kim': 'IEEE Member',
    },
  },
  footer: {
    left: 'Zeroday Defense — 인터랙티브 악성코드 연구 데모.',
    right: '설명용 차트 · Meraz\'18, Drebin, EMBER 데이터셋.',
  },
}
