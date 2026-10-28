"use client";

import { ProjectQualifierModal } from "@/components/project-qualifier/project-qualifier-modal";
import { ProjectQualifierProvider } from "@/components/project-qualifier/project-qualifier-provider";
import type { ReactNode } from "react";

export function ProjectQualifierRoot({ children }: { children: ReactNode }) {
  return (
    <ProjectQualifierProvider>
      {children}
      <ProjectQualifierModal />
    </ProjectQualifierProvider>
  );
}
