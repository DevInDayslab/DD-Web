import { HeroActionLink } from "@/components/hero-action-link";
import type { HeroActionCopy } from "@/types/hero-content";

type HeroActionsProps = {
  actions: readonly HeroActionCopy[];
};

export function HeroActions({ actions }: HeroActionsProps) {
  return (
    <div className="hero-actions">
      {actions.map((action) => (
        <HeroActionLink key={action.id} action={action} />
      ))}
    </div>
  );
}
