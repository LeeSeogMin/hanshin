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
    title: "평가, 보완, 신설을 한 의사결정 묶음으로 봅니다.",
    body:
      "계열제 평가는 진단이고, 계열제 보완은 설계이며, 전공신설은 포트폴리오 선택지입니다. 셋을 분리하되 같은 기준으로 비교합니다."
  },
  {
    label: "원칙",
    title: "객관성 원칙과 증거 기반을 유지합니다.",
    body:
      "미검증 수치와 인과 주장은 단정하지 않습니다. 반대 논거와 데이터 공백을 함께 남기는 방식으로 공론화를 진행합니다."
  }
];

const decisionFlow = [
  { step: "1", title: "먼저 진단", body: "경쟁률 하락과 제도 효과를 분해해 무엇이 확인됐는지 봅니다." },
  { step: "2", title: "그 다음 설계", body: "유지·보완 시 편중을 막는 규칙과 중단 기준을 정합니다." },
  { step: "3", title: "마지막 비교", body: "전공신설을 포함한 대안을 수요·재정·교육역량 기준으로 비교합니다." }
];

export default function Home() {
  return (
    <main>
      <SiteHeader activeKey="home" />
      <MainHero />
      <IssueMenuGrid homeMode />

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
            <h2 id="home-overview-title">홈은 세 메뉴의 상위 지도입니다.</h2>
            <p>
              이 프로젝트는 먼저 진단하고, 그 진단 위에서 제도 보완과 전공신설을 비교합니다.
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
