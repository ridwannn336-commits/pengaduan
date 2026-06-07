import { Navbar } from "@/components/home/navbar";

import { HeroSection } from "@/components/home/hero-section";

import { FeatureSection } from "@/components/home/feature-section";

import { StatsSection } from "@/components/home/stats-section";

import { CtaSection } from "@/components/home/cta-section";

import { HowItWorksSection } from "@/components/home/how-it-works-section";

import { TestimonialSection } from "@/components/home/testimonial-section";

import { FooterSection } from "@/components/home/footer-section";

export default function HomePage() {
  return (
    <main
      className="
        relative
        overflow-hidden
        bg-slate-950
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          fixed
          left-[-120px]
          top-[-120px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-blue-600/20
          blur-3xl
        "
      />

      <div
        className="
          fixed
          bottom-[-120px]
          right-[-120px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
      />

      <Navbar />

      <HeroSection />

      <FeatureSection />

      <StatsSection />

      <HowItWorksSection />
      
      <TestimonialSection />

      <CtaSection />

      <FooterSection />
    </main>
  );
}