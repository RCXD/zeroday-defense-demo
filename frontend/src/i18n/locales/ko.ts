import type { Messages } from '../types'

export const ko: Messages = {
  meta: {
    title: 'Zeroday Defense — 제로데이 악성코드 탐지 연구 데모',
    description:
      '오토인코더와 원클래스 분류 기반 프로파일링 제로데이 악성코드 탐지 인터랙티브 연구 데모 (김치호, Texas A&M University–Commerce).',
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
    approaches: '접근법',
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
      '오토인코더와 원클래스 분류를 결합한 프로파일링 기반 탐지 방법을 인터랙티브하게 소개합니다. 공개 Android 악성코드 데이터셋에서 최대 {detection} 탐지 성능을 달성했습니다.',
    ctaApproaches: '접근법 살펴보기',
    ctaResults: '실험 결과 보기',
    stats: {
      detection: '최고 보고 탐지율 (AEOCC)',
      datasets: '평가한 공개 악성코드 데이터셋',
      models: '핵심 아키텍처',
      threat: '위협 모델: 미지의 악성코드 패밀리',
    },
  },
  overview: {
    eyebrow: '핵심 아이디어',
    title: '정상 행동을 프로파일링하고 — 어긋나는 것을 탐지',
    subtitle:
      '시그니처 기반·지도 학습 탐지기는 이전에 보지 못한 악성코드에 취약합니다. 반지도 프로파일링은 정상 앱 행동 모델을 학습하고, 편차를 제로데이 위협으로 판별합니다.',
    cards: {
      profiling: {
        title: '오토인코더 프로파일링',
        body: '오토인코더는 Android 권한·API 호출 프로파일에서 정상 특징 벡터를 재구성합니다. 악성코드는 더 높은 재구성 오차를 보이지만, 임계값 설정이 민감합니다.',
      },
      hybrid: {
        title: 'AE + 원클래스 분류',
        body: 'AEOCC는 오토인코더 추상화와 OC 분류기를 결합해 수동 임계값 조정 없이 강력한 탐지를 유지합니다 — BigData·TNSM 논문의 핵심 기여입니다.',
      },
      datasets: {
        title: 'Meraz\'18, Drebin & EMBER',
        body: '연구 아카이브의 세 가지 공개 Android 악성코드 데이터셋에서 실험하며, 다양한 특징 표현과 제로데이 홀드아웃 분할을 다룹니다.',
      },
    },
  },
  approaches: {
    eyebrow: '방법론',
    title: '비교한 다섯 가지 프로파일링 아키텍처',
    subtitle:
      '접근법을 선택하면 하이퍼파라미터 민감도 히트맵을 확인할 수 있습니다 — 연구 아카이브의 기록된 실험 출력에서 복원했습니다.',
    items: {
      ae: {
        name: '오토인코더 프로파일링',
        short: '재구성 오차',
        description:
          '피드포워드 오토인코더가 정상 앱 프로파일을 재구성하도록 학습합니다. 악성코드 샘플은 더 높은 재구성 오차를 생성하여 학습된 정상 매니폴드에서 분리됩니다.',
      },
      vae: {
        name: 'VAE 프로파일링',
        short: '잠재 공간 정규화',
        description:
          '변분 오토인코더가 KL 페널티로 잠재 공간을 정규화하여 더 매끄러운 정상 표현을 유도하고, 재구성·잠재 발산을 통해 이상 행동을 드러냅니다.',
      },
      cnn1d: {
        name: 'CNN-AE (1D)',
        short: '시퀀스 인코더',
        description:
          '1차원 합성곱 층이 디코딩 전 특징 벡터의 지역적 순차 패턴을 포착하여 악성코드 특징 표현의 구조를 모델링합니다.',
      },
      cnn2d: {
        name: 'CNN-AE (2D)',
        short: '이미지형 특징',
        description:
          '2차원 합성곱이 재구성된 특징 맵을 이미지로 취급하여 권한·API 호출 특징 간 공간적 상관관계를 학습합니다.',
      },
      aeocc: {
        name: 'AE + OCC 하이브리드',
        short: '임계값 불필요',
        description:
          '오토인코더 추상화와 원클래스 분류(AEOCC)를 결합해 수동 임계값 조정을 제거하면서 강력한 탐지를 유지합니다 — BigData·TNSM 논문의 핵심 기여입니다.',
      },
    },
  },
  results: {
    eyebrow: '실험 결과',
    title: '기록된 실험 도표 — 합성 수치 없음',
    subtitle:
      '막대 차트 수치를 추정하는 대신, 실험 아카이브에서 복원한 원본 결과 도표를 보여 줍니다. 갤러리 이미지나 접근법 히트맵을 선택해 확인하세요.',
    galleryTitle: '주요 결과 도표',
    galleryNote:
      '기록된 실험의 도표 — OC 분류기(OCSVM, IF, LOF, EE)와 AE-임계값, AEOCC 변형 비교.',
    heatmapTitle: '접근법 하이퍼파라미터 히트맵',
    heatmapBody:
      '각 히트맵은 아키텍처·학습 하이퍼파라미터를 스윕합니다. 밝은 영역은 프로파일링 기반 평가 프로토콜에서 더 강한 제로데이 탐지를 나타냅니다.',
    galleryCaptions: {
      'model-comparison': 'OC 분류기 vs. AE-임계값 vs. AEOCC (오차 막대 포함)',
      'aeocc-bar': '모델 선택 기준별 AEOCC 변형',
      'ae-thresholds': '수동 임계값 선택에 대한 AE 프로파일링 민감도',
      perturbation: '특징 섭동이 탐지 안정성에 미치는 영향',
      'umap-fgm': '적대적 FGM 섭동(ε=0.05) 하 UMAP 임베딩',
      'umap-hsj': 'HopSkipJump 적대적 공격 하 UMAP 임베딩',
    },
  },
  research: {
    eyebrow: '연구 성과',
    title: '논문',
    subtitle:
      '본 데모의 기반이 된 동료심사 논문과 학위 논문입니다. IEEE 논문은 DOI 링크만 제공하며 PDF는 재배포하지 않습니다.',
    thesisLabel: '석사 학위 논문',
    abstracts: {
      'bigdata-2021':
        '오토인코딩과 원클래스 분류를 결합하여 신경망 추상화의 이점을 활용하면서 복잡한 임계값 선택의 필요성을 제거합니다 — 독립 OC 분류기와 임계값 민감 AE 프로파일링의 한계를 해결합니다.',
      'tnsm-2023':
        '동시 AE+OCC 학습, 적합한 학습기를 위한 모델 선택 방법(AEOCC), Meraz\'18·Drebin 평가, 적대적 회피 공격에 대한 강건성 분석을 포함한 확장 저널 버전입니다.',
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
    right: '기록된 실험 도표 · Meraz\'18, Drebin, EMBER 데이터셋.',
  },
}
