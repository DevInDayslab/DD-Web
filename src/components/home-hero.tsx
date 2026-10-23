import { HeroSection } from "@/components/hero-section";
import { heroFlanks } from "@/config/hero";
import { homeHeroContent } from "@/content/hero/home";

export function HomeHero() {
  return <HeroSection flanks={heroFlanks} content={homeHeroContent} />;
}
