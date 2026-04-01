import { useContext, useEffect, useRef, useState } from 'preact/hooks';
import { ThemeContext } from '../../contexts/theme.context';
import { THEMES } from '../../themes/themes';

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onClickOutside(e: Event) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    function onEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    if (open) {
      document.addEventListener('mousedown', onClickOutside);
      document.addEventListener('keydown', onEscape);
    }
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onEscape);
    };
  }, [open]);

  const current = THEMES.find(t => t.key === theme);

  return (
    <div class="relative">
      <button
        ref={buttonRef}
        onClick={() => setOpen(o => !o)}
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Change theme"
        class="hidden xs:flex justify-center items-center w-10 h-10 p-2.5 text-xs font-medium bg-btn border border-btn-border rounded-lg hover:bg-btn-hover text-btn-text cursor-pointer focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring focus:outline-hidden"
      >
        <span
          class="block w-4 h-4 rounded-full border border-btn-border"
          style={{
            background: current
              ? `linear-gradient(135deg, ${current.previewBg} 50%, ${current.previewAccent} 50%)`
              : undefined,
          }}
        />
      </button>

      <div
        ref={panelRef}
        role="listbox"
        aria-label="Select a theme"
        class={`absolute right-0 mt-2 p-3 rounded-xl border border-outline bg-surface-alt shadow-lg z-50 grid grid-cols-6 gap-2 w-max origin-top-right transition-all duration-200 ease-out ${
          open
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {THEMES.map(t => {
          const active = t.key === theme;
          return (
            <button
              key={t.key}
              role="option"
              aria-selected={active}
              aria-label={t.label}
              tabIndex={open ? 0 : -1}
              onClick={(e: MouseEvent) => {
                setTheme(t.key, e);
                setOpen(false);
              }}
              class={`group flex items-center justify-center p-1.5 rounded-lg cursor-pointer transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring ${
                active
                  ? 'bg-surface-hover ring-2 ring-accent'
                  : 'hover:bg-surface-hover'
              }`}
            >
              <span
                class="block w-7 h-7 rounded-full transition-transform group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${t.previewBg} 50%, ${t.previewAccent} 50%)`,
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: active
                    ? 'var(--theme-accent)'
                    : 'var(--theme-border)',
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
