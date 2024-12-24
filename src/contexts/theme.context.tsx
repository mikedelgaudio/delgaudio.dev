import { VNode, createContext } from 'preact';
import { useEffect, useState } from 'preact/hooks';

export const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: VNode }) {
  const [darkMode, setDarkMode] = useState(
    (localStorage.getItem('theme') === null &&
      window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      localStorage.getItem('theme') === 'dark',
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('bg-slate-950');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('bg-slate-950');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme: () => {
          if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
          } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          }
          setDarkMode((prevDarkMode: boolean) => !prevDarkMode);
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
