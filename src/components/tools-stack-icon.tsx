import type { ToolsStackItemIcon } from "@/types/tools-section";

type ToolsStackIconProps = {
  icon: ToolsStackItemIcon;
};

export function ToolsStackIcon({ icon }: ToolsStackIconProps) {
  return (
    <span className="tools-stack-item-icon" aria-hidden>
      {icon === "flutter" ? (
        <svg viewBox="0 0 16 16" fill="none">
          <path
            d="M2.5 2.5h6.2l4.8 4.8-4.8 4.8H2.5V2.5z"
            fill="currentColor"
            opacity="0.35"
          />
          <path d="M8.7 2.5 13.5 7.3 8.7 12.1V2.5z" fill="currentColor" />
        </svg>
      ) : null}
      {icon === "kotlin" ? (
        <svg viewBox="0 0 16 16" fill="none">
          <path
            d="M2 12.5 8 3.5l6 9H2z"
            fill="currentColor"
          />
        </svg>
      ) : null}
      {icon === "swift" ? (
        <svg viewBox="0 0 16 16" fill="none">
          <path
            d="M3 11.5c3.5-6 9.5-7.5 10-7.6-2.8 3.2-5.2 6.8-5.5 7.1-.3.3-1 .5-1.4.5H3z"
            fill="currentColor"
          />
        </svg>
      ) : null}
      {icon === "reactNative" ? (
        <svg viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="2.2" fill="currentColor" />
          <ellipse cx="8" cy="8" rx="6.5" ry="2.5" stroke="currentColor" strokeWidth="0.8" />
          <ellipse
            cx="8"
            cy="8"
            rx="6.5"
            ry="2.5"
            stroke="currentColor"
            strokeWidth="0.8"
            transform="rotate(60 8 8)"
          />
          <ellipse
            cx="8"
            cy="8"
            rx="6.5"
            ry="2.5"
            stroke="currentColor"
            strokeWidth="0.8"
            transform="rotate(-60 8 8)"
          />
        </svg>
      ) : null}
      {icon === "node" ? (
        <svg viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1.5 13 4.5v7L8 14.5 3 11.5v-7L8 1.5z"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path d="M8 5v6M6 6.5h4" stroke="currentColor" strokeWidth="0.9" />
        </svg>
      ) : null}
      {icon === "postgresql" ? (
        <svg viewBox="0 0 16 16" fill="none">
          <path
            d="M10.5 2c2 .3 3.5 2 3.5 4.2 0 3.8-3 6.3-7 6.3S2 9.2 2 5.5C2 3.5 3.2 2 5 2c1.2 0 2.2.6 3 1.5.8-.9 1.8-1.5 3-1.5z"
            fill="currentColor"
          />
        </svg>
      ) : null}
      {icon === "python" ? (
        <svg viewBox="0 0 16 16" fill="none">
          <path
            d="M5.5 2h5c1.5 0 2.5 1 2.5 2.5V7H9V5.5H5.5V7H3V4.5C3 3 4 2 5.5 2zm5 12h-5c-1.5 0-2.5-1-2.5-2.5V9h3v1.5H10.5V9H13v2.5c0 1.5-1 2.5-2.5 2.5z"
            fill="currentColor"
          />
        </svg>
      ) : null}
      {icon === "mongodb" ? (
        <svg viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1.5c2.2 3.5 3.2 6.5 3.2 9.2 0 2.2-1 3.8-3.2 4.3-2.2-.5-3.2-2.1-3.2-4.3 0-2.7 1-6.3 3.2-9.2z"
            fill="currentColor"
          />
        </svg>
      ) : null}
      {icon === "aws" ? (
        <svg viewBox="0 0 16 16" fill="none">
          <path
            d="M3 11.5h10M4.5 8.5c1.5-2 6-2 7.5 0"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          <path d="M2.5 12.8h11" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      ) : null}
      {icon === "firebase" ? (
        <svg viewBox="0 0 16 16" fill="none">
          <path d="M3 12.5 8 2l2.5 5L13 12.5H3z" fill="currentColor" />
        </svg>
      ) : null}
      {icon === "supabase" ? (
        <svg viewBox="0 0 16 16" fill="none">
          <path d="M4 2.5h6l4 4.5-6.5 6.5-3.5-3V2.5z" fill="currentColor" />
        </svg>
      ) : null}
      {icon === "figma" ? (
        <svg viewBox="0 0 16 16" fill="none">
          <rect x="5" y="2" width="3.5" height="3.5" rx="1.5" fill="currentColor" />
          <rect x="5" y="6.25" width="3.5" height="3.5" rx="1.5" fill="currentColor" opacity="0.65" />
          <rect x="8.5" y="6.25" width="3.5" height="3.5" rx="1.5" fill="currentColor" opacity="0.35" />
          <rect x="5" y="10.5" width="3.5" height="3.5" rx="1.5" fill="currentColor" opacity="0.85" />
        </svg>
      ) : null}
    </span>
  );
}
