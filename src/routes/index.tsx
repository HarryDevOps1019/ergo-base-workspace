import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CategorySplit } from "@/components/home/CategorySplit";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { ProductCards } from "@/components/home/ProductCards";
import { PainReliefSection } from "@/components/home/PainReliefSection";
import { SpecsChart } from "@/components/home/SpecsChart";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ConsultBanner } from "@/components/home/ConsultBanner";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CategorySplit />
      <FeaturesSection />
      <ComparisonSection />
      <SpecsChart />
      <ProductCards />
      <PainReliefSection />
      <TestimonialsSection />
      <ConsultBanner />
    </>
  );
}
