import { DiscussionSection, ProcessSection, SiteFooter } from "@/components/CommonSections";
import { EvaluationDetail } from "@/components/EvaluationDetail";
import { SiteHeader } from "@/components/SiteHeader";

export default function EvaluationPage() {
  return (
    <main>
      <SiteHeader activeKey="evaluation" />
      <EvaluationDetail />
      <ProcessSection />
      <DiscussionSection />
      <SiteFooter />
    </main>
  );
}
