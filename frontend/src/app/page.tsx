import { Navbar } from "@/components/home/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { RecentComplaintSection } from "@/components/home/recent-complaint-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { FeatureSection } from "@/components/home/feature-section";
import { CtaSection } from "@/components/home/cta-section";
import { FooterSection } from "@/components/home/footer-section";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-slate-950">

      <Navbar />

          <HeroSection />

          <StatsSection />

          <RecentComplaintSection />

          <HowItWorksSection />

          <FeatureSection />

          <CtaSection />

          <FooterSection />
    </main>
  );
}