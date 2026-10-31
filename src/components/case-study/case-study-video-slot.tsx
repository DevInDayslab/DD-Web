import type { CaseStudyVideoAsset } from "@/types/case-study-page";

type CaseStudyVideoSlotProps = {
  video: CaseStudyVideoAsset;
  placeholderLabel: string;
  className?: string;
  variant: "landscape" | "portrait";
};

export function CaseStudyVideoSlot({
  video,
  placeholderLabel,
  className = "",
  variant,
}: CaseStudyVideoSlotProps) {
  const rootClass = [
    "case-study-video-slot",
    variant === "landscape" ? "case-study-video-slot--landscape" : "case-study-video-slot--portrait",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (video.src) {
    return (
      <div className={rootClass}>
        <video
          className="case-study-video-slot-media"
          src={video.src}
          poster={video.posterSrc}
          playsInline
          muted
          loop
          autoPlay
          controls
        />
      </div>
    );
  }

  return (
    <div className={rootClass} role="img" aria-label={placeholderLabel}>
      <span className="case-study-video-slot-placeholder" aria-hidden>
        <span className="work-featured-phone-badge">
          <span className="work-featured-phone-play" />
        </span>
        <span className="case-study-video-slot-placeholder-label">Walkthrough coming soon</span>
      </span>
    </div>
  );
}
