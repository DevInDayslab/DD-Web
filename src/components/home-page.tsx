import { HomeHero } from "@/components/home-hero";
import { ScalabilitySection } from "@/components/scalability-section";
import { scalabilitySectionContent } from "@/content/scalability-section";

export function HomePage() {
  return (
    <div className="home-page">
      <HomeHero />
      <ScalabilitySection content={scalabilitySectionContent} />
    </div>
  );
}
