import { DiscussionSection, ProcessSection, SiteFooter } from "@/components/CommonSections";
import { ImprovementDetail } from "@/components/ImprovementDetail";
import { ImprovementSubnav } from "@/components/ImprovementSubnav";
import { SiteHeader } from "@/components/SiteHeader";

export default function ImprovementStabilityPage() {
  return (
    <main>
      <SiteHeader activeKey="improvement" />
      <ImprovementSubnav activeKey="stability" />
      <ImprovementDetail activeKey="stability" />
      <ProcessSection />
      <DiscussionSection />
      <SiteFooter />
    </main>
  );
}
