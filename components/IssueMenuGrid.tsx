import { demandSubItems, evaluationSubItems, menuItems } from "@/lib/content";

export function IssueMenuGrid() {
  return (
    <section className="menu-section" id="issues">
      <div className="section-heading">
        <span className="kicker">다섯 상위 메뉴</span>
        <h2>프로젝트 목적에서 다섯 상위 쟁점으로 연결합니다.</h2>
      </div>
      <div className="menu-grid">
        {menuItems.map((item) => {
          const subItems =
            item.key === "evaluation" ? evaluationSubItems : item.key === "demand" ? demandSubItems : null;
          return (
            <article key={item.key} className={subItems ? "topic-card with-submenu" : "topic-card"}>
              <a className="topic-card-main" href={item.href}>
                <span className="topic-icon">
                  <item.icon aria-hidden="true" size={22} />
                </span>
                <span className="topic-eyebrow">{item.eyebrow}</span>
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </a>
              {subItems ? (
                <div className="topic-submenu" aria-label={`${item.label} 하위 메뉴`}>
                  {subItems.map((subItem) => (
                    <a key={subItem.key} href={subItem.href}>
                      <subItem.icon aria-hidden="true" size={15} />
                      <span>{subItem.label}</span>
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
