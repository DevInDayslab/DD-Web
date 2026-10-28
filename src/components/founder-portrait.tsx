"use client";

import Image from "next/image";
import { useState } from "react";
import type { FounderSectionContent } from "@/types/founder-section";

type FounderPortraitProps = {
  portrait: FounderSectionContent["portrait"];
  placeholderLabel: string;
};

export function FounderPortrait({ portrait, placeholderLabel }: FounderPortraitProps) {
  const [usePlaceholder, setUsePlaceholder] = useState(false);

  if (usePlaceholder) {
    return (
      <div className="founder-portrait-placeholder" role="img" aria-label={portrait.alt}>
        <span>{placeholderLabel}</span>
      </div>
    );
  }

  return (
    <div className="founder-portrait-frame">
      <Image
        className="founder-portrait-image"
        src={portrait.src}
        alt={portrait.alt}
        width={portrait.width}
        height={portrait.height}
        sizes="(max-width: 767px) 100vw, 420px"
        onError={() => setUsePlaceholder(true)}
      />
      <div className="founder-portrait-overlay" aria-hidden />
    </div>
  );
}
