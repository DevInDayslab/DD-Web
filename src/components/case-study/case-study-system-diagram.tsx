import type { CaseStudyDiagramTier } from "@/types/case-study-narrative";

type CaseStudySystemDiagramProps = {
  headerLeft: string;
  headerRight: string;
  tiers: readonly CaseStudyDiagramTier[];
};

export function CaseStudySystemDiagram({ headerLeft, headerRight, tiers }: CaseStudySystemDiagramProps) {
  return (
    <div className="case-study-diagram-panel">
      <div className="case-study-diagram-panel-header">
        <span>{headerLeft}</span>
        <span>{headerRight}</span>
      </div>
      <div className="case-study-diagram-panel-body">
        {tiers.map((tier) => {
          if (tier.kind === "connector") {
            return (
              <p key={tier.id} className="case-study-diagram-connector">
                {tier.label}
              </p>
            );
          }

          if (tier.kind === "core") {
            return (
              <div key={tier.id} className="case-study-diagram-core">
                <div className="case-study-diagram-core-head">
                  <p className="case-study-diagram-core-title">{tier.label}</p>
                  {tier.badge ? <span className="case-study-diagram-badge">{tier.badge}</span> : null}
                </div>
                <p className="case-study-diagram-core-sub">{tier.sublabel}</p>
              </div>
            );
          }

          return (
            <div key={tier.id} className="case-study-diagram-nodes">
              {tier.nodes.map((node) => (
                <div key={node.id} className="case-study-diagram-node">
                  <p className="case-study-diagram-node-eyebrow">{node.eyebrow}</p>
                  <p className="case-study-diagram-node-title">{node.title}</p>
                  {node.detail ? <p className="case-study-diagram-node-detail">{node.detail}</p> : null}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
