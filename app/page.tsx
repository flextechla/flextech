import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProblemsSection from "@/components/home/ProblemsSection";
import GuaranteeBanner from "@/components/home/GuaranteeBanner";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <ProblemsSection />
      <GuaranteeBanner />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
