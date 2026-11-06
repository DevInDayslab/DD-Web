"use client";

import type { CSSProperties } from "react";
import { useId, useState } from "react";
import { ReductionMockupV1, ReductionMockupV2 } from "@/components/case-study/case-study-reduction-card";
import type {
  CaseStudyReductionCard,
  CaseStudyReductionWireframeV1,
  CaseStudyReductionWireframeV2,
} from "@/types/case-study-narrative";

type CaseStudyReductionCompareProps = {
  v1: CaseStudyReductionCard;
  v2: CaseStudyReductionCard;
};

/**
 * Horizontal slider comparing V1 vs V2 mockups (client-only interaction).
 */
export function CaseStudyReductionCompare({ v1, v2 }: CaseStudyReductionCompareProps) {
  const id = useId();
  const [position, setPosition] = useState(50);
  const labelId = `reduction-compare-label-${id}`;

  return (
    <div className="case-study-reduction-compare" aria-labelledby={labelId}>
      <div id={labelId} className="sr-only">
        Compare prior build versus quiet feed architecture
      </div>
      <div
        className="case-study-reduction-compare-stage"
        style={{ "--dd-reduction-compare-split": `${position}%` } as CSSProperties}
      >
        <div className="case-study-reduction-compare-layer case-study-reduction-compare-layer--v1">
          <ReductionMockupV1 wireframe={v1.wireframe as CaseStudyReductionWireframeV1} />
        </div>
        <div className="case-study-reduction-compare-layer case-study-reduction-compare-layer--v2">
          <ReductionMockupV2 wireframe={v2.wireframe as CaseStudyReductionWireframeV2} />
        </div>
        <div className="case-study-reduction-compare-divider" aria-hidden />
      </div>
      <div className="case-study-reduction-compare-controls">
        <span className="case-study-reduction-compare-label case-study-reduction-compare-label--v1">
          {v1.headerLeft}
        </span>
        <input
          type="range"
          className="case-study-reduction-compare-range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-valuetext={`${position} percent toward version two`}
        />
        <span className="case-study-reduction-compare-label case-study-reduction-compare-label--v2">
          {v2.headerLeft}
        </span>
      </div>
      <div className="case-study-reduction-compare-captions">
        <p className="case-study-reduction-compare-caption">{v1.caption}</p>
        <p className="case-study-reduction-compare-caption">{v2.caption}</p>
      </div>
    </div>
  );
}
