import {
  ArrowRightLeft,
  BarChart3,
  BookOpenCheck,
  Building2,
  ClipboardCheck,
  Compass,
  FileQuestion,
  GitBranch,
  GraduationCap,
  LineChart,
  MessageSquareText,
  Scale,
  ShieldCheck,
  Target
} from "lucide-react";

export type MenuKey = "evaluation" | "improvement" | "majors";

export const menuItems = [
  {
    key: "evaluation" as const,
    label: "계열제 평가",
    eyebrow: "진단",
    title: "2023 제도변화 이후 무엇이 확인됐고, 무엇이 아직 분해되지 않았나",
    description:
      "경쟁률 하락, 비교군 대비 초과 하락, 전형별 분해 공백을 구분해 계열제 평가의 출발선을 정리합니다.",
    icon: BarChart3
  },
  {
    key: "improvement" as const,
    label: "계열제 보완",
    eyebrow: "설계",
    title: "선택권 확대와 전공 편중 관리를 동시에 만족시키는 보완 조건",
    description:
      "전공선택 비율, 전과 규칙, 소속 확정 시점, 배정 메커니즘을 한 묶음으로 다룹니다.",
    icon: ShieldCheck
  },
  {
    key: "majors" as const,
    label: "전공신설",
    eyebrow: "포트폴리오",
    title: "신설은 유행이 아니라 수요·재정·교육역량 검증을 통과해야 한다",
    description:
      "연기예술, 디자인, AI·SW 세분화 등 신설 후보를 단계적 실험과 CBA 관점에서 검토합니다.",
    icon: GraduationCap
  }
];

export const evidenceCards = [
  {
    label: "확정",
    title: "비교군 대비 추가 하락",
    body: "SDID -1.60, DID -2.78, 독립 가분석 -2.1~-3.0으로 방향이 일관됩니다.",
    tone: "strong"
  },
  {
    label: "미분해",
    title: "계열제 단일 효과",
    body: "현재 추정치는 2023 제도 패키지 효과입니다. 학과제·계열제 모집 분해가 필요합니다.",
    tone: "caution"
  },
  {
    label: "공백",
    title: "수험생 수요",
    body: "학과모집, 계열모집, 무전공 중 무엇이 지원의향을 높이는지는 아직 조사되지 않았습니다.",
    tone: "open"
  }
];

