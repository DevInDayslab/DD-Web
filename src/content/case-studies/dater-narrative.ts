import type { CaseStudyNarrativeContent } from "@/types/case-study-narrative";

export const daterCaseStudyNarrative = {
  blocks: [
    {
      type: "prose",
      id: "context-challenge",
      index: { number: "01", title: "The context & challenge" },
      headline:
        "Dating apps are judged on feel, not function — and consistency was the standard earlier builds never hit.",
      paragraphs: [
        "Dater's founder had tried to get this built before. Each attempt got him closer to having an app, but never closer to having the app he actually wanted. The gap wasn't features — the briefs had probably listed most of the same screens every time — it was that none of those builds felt finished. They felt like requirements checked off rather than a product that had been considered.",
        "Two apps can offer the same feature set and one will feel trustworthy while the other feels thrown together, and the difference is almost never in the feature list. The brief in practice was not \"build a dating app,\" but \"build one where every screen feels like it was made by the same team with the same standard.\"",
        "DevInDays was brought in to execute that end to end without a second rebuild: strip what did not belong in a first-time experience, and engineer a feed-first product built around voice, writing, and trust — not a slot-machine deck of faces.",
      ],
      pullQuote: {
        quote: "The real problem wasn't a missing feature. It was consistency.",
        attribution: "Architectural post-mortem note",
      },
    },
    {
      type: "reduction-audit",
      id: "getting-to-simple",
      eyebrow: "Getting to simple · Reduction audit",
      caption: "V1 (feature heavy) / V2 (quiet feed architecture)",
      cards: [
        {
          id: "v1",
          variant: "v1",
          headerLeft: "V1: Cluttered spawn",
          headerRight: "Prior build / hybrid",
          caption:
            "Too many decisions on screen at once, too many paths to a conversation, and every extra decision point is a place someone drops off.",
          wireframe: {
            kind: "v1",
            screenEyebrow: "HOME · FEED",
            alertBadge: "SWIPE LEFT / RIGHT",
            footerButtons: ["PASS", "···", "···", "LIKE"],
          },
        },
        {
          id: "v2",
          variant: "v2",
          headerLeft: "V2: Quiet feed architecture",
          headerRight: "SwiftUI / Kotlin",
          caption:
            "Fewer choices per screen, clearer paths, and a more direct route from opening the app to a conversation.",
          wireframe: {
            kind: "v2",
            brand: "Dater.",
            mode: "Chronological",
            essayLabel: "Essay prompt",
            quote: "The best conversations are the ones you don't prepare for.",
            footerLabel: "Read full profile",
          },
        },
      ],
    },
    {
      type: "platform-roles",
      id: "platform-approach-roles",
      eyebrow: "Engineering discipline",
      headline: "Dual native clients with a shared real-time edge.",
      paragraphs: [
        "Cross-platform wrappers introduce rendering abstractions that fail under the intense scroll and gesture demands of an editorial media feed. We chose two distinct native codebases: Swift and SwiftUI for iOS, and Kotlin with Jetpack Compose for Android.",
        "Both clients interface with an event-driven edge gateway written in Go and Node.js. State hydration, spatial proximity calculations, and encrypted WebSocket communication happen over lean protocol buffers, keeping battery draw minimal and interactions instantaneous.",
      ],
      diagramHeaderLeft: "System topology blueprint",
      diagramHeaderRight: "Layer 01 → 03",
      tiers: [
        {
          id: "clients",
          kind: "nodes",
          nodes: [
            {
              id: "ios",
              eyebrow: "Client A (iOS)",
              title: "SwiftUI 5.0",
              detail: "AVFoundation audio deck · Metal blur",
            },
            {
              id: "android",
              eyebrow: "Client B (Android)",
              title: "Kotlin Compose",
              detail: "ExoPlayer low-latency · Material M3",
            },
          ],
        },
        {
          id: "connector-edge",
          kind: "connector",
          label: "↓ gRPC / WebSocket multiplex (HTTP/3) ↓",
        },
        {
          id: "edge-core",
          kind: "core",
          label: "Node.js & Go real-time edge core",
          sublabel:
            "Handles connection multiplexing, ephemeral messaging state, and high-frequency location ping throttling.",
          badge: "Edge POPs",
        },
        {
          id: "connector-data",
          kind: "connector",
          label: "↓ Event bus & spatial mesh ↓",
        },
        {
          id: "storage",
          kind: "nodes",
          nodes: [
            {
              id: "postgis",
              eyebrow: "PostGIS & pgvector",
              title: "PostgreSQL spatial",
            },
            {
              id: "redis",
              eyebrow: "Redis cache cluster",
              title: "Deck ring buffers",
            },
          ],
        },
      ],
      matrixEyebrow: "Surface & capability matrix",
      rows: [
        {
          id: "users",
          label: "User role (mobile)",
          tone: "user",
          body: "Chronological feed discovery · Low-latency voice prompt recording · Ephemeral 24h stories · Deterministic mutual connection requests · End-to-end encrypted direct chats with granular block/mute boundaries.",
        },
        {
          id: "admins",
          label: "Admin / trust panel",
          tone: "admin",
          body: "Biometric KYC & automated liveness verification reviews · Real-time NSFW screening dispatch console · Radius expansion overrides (PostGIS ring adjustments) · Anonymized churn and ghosting analytics.",
        },
      ],
    },
    {
      type: "matchmaking",
      id: "matchmaking-engine",
      index: { number: "02", title: "The matchmaking engine" },
      headline: "Spatial indexing without the database bottleneck.",
      paragraphs: [
        "In traditional swipe apps, matchmaking queries are notoriously expensive: calculating distances across millions of geographic coordinate pairs requires dynamic bounding queries that degrade as users scale.",
        "We engineered a tiered matchmaking engine. Rather than running real-time distance scans on every refresh, candidate pools are partitioned into PostGIS spatial buckets (`ST_DWithin`) and cached into Redis ring buffers during inactive device idle periods.",
        "When the user opens Dater, ranking operates deterministically against pre-computed geospatial candidate segments, evaluating reciprocal engagement velocity and conversational recency with sub-30ms response times.",
      ],
      pipelineEyebrow: "Deterministic ranking pipeline",
      pipelineCards: [
        {
          id: "geo",
          passLabel: "Pass 01",
          categoryLabel: "Geometric",
          title: "PostGIS `ST_DWithin`",
          description:
            "Filters candidate accounts within dynamic 5km–50km geographic perimeter.",
        },
        {
          id: "behavior",
          passLabel: "Pass 02",
          categoryLabel: "Behavioral",
          title: "Mutual interest velocity",
          description:
            "Evaluates response rates to voice clips, textual prompts, and profile view depths.",
        },
        {
          id: "recency",
          passLabel: "Pass 03",
          categoryLabel: "Recency",
          title: "Decay & liveness weights",
          description:
            "Applies exponential penalty to dormant profiles to eliminate dead conversation loops.",
        },
        {
          id: "output",
          passLabel: "Output",
          categoryLabel: "Synchronized",
          title: "Deterministic scored deck",
          description:
            "Streamed sequentially to native device buffer; zero stutter during scroll transitions.",
          variant: "highlight",
        },
      ],
      pipelineFooter: "Avg pipeline execution: 28.4ms · Zero cold-start locks",
    },
    {
      type: "tech-strip",
      id: "trust-infra-strip",
      ariaLabel: "Trust, safety, and infrastructure",
      items: [
        "AWS Rekognition",
        "Liveness detection",
        "NSFW automated screening",
        "PostGIS spatial indexing",
        "WebSocket chat engine",
        "Redis rate limiting",
        "Hermetic CI/CD",
      ],
    },
    {
      type: "launch",
      id: "deployment-production",
      index: { number: "03", title: "Deployment & production" },
      headline: "Shipped natively to production in under twelve weeks.",
      subhead: "Dater is live today on the App Store and Google Play.",
      storeBadges: [
        {
          id: "app-store",
          platform: "ios",
          label: "Apple App Store",
          meta: "iOS 16+",
        },
        {
          id: "google-play",
          platform: "android",
          label: "Google Play Store",
          meta: "v2.1 Stable",
        },
      ],
      viewports: [
        {
          id: "discover-feed",
          screenLabel: "Screen 01",
          title: "Discover feed",
          placeholderLabel: "Discover feed screen — asset pending",
        },
        {
          id: "editorial-profile",
          screenLabel: "Screen 02",
          title: "Editorial profile",
          placeholderLabel: "Editorial profile screen — asset pending",
        },
        {
          id: "voice-thread",
          screenLabel: "Screen 03",
          title: "Direct voice thread",
          placeholderLabel: "Direct voice thread screen — asset pending",
        },
      ],
    },
  ],
} as const satisfies CaseStudyNarrativeContent;
