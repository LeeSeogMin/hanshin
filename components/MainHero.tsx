import { ChevronRight } from "lucide-react";

export function MainHero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="kicker">교수회 공론용</span>
          <h1>학사구조개편의 쟁점과 선택지를 같은 기준으로 봅니다.</h1>
          <p>
            이 페이지는 결론을 미리 정하지 않고 계열제 평가, 과거사례, 계열제 보완, 전공신설을
            분리해 다룹니다. 확정된 근거와 아직 비어 있는 데이터를 구분해 숙의의 출발점을 만듭니다.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="/evaluation">
              쟁점 보기
              <ChevronRight aria-hidden="true" size={18} />
            </a>
            <a className="secondary-link" href="/board">
              의견수렴
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
