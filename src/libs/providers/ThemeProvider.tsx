// src/libs/providers/ThemeProvider.tsx
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type ThemeType = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>('light');

  // 초기 테마 설정
  useEffect(() => {
    const saved = localStorage.getItem('theme') as ThemeType | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemTheme = prefersDark ? 'dark' : 'light';
    const applied = saved === 'system' ? systemTheme : saved || 'light';

    setThemeState(saved || 'light');
    document.body.dataset.theme = applied;
  }, []);

  const setTheme = (newTheme: ThemeType) => {
    localStorage.setItem('theme', newTheme);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = newTheme === 'dark' || (newTheme === 'system' && prefersDark);
    document.body.dataset.theme = isDark ? 'dark' : 'light';
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 전역 훅
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
