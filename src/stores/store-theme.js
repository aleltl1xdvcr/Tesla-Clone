'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useThemeStore = create()(
  persist(
    (set, get) => ({
      theme: 'light',
      setThemeStore: (newTheme) => set({ 
        ...newTheme,
        theme: get().theme === "dark" ? "light" : "dark"
       }),
    }),
    {
      name: 'storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !['theme'].includes(key)),
        ),
    },
  ),
)
