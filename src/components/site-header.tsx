import { Header } from "@/components/header";
import { navigation } from "@/config/navigation";
import { site } from "@/config/site";
import { headerCopy } from "@/content/header";

export function SiteHeader() {
  return (
    <Header
      brand={{ name: site.name, href: "/" }}
      items={navigation}
      cta={{
        label: site.booking.label,
        href: site.booking.embedUrl || "/#book",
      }}
      copy={headerCopy}
    />
  );
}
