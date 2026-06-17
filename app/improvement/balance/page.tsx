import { DiscussionSection, ProcessSection, SiteFooter } from "@/components/CommonSections";
import { ImprovementDetail } from "@/components/ImprovementDetail";
import { ImprovementSubnav } from "@/components/ImprovementSubnav";
import { SiteHeader } from "@/components/SiteHeader";

export default function ImprovementBalancePage() {
  return (
    <main>
      <SiteHeader activeKey="improvement" />
      <ImprovementSubnav activeKey="balance" />
      <ImprovementDetail activeKey="balance" />
      <ProcessSection />
      <DiscussionSection />
      <SiteFooter />
    </main>
  );
}
