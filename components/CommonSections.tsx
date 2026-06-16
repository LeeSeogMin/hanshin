import { MessageSquareText } from "lucide-react";
import { processSteps } from "@/lib/content";

export function ProcessSection() {
  return (
    <section className="process-section">
      <div className="section-heading">
        <span className="kicker">진행 구조</span>
        <h2>공개, 숙의, 비교의 순서로 갑니다.</h2>
      </div>
      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article className="process-card" key={step.title}>
            <span className="step-number">{index + 1}</span>
            <step.icon aria-hidden="true" size={24} />
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DiscussionSection() {
  return (
    <section className="discussion-section" id="participation">
      <div>
        <span className="kicker">의견수렴</span>
        <h2>자유게시판에서 쟁점별 의견을 모읍니다.</h2>
        <p>로그인 없이 작성하고 공개 목록에서 바로 확인할 수 있습니다.</p>
      </div>
      <a className="primary-link" href="/board">
        <MessageSquareText aria-hidden="true" size={18} />
        자유게시판 열기
      </a>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <p>출처: 교수회 공론용 종합자료, 이슈트리·이해관계자맵, 입시결과 가분석 v1.</p>
      <p>잠정 수치와 미검증 명제는 공개 전 원자료 바인딩 및 게이트 검증이 필요합니다.</p>
    </footer>
  );
}
