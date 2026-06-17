import { DiscussionSection, ProcessSection, SiteFooter } from "@/components/CommonSections";
import { FutureDetail } from "@/components/FutureDetail";
import { SiteHeader } from "@/components/SiteHeader";

export default function FuturePage() {
  return (
    <main>
      <SiteHeader activeKey="future" />
      <FutureDetail />
      <ProcessSection />
      <DiscussionSection />
      <SiteFooter />
    </main>
  );
}
