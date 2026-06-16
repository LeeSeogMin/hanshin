import { DiscussionSection, ProcessSection, SiteFooter } from "@/components/CommonSections";
import { ImprovementDetail } from "@/components/ImprovementDetail";
import { SiteHeader } from "@/components/SiteHeader";

export default function ImprovementPage() {
  return (
    <main>
      <SiteHeader activeKey="improvement" />
      <ImprovementDetail />
      <ProcessSection />
      <DiscussionSection />
      <SiteFooter />
    </main>
  );
}
