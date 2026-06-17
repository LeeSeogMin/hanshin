import { Ban } from "lucide-react";
import { futurePage as F } from "@/lib/content";

export function FutureDetail() {
  return (
    <section className="detail-section eval-page" aria-labelledby="future-title">
      {/* 1. 히어로 */}
      <header className="eval-hero">
        <span className="kicker">{F.eyebrow}</span>
        <h1 id="future-title" className="eval-hero-h1">
          {F.hero.headline}
        </h1>
        <p className="eval-hero-sub">{F.hero.headlineSub}</p>
        <div className="eval-hero-badges">
          {F.hero.badges.map((b) => (
            <span className={`eval-badge ${b.tone}`} key={b.label}>
              <strong>{b.label}</strong>
              {b.text}
            </span>
          ))}
        </div>
        <div className="eval-hero-figure">
          <div className="eval-hero-big">
            <strong>{F.hero.big.value}</strong>
            <span>{F.hero.big.label}</span>
            <small>{F.hero.big.compare}</small>
          </div>
        </div>
      </header>

      {/* 2. 신호등 */}
      <div className="eval-signals">
        {F.signals.map((s) => (
          <span className={`bluf-signal ${s.tone}`} key={s.label}>
            <strong>{s.label}</strong>
            <small>{s.sub}</small>
          </span>
        ))}
      </div>

      {/* 3. 세상은 바뀐다 */}
      <section className="eval-story">
        <span className="kicker">{F.shift.kicker}</span>
        <h2>{F.shift.title}</h2>
        <p className="eval-figure-note">{F.shift.body}</p>
      </section>

      {/* 4. AI 시대 진짜 역량 (3단계) */}
      <section className="eval-logic">
        <span className="kicker">{F.capability.kicker}</span>
        <h2>{F.capability.title}</h2>
        <ol className="eval-logic-steps">
          {F.capability.steps.map((step) => (
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

      {/* 5. 한신 강점 */}
      <section className="eval-decisive">
        <span className="kicker">{F.strength.kicker}</span>
        <h2>{F.strength.title}</h2>
        <p>{F.strength.body}</p>
      </section>

      {/* 6. 잘하는 융합의 조건 */}
      <section className="eval-story">
        <span className="kicker">{F.howTo.kicker}</span>
        <h2>{F.howTo.title}</h2>
        <div className="eval-support-grid">
          {F.howTo.cards.map((card) => (
            <article className="eval-support-card" key={card.title}>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 7. 하지 말 것 */}
      <section className="eval-story">
        <span className="kicker">{F.avoid.kicker}</span>
        <h2>{F.avoid.title}</h2>
        <ul className="future-avoid-list">
          {F.avoid.items.map((item) => (
            <li key={item}>
              <Ban aria-hidden="true" size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 8. 공론 질문 */}
      <div className="question-panel">
        <div>
          <span className="kicker">{F.questions.kicker}</span>
          <h3>{F.questions.title}</h3>
        </div>
        <ul>
          {F.questions.items.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
