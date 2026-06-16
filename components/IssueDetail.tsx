import { ClipboardList, TriangleAlert } from "lucide-react";
import {
  evidenceByMenu,
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
  const activeEvidence = evidenceByMenu[menuKey];
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

      <details className="fold-block">
        <summary className="fold-summary">
          <span className="kicker">{blockLabels.evidenceKicker}</span>
          <h3>{blockLabels.evidenceTitle}</h3>
        </summary>
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
      </details>

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
