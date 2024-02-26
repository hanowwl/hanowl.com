import { create } from "zustand";

export interface checkAppStore {
  isApp: boolean;
  setIsApp: (isApp: boolean) => void;
}

export const useCheckAppStore = create<checkAppStore>((set) => ({
  isApp: false,
  setIsApp: (isApp: boolean) => set({ isApp }),
}));
