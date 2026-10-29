import { CaseStudyBriefSection } from "@/components/case-study/case-study-brief-section";
import { CaseStudyIntroSection } from "@/components/case-study/case-study-intro-section";
import { CaseStudyNarrative } from "@/components/case-study/case-study-narrative";
import { CaseStudyPageFooterSection } from "@/components/case-study/case-study-page-footer";
import type { CaseStudyPageContent } from "@/types/case-study-page";

type CaseStudyPageViewProps = {
  content: CaseStudyPageContent;
};

export function CaseStudyPageView({ content }: CaseStudyPageViewProps) {
  return (
    <div className="case-study-page">
      <CaseStudyIntroSection intro={content.intro} />
      <CaseStudyBriefSection
        brief={content.brief}
        portraitPlaceholderLabel={content.placeholders.portraitVideo}
      />
      <CaseStudyNarrative content={content.narrative} />
      <CaseStudyPageFooterSection footer={content.footer} />
    </div>
  );
}
