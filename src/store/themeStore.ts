// store/themeStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: "light" | "dark") => void;
  initSystemTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      theme: "system",
      resolvedTheme: "light",

      initSystemTheme: () => {
        const system = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
        set({ resolvedTheme: system });
        document.documentElement.setAttribute("data-theme", system);
      },

      setTheme: theme => {
        set({ theme, resolvedTheme: theme });
        document.documentElement.setAttribute("data-theme", theme);
      }
    }),
    { name: "theme-storage" }
  )
);
