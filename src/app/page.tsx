import { HomePage } from "@/components/home-page";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/config/site";
import { homePage } from "@/content/pages/home";
import { pricingSectionContent } from "@/content/pricing-section";
import { testimonialsSectionContent } from "@/content/testimonials-section";
import { buildPageMetadata } from "@/lib/metadata";
import { serviceCatalogJsonLd, videoJsonLd, websiteJsonLd, type OfferTier } from "@/lib/schema";
import type { TestimonialCard } from "@/types/testimonials-section";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata(homePage.meta);

/** Prices and scope come straight from the pricing section, so the markup cannot drift from the page. */
function pricingTiers(): OfferTier[] {
  return pricingSectionContent.tiers.map((tier) => {
    const price = /\$([\d,]+)/.exec(tier.price)?.[1];
    return {
      name: tier.title,
      description: `${tier.durationBadge}. ${tier.features.slice(0, 5).join("; ")}.`,
      fromPriceUsd: price ? Number(price.replace(/,/g, "")) : undefined,
    };
  });
}

function testimonialVideoSchema() {
  const cards: readonly TestimonialCard[] = testimonialsSectionContent.cards;
  return cards.flatMap((card) =>
    card.kind === "video" && card.video
      ? [
          videoJsonLd(site, {
            name: `${card.name}, ${card.title}: video testimonial`,
            description: card.quote,
            thumbnailPath: card.video.posterSrc,
            contentPath: card.video.src,
            uploadDate: "2026-10-27",
            durationSeconds: 50,
            transcript: card.video.transcript.join(" "),
          }),
        ]
      : [],
  );
}

export default function Home() {
  return (
    <main>
      <JsonLd
        data={[websiteJsonLd(site), serviceCatalogJsonLd(site, pricingTiers()), ...testimonialVideoSchema()]}
      />
      <HomePage />
    </main>
  );
}
