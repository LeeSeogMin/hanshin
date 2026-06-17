import { CasesDetail } from "@/components/CasesDetail";
import { DiscussionSection, ProcessSection, SiteFooter } from "@/components/CommonSections";
import { EvaluationSubnav } from "@/components/EvaluationSubnav";
import { SiteHeader } from "@/components/SiteHeader";

export default function EvaluationCasesPage() {
  return (
    <main>
      <SiteHeader activeKey="evaluation" />
      <EvaluationSubnav activeKey="cases" />
      <CasesDetail />
      <ProcessSection />
      <DiscussionSection />
      <SiteFooter />
    </main>
  );
}
