import { improvementSubItems, type ImprovementSubKey } from "@/lib/content";

type ImprovementSubnavProps = {
  activeKey: ImprovementSubKey;
};

export function ImprovementSubnav({ activeKey }: ImprovementSubnavProps) {
  return (
    <nav className="detail-section eval-subnav-wrap" aria-label="전공운영 재설계 하위 메뉴">
      <div className="eval-subnav">
        {improvementSubItems.map((item) => (
          <a
            key={item.key}
            className={item.key === activeKey ? "eval-subnav-item active" : "eval-subnav-item"}
            href={item.href}
            aria-current={item.key === activeKey ? "page" : undefined}
          >
            <item.icon aria-hidden="true" size={18} />
            <span>{item.label}</span>
            <small>{item.description}</small>
          </a>
        ))}
      </div>
    </nav>
  );
}
