import { VNode, createContext } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';

export type Theme = 'paper' | 'night';

export const THEME_STORAGE_KEY = 'theme';

const THEME_COLOR: Record<Theme, string> = {
  paper: '#f6f3ec',
  night: '#16171a',
};

export const ThemeContext = createContext({
  theme: 'paper' as Theme,
  toggleTheme: (_event?: MouseEvent) => {},
});

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => unknown;
};

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === 'paper' || stored === 'night' ? stored : null;
  } catch {
    return null;
  }
}

function getInitialTheme(): Theme {
  // Prerendering has no window; the browser reads what the head script already applied
  if (typeof window === 'undefined') return 'paper';
  const applied = document.documentElement.getAttribute('data-theme');
  if (applied === 'paper' || applied === 'night') return applied;
  return (
    readStoredTheme() ??
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'night'
      : 'paper')
  );
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  // Match mobile browser chrome to the page background
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_COLOR[theme]);
}

export function ThemeProvider({ children }: { children: VNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Follow the system setting until the visitor picks a theme
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      if (!readStoredTheme()) setTheme(e.matches ? 'night' : 'paper');
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === 'paper' ? 'night' : 'paper';
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works
    }

    // Cross-fade between themes where the View Transitions API exists.
    // The attribute is set inside the callback so the new snapshot has the new colors.
    const doc = document as ViewTransitionDocument;
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (doc.startViewTransition && !reduceMotion) {
      doc.startViewTransition(() => {
        applyTheme(next);
        setTheme(next);
      });
    } else {
      setTheme(next);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
