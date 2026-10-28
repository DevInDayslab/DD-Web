"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ProjectQualifierContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ProjectQualifierContext = createContext<ProjectQualifierContextValue | null>(null);

export function ProjectQualifierProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      open,
      close,
    }),
    [close, isOpen, open],
  );

  return (
    <ProjectQualifierContext.Provider value={value}>{children}</ProjectQualifierContext.Provider>
  );
}

export function useProjectQualifier(): ProjectQualifierContextValue {
  const context = useContext(ProjectQualifierContext);
  if (!context) {
    throw new Error("useProjectQualifier must be used within ProjectQualifierProvider");
  }
  return context;
}

export function useOptionalProjectQualifier(): ProjectQualifierContextValue | null {
  return useContext(ProjectQualifierContext);
}
