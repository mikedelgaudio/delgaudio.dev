import { useContext, useEffect, useRef, useState } from 'preact/hooks';
import {
  GITHUB_ICON,
  LINKEDIN_ICON,
  MARK,
  MOON_ICON,
  SUN_ICON,
} from '../../assets/svgs/icons';
import { EMAIL, GITHUB, LINKEDIN } from '../../content/profile';
import { ThemeContext } from '../../contexts/theme.context';

const links = [
  { name: 'Work', href: '/#work' },
  { name: 'Writing', href: '/#writing' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: `mailto:${EMAIL}` },
];

const social = [
  { name: 'GitHub', href: GITHUB, icon: GITHUB_ICON },
  { name: 'LinkedIn', href: LINKEDIN, icon: LINKEDIN_ICON },
];

const iconButton =
  'inline-flex items-center justify-center w-10 h-10 sm:w-9 sm:h-9 rounded-md text-ink-muted hover:text-ink hover:bg-surface-raised hover:no-underline cursor-pointer';

function NavigationBar() {
  const { toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sheetTop, setSheetTop] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    // The sheet starts just under the header row and the page behind stops scrolling
    setSheetTop(
      Math.max(0, headerRef.current?.getBoundingClientRect().bottom ?? 0),
    );
    const root = document.documentElement;
    root.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    // Close if the viewport grows past the phone layout
    const wide = window.matchMedia('(min-width: 40rem)');
    const onWide = (e: MediaQueryListEvent) => e.matches && setMenuOpen(false);
    document.addEventListener('keydown', onKeyDown);
    wide.addEventListener('change', onWide);
    return () => {
      root.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      wide.removeEventListener('change', onWide);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header class="border-b border-hairline text-sm leading-5">
      <a class="skip-link font-sans" href="#main-content">
        Skip to content
      </a>
      <div
        ref={headerRef}
        class="relative z-50 flex items-center gap-6 py-4 sm:py-6 bg-surface sm:bg-transparent"
      >
        <a
          href="/"
          aria-label="Mike DelGaudio, home"
          class="inline-flex items-center p-1 -m-1 rounded-md text-ink hover:text-ink"
          onClick={closeMenu}
        >
          {MARK}
        </a>

        <nav aria-label="Primary" class="hidden sm:block ml-auto">
          <ul class="flex gap-6">
            {links.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  data-native
                  class="text-ink-muted hover:text-ink hover:no-underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div class="ml-auto sm:ml-0 flex items-center gap-1">
          <div class="hidden sm:flex items-center gap-1">
            {social.map(item => (
              <a
                key={item.name}
                class={iconButton}
                href={item.href}
                target="_blank"
                rel="noopener"
                data-native
              >
                {item.icon}
                <span class="sr-only">{item.name}</span>
              </a>
            ))}
          </div>
          {/* Both icons render and CSS shows the right one, so the prerendered
              HTML matches the browser no matter which theme loads */}
          <button
            type="button"
            class={iconButton}
            onClick={() => toggleTheme()}
            aria-label="Switch light or dark theme"
            title="Switch light or dark theme"
          >
            <span class="theme-icon-night">{MOON_ICON}</span>
            <span class="theme-icon-paper">{SUN_ICON}</span>
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            class={`${iconButton} sm:hidden`}
            onClick={() => setMenuOpen(open => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span class="burger" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Menu"
        aria-hidden={!menuOpen}
        data-open={menuOpen || undefined}
        style={{ top: `${sheetTop}px` }}
        class="menu-sheet sm:hidden"
        {...(!menuOpen && { inert: true })}
      >
        <div class="px-6 pt-4 pb-10">
          <ul>
            {links.map((link, i) => (
              <li key={link.name} class="menu-item" style={{ '--i': i }}>
                <a
                  href={link.href}
                  data-native
                  onClick={closeMenu}
                  class="flex items-center min-h-14 text-2xl font-medium text-ink hover:text-accent hover:no-underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div
            class="menu-item grid grid-cols-2 gap-3 pt-8"
            style={{ '--i': links.length }}
          >
            {social.map(item => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener"
                data-native
                onClick={closeMenu}
                class="flex items-center justify-center gap-2.5 min-h-12 px-4 rounded-lg border border-border-strong font-sans text-base font-medium text-ink hover:bg-surface-raised hover:no-underline [&_svg]:w-5 [&_svg]:h-5"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavigationBar;
