"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronRight, ClipboardList, MessageSquareText, TriangleAlert } from "lucide-react";
import { SiteHeader, type NavKey } from "@/components/SiteHeader";
import {
  evidenceByMenu,
  evidenceCards,
  gapsByMenu,
  menuBlockLabels,
  menuItems,
  processSteps,
  sections,
  simBlocksByMenu,
  type MenuKey
} from "@/lib/content";

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
      "계열제 평가가 진단이고, 계열제 보완은 설계이며, 전공신설은 포트폴리오 선택지입니다. 셋을 분리하되 같은 기준으로 비교합니다."
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
  const [activeKey, setActiveKey] = useState<NavKey>("home");
  const selectedMenuKey: MenuKey = activeKey === "home" ? "evaluation" : activeKey;
  const active = useMemo(() => sections[selectedMenuKey], [selectedMenuKey]);
  const activeMenu = useMemo(() => menuItems.find((item) => item.key === selectedMenuKey), [selectedMenuKey]);
  const ActiveIcon = activeMenu?.icon ?? ClipboardList;
  const activeEvidence = evidenceByMenu[selectedMenuKey];
  const activeGaps = gapsByMenu[selectedMenuKey];
  const blockLabels = menuBlockLabels[selectedMenuKey];
  const activeSim = simBlocksByMenu[selectedMenuKey];

  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get("topic");
    const matched = menuItems.find((item) => item.key === topic);

    if (topic === "home") {
      setActiveKey("home");
      return;
    }

    if (matched) {
      setActiveKey(matched.key);
    }
  }, []);

  const chooseHome = () => {
    setActiveKey("home");
    window.history.replaceState(null, "", "/");
    window.requestAnimationFrame(() => document.getElementById("top")?.scrollIntoView());
  };

  const chooseMenu = (key: MenuKey) => {
    setActiveKey(key);
    window.history.replaceState(null, "", `/?topic=${key}#agenda`);
    window.requestAnimationFrame(() => document.getElementById("agenda")?.scrollIntoView());
  };

  return (
    <main>
      <SiteHeader activeKey={activeKey} onChooseHome={chooseHome} onChooseMenu={chooseMenu} />

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="kicker">교수회 공론용</span>
            <h1>학사구조개편의 쟁점과 선택지를 같은 기준으로 봅니다.</h1>
            <p>
              이 페이지는 결론을 미리 정하지 않고 계열제 평가, 계열제 보완, 전공신설을 분리해
              다룹니다. 확정된 근거와 아직 비어 있는 데이터를 구분해 숙의의 출발점을 만듭니다.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#agenda">
                쟁점 보기
                <ChevronRight aria-hidden="true" size={18} />
              </a>
              <a className="secondary-link" href="/board">
                의견수렴
              </a>
            </div>
          </div>
          <div className="hero-panel" aria-label="공론화 진행 원칙">
            <div className="panel-topline">
              <span>객관성 원칙</span>
              <strong>증거 기반</strong>
            </div>
            <div className="signal-grid">
              {evidenceCards.map((card) => (
                <article className={`signal-card ${card.tone}`} key={card.title}>
                  <span>{card.label}</span>
                  <strong>{card.title}</strong>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="menu-section" id="agenda">
        <div className="section-heading">
          <span className="kicker">{activeKey === "home" ? "세 이슈" : "메인 메뉴"}</span>
          <h2>{activeKey === "home" ? "프로젝트 목적에서 세 쟁점으로 연결합니다." : "세 갈래로 나누어 검토합니다."}</h2>
        </div>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <button
              key={item.key}
              className={item.key === activeKey ? "topic-card active" : "topic-card"}
              type="button"
              onClick={() => chooseMenu(item.key)}
            >
              <span className="topic-icon">
                <item.icon aria-hidden="true" size={22} />
              </span>
              <span className="topic-eyebrow">{item.eyebrow}</span>
              <strong>{item.label}</strong>
              <span>{item.description}</span>
            </button>
          ))}
        </div>
      </section>

      {activeKey === "home" ? (
        <section className="home-summary-section" aria-live="polite">
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
              <h2>홈은 세 메뉴의 상위 지도입니다.</h2>
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
      ) : (
        <section className="detail-section" aria-live="polite">
        <div className="detail-intro">
          <span className="detail-icon">
            <ActiveIcon aria-hidden="true" size={28} />
          </span>
          <div>
            <span className="kicker">{activeMenu?.eyebrow}</span>
            <h2>{active.heading}</h2>
            <p>{active.lead}</p>
          </div>
        </div>

        <div className="metric-row">
          {active.metrics.map((metric) => (
            <article className="metric-card" key={`${active.key}-${metric.label}`}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <small>{metric.note}</small>
            </article>
          ))}
        </div>

        <div className="content-grid">
          {active.cards.map((card) => (
            <article className="info-card" key={card.title}>
              <span className="info-icon">
                <card.icon aria-hidden="true" size={22} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>

        <div className="question-panel">
          <div>
            <span className="kicker">공론 질문</span>
            <h3>{active.heading}에서 먼저 합의할 질문</h3>
          </div>
          <ul>
            {active.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </div>

        <div className="evidence-block">
          <div className="block-heading">
            <span className="kicker">{blockLabels.evidenceKicker}</span>
            <h3>{blockLabels.evidenceTitle}</h3>
          </div>
          <div className="evidence-list">
            {activeEvidence.map((item) => (
              <article className={`evidence-item ${item.tone}`} key={item.title}>
                <span className="evidence-grade">{item.grade}</span>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
                <small>{item.source}</small>
              </article>
            ))}
          </div>
        </div>

        {activeSim ? (
          <div className="sim-block">
            <div className="block-heading">
              <span className="kicker">{activeSim.kicker}</span>
              <h3>{activeSim.title}</h3>
            </div>
            <p className="gap-lead">{activeSim.lead}</p>
            <div className="sim-grid">
              {activeSim.tables.map((table) => (
                <article className="sim-card" key={table.title}>
                  <h4>{table.title}</h4>
                  <div className="sim-table-wrap">
                    <table className="sim-table">
                      <thead>
                        <tr>
                          {table.head.map((h) => (
                            <th key={h}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, ri) => (
                          <tr key={row[0]} className={table.highlight === ri ? "row-best" : undefined}>
                            {row.map((cell, ci) => (
                              <td key={ci} className={ci === 0 ? "row-label" : undefined}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="sim-caption">{table.caption}</p>
                </article>
              ))}
            </div>
            <p className="sim-note">{activeSim.note}</p>
          </div>
        ) : null}

        <div className="gap-block">
          <div className="block-heading">
            <span className="kicker gap-kicker">
              <TriangleAlert aria-hidden="true" size={15} />
              {blockLabels.gapKicker}
            </span>
            <h3>{blockLabels.gapTitle}</h3>
          </div>
          <p className="gap-lead">{blockLabels.gapLead}</p>
          <div className="gap-grid">
            {activeGaps.map((gap) => (
              <article className="gap-card" key={gap.title}>
                <div className="gap-head">
                  <strong>{gap.title}</strong>
                  <span className={`gap-tag tag-${gap.tag === "1순위" ? "p1" : gap.tag === "2순위" ? "p2" : "an"}`}>
                    {gap.tag}
                  </span>
                </div>
                <p className="gap-need">
                  <b>필요</b>
                  {gap.need}
                </p>
                <p className="gap-limit">
                  <b>한계</b>
                  {gap.limit}
                </p>
              </article>
            ))}
          </div>
        </div>
        </section>
      )}

      <section className="process-section">
        <div className="section-heading">
          <span className="kicker">진행 구조</span>
          <h2>공개, 숙의, 비교의 순서로 갑니다.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span className="step-number">{index + 1}</span>
              <step.icon aria-hidden="true" size={24} />
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="discussion-section" id="participation">
        <div>
          <span className="kicker">의견수렴</span>
          <h2>자유게시판에서 쟁점별 의견을 모읍니다.</h2>
          <p>로그인 없이 작성하고 공개 목록에서 바로 확인할 수 있습니다.</p>
        </div>
        <a className="primary-link" href="/board">
          <MessageSquareText aria-hidden="true" size={18} />
          자유게시판 열기
        </a>
      </section>

      <footer className="footer">
        <p>출처: 교수회 공론용 종합자료, 이슈트리·이해관계자맵, 입시결과 가분석 v1.</p>
        <p>잠정 수치와 미검증 명제는 공개 전 원자료 바인딩 및 게이트 검증이 필요합니다.</p>
      </footer>
    </main>
  );
}
