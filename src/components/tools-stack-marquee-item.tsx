import { ToolsStackIcon } from "@/components/tools-stack-icon";
import type { MarqueeEntryEdgePresentation } from "@/lib/marquee-edge-presentation";
import type { ToolsStackItem } from "@/types/tools-section";

type ToolsStackMarqueeItemProps = {
  entryKey: string;
  item: ToolsStackItem;
  showLeadingSeparator: boolean;
  edgePresentation?: MarqueeEntryEdgePresentation;
};

export function ToolsStackMarqueeItem({
  entryKey,
  item,
  showLeadingSeparator,
  edgePresentation,
}: ToolsStackMarqueeItemProps) {
  const opacity = edgePresentation?.opacity ?? 1;
  const scale = edgePresentation?.scale ?? 1;

  return (
    <span
      className="tools-stack-entry"
      data-tools-marquee-entry={entryKey}
      style={{
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      {showLeadingSeparator ? <span className="tools-stack-separator" aria-hidden /> : null}
      <span className="tools-stack-item">
        <ToolsStackIcon icon={item.icon} />
        <span className="tools-stack-item-label">{item.label}</span>
      </span>
    </span>
  );
}
