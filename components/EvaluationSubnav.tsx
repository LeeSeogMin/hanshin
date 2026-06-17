import { evaluationSubItems, type EvaluationSubKey } from "@/lib/content";

type EvaluationSubnavProps = {
  activeKey: EvaluationSubKey;
};

export function EvaluationSubnav({ activeKey }: EvaluationSubnavProps) {
  return (
    <nav className="detail-section eval-subnav-wrap" aria-label="계열제 평가 하위 메뉴">
      <div className="eval-subnav">
        {evaluationSubItems.map((item) => (
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
