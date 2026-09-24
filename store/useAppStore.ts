import { create } from 'zustand';

interface AppStore {
  isHackerMode: boolean;
  isMobileMenuOpen: boolean;
  toggleHackerMode: () => void;
  setMobileMenuOpen: (open: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  isHackerMode: false,
  isMobileMenuOpen: false,
  toggleHackerMode: () =>
    set((state) => ({ isHackerMode: !state.isHackerMode })),
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
}));
