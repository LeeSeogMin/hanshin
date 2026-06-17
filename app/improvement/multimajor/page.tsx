import { DiscussionSection, ProcessSection, SiteFooter } from "@/components/CommonSections";
import { ImprovementDetail } from "@/components/ImprovementDetail";
import { ImprovementSubnav } from "@/components/ImprovementSubnav";
import { SiteHeader } from "@/components/SiteHeader";

export default function ImprovementMultiMajorPage() {
  return (
    <main>
      <SiteHeader activeKey="improvement" />
      <ImprovementSubnav activeKey="multimajor" />
      <ImprovementDetail activeKey="multimajor" />
      <ProcessSection />
      <DiscussionSection />
      <SiteFooter />
    </main>
  );
}
