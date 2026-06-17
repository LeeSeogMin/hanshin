import { ExternalLink } from "lucide-react";
import type { DemandPage } from "@/lib/content";

type DemandDetailProps = {
  page: DemandPage;
};

export function DemandDetail({ page }: DemandDetailProps) {
  return (
    <section className="detail-section eval-page" aria-labelledby="demand-title">
      {/* 1. 히어로 */}
      <header className="eval-hero">
        <span className="kicker">{page.eyebrow}</span>
        <h1 id="demand-title" className="eval-hero-h1">
          {page.hero.headline}
        </h1>
        <p className="eval-hero-sub">{page.hero.headlineSub}</p>
        <div className="eval-hero-badges">
          {page.hero.badges.map((b) => (
            <span className={`eval-badge ${b.tone}`} key={b.label}>
              <strong>{b.label}</strong>
              {b.text}
            </span>
          ))}
        </div>
        <div className="eval-hero-figure">
          <div className="eval-hero-big">
            <strong>{page.hero.big.value}</strong>
            <span>{page.hero.big.label}</span>
            <small>{page.hero.big.compare}</small>
          </div>
        </div>
      </header>

      {/* 2. 신호등 */}
      <div className="eval-signals">
        {page.signals.map((s) => (
          <span className={`bluf-signal ${s.tone}`} key={s.label}>
            <strong>{s.label}</strong>
            <small>{s.sub}</small>
          </span>
        ))}
      </div>

      {/* 3. 무엇을 물었나 / 모았나 */}
      <section className="eval-story">
        <span className="kicker">{page.story.kicker}</span>
        <h2>{page.story.title}</h2>
        <p className="eval-lead">{page.story.body}</p>
      </section>

      {/* 4. 핵심 카드 (번호 매김) */}
      <section className="eval-logic">
        <span className="kicker">{page.cards.kicker}</span>
        <h2>{page.cards.title}</h2>
        <ol className="eval-logic-steps">
          {page.cards.items.map((card, index) => (
            <li className="eval-logic-step" key={card.title}>
              <span className="eval-step-num">{index + 1}</span>
              <div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 5. 근거 자료 */}
      <section className="eval-story demand-sources">
        <span className="kicker">{page.sources.kicker}</span>
        <h2>{page.sources.title}</h2>
        <ul className="demand-source-list">
          {page.sources.items.map((item) => (
            <li key={item.name}>
              {item.href ? (
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <ExternalLink aria-hidden="true" size={15} />
                  <strong>{item.name}</strong>
                </a>
              ) : (
                <span>
                  <strong>{item.name}</strong>
                </span>
              )}
              <small>{item.desc}</small>
            </li>
          ))}
        </ul>
      </section>

      {/* 6. 공론 질문 */}
      <div className="question-panel">
        <div>
          <span className="kicker">{page.questions.kicker}</span>
          <h3>{page.questions.title}</h3>
        </div>
        <ul>
          {page.questions.items.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
