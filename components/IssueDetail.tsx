import { ClipboardList, TriangleAlert } from "lucide-react";
import Image from "next/image";
import {
  cardEvidenceByMenu,
  gapsByMenu,
  menuBlockLabels,
  menuItems,
  menuSummary,
  sections,
  simBlocksByMenu,
  type MenuKey
} from "@/lib/content";

type IssueDetailProps = {
  menuKey: MenuKey;
};

export function IssueDetail({ menuKey }: IssueDetailProps) {
  const active = sections[menuKey];
  const activeMenu = menuItems.find((item) => item.key === menuKey);
  const ActiveIcon = activeMenu?.icon ?? ClipboardList;
  const activeCardEvidence = cardEvidenceByMenu[menuKey];
  const activeGaps = gapsByMenu[menuKey];
  const blockLabels = menuBlockLabels[menuKey];
  const activeSim = simBlocksByMenu[menuKey];
  const summary = menuSummary[menuKey];

  return (
    <section className="detail-section issue-detail-page" aria-labelledby={`${menuKey}-title`}>
      <div className="detail-intro">
        <span className="detail-icon">
          <ActiveIcon aria-hidden="true" size={28} />
        </span>
        <div>
          <span className="kicker">{activeMenu?.eyebrow}</span>
          <h1 id={`${menuKey}-title`}>{active.heading}</h1>
          <p>{active.lead}</p>
        </div>
      </div>

      <div className="bluf-card">
        <p className="bluf-line">{summary.bottomLine}</p>
        <div className="bluf-signals">
          {summary.signals.map((s) => (
            <span className={`bluf-signal ${s.tone}`} key={s.label}>
              <strong>{s.label}</strong>
              <small>{s.sub}</small>
            </span>
          ))}
        </div>
        <p className="bluf-plain">
          <span className="bluf-tag">쉽게 말하면</span>
          {summary.plain}
        </p>
      </div>

      {active.metrics.length > 0 ? (
        <div className="metric-row">
          {active.metrics.map((metric) => (
            <article className="metric-card" key={`${active.key}-${metric.label}`}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <small>{metric.note}</small>
            </article>
          ))}
        </div>
      ) : null}

      {menuKey === "evaluation" ? (
        <figure className="analysis-figure">
          <div className="analysis-figure-heading">
            <span className="kicker">분석 그래프</span>
            <h3>한신대 vs 합성대조군 — 계열제 효과 직접검증(SDID)</h3>
          </div>
          <div className="analysis-figure-scroll">
            <Image
              src="/images/evaluation-competition-analysis.svg"
              alt="한신대와 합성대조군(SDID)의 2016~2025 경쟁률 추이, 사양별 효과 추정치와 신뢰구간, 가짜 처치연도별 시간 플라시보를 보여주는 직접검증 그래프"
              width={1600}
              height={1040}
              priority
              unoptimized
            />
          </div>
          <figcaption>
            data.xlsx 전국 패널을 1차 원자료로 SDID(합성대조군)를 직접 재현한 결과입니다(재현 스크립트:
            scripts/sdid_replication.py). 비교군 대비 초과 하락의 <strong>방향은 강건</strong>하나, 신뢰구간이
            넓고 효과의 약 86%가 <strong>2022년 선행 급락</strong>(계열제 도입 1년 전)에 귀속됩니다. 그 2022 급락의
            1순위 원인은 <strong>적성고사 폐지</strong>(2022학년도 전국 폐지·계열제 무관)로 외부 검증됐고, 같은 적성
            동질군(평택 등)이 회복하는 동안 한신만 2023~2026 추가 하락한 구간이 계열제 후보로 남습니다 — 따라서 ‘계열제
            단일 순효과’로 단정할 수 없습니다.
          </figcaption>
        </figure>
      ) : null}

      <div className="content-grid">
        {active.cards.map((card, ci) => {
          const evidence = activeCardEvidence[ci] ?? [];
          return (
            <article className="info-card" key={card.title}>
              <span className="info-icon">
                <card.icon aria-hidden="true" size={22} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              {evidence.length > 0 ? (
                <details className="card-evidence">
                  <summary>근거 보기</summary>
                  <div className="card-evidence-list">
                    {evidence.map((item, ei) => (
                      <div className={`card-evidence-item ${item.tone}`} key={ei}>
                        <span className="card-evidence-grade">{item.grade}</span>
                        <p>{item.detail}</p>
                        <small>
                          출처: {item.source}
                          {item.url ? (
                            <>
                              {" · "}
                              <a href={item.url} target="_blank" rel="noopener noreferrer">
                                원문 링크
                              </a>
                            </>
                          ) : null}
                        </small>
                      </div>
                    ))}
                  </div>
                </details>
              ) : null}
            </article>
          );
        })}
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

      {activeSim ? (
        <details className="fold-block">
          <summary className="fold-summary">
            <span className="kicker">{activeSim.kicker}</span>
            <h3>{activeSim.title}</h3>
          </summary>
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
                <p className="sim-interpretation">{table.interpretation}</p>
                <p className="sim-caption">{table.caption}</p>
              </article>
            ))}
          </div>
          <p className="sim-note">{activeSim.note}</p>
        </details>
      ) : null}

      <details className="fold-block">
        <summary className="fold-summary">
          <span className="kicker gap-kicker">
            <TriangleAlert aria-hidden="true" size={15} />
            {blockLabels.gapKicker}
          </span>
          <h3>{blockLabels.gapTitle}</h3>
        </summary>
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
      </details>
    </section>
  );
}
