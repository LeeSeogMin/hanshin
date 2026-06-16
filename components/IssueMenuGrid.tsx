import { menuItems, type MenuKey } from "@/lib/content";

type IssueMenuGridProps = {
  activeKey?: MenuKey;
  homeMode?: boolean;
};

export function IssueMenuGrid({ activeKey, homeMode = false }: IssueMenuGridProps) {
  return (
    <section className="menu-section" id="issues">
      <div className="section-heading">
        <span className="kicker">{homeMode ? "세 이슈" : "다른 쟁점"}</span>
        <h2>{homeMode ? "프로젝트 목적에서 세 쟁점으로 연결합니다." : "각 쟁점은 독립 페이지에서 검토합니다."}</h2>
      </div>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <a key={item.key} className={item.key === activeKey ? "topic-card active" : "topic-card"} href={item.href}>
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
