"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type OpenOptions = {
  /** ISO time picked elsewhere (for example on the contact page) to carry into the booking step. */
  slot?: string;
};

type ProjectQualifierContextValue = {
  isOpen: boolean;
  initialSlot: string | null;
  open: (options?: OpenOptions) => void;
  close: () => void;
};

const ProjectQualifierContext = createContext<ProjectQualifierContextValue | null>(null);

export function ProjectQualifierProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialSlot, setInitialSlot] = useState<string | null>(null);

  const open = useCallback((options?: OpenOptions) => {
    setInitialSlot(options?.slot ?? null);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, initialSlot, open, close }),
    [close, initialSlot, isOpen, open],
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
