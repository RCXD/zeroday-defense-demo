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
    story: '연구 배경',
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
  contributions: {
    eyebrow: '연구 배경',
    title: '기존 연구의 한계와 이를 해결한 접근',
    subtitle:
      '본 연구는 단순한 정확도 보고를 넘어, 반지도 제로데이 탐지의 구조적 한계를 짚고, 임계값 없는 하이브리드 아키텍처를 제안하며, 공격자가 회피 샘플을 만들 때의 강건성까지 분석합니다.',
    problem: {
      title: '논문이 지적한 기존 연구의 한계',
      body:
        '많은 악성코드 탐지 연구는 이미 알려진 공격 패턴을 전제로 합니다. Big Data 2021·TNSM 2023 논문은 반지도 대안마다 해결하지 못하는 부분이 있다고 봅니다.',
      bullets: [
        '시그니처 기반·지도 학습 탐지기는 지속적인 재학습 없이는 한 번도 보지 못한 악성코드 패밀리로 일반화하기 어렵습니다.',
        '독립적인 원클래스 분류기(OCSVM, Isolation Forest, LOF)는 수동 임계값이 필요 없지만, 복잡한 Android 권한·API 프로파일에서는 상대적으로 낮은 탐지율을 보이는 경우가 많습니다.',
        '오토인코더 프로파일링은 악성코드를 더 잘 분리할 수 있지만, 재구성 오차의 “이상적인” 임계값 설정에 성능이 크게 좌우됩니다. 데이터셋·아키텍처·하이퍼파라미터에 민감합니다.',
      ],
    },
    solution: {
      title: '임계값 없는 AE + OCC (AEOCC)',
      body:
        '핵심 제안은 오토인코더의 신경망 추상화와 원클래스 분류를 결합해, 운영자가 재구성 임계값을 수동으로 맞출 필요가 없도록 하는 것입니다.',
      bullets: [
        '오토인코딩과 OC 분류를 결합해 강한 특징 추상화를 유지하면서 깨지기 쉬운 임계값 선택을 제거합니다.',
        '학습 시 악성코드 레이블이 없는 동시 AE+OCC 학습 문제를, 적합한 학습기 쌍을 고르는 모델 선택 절차(AEOCC)로 해결합니다.',
        'Meraz\'18에서 최대 약 96%(Big Data 2021), Meraz\'18·Drebin에서 97.1%(TNSM 2023)를 보고했으며, 알려진 악성코드에 한정된 지도 학습 베이스라인과 비슷한 수준입니다.',
      ],
    },
    adversarial: {
      title: '적대적 회피 공격에 대한 시사점',
      body:
        '홀드아웃 패밀리 정확도뿐 아니라, 공격자가 특징 벡터를 교란해 결정 경계를 넘을 때 탐지기가 버티는지를 논문은 함께 검토합니다.',
      bullets: [
        '지도 학습 모델은 레이블된 악성코드로 경계를 학습하므로, FGM 같은 그래디언트 기반·HopSkipJump 같은 쿼리 기반 회피 공격에 취약할 수 있습니다.',
        'Big Data 2021: 하이브리드 AEOCC가 알려진 악성코드로 학습한 지도 모델보다 탐지를 회피하도록 만든 합성 샘플을 더 안정적으로 식별합니다.',
        'TNSM 2023: 공식적인 회피 실험에서 프로파일링 기반 AEOCC가 교란된 악성코드 변종에 대해 99% 이상 탐지율을 유지합니다. 공격 시그니처를 외우는 대신 정상 행동을 모델링하기 때문입니다.',
      ],
    },
    venues: {
      title: '연구가 발표·게재된 곳',
      body:
        'IEEE 동료심사 학회·저널에 게재되었으며, 석사 학위 논문에 본 데모의 실험 아카이브가 정리되어 있습니다.',
      items: [
        'IEEE International Conference on Big Data (BigData 2021) · Orlando, FL · 2021년 12월 15–18일',
        'IEEE Transactions on Network and Service Management (TNSM) · 제20권 제3호 · 2023년 9월',
        '석사 학위 논문, Texas A&M University–Commerce · 2022년 가을',
      ],
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
    presentations: {
      'bigdata-2021':
        'IEEE Big Data 2021 발표 (Orlando, FL · 2021.12.15–18) · short paper',
      'tnsm-2023':
        'IEEE TNSM 게재 · 제20권 제3호, pp. 3900–3914 · 2023년 9월',
      'thesis-2022': '석사 학위 논문 · Texas A&M University–Commerce · 2022년 가을',
    },
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
