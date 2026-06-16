import { menuItems } from "@/lib/content";

export function IssueMenuGrid() {
  return (
    <section className="menu-section" id="issues">
      <div className="section-heading">
        <span className="kicker">세 이슈</span>
        <h2>프로젝트 목적에서 세 쟁점으로 연결합니다.</h2>
      </div>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <a key={item.key} className="topic-card" href={item.href}>
            <span className="topic-icon">
              <item.icon aria-hidden="true" size={22} />
            </span>
            <span className="topic-eyebrow">{item.eyebrow}</span>
            <strong>{item.label}</strong>
            <span>{item.description}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
