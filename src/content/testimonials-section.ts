import type { TestimonialsSectionContent } from "@/types/testimonials-section";

export const testimonialsSectionContent = {
  title: "From people we’ve worked with",
  carouselAriaLabel: "Client testimonials",
  cards: [
    {
      kind: "text",
      id: "julian-davies",
      rating: 5,
      quote:
        "Most studios talk in circles. These guys shipped a high-concurrency core in under two weeks with zero hand-holding.",
      initials: "JD",
      avatarBackground: "#14181C",
      name: "Julian Davies",
      role: "PropTech Scale — Founder & CEO",
      quoteFontWeight: "medium",
    },
    {
      kind: "video",
      id: "sarah-lindqvist",
      badgeLabel: "VIDEO STORY",
      duration: "4m 12s",
      quote: "Anticipated scaling bottlenecks before we even ran into them.",
      name: "Sarah Lindqvist",
      title: "Chief Executive Officer",
      playButtonAriaLabel: "Play Sarah Lindqvist video story",
    },
    {
      kind: "text",
      id: "marcus-reinhardt",
      rating: 5,
      quote:
        "Absolute operational confidence. They treat your infrastructure like it’s their own capital on the line. Shipped seamlessly to production.",
      initials: "MR",
      avatarBackground: "#333333",
      name: "Marcus Reinhardt",
      role: "Autonomous Liquidity — Head of Product",
      quoteFontWeight: "medium",
    },
    {
      kind: "video",
      id: "video-placeholder-2",
      badgeLabel: "VIDEO STORY",
      duration: "3m 48s",
      quote: "From zero to fully automated payment rails in 14 days flat.",
      name: "Placeholder Client",
      title: "Chief Technology Officer",
      playButtonAriaLabel: "Play client video story",
    },
    {
      kind: "text",
      id: "text-placeholder-verified",
      rating: 5,
      quote:
        "The architectural clarity was refreshing. DevInDays cut our server bills by 60% while 10x-ing system throughput.",
      initials: "PL",
      avatarBackground: "#14181C",
      name: "Placeholder Partner",
      role: "Infrastructure — Engineering Lead",
      verifiedBadge: "Verified Partner",
      quoteFontWeight: "regular",
    },
    {
      kind: "text",
      id: "example-anya-chen",
      rating: 5,
      quote:
        "They joined mid-incident, traced the failure in hours, and left us with observability we should have had from day one.",
      initials: "AC",
      avatarBackground: "#14181C",
      name: "Anya Chen",
      role: "HealthTech — VP Engineering",
      quoteFontWeight: "medium",
    },
  ],
} as const satisfies TestimonialsSectionContent;