export const sections = {
  evaluation: {
    key: "evaluation" as const,
    heading: "계열제 평가",
    lead:
      "평가의 핵심은 찬반이 아니라 효과의 경로를 분해하는 것입니다. 2023 제도변화 이후 경쟁률이 비교군 대비 초과 하락한 것은 준실험 분석·가분석·전국 패턴으로 일관되게 확인됩니다. 다만 그 하락이 계열 모집구조, 신학 등 구조 취약, 대학 브랜드, 전국 정책충격 중 어디서 왔는지는 아직 분해되지 않았습니다.",
    metrics: [
      { value: "9.04 → 6.21", label: "도입 전후 평균 경쟁률", note: "2016~2022 → 2023~2026" },
      { value: "-31.4%", label: "단순 전후 변화", note: "인과 단정 금지" },
      { value: "-1.60배", label: "비교군 대비 초과 하락 (SDID)", note: "DID -2.78, 방향 일관" }
    ],
    cards: [
      {
        icon: LineChart,
        title: "비교군 대비 초과 하락 (확정)",
        body:
          "SDID -1.60, DID -2.78, 독립 가분석 -2.1~-3.0이 같은 방향을 가리킵니다. 사전추세 검정(p=0.80) 통과로 '원래 추세가 달랐다'는 반론은 약화됩니다."
      },
      {
        icon: BarChart3,
        title: "전 계열에 걸친 약세 (확정·단면)",
        body:
          "2026 경쟁률 27개 전공 중 17개가 학교평균(5.95) 미만이며, 글로벌융합·첨단융합·AI·SW는 전 전공이 평균 미만입니다. 신학·인문만의 문제가 아니라 강화 대상인 이공계도 포함됩니다."
      },
      {
        icon: FileQuestion,
        title: "전형별 분해 필요 (미분해)",
        body:
          "현재 6.21은 학과제(전공예약)와 계열제(무전공·자유전공) 모집이 섞인 평균입니다. 모집단위별 경쟁률이 분리돼야 계열제 단일 효과를 판정할 수 있습니다."
      },
      {
        icon: Scale,
        title: "양방향 교란 (보정 필요)",
        body:
          "비교군 오염(평택대 2016~18 사학비리 등 자체충격)은 효과를 과소추정하게, 전국 공통의 신학계열 충원난은 과대추정하게 만듭니다. 둘을 함께 통제해야 순효과가 나옵니다."
      },
      {
        icon: Compass,
        title: "전국 패턴과 일치 (외부 검증)",
        body:
          "2026 무전공 모집 경쟁률은 오히려 하락했고, 중앙·연세·한국외대는 자유전공을 폐지·회귀했습니다. '무전공/계열제 = 경쟁률 상승'은 전국적으로도 자동 성립하지 않습니다."
      },
      {
        icon: ClipboardCheck,
        title: "입구와 출구 지표 분리 (확정)",
        body:
          "경쟁률(입구)만으로는 오판합니다. 상위권조차 무전공 등록포기가 폭증했고, 광역학부 중도탈락률은 평균의 2~5배로 보고됩니다. 등록률·이탈을 함께 봐야 합니다."
      }
    ],
    questions: [
      "학과제 모집과 계열제 모집의 경쟁률은 각각 얼마인가? (혼합 평균 분해)",
      "전 계열 약세의 주동인은 계열 모집구조인가, 브랜드인가, 신학 등 구조 취약인가?",
      "수험생은 학과·계열·무전공 중 무엇에 더 지원하는가? (자율성↔지원의향의 부호)",
      "계열제 도입을 되돌리면 경쟁률이 회복된다는 근거가 있는가? (가역성)"
    ]
  },
  improvement: {
    key: "improvement" as const,
    heading: "계열제 보완",
    lead:
      "보완 논의의 중심은 자율성의 총량이 아니라 편중을 관리하는 규칙입니다. 전공선택 200%, 전과 홍보, 소속 조기화는 서로 다른 방향의 처방이므로 하나의 제도 패키지로 정합성을 검토해야 합니다.",
    metrics: [
      { value: "150%", label: "현 전공선택 비율", note: "정원 대비" },
      { value: "200%", label: "본부 검토 방향", note: "효과 미검증" },
      { value: "상시", label: "수용성 점검", note: "숙의 병행" }
    ],
    cards: [
      {
        icon: ArrowRightLeft,
        title: "전과 규칙",
        body:
          "전과 무제한 홍보는 제도와 실제 수용 가능성이 맞아야 합니다. 유입·유출 데이터 없이 홍보가 앞서면 편중을 키울 수 있습니다."
      },
      {
        icon: GitBranch,
        title: "배정 메커니즘",
        body:
          "정원 상한, 우선순위, 이수요건, 안정매칭을 조합해 학생 선호와 교육 여건의 균형점을 설계해야 합니다."
      },
      {
        icon: MessageSquareText,
        title: "숙의 절차",
        body:
          "분임토의는 동의 절차가 아니라 쟁점 확인과 데이터 우선순위 합의 절차로 운영되어야 합니다."
      }
    ],
    questions: [
      "자율성 확대가 실제 지원의향을 높인다는 증거가 있는가?",
      "전공별 수용 가능 인원과 교육 질 하한선을 어디에 둘 것인가?",
      "편중이 발생했을 때 어떤 조기경보 지표로 멈출 것인가?"
    ]
  },
  majors: {
    key: "majors" as const,
    heading: "전공신설",
    lead:
      "전공신설은 경쟁률을 높일 수 있는 선택지이지만, 이름만 바꾸는 방식으로는 충분하지 않습니다. 후보 전공은 수험생 수요, 내부 교육역량, 재정 편익, 기존 전공과의 충돌을 함께 통과해야 합니다.",
    metrics: [
      { value: "B/C", label: "투자 대비 편익", note: "1 미만 보류" },
      { value: "3단계", label: "권장 실험 경로", note: "트랙→전공→입학단위" },
      { value: "MCDA", label: "다기준 평가", note: "단일지표 금지" }
    ],
    cards: [
      {
        icon: Target,
        title: "수요 검증",
        body:
          "연기예술, 디자인, AI·SW 세분화는 주변 사례만으로 충분하지 않습니다. 한신대 지원층의 선택요인을 조사해야 합니다."
      },
      {
        icon: BookOpenCheck,
        title: "교육역량",
        body:
          "교원, 시설, 커리큘럼, 현장 네트워크가 준비되지 않으면 신설은 경쟁률보다 이탈과 비용을 먼저 만들 수 있습니다."
      },
      {
        icon: ClipboardCheck,
        title: "단계적 전환",
        body:
          "기존 전공 리모델링이나 세부 트랙으로 먼저 검증한 뒤, 성과가 확인될 때 입학단위 전환을 검토하는 편이 안전합니다."
      }
    ],
    questions: [
      "신설 후보가 한신대 브랜드 안에서 차별화되는가?",
      "기존 전공과 학생·교원·예산을 잠식하지 않는가?",
      "첫 2년 내 충원·만족·취업에서 어떤 기준을 못 넘으면 중단할 것인가?"
    ]
  }
};

