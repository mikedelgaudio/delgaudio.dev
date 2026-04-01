import { VNode, createContext } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';
import {
  DEFAULT_DARK_THEME,
  THEMES,
  THEME_STORAGE_KEY,
} from '../themes/themes';

export const ThemeContext = createContext({
  theme: DEFAULT_DARK_THEME,
  setTheme: (_key: string, _event?: MouseEvent) => {},
});

function getInitialTheme(): string {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored && THEMES.some(t => t.key === stored)) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? DEFAULT_DARK_THEME
    : DEFAULT_DARK_THEME;
}

function applyThemeAttribute(key: string) {
  document.documentElement.setAttribute('data-theme', key);
  // Update mobile browser chrome color to match theme background
  const bg = getComputedStyle(document.documentElement).getPropertyValue('--theme-bg').trim();
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', bg);
}

export function ThemeProvider({ children }: { children: VNode }) {
  const [theme, setThemeState] = useState(getInitialTheme);

  useEffect(() => {
    applyThemeAttribute(theme);
  }, [theme]);

  const setTheme = useCallback(
    (key: string, event?: MouseEvent) => {
      if (key === theme) return;

      const apply = () => {
        applyThemeAttribute(key);
        localStorage.setItem(THEME_STORAGE_KEY, key);
        setThemeState(key);
      };

      // Use View Transitions API with ripple effect when available
      if (event && (document as any).startViewTransition) {
        const x = event.clientX;
        const y = event.clientY;
        document.documentElement.style.setProperty('--ripple-x', `${x}px`);
        document.documentElement.style.setProperty('--ripple-y', `${y}px`);
        (document as any).startViewTransition(apply);
      } else {
        apply();
      }
    },
    [theme],
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
