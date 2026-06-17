import { FreeBoard } from "@/components/FreeBoard";
import { SiteHeader } from "@/components/SiteHeader";

export default function BoardPage() {
  return (
    <main>
      <SiteHeader boardActive />

      <section className="board-page-hero">
        <span className="kicker">자유게시판</span>
        <h1>학사구조개편 의견을 한곳에 모읍니다.</h1>
        <p>계열제 평가, 전공운영 재설계, 전공신설에 대한 의견과 추가로 확인해야 할 근거를 남깁니다.</p>
      </section>

      <FreeBoard />

      <footer className="footer">
        <p>게시글은 공론화 목적의 공개 의견으로 취급됩니다.</p>
        <p>개인정보, 비방, 확인되지 않은 개인 신상은 게시하지 않는 것을 원칙으로 합니다.</p>
      </footer>
    </main>
  );
}
