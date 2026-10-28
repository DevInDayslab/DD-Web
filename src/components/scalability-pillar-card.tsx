import type { ScalabilityPillar } from "@/types/scalability-panel";

type ScalabilityPillarCardProps = {
  pillar: ScalabilityPillar;
};

export function ScalabilityPillarCard({ pillar }: ScalabilityPillarCardProps) {
  return (
    <article className="scalability-pillar-card">
      <p className="scalability-pillar-label">{pillar.label}</p>
      <h3 className="scalability-pillar-title">{pillar.title}</h3>
      <p className="scalability-pillar-body">{pillar.body}</p>
    </article>
  );
}
