"use client";

import { useThemeStore } from "@/store/themeStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const { theme, resolvedTheme, initSystemTheme } = useThemeStore();
  useEffect(() => {
    if (theme === "system") {
      initSystemTheme();

      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const listener = () => initSystemTheme();
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    } else {
      document.documentElement.setAttribute("data-theme", resolvedTheme);
    }
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
