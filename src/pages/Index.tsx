import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBySection } from "@/components/home/TrustedBySection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ShowcaseSection } from "@/components/home/ShowcaseSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <ShowcaseSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
