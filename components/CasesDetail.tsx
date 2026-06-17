import { TriangleAlert } from "lucide-react";
import { casesPage as C, gapsByMenu, menuBlockLabels } from "@/lib/content";

export function CasesDetail() {
  const gaps = gapsByMenu.cases;
  const blockLabels = menuBlockLabels.cases;

  return (
    <section className="detail-section eval-page" aria-labelledby="cases-title">
      {/* 1. 히어로 */}
      <header className="eval-hero">
        <span className="kicker">{C.eyebrow}</span>
        <h1 id="cases-title" className="eval-hero-h1">
          {C.hero.headline}
        </h1>
        <p className="eval-hero-sub">{C.hero.headlineSub}</p>
        <div className="eval-hero-badges">
          {C.hero.badges.map((b) => (
            <span className={`eval-badge ${b.tone}`} key={b.label}>
              <strong>{b.label}</strong>
              {b.text}
            </span>
          ))}
        </div>
        <div className="eval-hero-figure">
          <div className="eval-hero-big">
            <strong>{C.hero.big.value}</strong>
            <span>{C.hero.big.label}</span>
            <small>{C.hero.big.compare}</small>
          </div>
        </div>
      </header>

      {/* 2. 신호등 */}
      <div className="eval-signals">
        {C.signals.map((s) => (
          <span className={`bluf-signal ${s.tone}`} key={s.label}>
            <strong>{s.label}</strong>
            <small>{s.sub}</small>
          </span>
        ))}
      </div>

      {/* 3. 무슨 일이 있었나 */}
      <section className="eval-story">
        <span className="kicker">{C.story.kicker}</span>
        <h2>{C.story.title}</h2>
        <p className="eval-lead">{C.story.body}</p>
      </section>

      {/* 4. 왜 실패했나 (3단계) */}
      <section className="eval-logic">
        <span className="kicker">{C.why.kicker}</span>
        <h2>{C.why.title}</h2>
        <ol className="eval-logic-steps">
          {C.why.steps.map((step) => (
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

      {/* 5. 예외 — 성공 조건 */}
      <section className="eval-story">
        <span className="kicker">{C.exception.kicker}</span>
        <h2>{C.exception.title}</h2>
        <p className="eval-lead">{C.exception.body}</p>
      </section>

      {/* 6. 한신 적용 (콜아웃) */}
      <section className="eval-decisive">
        <span className="kicker">{C.apply.kicker}</span>
        <h2>{C.apply.title}</h2>
        <p>{C.apply.body}</p>
      </section>

      {/* 7. 공론 질문 */}
      <div className="question-panel">
        <div>
          <span className="kicker">{C.questions.kicker}</span>
          <h3>{C.questions.title}</h3>
        </div>
        <ul>
          {C.questions.items.map((q) => (
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
