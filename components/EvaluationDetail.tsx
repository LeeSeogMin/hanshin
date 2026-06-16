import Image from "next/image";
import { FileSearch, FlaskConical, TriangleAlert } from "lucide-react";
import { cardEvidenceByMenu, evaluationPage as E, sections } from "@/lib/content";

export function EvaluationDetail() {
  const detail = sections.evaluation;
  const detailEvidence = cardEvidenceByMenu.evaluation;
  const detailCaption =
    "data.xlsx 전국 패널을 1차 원자료로 SDID(비슷한 대학들을 섞어 만든 ‘닮은꼴 비교 기준’)를 직접 재현한 결과입니다. 비교군 대비 초과 하락의 방향은 강건하나(점추정 −1.5~−2.0), 신뢰구간이 넓고 효과의 약 86%가 2022년 선행 급락(＝적성고사 폐지, 계열제 무관)에 귀속됩니다. 남은 2023년 이후 한신 단독 이탈에서 다른 후보(브랜드·정원·일반 전형변경·만성 취약분야)가 기각되어 계열제가 사실상 유일 후보로 좁혀지나, ‘어떤 경로로’인지는 모집단위별 자료 전까지 단정할 수 없습니다.";

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

      {/* 7. 상세 분석 (전문가용) — SDID 복원 */}
      <details className="fold-block eval-detail">
        <summary className="fold-summary">
          <span className="kicker">
            <FlaskConical aria-hidden="true" size={15} />
            상세 분석 · 방법론과 근거 (전문가용)
          </span>
          <h3>비슷한 대학과 비교(SDID) — 정밀 분석</h3>
        </summary>
        <p className="eval-detail-note">
          아래는 방법론 용어(SDID·합성대조군·플라시보 등)가 포함된 전문 분석입니다. 결론은 위 본문과 같습니다 — 다른
          후보가 기각되어 계열제가 사실상 유일 후보로 좁혀지나, ‘어떤 경로로’인지는 모집단위별 자료 전까지 단정하지
          않습니다.
        </p>
        <p className="eval-lead">{detail.lead}</p>

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
              unoptimized
            />
          </div>
          <figcaption>{detailCaption}</figcaption>
        </figure>

        <div className="metric-row">
          {detail.metrics.map((m) => (
            <article className="metric-card" key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
              <small>{m.note}</small>
            </article>
          ))}
        </div>

        <div className="content-grid">
          {detail.cards.map((card, ci) => {
            const evidence = detailEvidence[ci] ?? [];
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
      </details>

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
