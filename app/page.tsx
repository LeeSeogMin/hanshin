"use client";

import { useMemo, useState } from "react";
import { ChevronRight, ClipboardList, ExternalLink, Menu, TriangleAlert, X } from "lucide-react";
import {
  dataGaps,
  evaluationEvidence,
  evidenceCards,
  menuItems,
  processSteps,
  sections,
  type MenuKey
} from "@/lib/content";

export default function Home() {
  const [activeKey, setActiveKey] = useState<MenuKey>("evaluation");
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useMemo(() => sections[activeKey], [activeKey]);
  const activeMenu = useMemo(() => menuItems.find((item) => item.key === activeKey), [activeKey]);
  const ActiveIcon = activeMenu?.icon ?? ClipboardList;

  const chooseMenu = (key: MenuKey) => {
    setActiveKey(key);
    setMobileOpen(false);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="한신대 학사구조개편 공론화 홈">
          <span className="brand-mark">ㅎ</span>
          <span>
            <strong>한신대 학사구조개편</strong>
            <small>공론화 자료</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="주 메뉴">
          {menuItems.map((item) => (
            <button
              key={item.key}
              className={item.key === activeKey ? "nav-button active" : "nav-button"}
              type="button"
              onClick={() => chooseMenu(item.key)}
            >
              <item.icon aria-hidden="true" size={18} />
              {item.label}
            </button>
          ))}
        </nav>
        <button
          className="icon-button mobile-toggle"
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {mobileOpen ? (
        <nav className="mobile-nav" aria-label="모바일 메뉴">
          {menuItems.map((item) => (
            <button
              key={item.key}
              className={item.key === activeKey ? "mobile-nav-button active" : "mobile-nav-button"}
              type="button"
              onClick={() => chooseMenu(item.key)}
            >
              <item.icon aria-hidden="true" size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      ) : null}

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
              <a className="secondary-link" href="#participation">
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
          <span className="kicker">메인 메뉴</span>
          <h2>세 갈래로 나누어 검토합니다.</h2>
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

        {active.key === "evaluation" ? (
          <>
            <div className="evidence-block">
              <div className="block-heading">
                <span className="kicker">증거 등급</span>
                <h3>무엇이 확정이고, 무엇이 아직 비어 있나</h3>
              </div>
              <div className="evidence-list">
                {evaluationEvidence.map((item) => (
                  <article className={`evidence-item ${item.tone}`} key={item.title}>
                    <span className="evidence-grade">{item.grade}</span>
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                    <small>{item.source}</small>
                  </article>
                ))}
              </div>
            </div>

            <div className="gap-block">
              <div className="block-heading">
                <span className="kicker gap-kicker">
                  <TriangleAlert aria-hidden="true" size={15} />
                  필요 보완자료 = 분석의 한계
                </span>
                <h3>이 자료가 아직 답하지 못하는 것</h3>
              </div>
              <p className="gap-lead">
                아래 자료가 확보되기 전까지 계열제 평가는 방향(초과 하락)만 확정되고, 원인 경로와
                처방 효과는 잠정입니다. 무엇이 비어 있는지를 함께 공개하는 것이 숙의의 전제입니다.
              </p>
              <div className="gap-grid">
                {dataGaps.map((gap) => (
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
          </>
        ) : null}
      </section>

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

      <section className="participation-section" id="participation">
        <div>
          <span className="kicker">의견수렴</span>
          <h2>입장보다 근거를 모읍니다.</h2>
          <p>
            의견은 세 메뉴 중 하나에 연결해 제출하는 구조가 적합합니다. 다음 버전에서는 Google Form,
            익명 설문, 전공별 의견 제출 흐름을 연결할 수 있습니다.
          </p>
        </div>
        <a className="submit-link" href="mailto:newmind68@hs.ac.kr?subject=한신대%20학사구조개편%20공론화%20의견">
          의견 보내기
          <ExternalLink aria-hidden="true" size={18} />
        </a>
      </section>

      <footer className="footer">
        <p>출처: 교수회 공론용 종합자료, 이슈트리·이해관계자맵, 입시결과 가분석 v1.</p>
        <p>잠정 수치와 미검증 명제는 공개 전 원자료 바인딩 및 게이트 검증이 필요합니다.</p>
      </footer>
    </main>
  );
}
