import { DiscussionSection, ProcessSection, SiteFooter } from "@/components/CommonSections";
import { IssueMenuGrid } from "@/components/IssueMenuGrid";
import { MainHero } from "@/components/MainHero";
import { SiteHeader } from "@/components/SiteHeader";

const homeSummary = [
  {
    label: "목적",
    title: "결론보다 판단 기준을 먼저 세웁니다.",
    body:
      "학사구조개편을 찬반 구도로 단순화하지 않고, 확정 근거·잠정 해석·미확보 데이터를 분리해 공개합니다."
  },
  {
    label: "범위",
    title: "평가, 선례, 보완, 신설을 한 의사결정 묶음으로 봅니다.",
    body:
      "계열제 평가는 진단이고, 과거사례는 선례 검토이며, 계열제 보완은 설계, 전공신설은 포트폴리오 선택지입니다. 넷을 분리하되 같은 기준으로 비교합니다."
  }
];

const decisionFlow = [
  {
    step: "1",
    title: "먼저 진단 — 계열제 평가",
    body: "2023 제도변화 후 경쟁률이 비교군 대비 초과 하락(SDID -1.60)했고 약세는 전 계열 systemic입니다. 단 계열제 단일효과·수험생 수요는 아직 분해되지 않았습니다."
  },
  {
    step: "2",
    title: "선례 확인 — 과거사례",
    body: "2009년 자유전공학부 선례는 정원 처리, 인기학과 쏠림, 지원체계 부재가 겹치면 실패한다는 경고입니다. 한신에는 같은 결론보다 실패조건 체크리스트로 적용해야 합니다."
  },
  {
    step: "3",
    title: "그 다음 설계 — 계열제 보완",
    body: "편중은 이미 실재합니다. 200% 단순 확대는 취약단위를 공동화하지만, 넛지+학과보호를 더하면 보호와 자율성을 함께 얻습니다. 상한 수치가 아니라 설계의 문제입니다."
  },
  {
    step: "4",
    title: "마지막 비교 — 전공신설",
    body: "신설은 시급·필수가 아닙니다(충원율 100%). 수요만으로 후보를 고르면 자의적이 되므로, 정체성을 포함한 6기준으로 연기예술 외 대안까지 함께 비교합니다."
  }
];

export default function Home() {
  return (
    <main>
      <SiteHeader activeKey="home" />
      <MainHero />
      <IssueMenuGrid />

      <section className="source-correction-notice" aria-labelledby="source-correction-title">
        <div>
          <span className="kicker">자료 정정 안내</span>
          <h2 id="source-correction-title">분석에 사용된 자료의 오류나 보완 자료를 알려주십시오.</h2>
          <p>
            이 자료는 현재 확보한 문서·공시·분석 결과를 바탕으로 작성되었습니다. 일부 값은 PDF 차트
            판독치이거나 추가 확인이 필요한 자료일 수 있습니다. 수치, 출처, 해석에 오류가 있거나
            보완할 원자료가 있다면 의견수렴에 남겨 주십시오. 확인 후 반영하겠습니다.
          </p>
        </div>
        <a className="secondary-link" href="/board">
          의견 남기기
        </a>
      </section>

      <section className="home-summary-section" aria-labelledby="home-overview-title">
        <div className="home-summary-grid">
          {homeSummary.map((item) => (
            <article className="home-summary-card" key={item.title}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className="home-flow-panel">
          <div>
            <span className="kicker">판단 흐름</span>
            <h2 id="home-overview-title">홈은 네 메뉴의 상위 지도입니다.</h2>
            <p>
              이 프로젝트는 먼저 진단하고, 과거 실패 선례를 대조한 뒤 제도 보완과 전공신설을 비교합니다.
              자유게시판은 이 흐름에 대한 근거와 반론을 남기는 공간입니다.
            </p>
          </div>
          <div className="home-flow-list">
            {decisionFlow.map((item) => (
              <article className="home-flow-item" key={item.step}>
                <span>{item.step}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <DiscussionSection />
      <SiteFooter />
    </main>
  );
}
