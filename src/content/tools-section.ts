import type { ToolsSectionContent } from "@/types/tools-section";

export const toolsSectionContent = {
  eyebrow: "THE STACK WE’VE SHIPPED WITH, REPEATEDLY",
  headline: {
    lineOne: "The tools change",
    lineTwo: "The engineering doesn’t",
  },
  marqueeAriaLabel: "Technologies we ship with",
  stackItems: [
    { id: "flutter", label: "Flutter", icon: "flutter" },
    { id: "kotlin", label: "Kotlin", icon: "kotlin" },
    { id: "swift", label: "Swift/SwiftUI", icon: "swift" },
    { id: "react-native", label: "React Native", icon: "reactNative" },
    { id: "node", label: "Node.js", icon: "node" },
    { id: "postgresql", label: "PostgreSQL", icon: "postgresql" },
    { id: "python", label: "Python/FastAPI", icon: "python" },
    { id: "mongodb", label: "MongoDB", icon: "mongodb" },
    { id: "aws", label: "AWS", icon: "aws" },
    { id: "firebase", label: "Firebase", icon: "firebase" },
    { id: "supabase", label: "Supabase", icon: "supabase" },
    { id: "figma", label: "Figma", icon: "figma" },
  ],
} as const satisfies ToolsSectionContent;
