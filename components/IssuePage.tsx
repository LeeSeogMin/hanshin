import { DiscussionSection, ProcessSection, SiteFooter } from "@/components/CommonSections";
import { IssueDetail } from "@/components/IssueDetail";
import { IssueMenuGrid } from "@/components/IssueMenuGrid";
import { SiteHeader } from "@/components/SiteHeader";
import { type MenuKey } from "@/lib/content";

type IssuePageProps = {
  menuKey: MenuKey;
};

export function IssuePage({ menuKey }: IssuePageProps) {
  return (
    <main>
      <SiteHeader activeKey={menuKey} />
      <IssueDetail menuKey={menuKey} />
      <IssueMenuGrid activeKey={menuKey} />
      <ProcessSection />
      <DiscussionSection />
      <SiteFooter />
    </main>
  );
}
