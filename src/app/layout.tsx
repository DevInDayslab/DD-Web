import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/json-ld";
import { ProjectQualifierRoot } from "@/components/project-qualifier/project-qualifier-root";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteLayoutStyle } from "@/components/site-layout-style";
import { SiteMotion } from "@/components/site-motion";
import { ThemeStyle } from "@/components/theme-style";
import { fontHeadline, fontMono, fontUi } from "@/config/fonts";
import { site } from "@/config/site";
import { theme } from "@/config/theme";
import { buildRootMetadata } from "@/lib/metadata";
import { founderJsonLd, organizationJsonLd } from "@/lib/schema";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = buildRootMetadata();

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={site.locale}
      className={`${fontHeadline.variable} ${fontUi.variable} ${fontMono.variable}`}
    >
      <body className="bg-background font-sans text-foreground antialiased">
        <ProjectQualifierRoot>
          <ThemeStyle theme={theme} />
          <SiteLayoutStyle />
          <SiteMotion />
          <JsonLd data={[organizationJsonLd(site), founderJsonLd(site)]} />
          <SiteHeader />
          {children}
          <SiteFooter />
          <Analytics {...site.analytics} />
        </ProjectQualifierRoot>
      </body>
    </html>
  );
}
