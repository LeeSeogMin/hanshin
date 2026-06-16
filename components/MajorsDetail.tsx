import { TriangleAlert } from "lucide-react";
import { gapsByMenu, majorsPage as M, menuBlockLabels, simBlocksByMenu } from "@/lib/content";

export function MajorsDetail() {
  const criteria = simBlocksByMenu.majors;
  const gaps = gapsByMenu.majors;
  const blockLabels = menuBlockLabels.majors;

  return (
    <section className="detail-section eval-page" aria-labelledby="majors-title">
      {/* 1. 히어로 */}
      <header className="eval-hero">
        <span className="kicker">{M.eyebrow}</span>
        <h1 id="majors-title" className="eval-hero-h1">
          {M.hero.headline}
          <span className="eval-hero-sub">{M.hero.headlineSub}</span>
        </h1>
        <div className="eval-hero-badges">
          {M.hero.badges.map((b) => (
            <span className={`eval-badge ${b.tone}`} key={b.label}>
              <strong>{b.label}</strong>
              {b.text}
            </span>
          ))}
        </div>
        <div className="eval-hero-figure">
          <div className="eval-hero-big">
            <strong>{M.hero.big.value}</strong>
            <span>{M.hero.big.label}</span>
            <small>{M.hero.big.compare}</small>
          </div>
        </div>
      </header>

      {/* 2. 신호등 */}
      <div className="eval-signals">
        {M.signals.map((s) => (
          <span className={`bluf-signal ${s.tone}`} key={s.label}>
            <strong>{s.label}</strong>
            <small>{s.sub}</small>
          </span>
        ))}
      </div>

      {/* 3. 입지 검증 */}
      <section className="eval-story">
        <span className="kicker">{M.regionCheck.kicker}</span>
        <h2>{M.regionCheck.title}</h2>
        <p className="eval-lead">{M.regionCheck.lead}</p>
        <div className="sim-table-wrap">
          <table className="sim-table">
            <thead>
              <tr>
                {M.regionCheck.table.head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {M.regionCheck.table.rows.map((row) => (
                <tr key={row[0]}>
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
        <div className="eval-support-grid">
          {M.regionCheck.items.map((item) => (
            <article className="eval-support-card" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <p className="sim-caption">{M.regionCheck.source}</p>
      </section>

      {/* 3. 신설이 만능이 아닌 이유 (3단계) */}
      <section className="eval-logic">
        <span className="kicker">{M.why.kicker}</span>
        <h2>{M.why.title}</h2>
        <ol className="eval-logic-steps">
          {M.why.steps.map((step) => (
            <li className="eval-logic-step" key={step.n}>
              <span className="eval-step-num">{step.n}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 4. 흔한 함정 (콜아웃) */}
      <section className="eval-story">
        <span className="kicker">{M.trap.kicker}</span>
        <h2>{M.trap.title}</h2>
        <p className="eval-figure-note">{M.trap.body}</p>
      </section>

      {/* 5. 6기준 점검표 */}
      {criteria ? (
        <section className="eval-story">
          <span className="kicker">{criteria.kicker}</span>
          <h2>{criteria.title}</h2>
          <p className="eval-lead">{criteria.lead}</p>
          <div className="sim-grid">
            {criteria.tables.map((t) => (
              <article className="sim-card" key={t.title}>
                <h4>{t.title}</h4>
                <div className="sim-table-wrap">
                  <table className="sim-table">
                    <thead>
                      <tr>
                        {t.head.map((h) => (
                          <th key={h}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {t.rows.map((row, ri) => (
                        <tr key={row[0]} className={t.highlight === ri ? "row-best" : undefined}>
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
                <p className="sim-interpretation">{t.interpretation}</p>
                <p className="sim-caption">{t.caption}</p>
              </article>
            ))}
          </div>
          <p className="eval-figure-note">{criteria.note}</p>
        </section>
      ) : null}

      {/* 6. 그래도 신설한다면 */}
      <section className="eval-story">
        <span className="kicker">{M.cards.kicker}</span>
        <h2>{M.cards.title}</h2>
        <div className="eval-support-grid">
          {M.cards.items.map((card) => (
            <article className="eval-support-card" key={card.title}>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 7. 공론 질문 */}
      <div className="question-panel">
        <div>
          <span className="kicker">{M.questions.kicker}</span>
          <h3>{M.questions.title}</h3>
        </div>
        <ul>
          {M.questions.items.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </div>

      {/* 8. 데이터 공백 (접기) */}
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
          {gaps.map((gap) => (
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
