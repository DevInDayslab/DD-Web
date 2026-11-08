/**
 * Store listings per case study. Paste the real URLs here as the apps go live.
 * When a store URL is missing, the badge falls back to the product's live site
 * (or the contact page), so the button never dead-ends.
 */
export type CaseStudyStoreListing = {
  appStore?: string;
  playStore?: string;
};

export const caseStudyStoreListings: Record<string, CaseStudyStoreListing> = {
  // TODO: replace each "#" with the real store URL once the app is listed.
  dater: { appStore: "#", playStore: "https://play.google.com/store/apps/details?id=com.daterplat.app" },
  invigil: { appStore: "#", playStore: "https://play.google.com/store/apps/details?id=com.apmedia.invigil" },
  "billing-baba": { appStore: "#", playStore: "#" },
  entryticket: { appStore: "#", playStore: "#" },
  turbosupply: { appStore: "#", playStore: "#" },
  myndfe: {
    appStore: "https://apps.apple.com/in/app/myndfe/id6822183055",
    playStore: "https://play.google.com/store/apps/details?id=com.myndfe.app&hl=en_IN",
  },
};
