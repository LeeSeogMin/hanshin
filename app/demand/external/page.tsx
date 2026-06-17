import { DiscussionSection, ProcessSection, SiteFooter } from "@/components/CommonSections";
import { DemandDetail } from "@/components/DemandDetail";
import { DemandSubnav } from "@/components/DemandSubnav";
import { SiteHeader } from "@/components/SiteHeader";
import { demandPages } from "@/lib/content";

export default function DemandExternalPage() {
  return (
    <main>
      <SiteHeader activeKey="demand" />
      <DemandSubnav activeKey="external" />
      <DemandDetail page={demandPages.external} />
      <ProcessSection />
      <DiscussionSection />
      <SiteFooter />
    </main>
  );
}
