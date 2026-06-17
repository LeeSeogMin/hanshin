import { demandSubItems, type DemandSubKey } from "@/lib/content";

type DemandSubnavProps = {
  activeKey: DemandSubKey;
};

export function DemandSubnav({ activeKey }: DemandSubnavProps) {
  return (
    <nav className="detail-section eval-subnav-wrap" aria-label="수요조사 하위 메뉴">
      <div className="eval-subnav">
        {demandSubItems.map((item) => (
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
