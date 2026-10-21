import Script from "next/script";
import type { AnalyticsConfig } from "@/types";

type AnalyticsProps = AnalyticsConfig;

export function Analytics({ plausibleDomain, ga4MeasurementId }: AnalyticsProps) {
  return (
    <>
      {plausibleDomain ? (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      ) : null}
      {ga4MeasurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga4MeasurementId}');`}
          </Script>
        </>
      ) : null}
    </>
  );
}
