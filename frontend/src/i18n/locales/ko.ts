import type { Messages } from '../types'

export const ko: Messages = {
  meta: {
    title: 'Zeroday Defense — 제로데이 악성코드 탐지 연구 데모',
    description:
      '프로파일링(**profiling**) 기반 제로데이(**zero-day**) 악성코드 탐지 연구를 오토인코더(**autoencoder**)와 원클래스 분류(**one-class classification**)로 인터랙티브하게 소개합니다. (김치호, Texas A&M University–Commerce)',
  },
  lang: {
    label: '언어',
    chooseTitle: '언어를 선택하세요',
    chooseSubtitle: '상단 메뉴에서 언제든 바꿀 수 있습니다.',
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
    approaches: '탐지 모델',
    results: '실험 결과',
    research: '논문',
    team: '연구진',
    story: '연구 배경',
    hybrid: 'AE+OCC',
    acknowledgments: '감사의 글',
    toggleTheme: '테마 전환',
  },
  pathways: {
    eyebrow: '초기 수상',
    title: '제17회 TAMUS Pathways Student Research Symposium 1위',
    subtitle:
      'Master’s 포스터 1위 (Business & Information Technology), 2022년 3월 College Station — 이후 IEEE Big Data(2021)·IEEE TNSM(2023)으로 이어진 프로파일링(**profiling**) 기반 제로데이(**zero-day**) 탐지 연구',
    placementBadge: '1위',
    labels: {
      event: '대회',
      dates: '일시',
      location: '장소',
      category: '분과',
      presenter: '수상자',
      placement: '순위',
      paperTitle: '포스터 제목',
    },
    event: '17th Annual TAMUS Pathways Student Research Symposium',
    dates: '2022년 3월 3–4일',
    location: 'Texas A&M University, College Station',
    category: 'Master’s Business and Information Technology — Poster Presentation',
    presenter: 'Chiho Kim (A&M–Commerce)',
    placement: '1st place',
    paperTitle: 'Zero-day Malware Detection using Threshold-free Autoencoding Architecture',
    categoryNote:
      '공식 TAMUS 17회 Pathways 수상자 명단(PDF)에 Master’s 포스터 분과 1위로 기재. ETAMU(당시 A&M–Commerce) 캠퍼스 기사는 Undergraduate로 잘못 표기했으며, 해당 연도 Undergraduate BIT 1위는 다른 학생(Tarleton)입니다. College Station 주최 측의 시스템 전체 특집 기사에는 본 수상이 별도로 실리지 않았습니다.',
    sourceLabel: '캠퍼스 기사 (ETAMU · 학위 구분 오기):',
    sourceLink: '기사 보기',
    officialSourceLabel: '공식 수상자 명단 (PDF):',
    officialSourceLink: '2022 수상자 PDF 열기',
    evidenceCaption:
      '공식 TAMUS 수상자 PDF 발췌 — Master’s 포스터, Business & Information Technology, 1위 (Chiho Kim).',
    logoAlt: '제17회 Texas A&M University System Pathways Student Research Symposium 공식 로고',
    evidenceAlt:
      '공식 수상자 명단 발췌: Master’s Presentations, Business & Information Technology, 1st Place Chiho Kim',
    hostLogoAlt: 'Texas A&M University Graduate and Professional School 로고',
  },
  hero: {
    badge: '악성코드 보안 연구 · Texas A&M University–Commerce',
    brand: 'Zeroday Defense',
    titleBefore: '',
    titleAccent: '제로데이(**zero-day**) 악성코드',
    titleAfter: ' 탐지 연구',
    subtitle:
      '원전·전력 인프라 침해부터 랜섬웨어·자동화 해킹 도구까지 — 시그니처(**signature**) 갱신 없이 프로파일링(**profiling**) 탐지, Meraz\'18·Drebin·EMBER에서 최대 {detection}. 제로데이 = 한 번도 본 적 없는 악성코드 패밀리.',
    ctaApproaches: '탐지 모델 보기',
    ctaResults: '실험 결과 보기',
    stats: {
      detection: '최고 탐지율 (**AEOCC**)',
      datasets: '평가 데이터셋',
      models: '핵심 구조 (**AE** + **OCC**)',
      threat: '위협: 미지 제로데이(**zero-day**) 패밀리',
    },
  },
  motivation: {
    eyebrow: '연구 배경',
    title: '왜 제로데이(**zero-day**) 악성코드 탐지 연구인가',
    subtitle:
      '텍사스·미국 에너지·원전 인프라 침해, 랜섬웨어, 자동화 해킹 도구 — 시그니처(**signature**)·지도 학습(**supervised learning**)이 못 보는 미지 악성코드의 공백',
    paragraphs: [
      '2017년 미국 원전 운영사(울프크리크 등) 업무망을 노린 침해 시도가 공개되며, 원전·전력 같은 핵심 인프라에도 사이버 위협이 현실임이 드러났습니다. 운전계통까지 뚫리진 않았어도, 에너지 설비·기업망이 정찰·거점 확보의 표적이 될 수 있다는 경각심은 텍사스 등 전력 중심 지역에서도 커졌습니다. 2021년 Colonial Pipeline 랜섬웨어는 연료 공급을 멈춰 일상과 산업에 직접 타격을 남겼습니다.',
      '그 이전부터 WannaCry·NotPetya 같은 랜섬웨어가 전 세계를 휩쓸었고, Metasploit·익스플로잇 키트·유출된 취약점 도구(EternalBlue 등)로 공격이 자동화·대량화되었습니다. 한번 배포된 변종은 시그니처(**signature**)—알려진 악성코드 지문—가 갱신되기 전에 이미 피해를 키웁니다. 학습에 한 번도 없던 제로데이(**zero-day**)·신종 패밀리를 어떻게 잡을지가 보안의 핵심 과제가 된 이유입니다.',
      '시그니처(**signature**) 목록과 알려진 악성코드만 학습하는 지도 학습(**supervised learning**)은 이런 공백에 취약합니다. 본 연구는 정상 앱 행동을 비지도 프로파일링(**unsupervised profiling**)하고, 오토인코더(**autoencoder**, **AE**)와 원클래스 분류(**one-class classification**, **OCC**)를 결합해 임계값(**threshold**) **τ** 수동 조정 없이도 이상을 가려내는 탐지 구조를 IEEE Big Data·TNSM에 제안·평가했습니다.',
    ],
    stakesTitle: '연구의 중요성',
    stakes:
      '핵심 인프라와 모바일·엔드포인트까지, 알려지지 않은 악성코드는 방어의 사각지대입니다. 시그니처(**signature**) 갱신 속도로는 따라잡기 어려운 현실을, 정상 행동 모델링과 임계값 없는(**threshold-free**) **AEOCC** 구조—재구성 오차(**reconstruction error**) **τ**를 손으로 맞추지 않는 설계—로 돌파하려는 것이 본 연구의 출발점입니다.',
    incidents: [
      {
        year: '2017',
        title: '미국 원전·에너지 부문 침해',
        body: '울프크리크 등 원전 운영사 업무망을 겨냥한 침해·피싱이 보고됨. 운전계통 영향은 없었으나 원전·전력 인프라 보안의 전환점.',
      },
      {
        year: '2016–17',
        title: '자동화 공격 도구의 대중화',
        body: 'Metasploit·익스플로잇 키트, EternalBlue 유출 등으로 공격이 자동화. 제로데이(**zero-day**)·변종 확산 속도가 시그니처(**signature**) 대응을 앞지름.',
      },
      {
        year: '2017',
        title: 'WannaCry·NotPetya 랜섬웨어',
        body: '병원·기업·공공기관을 마비시킨 대규모 랜섬웨어. 처음 보는 제로데이(**zero-day**) 경로가 시그니처(**signature**) 기반 탐지의 한계를 노출.',
      },
      {
        year: '2021',
        title: 'Colonial Pipeline 랜섬웨어',
        body: '미국 최대급 연료 파이프라인 중단. 텍사스·동남부 에너지 공급과 직결된 사건으로, 인프라 대상 악성코드의 사회적 비용을 각인.',
      },
    ],
  },
  overview: {
    eyebrow: '핵심 아이디어',
    title: '정상 앱 행동 프로파일링(**profiling**) 연구',
    subtitle:
      '시그니처(**signature**)·지도 학습(**supervised learning**)이 놓치는 미지 악성코드 — 정상 분포에서 벗어난 샘플을 제로데이(**zero-day**) 위협으로 보는 탐지 관점',
    cards: {
      profiling: {
        title: '오토인코더(**autoencoder**) 기반 프로파일링',
        body: '오토인코더(**autoencoder**, **AE**)가 Android 권한·API 호출 특징 벡터(**feature vector**)로 정상 앱 프로파일을 재구성하도록 학습합니다. 악성코드는 재구성 오차(**reconstruction error**)가 커지지만, 임계값(**threshold**) **τ**—오차 커트라인—설정에 따라 성능이 크게 달라집니다.',
      },
      hybrid: {
        title: '**AE** + 원클래스 분류(**one-class classification**)',
        body: '**AEOCC**는 오토인코더(**autoencoder**) 표현력과 **OC** 분류기를 결합해, 운영자가 재구성 오차(**reconstruction error**) 임계값(**threshold**) **τ**를 수동으로 맞출 필요 없이 안정적으로 탐지합니다. BigData·TNSM 논문의 임계값 없는(**threshold-free**) 핵심 기여입니다.',
      },
      datasets: {
        title: "Meraz'18, Drebin, EMBER",
        body: "연구 아카이브의 세 공개 Android 악성코드 데이터셋으로 실험했으며, 다양한 특징 벡터(**feature vector**) 표현과 제로데이(**zero-day**) 홀드아웃 분할을 다룹니다.",
      },
    },
    compare: {
      title: '지도 학습(**supervised learning**) vs. 비지도 프로파일링(**unsupervised profiling**) — 제로데이(**zero-day**)가 빠지는 이유',
      stepLabel: '단계',
      stepNames: [
        'Label 학습',
        '결정 경계',
        'Zero-day',
        '미탐',
        '회피 공격',
        'Poisoning 차단',
      ],
      groupLabels: { benign: 'Group 0 (정상)', malware: 'Group 1 (악성)' },
      attackLabels: { poison: 'Poison', fgsm: 'FGSM', hsj: 'HSJ', boundary: 'Boundary' },
      legend: {
        benign: '정상 앱 (Group 0)',
        knownMalware: '알려진 악성코드 (Group 1)',
        zeroDay: '제로데이(**zero-day**) (unseen)',
      },
      supervised: {
        title: '지도 학습(**supervised learning**)',
        trainingCaption:
          'Group 0(정상)과 Group 1(알려진 악성코드) 사이의 결정 경계(**decision boundary**)를 학습합니다. 성능은 학습 데이터가 얼마나 깨끗하게 나뉘었는지, 처음 보는 공격 샘플이 섞이지 않았는지에 달려 있습니다.',
        boundaryCaption:
          '훈련 때 label이 붙은 샘플만 갈라낼 수 있습니다. 한 번도 본 적 없는 제로데이(**zero-day**) 패밀리는 이 경계에 담을 수 없습니다.',
        zeroDayCaption:
          '처음 보는 패밀리는 label이 없는 구간—종종 정상 샘플 바로 옆 특징 공간(**feature space**)—에 놓입니다.',
        missedCaption:
          '새 패밀리에는 label이 없어 정상으로 처리됩니다. 지도 학습(**supervised learning**)은 unseen 공격을 잡기엔 구조적으로 맞지 않습니다.',
        adversarialCaption:
          '회피 공격(**evasion attack**)(FGSM, HopSkipJump, boundary attack)이 악성코드를 결정 경계(**decision boundary**) 너머로 밀어 탐지를 피합니다. 지도 학습 경계는 쉽게 무너집니다.',
        poisonCaption:
          '포이즈닝(**poisoning**) 샘플이 정상 학습 데이터에 섞입니다. 경계가 틀어지고 학습이 망가집니다.',
        missedBadge: '미탐',
        vulnerableBadge: '취약',
        poisonBadge: '오염',
      },
      profiling: {
        title: '비지도 프로파일링(**unsupervised profiling**)',
        trainingCaption:
          '정상 행동의 분포만 학습합니다. 악성코드 label이 필요 없고, Group 0/1이 얼마나 잘 갈라졌는지에도 의존하지 않습니다.',
        regionCaption:
          '정상 행동 envelope가 benign 군집을 감쌉니다. 공격 시그니처(**signature**)를 외운 게 아니라, 학습된 다양체(**manifold**)에서 통계적으로 튀는 점이 탐지 신호가 됩니다.',
        zeroDayCaption:
          '같은 제로데이(**zero-day**) 샘플은 학습된 정상 영역 밖 특징 공간(**feature space**)에 있습니다.',
        detectedCaption:
          '정상에서 벗어난 점을 anomaly로 잡습니다. 악성코드 label 없이도 제로데이(**zero-day**)를 찾을 수 있습니다.',
        robustCaption:
          '같은 회피 공격(**evasion attack**)(FGSM, HopSkipJump, boundary)을 써도, 지도 학습 경계를 넘긴 perturbation은 여전히 탐지됩니다.',
        poisonCaption:
          '같은 포이즈닝(**poisoning**) 샘플은 학습된 정상 영역 밖이라 걸러집니다. 프로파일링(**profiling**)은 학습 다양체(**manifold**)를 오염시키지 않습니다.',
        detectedBadge: '탐지',
        robustBadge: '강건',
        poisonFilteredBadge: '차단',
      },
      poison: {
        legend: {
          benign: '정상 학습 데이터',
          poison: '포이즈닝 샘플',
          boundary: '학습 경계',
          filtered: '포이즈닝 차단',
        },
        axisLabels: { x: 'x', y: 'y', z: 'z (latent)' },
        captions: [
          '포이즈닝(**poisoning**) 샘플이 특징 공간(**feature space**) (x, y)에서 정상 학습 데이터와 혼재합니다.',
          '잠재(**latent**) z축을 45°에서 관찰하면 poison 샘플이 정상 다양체(**manifold**) 위에 분리됩니다.',
          '비지도 프로파일링(**unsupervised profiling**)이 z축을 포함한 3차원 잠재 공간(**latent space**)에서 정상 행동 경계를 학습합니다.',
          '경계 밖 poison은 학습이 훼손되기 전에 제거됩니다.',
          '정상 다양체(**manifold**)가 유지됩니다. 프로파일링(**profiling**)은 데이터 포이즈닝(**data poisoning**) 침입을 필터링합니다.',
        ],
      },
    },
  },
  contributions: {
    eyebrow: '연구 기여',
    title: '선행 연구의 한계와 본 연구의 해법',
    subtitle:
      '반지도 제로데이(**zero-day**) 탐지의 구조적 병목 분석 · 임계값 없는(**threshold-free**) **AE+OCC** 하이브리드 · 적대적 회피(**adversarial evasion**) 강건성 평가',
    problem: {
      title: '제로데이(**zero-day**) 탐지 접근법별 한계',
      body:
        '미지 악성코드 탐지에는 시그니처(**signature**)·지도 학습(**supervised learning**), 원클래스 분류(**one-class classification**, **OCC**), 오토인코더 프로파일링(**autoencoder profiling**) 등이 쓰입니다. 각 방법마다 병목이 다르며, 선행 연구와 사전 실험에서 아래와 같이 정리되었습니다. 본 연구는 이 트레이드오프를 함께 해소하고자 출발했습니다.',
      bullets: [
        '시그니처(**signature**)·지도 학습(**supervised learning**): 알려진 악성코드에는 강하나, 한 번도 본 적 없는 제로데이(**zero-day**) 패밀리로는 일반화가 어렵습니다.',
        '원클래스 분류(**one-class classification**, **OCC**)(OCSVM, Isolation Forest, LOF): 재구성 오차(**reconstruction error**) 임계값(**threshold**)을 직접 맞출 필요는 없으나, Android 권한·API 특징 벡터(**feature vector**)에서는 탐지율이 낮은 경우가 많습니다.',
        '오토인코더 프로파일링(**autoencoder profiling**): 악성코드와 정상 앱을 더 잘 구분하나, 재구성 오차(**reconstruction error**) 임계값(**threshold**) **τ**에 따라 성능이 크게 달라집니다.',
      ],
    },
    solution: {
      title: '임계값 없는(**threshold-free**) **AE+OCC** (**AEOCC**)',
      body:
        '오토인코더(**autoencoder**)의 신경망 추상화와 원클래스 분류(**one-class classification**)를 결합해, 운영자가 재구성 오차(**reconstruction error**) 임계값(**threshold**)을 수동으로 조정하지 않아도 되도록 한 것이 핵심 제안입니다.',
      bullets: [
        '오토인코딩(**autoencoding**)과 원클래스 분류(**one-class classification**)를 결합해 강한 특징(**feature**) 추상화를 유지하면서, 깨지기 쉬운 임계값(**threshold**) **τ** 선택을 제거합니다.',
        '학습 시 악성코드 레이블이 없는 **AE+OCC** 동시 학습 문제를, 적합한 학습기 쌍을 고르는 모델 선택 절차(**AEOCC**)로 해결합니다.',
        "Meraz'18에서 최대 약 96%(Big Data 2021), Meraz'18·Drebin에서 97.1%(TNSM 2023) 제로데이(**zero-day**) 탐지를 보고했으며, 알려진 악성코드에 한정된 지도 학습(**supervised learning**) 베이스라인과 유사한 수준입니다.",
      ],
    },
    adversarial: {
      title: '적대적 회피(**adversarial evasion**) 공격에 대한 시사점',
      body:
        '홀드아웃 패밀리 정확도뿐 아니라, 공격자가 특징 벡터(**feature vector**)를 교란해 결정 경계(**decision boundary**)를 넘을 때 탐지기가 버티는지, 즉 강건성까지 함께 평가했습니다.',
      bullets: [
        '지도 학습(**supervised learning**) 모델은 레이블된 악성코드로 경계를 학습하므로, FGM 같은 그래디언트 기반·HopSkipJump 같은 쿼리 기반 회피 공격(**evasion attack**)에 취약할 수 있습니다.',
        'Big Data 2021: 하이브리드 **AEOCC**가 알려진 악성코드로 학습한 지도 학습(**supervised learning**) 모델보다, 탐지 회피용 합성 샘플을 더 안정적으로 식별합니다.',
        'TNSM 2023: 공식 회피 실험에서 프로파일링(**profiling**) 기반 **AEOCC**가 교란된 악성코드 변종에 대해 99% 이상 탐지율을 유지합니다. 공격 시그니처(**signature**)를 암기하는 대신 정상 행동을 모델링하기 때문입니다.',
      ],
    },
    venues: {
      title: '발표·게재 학회 및 저널',
      body:
        'IEEE 동료심사 학회·저널에 게재되었으며, 석사 학위 논문에 본 데모의 실험 아카이브가 정리되어 있습니다.',
      items: [
        'IEEE International Conference on Big Data (BigData 2021) · Orlando, FL · 2021. 12. 15–18',
        'IEEE Transactions on Network and Service Management (TNSM) · 제20권 제3호 · 2023. 9',
        '석사 학위 논문, Texas A&M University–Commerce · 2022년 가을',
      ],
    },
  },
  aeOcc: {
    eyebrow: 'AE+OCC 결합',
    title: '오토인코더(**autoencoder**)·원클래스 분류(**one-class classification**) 결합 연구',
    subtitle:
      '**AE**와 **OCC**가 각각 담당하는 제로데이(**zero-day**) 프로파일링(**profiling**) — 단독 운영의 병목을 제거하는 임계값 없는(**threshold-free**) **AEOCC** 하이브리드',
    bullets: [
      '오토인코더 프로파일링(**autoencoder profiling**)은 표현력이 뛰어나나, 재구성 오차(**reconstruction error**)를 탐지기로 쓰려면 임계값(**threshold**) **τ**—오차 커트라인—를 매번 수동으로 정해야 합니다.',
      '원클래스 분류(**one-class classification**)는 그 임계값(**threshold**)이 필요 없으나, 하이퍼파라미터 튜닝이 까다롭고 입력 차원이 커질수록 학습 시간이 급격히 늘어납니다.',
      '**OCC**에 **AE** 잠재 공간(**AE latent space**) 표현을 넣으면 차원이 줄어 튜닝과 학습이 효율적이 되고, **AE** 쪽 수동 재구성 오차(**reconstruction error**) 임계값(**threshold**) **τ** 결정도 사라집니다.',
    ],
    compare: {
      title: '**AE**·**OCC**·**AEOCC**의 상호 보완 관계',
      stepLabel: '단계',
      stepNames: [
        '정상 프로파일링',
        'AE 임계값 문제',
        'OCC 확장성 문제',
        '잠재 공간 연결',
        'AEOCC 시너지',
      ],
      legend: {
        benign: '정상 학습 샘플',
        anomaly: '높은 재구성 오차(**reconstruction error**)',
        latent: '잠재(**latent**) 표현',
      },
      ae: {
        title: '오토인코더(**autoencoder**, **AE**)',
        captions: [
          '정상 앱의 특징 벡터(**feature vector**)를 재구성(**reconstruction**)하도록 학습합니다. 정상 행동의 추상화된 표현을 얻습니다.',
          '이상 탐지를 위해 재구성 오차(**reconstruction error**) 임계값(**threshold**) **τ**—오차 커트라인—를 설정해야 합니다. 데이터셋이 바뀔 때마다 운영자가 수동으로 조정합니다.',
          '**τ**가 너무 낮으면 오탐(false alarm)이 증가하고, 너무 높으면 제로데이(**zero-day**) 샘플이 미탐됩니다.',
          '인코더(**encoder**)가 저차원 잠재 코드(**latent code**)를 생성합니다. **OCC**는 고차원 원본 특징 대신 이 표현을 입력으로 사용할 수 있습니다.',
          '하이브리드 구조에서 **AE**는 표현 학습(**representation learning**)을, **OCC**는 판별 규칙을 담당합니다. 재구성 오차(**reconstruction error**)에 대한 수동 **τ**가 필요 없습니다.',
        ],
      },
      occ: {
        title: '원클래스 분류(**one-class classification**, **OCC**)',
        captions: [
          '점선 타원은 학습된 정상 영역(benign region)입니다. 악성코드 레이블 없이 정상 샘플만으로 결정 경계(**decision boundary**)를 학습합니다.',
          'ν·γ·σ 등 **OCC** 하이퍼파라미터(**hyperparameter**)를 특징 벡터(**feature vector**) 설정·데이터셋마다 조정해야 합니다. 만능 기본값은 없습니다.',
          '권한·API 특징 벡터(**feature vector**)는 수백 차원(high)입니다. 막대가 많을수록—입력 차원이 클수록—**OCC** 학습이 느려집니다.',
          '**AE** 잠재 공간(**AE latent space**)(low)으로 차원을 줄이면 학습이 빨라지고, 탐색할 하이퍼파라미터 범위도 작아집니다.',
          '잠재 코드(**latent code**) 위 **OCC**: 빠른 학습, 튜닝 완료, 경계 밖 이상치(**outlier**)를 **τ** 없이 탐지합니다.',
        ],
      },
      aeocc: {
        title: '**AE+OCC** 하이브리드 (**AEOCC**)',
        captions: [
          '인코더(**encoder**)가 정상 행동을 압축하고, **OCC**가 잠재 공간(**latent space**)에서 결정 경계(**decision boundary**)를 학습합니다.',
          '**AE** 단독 사용 시 병목: 수동 재구성 오차(**reconstruction error**) 임계값(**threshold**) **τ** 설정.',
          '**OCC** 단독 사용 시 병목: 고차원 원본 특징 벡터(**feature vector**)와 과도한 하이퍼파라미터 튜닝.',
          '잠재 연결(**latent bridge**): 인코더(**encoder**) 출력이 **OCC**로 전달됩니다. 공유된 정상 다양체(**manifold**) 위에서 경계를 학습합니다.',
          '임계값 없는(**threshold-free**) 탐지와 효율적인 **OCC** 튜닝을 동시에 달성합니다. 각 방법의 장점만 결합됩니다.',
        ],
        thresholdFreeBadge: '수동 τ 불필요',
        efficientBadge: '효율적 튜닝',
      },
      diagram: {
        reconstructionError: '재구성 오차',
        thresholdTau: 'τ ?',
        noManualTau: '✓ 수동 τ 불필요',
        inputDimHigh: '입력 차원 (high)',
        latentDimLow: '잠재 차원 (low)',
        trainingTime: '학습 시간',
        trainingFast: '빠름',
        trainingSlow: '느림',
        benignRegion: '정상 영역',
        hyperparameters: '하이퍼파라미터',
        dimReduction: '차원 축소',
        outlier: '이상치',
        encoder: '인코더',
        latentZ: '잠재 z',
        occ: 'OCC',
      },
    },
    poison3d: {
      title: '학습 데이터 포이즈닝(**poisoning**) — 잠재(**latent**) z 공간에서의 차단',
      stepLabel: '포이즈닝 단계',
      stepNames: ['침투', 'z축 분리', '비지도 경계', '포이즈닝 차단', '정상 프로파일링'],
      captions: [
        '포이즈닝(**poisoning**) 샘플이 특징 공간(**feature space**) (x, y)에서 정상 학습 데이터와 혼재합니다. 학습 성능을 저하시키려는 침입입니다.',
        '잠재(**latent**) z축을 45° 시점에서 관찰하면 poison이 정상 다양체(**manifold**) 위에 분리됩니다. 잠재 공간(**latent space**)의 이상치(**outlier**)입니다.',
        '비지도 프로파일링(**unsupervised profiling**)이 z축을 포함한 3차원 잠재 공간(**latent space**)에서 정상 행동을 포괄하는 경계(envelope)를 학습합니다.',
        '경계 밖 poison은 제거됩니다. 정상 분포로 위장하지 못하면 학습된 경계를 교란하기 어렵습니다.',
        '다양체(**manifold**) 내부의 정상 샘플만 남습니다. 프로파일링(**profiling**)은 데이터 포이즈닝(**data poisoning**) 침입에 강건합니다.',
      ],
      legend: {
        benign: '정상 학습 데이터',
        poison: '포이즈닝 샘플',
        boundary: '학습 경계',
        filtered: '포이즈닝 차단 — 정상 다양체 유지',
      },
      axisLabels: { x: 'x', y: 'y', z: 'z (latent)' },
    },
  },
  approaches: {
    eyebrow: '탐지 모델',
    title: '비교 실험에 사용한 프로파일링(**profiling**) 탐지기',
    subtitle:
      '모델별 하이퍼파라미터 민감도 히트맵 — 논문 실험 설정 기반의 설명용 차트',
    items: {
      ae: {
        name: '오토인코더(**autoencoder**) 프로파일링',
        short: '재구성 오차(**reconstruction error**)',
        description:
          '피드포워드 오토인코더(**autoencoder**)가 정상 앱 프로파일을 재구성하도록 학습합니다. 악성코드는 재구성 오차(**reconstruction error**)가 커져, 학습된 정상 다양체(**manifold**)에서 제로데이(**zero-day**) 위협이 분리됩니다.',
      },
      vae: {
        name: 'VAE 프로파일링',
        short: '잠재 공간(**latent space**) 정규화',
        description:
          '변분 오토인코더(**autoencoder**)가 KL 페널티로 잠재 공간(**latent space**)을 정규화해 정상 표현을 매끄럽게 학습하고, 재구성 오차(**reconstruction error**)와 잠재(**latent**) 발산으로 이상 행동을 드러냅니다.',
      },
      cnn1d: {
        name: 'CNN-AE (1D)',
        short: '시퀀스 인코더',
        description:
          '1차원 합성곱 층이 디코딩 전 특징 벡터(**feature vector**)의 국소 시퀀스 패턴을 포착해, 악성코드 특징 표현의 구조를 모델링합니다.',
      },
      cnn2d: {
        name: 'CNN-AE (2D)',
        short: '이미지형 특징',
        description:
          '2차원 합성곱이 재구성된 특징 맵을 이미지로 취급해, 권한·API 호출 특징 간 공간 상관을 학습합니다.',
      },
      aeocc: {
        name: '**AE+OCC** 하이브리드',
        short: '임계값 없음(**threshold-free**)',
        description:
          '오토인코더(**autoencoder**) 추상화와 원클래스 분류(**one-class classification**)(**AEOCC**)를 결합해 수동 임계값(**threshold**) **τ** 조정 없이 높은 탐지 성능을 유지합니다. BigData·TNSM 논문의 핵심 기여입니다.',
      },
    },
  },
  results: {
    eyebrow: '실험 결과',
    title: '모델 성능·임계값(**threshold**) **τ** 민감도·적대적 회피(**adversarial evasion**) 강건성',
    subtitle:
      '논문 평가 항목의 인터랙티브 차트 — 모델 비교, 임계값(**threshold**) **τ** 민감도, 적대적 회피(**adversarial evasion**) 공격 하 탐지 성능',
    galleryTitle: '주요 실험 결과',
    galleryNote:
      'OCSVM·IF·LOF·EE 등 원클래스 분류(**one-class classification**)기와 **AE**-임계값(**threshold**), **AEOCC**를 비교하고, 적대적(**adversarial**) 공격 하 UMAP 임베딩을 함께 보여 줍니다.',
    heatmapTitle: '하이퍼파라미터별 성능 히트맵',
    heatmapBody:
      '각 그리드는 아키텍처·학습 설정을 바꿔 가며 성능을 비교합니다. 점수가 높을수록 프로파일링(**profiling**) 기반 프로토콜에서 제로데이(**zero-day**) 탐지가 더 잘 이루어짐을 의미합니다.',
    galleryCaptions: {
      'model-comparison': '원클래스 분류(**one-class classification**)기 vs. **AE**-임계값(**threshold**) vs. **AEOCC** (설명용)',
      'aeocc-bar': '베이스라인 대비 **AEOCC** 성능',
      'ae-thresholds': '수동 임계값(**threshold**) **τ** 선택에 따른 **AE** 프로파일링(**AE profiling**) 민감도',
      perturbation: '특징 벡터(**feature vector**) 섭동 환경에서의 탐지 성능 (**AEOCC** vs 지도 학습(**supervised learning**))',
      'umap-fgm': 'FGM 섭동 하 UMAP 임베딩',
      'umap-hsj': 'HopSkipJump 회피 공격(**evasion attack**) 하 UMAP 임베딩',
    },
    galleryThumbLabels: {
      'model-comparison': '모델',
      'aeocc-bar': 'AEOCC',
      'ae-thresholds': '임계값',
      perturbation: '섭동',
      'umap-fgm': 'FGM',
      'umap-hsj': 'HSJ',
    },
    chartAxes: {
      detectionRate: '탐지율 (%)',
      threshold: '재구성 임계값(**threshold**) **τ**',
      perturbation: '섭동 ε',
    },
  },
  research: {
    eyebrow: '관련 논문',
    title: '본 연구의 논문 및 학위 논문',
    subtitle:
      '데모의 기반이 된 동료심사 논문과 석사 학위 논문 — IEEE 논문은 DOI 링크, PDF 재배포 없음',
    thesisLabel: '석사 학위 논문',
    presentations: {
      'bigdata-2021':
        'IEEE Big Data 2021 발표 (Orlando, FL · 2021.12.15–18) · short paper',
      'tnsm-2023':
        'IEEE TNSM 게재 · 제20권 제3호, pp. 3900–3914 · 2023. 9',
      'thesis-2022': '석사 학위 논문 · Texas A&M University–Commerce · 2022년 가을',
    },
    abstracts: {
      'bigdata-2021':
        '오토인코딩(**autoencoding**)과 원클래스 분류(**one-class classification**)를 결합해 신경망의 표현력을 활용하면서 복잡한 임계값(**threshold**) 선택을 없앱니다. 독립 원클래스 분류(**one-class classification**)기와 임계값(**threshold**)에 민감한 **AE** 프로파일링(**AE profiling**)의 한계를 해소합니다.',
      'tnsm-2023':
        '**AE**와 **OCC** 동시 학습, 적합한 학습기를 고르는 모델 선택 방법(**AEOCC**), Meraz\'18·Drebin 평가, 적대적 회피(**adversarial evasion**) 공격에 대한 강건성 분석을 담은 확장 저널 논문입니다.',
      'thesis-2022':
        '프로파일링(**profiling**) 기반 제로데이(**zero-day**) 악성코드 탐지의 기초 프레임워크, 실험 방법, 오토인코더(**autoencoder**) 아키텍처 및 **AE+OCC** 하이브리드 설계의 비교 평가를 제시한 석사 학위 논문입니다.',
    },
    citations: '인용 {count}회 ({source}) ·',
    citationSource: 'Semantic Scholar',
    scholarLink: 'Google Scholar',
  },
  team: {
    eyebrow: '연구진',
    title: '공동 연구진',
    subtitle:
      'Texas A&M University–Commerce · University of Colorado Colorado Springs · ETRI 공동 연구',
    funding:
      'Texas A&M University–Commerce와 ETRI(한국전자통신연구원) 간 사이버보안·제로데이(**zero-day**) 위협 탐지 공동 연구.',
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
  acknowledgments: {
    eyebrow: '감사의 글',
    title: 'Acknowledgments',
    subtitle:
      'IEEE Big Data(2021) · IEEE TNSM(2023) · 석사 학위 논문 acknowledgments를 바탕으로 정리',
    paragraphs: [
      '본 연구는 한국전자통신연구원(ETRI)과 Texas A&M University–Commerce 간 사이버보안 공동 연구의 일환으로 수행되었으며, ETRI의 지원을 받았습니다.',
      '연구 전반에 걸쳐 지도해 주신 Jinoh Kim 교수님께, 그리고 Sang-Yoon Chang, Jonghyun Kim, Dongeun Lee 공동저자분들의 협력과 피드백에 감사드립니다.',
      'IEEE International Conference on Big Data(2021)와 IEEE Transactions on Network and Service Management(2023) 심사위원 여러분의 건설적인 의견에도 깊이 감사드립니다.',
      '본 인터랙티브 데모는 석사 학위 논문 Automated Profiling-Based Zero-Day Malware Detection(Texas A&M University–Commerce, 2022)에서 발전한 연구를 요약한 것입니다.',
    ],
  },
  footer: {
    left: 'Zeroday Defense — 악성코드 보안 연구 인터랙티브 데모',
    right: "설명용 차트 · Meraz'18, Drebin, EMBER 데이터셋",
    visitors: '누적 방문 {count}회',
    visitorsLoading: '방문자 집계 중…',
  },
  animation: {
    pause: '애니메이션 일시정지',
    play: '애니메이션 재생',
  },
}
