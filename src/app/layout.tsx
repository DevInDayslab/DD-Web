import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteLayoutStyle } from "@/components/site-layout-style";
import { ThemeStyle } from "@/components/theme-style";
import { fontDisplay, fontHeadline, fontLetterTiles, fontSans, fontUi } from "@/config/fonts";
import { site } from "@/config/site";
import { theme } from "@/config/theme";
import { faqItems } from "@/content/faq";
import { buildRootMetadata } from "@/lib/metadata";
import { faqPageJsonLd, organizationJsonLd } from "@/lib/schema";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = buildRootMetadata();

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={site.locale}
      className={`${fontDisplay.variable} ${fontHeadline.variable} ${fontLetterTiles.variable} ${fontSans.variable} ${fontUi.variable}`}
    >
      <body className="bg-background font-sans text-foreground antialiased">
        <ThemeStyle theme={theme} />
        <SiteLayoutStyle />
        <JsonLd data={organizationJsonLd(site)} />
        {faqItems.length > 0 ? <JsonLd data={faqPageJsonLd(faqItems)} /> : null}
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics {...site.analytics} />
      </body>
    </html>
  );
}
