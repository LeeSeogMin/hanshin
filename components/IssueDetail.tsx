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

      <div className="metric-row">
        {active.metrics.map((metric) => (
          <article className="metric-card" key={`${active.key}-${metric.label}`}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <small>{metric.note}</small>
          </article>
        ))}
      </div>

      {menuKey === "evaluation" ? (
        <figure className="analysis-figure">
          <div className="analysis-figure-heading">
            <span className="kicker">분석 그래프</span>
            <h3>경쟁률 추이와 2022년 전후 비교</h3>
          </div>
          <div className="analysis-figure-scroll">
            <Image
              src="/images/evaluation-competition-analysis.svg"
              alt="2016년부터 2026년까지 한신대, 경기도 대학 평균, 전체 대학 평균, 보고서 비교군 평균의 경쟁률 추이와 전후 변화 비교 그래프"
              width={1600}
              height={1000}
              priority
              unoptimized
            />
          </div>
          <figcaption>
            경쟁률_연도별비교.csv를 재실행 가능한 스크립트로 시각화한 기술통계 그래프입니다. SDID 인과추정
            자체를 재현한 그래프는 아니며, 전후 추이와 단순 DID 방향을 보여주는 참고 자료입니다.
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
