import { faqSectionLayout } from "@/config/faq-section";
import { faqSectionThemeColors } from "@/config/faq-theme";
import { layoutBaseline } from "@/config/layout";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = faqSectionLayout;

function fluid(
  value: number,
  bounds?: { minPx?: number; maxPx?: number },
): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function faqSectionLayoutToCssVars(): Record<string, string> {
  return {
    "--dd-faq-margin-top": fluid(layout.marginTopAtBaseline, {
      minPx: 64,
      maxPx: layout.marginTopAtBaseline,
    }),
    "--dd-faq-max-width": fluid(layout.maxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.maxWidthAtBaseline,
    }),
    "--dd-faq-padding-inline": fluid(layout.paddingInlineAtBaseline, {
      minPx: 16,
      maxPx: layout.paddingInlineAtBaseline,
    }),
    "--dd-faq-title-max-width": fluid(layout.titleMaxWidthAtBaseline, {
      minPx: 280,
      maxPx: layout.titleMaxWidthAtBaseline,
    }),
    "--dd-faq-title-size": fluid(layout.titleFontSizeAtBaseline, {
      minPx: 30,
      maxPx: layout.titleFontSizeAtBaseline,
    }),
    "--dd-faq-title-line-height": fluid(layout.titleLineHeightAtBaseline, {
      minPx: 36,
      maxPx: layout.titleLineHeightAtBaseline,
    }),
    "--dd-faq-title-letter-spacing": `${layout.titleLetterSpacingAtBaseline}px`,
    "--dd-faq-title-margin-bottom": fluid(layout.titleMarginBottomAtBaseline, {
      minPx: 32,
      maxPx: layout.titleMarginBottomAtBaseline,
    }),
    "--dd-faq-trigger-padding-y": fluid(layout.itemTriggerPaddingYAtBaseline, {
      minPx: 18,
      maxPx: layout.itemTriggerPaddingYAtBaseline,
    }),
    "--dd-faq-question-size": fluid(layout.questionFontSizeAtBaseline, {
      minPx: 17,
      maxPx: layout.questionFontSizeAtBaseline,
    }),
    "--dd-faq-question-line-height": fluid(layout.questionLineHeightAtBaseline, {
      minPx: 26,
      maxPx: layout.questionLineHeightAtBaseline,
    }),
    "--dd-faq-answer-size": fluid(layout.answerFontSizeAtBaseline, {
      minPx: 15,
      maxPx: layout.answerFontSizeAtBaseline,
    }),
    "--dd-faq-answer-line-height": fluid(layout.answerLineHeightAtBaseline, {
      minPx: 24,
      maxPx: layout.answerLineHeightAtBaseline,
    }),
    "--dd-faq-answer-padding-right": fluid(layout.answerPaddingRightAtBaseline, {
      minPx: 0,
      maxPx: layout.answerPaddingRightAtBaseline,
    }),
    "--dd-faq-chevron-size": fluid(layout.chevronSizeAtBaseline, {
      minPx: 18,
      maxPx: layout.chevronSizeAtBaseline,
    }),
    "--dd-faq-see-all-margin-top": fluid(layout.seeAllMarginTopAtBaseline, {
      minPx: 28,
      maxPx: layout.seeAllMarginTopAtBaseline,
    }),
    "--dd-faq-see-all-margin-bottom": fluid(layout.seeAllMarginBottomAtBaseline, {
      minPx: 40,
      maxPx: layout.seeAllMarginBottomAtBaseline,
    }),
    "--dd-faq-see-all-size": fluid(layout.seeAllFontSizeAtBaseline, {
      minPx: 13,
      maxPx: layout.seeAllFontSizeAtBaseline,
    }),
    "--dd-faq-see-all-line-height": fluid(layout.seeAllLineHeightAtBaseline, {
      minPx: 18,
      maxPx: layout.seeAllLineHeightAtBaseline,
    }),
    "--dd-faq-see-all-gap": fluid(layout.seeAllGapAtBaseline, {
      minPx: 5,
      maxPx: layout.seeAllGapAtBaseline,
    }),
    "--dd-faq-color-title": faqSectionThemeColors.title,
    "--dd-faq-color-question": faqSectionThemeColors.question,
    "--dd-faq-color-answer": faqSectionThemeColors.answer,
    "--dd-faq-color-divider": faqSectionThemeColors.divider,
    "--dd-faq-color-chevron": faqSectionThemeColors.chevron,
    "--dd-faq-color-see-all": faqSectionThemeColors.seeAll,
  };
}
