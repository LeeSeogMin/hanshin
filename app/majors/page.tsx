import { DiscussionSection, ProcessSection, SiteFooter } from "@/components/CommonSections";
import { MajorsDetail } from "@/components/MajorsDetail";
import { SiteHeader } from "@/components/SiteHeader";

export default function MajorsPage() {
  return (
    <main>
      <SiteHeader activeKey="majors" />
      <MajorsDetail />
      <ProcessSection />
      <DiscussionSection />
      <SiteFooter />
    </main>
  );
}