export const evaluationEvidence = [
  {
    grade: "확정",
    tone: "strong" as const,
    title: "비교군 대비 초과 하락",
    body: "SDID -1.60, DID -2.78, 독립 가분석 -2.1~-3.0이 일관. 사전추세 검정 p=0.80 통과.",
    source: "분석결과보고서 · 가분석 v1"
  },
  {
    grade: "확정",
    tone: "strong" as const,
    title: "전 계열에 걸친 약세 (단면)",
    body: "2026 경쟁률 27개 중 17개가 평균 미만. 글로벌융합·첨단융합·AI·SW는 전 전공이 평균 미만.",
    source: "TF 공유자료(판독치)"
  },
  {
    grade: "확정·전국",
    tone: "strong" as const,
    title: "무전공/계열제 = 경쟁률↑ 자동성립 안 함",
    body: "2026 무전공 모집 경쟁률 하락, 중앙·연세·한국외대 자유전공 폐지 회귀.",
    source: "외부 다수출처"
  },
  {
    grade: "시사",
    tone: "caution" as const,
    title: "선택 편중(쏠림) 위험",
    body: "전국 무전공 4년제 70%+에서 상위 3개 학과 50% 초과(경영·컴공). 한신도 충원율 247~293% 집중 vs 신학 미충원 공존.",
    source: "외부 다수출처 · TF"
  },
  {
    grade: "시사",
    tone: "caution" as const,
    title: "소속감·대학 경쟁력 인식 약화",
    body: "2024 만족도에서 소속감 대리지표 '자부심' 51.3·'전반적 이미지' 차원이 전 차원 최저. 정체성이 뚜렷한 신학대만 높음. (간접·학년효과 교란)",
    source: "2024 재학생 만족도(N=607)"
  },
  {
    grade: "미검증",
    tone: "open" as const,
    title: "계열제 단일효과의 크기·경로",
    body: "현 추정은 2023 제도 패키지 효과. 학과제·계열제 모집 분해 전에는 단일효과를 말할 수 없음.",
    source: "전형별 데이터 필요"
  },
  {
    grade: "미조사",
    tone: "open" as const,
    title: "수험생 수요 (최대 공백)",
    body: "학과·계열·무전공 중 무엇이 지원의향을 높이는지 조사된 바 없음. 자율성↔지원의향의 부호 자체가 미확인.",
    source: "수요조사 미실시"
  }
];

export const dataGaps = [
  {
    title: "전형별 경쟁률 분해",
    tag: "1순위",
    need: "학과제(전공예약) vs 계열제(무전공·자유전공) 모집별 경쟁률 (2019~2026)",
    limit: "없으면 계열제 단일 효과를 판정할 수 없음 — 현 6.21은 두 모집이 섞인 혼합 평균"
  },
  {
    title: "수험생 수요조사 (Conjoint)",
    tag: "1순위",
    need: "학과/계열/무전공 + 전공명·취업·계열유연성 속성별 지원의향",
    limit: "자율성이 지원의향을 높이는지/낮추는지 부호 미확인 — 분석의 최대 공백"
  },
  {
    title: "신학 단위 시계열 · 계열 편성 이력",
    tag: "1순위",
    need: "신학·기독교 단위 연도별 모집·충원, 어느 전공이 어느 계열에 묶였는지",
    limit: "신학 귀속분·번들링을 분리하지 않으면 계열제 효과가 과대/과소 양방향으로 흔들림"
  },
  {
    title: "전공별 등록률 · 중도탈락",
    tag: "2순위",
    need: "전공×연도 등록·미등록·추가합격·중도탈락",
    limit: "입구지표(경쟁률)만 보면 오판 — 전국적으로 무전공 등록포기·이탈이 큼"
  },
  {
    title: "전공별 지표 원자료",
    tag: "2순위",
    need: "입학처·대학알리미 raw (경쟁률·충원·취업·수강·만족)",
    limit: "현재 전공별 수치는 TF 차트 판독치(잠정) — 원자료 대조 전 단정 불가"
  },
  {
    title: "재학생 소속감·전공 만족 (다년·학과 전수)",
    tag: "2순위",
    need: "소속감 직접 문항, 학과 전수·다년 추세 (2024 1개년은 소표본·학년효과 교란)",
    limit: "계열제의 소속감·이탈 효과를 인과적으로 분리하지 못함"
  },
  {
    title: "clean 비교군 SDID 재현",
    tag: "분석",
    need: "평택 등 자체충격 도너 제외 + RISE·무전공 정책 노출 통제",
    limit: "현 -1.60은 보수적 하한 — 정밀 크기·경로는 미확정"
  }
];

export const processSteps = [
  {
    title: "자료 공개",
    body: "확정·미검증·잠정 자료를 구분해 공개",
    icon: Building2
  },
  {
    title: "쟁점 숙의",
    body: "세 메뉴별 반대 논거와 데이터 공백 확인",
    icon: Compass
  },
  {
    title: "대안 비교",
    body: "유지·보완·축소·폐지·신설안을 같은 기준으로 평가",
    icon: Scale
  }
];
