import { create } from "zustand";

export interface checkAppStore {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isApp: boolean;
  setIsApp: (isApp: boolean) => void;
}

export const useCheckAppStore = create<checkAppStore>((set) => ({
  isLoading: true,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  isApp: false,
  setIsApp: (isApp: boolean) => set({ isApp }),
}));
