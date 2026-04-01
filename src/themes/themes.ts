export interface ThemeDefinition {
  key: string;
  label: string;
  previewBg: string;
  previewAccent: string;
}

export const THEMES: ThemeDefinition[] = [
  {
    key: 'dark',
    label: 'Dark',
    previewBg: '#2b2e33',
    previewAccent: '#39fca8',
  },
  {
    key: 'midnight',
    label: 'Midnight',
    previewBg: '#1e1b4b',
    previewAccent: '#a78bfa',
  },
  {
    key: 'sunset',
    label: 'Sunset',
    previewBg: '#1c1917',
    previewAccent: '#f97316',
  },
  {
    key: 'ocean',
    label: 'Ocean',
    previewBg: '#042f2e',
    previewAccent: '#06b6d4',
  },
  {
    key: 'sakura',
    label: 'Sakura',
    previewBg: '#4c0519',
    previewAccent: '#ec4899',
  },
  {
    key: 'cyberpunk',
    label: 'Cyberpunk',
    previewBg: '#150821',
    previewAccent: '#a3e635',
  },
  {
    key: 'forest',
    label: 'Forest',
    previewBg: '#022c22',
    previewAccent: '#22c55e',
  },
  {
    key: 'arctic',
    label: 'Arctic',
    previewBg: '#0c4a6e',
    previewAccent: '#38bdf8',
  },
  {
    key: 'lavender',
    label: 'Lavender',
    previewBg: '#faf5ff',
    previewAccent: '#7c3aed',
  },
];

export const DEFAULT_LIGHT_THEME = 'light';
export const DEFAULT_DARK_THEME = 'dark';
export const THEME_STORAGE_KEY = 'theme';
