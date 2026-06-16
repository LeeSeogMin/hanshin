import { BookOpen, TriangleAlert } from "lucide-react";
import { gapsByMenu, improvementPage as I, menuBlockLabels } from "@/lib/content";

export function ImprovementDetail() {
  const gaps = gapsByMenu.improvement;
  const blockLabels = menuBlockLabels.improvement;

  return (
    <section className="detail-section eval-page" aria-labelledby="improvement-title">
      {/* 1. 히어로 */}
      <header className="eval-hero">
        <span className="kicker">{I.eyebrow}</span>
        <h1 id="improvement-title" className="eval-hero-h1">
          {I.hero.headline}
          <span className="eval-hero-sub">{I.hero.headlineSub}</span>
        </h1>
        <div className="eval-hero-badges">
          {I.hero.badges.map((b) => (
            <span className={`eval-badge ${b.tone}`} key={b.label}>
              <strong>{b.label}</strong>
              {b.text}
            </span>
          ))}
        </div>
        <div className="eval-hero-figure">
          <div className="eval-hero-big">
            <strong>{I.hero.big.value}</strong>
            <span>{I.hero.big.label}</span>
            <small>{I.hero.big.compare}</small>
          </div>
        </div>
      </header>

      {/* 2. 신호등 */}
      <div className="eval-signals">
        {I.signals.map((s) => (
          <span className={`bluf-signal ${s.tone}`} key={s.label}>
            <strong>{s.label}</strong>
            <small>{s.sub}</small>
          </span>
        ))}
      </div>

      {/* 3. 지금 무슨 일이 */}
      <section className="eval-story">
        <span className="kicker">{I.intro.kicker}</span>
        <h2>{I.intro.title}</h2>
        <p className="eval-lead">{I.intro.body}</p>
      </section>

      {/* 4. 시뮬레이션 (쉬운 표) */}
      <section className="eval-story">
        <span className="kicker">{I.sims.kicker}</span>
        <h2>{I.sims.title}</h2>
        <p className="eval-lead">{I.sims.lead}</p>
        <div className="sim-grid">
          {I.sims.tables.map((t) => (
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
              <p className="sim-interpretation">{t.note}</p>
            </article>
          ))}
        </div>
        <p className="eval-figure-note">{I.sims.caveat}</p>
      </section>

      {/* 5. 용어 풀이 */}
      <section className="eval-glossary">
        <span className="kicker">
          <BookOpen aria-hidden="true" size={15} />
          {I.glossary.kicker}
        </span>
        <h2>{I.glossary.title}</h2>
        <dl className="eval-glossary-list">
          {I.glossary.items.map((g) => (
            <div className="eval-glossary-item" key={g.term}>
              <dt>{g.term}</dt>
              <dd>{g.desc}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 6. 핵심 카드 */}
      <section className="eval-story">
        <span className="kicker">{I.cards.kicker}</span>
        <h2>{I.cards.title}</h2>
        <div className="eval-support-grid">
          {I.cards.items.map((card) => (
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
          <span className="kicker">{I.questions.kicker}</span>
          <h3>{I.questions.title}</h3>
        </div>
        <ul>
          {I.questions.items.map((q) => (
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
