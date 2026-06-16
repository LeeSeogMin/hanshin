import { ClipboardList, TriangleAlert } from "lucide-react";
import {
  evidenceByMenu,
  gapsByMenu,
  menuBlockLabels,
  menuItems,
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
  );
}
