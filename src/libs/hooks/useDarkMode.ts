import { useEffect, useState } from 'react';
import { ThemeType } from '../types';


export const useDarkMode = () => {
  const [theme, setThemeState] = useState<ThemeType>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as ThemeType | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemTheme = prefersDark ? 'dark' : 'light';
    const applied = saved === 'system' ? systemTheme : saved || 'light';

    document.body.dataset.theme = applied;
    setThemeState(saved || 'light');
  }, []);

  const setTheme = (newTheme: ThemeType) => {
    localStorage.setItem('theme', newTheme);
    const isDark = newTheme === 'dark' || (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.body.dataset.theme = isDark ? 'dark' : 'light';
    setThemeState(newTheme);
  };

  return { theme, setTheme };
};
