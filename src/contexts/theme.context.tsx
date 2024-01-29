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
    } else {
      document.documentElement.classList.remove('dark');
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
