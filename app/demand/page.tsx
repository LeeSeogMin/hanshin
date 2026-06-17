import { DiscussionSection, ProcessSection, SiteFooter } from "@/components/CommonSections";
import { DemandDetail } from "@/components/DemandDetail";
import { DemandSubnav } from "@/components/DemandSubnav";
import { SiteHeader } from "@/components/SiteHeader";
import { demandPages } from "@/lib/content";

export default function DemandStudentsPage() {
  return (
    <main>
      <SiteHeader activeKey="demand" />
      <DemandSubnav activeKey="students" />
      <DemandDetail page={demandPages.students} />
      <ProcessSection />
      <DiscussionSection />
      <SiteFooter />
    </main>
  );
}
