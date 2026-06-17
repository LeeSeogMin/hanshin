import { DiscussionSection, ProcessSection, SiteFooter } from "@/components/CommonSections";
import { CasesDetail } from "@/components/CasesDetail";
import { SiteHeader } from "@/components/SiteHeader";

export default function CasesPage() {
  return (
    <main>
      <SiteHeader activeKey="cases" />
      <CasesDetail />
      <ProcessSection />
      <DiscussionSection />
      <SiteFooter />
    </main>
  );
}
