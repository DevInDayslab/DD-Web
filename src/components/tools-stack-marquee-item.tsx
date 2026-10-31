import { ToolsStackIcon } from "@/components/tools-stack-icon";
import type { ToolsStackItem } from "@/types/tools-section";

type ToolsStackMarqueeItemProps = {
  entryKey: string;
  item: ToolsStackItem;
  showLeadingSeparator: boolean;
};

export function ToolsStackMarqueeItem({
  entryKey,
  item,
  showLeadingSeparator,
}: ToolsStackMarqueeItemProps) {
  return (
    <span
      className="tools-stack-entry"
      data-tools-marquee-entry={entryKey}
    >
      {showLeadingSeparator ? <span className="tools-stack-separator" aria-hidden /> : null}
      <span className="tools-stack-item">
        <ToolsStackIcon icon={item.icon} />
        <span className="tools-stack-item-label">{item.label}</span>
      </span>
    </span>
  );
}
