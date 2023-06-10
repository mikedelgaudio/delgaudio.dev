import { VNode, createContext } from 'preact';
import { useState } from 'preact/hooks';

export const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: VNode }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === 'dark' ||
      document.documentElement.classList.contains('dark'),
  );

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme: () => {
          if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
          } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
          }
          setDarkMode((prevDarkMode: boolean) => !prevDarkMode);
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
