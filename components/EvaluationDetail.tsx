import Image from "next/image";
import { ArrowDown, FileSearch, TriangleAlert } from "lucide-react";
import { evaluationPage as E } from "@/lib/content";

export function EvaluationDetail() {
  return (
    <section className="detail-section eval-page" aria-labelledby="evaluation-title">
      {/* 1. 히어로 — 한눈에 */}
      <header className="eval-hero">
        <span className="kicker">{E.eyebrow}</span>
        <h1 id="evaluation-title" className="eval-hero-h1">
          {E.hero.headline}
          <span className="eval-hero-sub">{E.hero.headlineSub}</span>
        </h1>
        <div className="eval-hero-badges">
          {E.hero.badges.map((b) => (
            <span className={`eval-badge ${b.tone}`} key={b.label}>
              <strong>{b.label}</strong>
              {b.text}
            </span>
          ))}
        </div>
        <div className="eval-hero-figure">
          <div className="eval-hero-big">
            <strong>{E.hero.big.value}</strong>
            <span>{E.hero.big.label}</span>
            <small>{E.hero.big.compare}</small>
          </div>
          <a className="eval-hero-anchor" href={E.hero.anchorHref}>
            {E.hero.anchorLabel}
            <ArrowDown aria-hidden="true" size={18} />
          </a>
        </div>
      </header>

      {/* 2. 세 줄 신호등 */}
      <div className="eval-signals">
        {E.signals.map((s) => (
          <span className={`bluf-signal ${s.tone}`} key={s.label}>
            <strong>{s.label}</strong>
            <small>{s.sub}</small>
          </span>
        ))}
      </div>

      {/* 3. 쉬운 그림 */}
      <section className="eval-story">
        <span className="kicker">{E.story.kicker}</span>
        <h2>{E.story.title}</h2>
        <p className="eval-lead">{E.story.lead}</p>
        <figure className="eval-figure">
          <div className="eval-figure-scroll">
            <Image
              src={E.story.image}
              alt={E.story.imageAlt}
              width={1180}
              height={720}
              priority
              unoptimized
            />
          </div>
        </figure>
        <div className="eval-bars">
          <p className="eval-bars-title">{E.story.barsTitle}</p>
          {E.story.bars.map((bar) => (
            <div className={`eval-bar-row ${bar.tone}`} key={bar.label}>
              <span className="eval-bar-label">{bar.label}</span>
              <span className="eval-bar-track">
                <span className="eval-bar-fill" style={{ width: `${bar.pct}%` }}>
                  <b>{bar.pct}%</b>
                </span>
              </span>
              <span className="eval-bar-caption">{bar.caption}</span>
            </div>
          ))}
        </div>
        <p className="eval-figure-note">{E.story.note}</p>
      </section>

      {/* 4. 3단 논리 */}
      <section className="eval-logic">
        <span className="kicker">{E.logic.kicker}</span>
        <h2>{E.logic.title}</h2>
        <ol className="eval-logic-steps">
          {E.logic.steps.map((step) => (
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

      {/* 5. 결론을 가를 단 하나의 자료 */}
      <section className="eval-decisive" id="decisive">
        <span className="kicker">{E.decisive.kicker}</span>
        <h2>{E.decisive.title}</h2>
        <p>{E.decisive.body}</p>
        <p className="eval-decisive-cta">{E.decisive.cta}</p>
      </section>

      {/* 6. 함께 봐야 할 사실 (접기) */}
      <details className="fold-block eval-fold">
        <summary className="fold-summary">
          <span className="kicker">{E.supporting.kicker}</span>
          <h3>{E.supporting.title}</h3>
        </summary>
        <div className="eval-support-grid">
          {E.supporting.cards.map((card) => (
            <article className="eval-support-card" key={card.title}>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </details>

      {/* 7. 공론 질문 */}
      <div className="question-panel">
        <div>
          <span className="kicker">{E.questions.kicker}</span>
          <h3>{E.questions.title}</h3>
        </div>
        <ul>
          {E.questions.items.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </div>

      {/* 8. 근거자료 폴더 (접기) */}
      <details className="fold-block eval-evidence">
        <summary className="fold-summary">
          <span className="kicker">
            <FileSearch aria-hidden="true" size={15} />
            {E.evidence.kicker}
          </span>
          <h3>{E.evidence.title}</h3>
        </summary>
        <p className="gap-lead">{E.evidence.intro}</p>
        <div className="eval-evidence-tiers">
          {E.evidence.tiers.map((tier) => (
            <div className="eval-evidence-tier" key={tier.grade}>
              <span className="eval-evidence-grade">{tier.grade}</span>
              <ul>
                {tier.items.map((item) => (
                  <li key={item.name}>
                    {"href" in item && item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.name}
                      </a>
                    ) : (
                      <span className="eval-evidence-name">{item.name}</span>
                    )}
                    <small>{item.desc}</small>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="eval-evidence-safety">
          <TriangleAlert aria-hidden="true" size={14} />
          {E.evidence.safety}
        </p>
      </details>
    </section>
  );
}
