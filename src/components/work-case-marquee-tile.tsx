import Image from "next/image";
import type { WorkMarqueeLogoAsset, WorkMarqueeTileConfig } from "@/types/work-section";

type WorkCaseMarqueeTileProps = {
  tile: WorkMarqueeTileConfig;
  logo: WorkMarqueeLogoAsset;
  isActive: boolean;
  onSelect: (caseStudyId: string) => void;
};

export function WorkCaseMarqueeTile({
  tile,
  logo,
  isActive,
  onSelect,
}: WorkCaseMarqueeTileProps) {
  const pending = logo.pending === true || !logo.src;

  return (
    <button
      type="button"
      className={[
        "work-marquee-tile",
        isActive ? "work-marquee-tile--active" : "",
        logo.fill ? "work-marquee-tile--fill" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-pressed={isActive}
      aria-label={`Show ${logo.alt} case study`}
      onPointerDown={(event) => {
        event.stopPropagation();
      }}
      onClick={(event) => {
        event.stopPropagation();
        onSelect(tile.caseStudyId);
      }}
    >
      {pending || !logo.src ? (
        <span className="work-marquee-tile-pending" aria-hidden />
      ) : (
        <Image
          className={logo.fill ? "work-marquee-tile-logo work-marquee-tile-logo--fill" : "work-marquee-tile-logo"}
          src={logo.src}
          alt=""
          width={62}
          height={62}
          sizes="62px"
          draggable={false}
        />
      )}
    </button>
  );
}
