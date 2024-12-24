import { Link } from 'preact-router/match';
import { useContext, useMemo } from 'preact/hooks';
import { GITHUB_ICON, LINKEDIN_ICON } from '../../assets/svgs/icons';
import { ThemeContext } from '../../contexts/theme.context';
import SocialMediaButton, {
  SocialMediaButtonProps,
} from '../buttons/socialMedia';
import ThemeButton from '../buttons/theme';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Contact',
    path: 'mailto:hello@delgaudio.dev',
    target: '_blank',
  },
];

const socialMediaButtonsData: SocialMediaButtonProps[] = [
  {
    svg: GITHUB_ICON,
    ariaLabel: 'GitHub',
    href: 'https://github.com/mikedelgaudio',
  },
  {
    svg: LINKEDIN_ICON,
    ariaLabel: 'LinkedIn',
    href: 'https://www.linkedin.com/in/michael-delgaudio/',
  },
];

function NavigationBar() {
  const { darkMode } = useContext(ThemeContext);

  const navLinks = useMemo(() => {
    return links.map(link => {
      return (
        <li key={link.name}>
          <Link
            activeClassName={darkMode ? '!text-white' : '!text-black'}
            href={link.path}
            target={link?.target ?? '_self'}
            class="block py-2 rounded md:hover:bg-transparent md:border-0 hover:text-slate-700 md:p-0 dark:hover:text-slate-500 dark:hover:bg-transparent focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-slate-300 dark:focus-visible:ring-slate-500 focus:outline-none text-slate-400"
          >
            {link.name}
          </Link>
        </li>
      );
    });
  }, [links, darkMode]);

  const socialMediaButtons = useMemo(() => {
    return socialMediaButtonsData.map(socialMediaButton => {
      return (
        <SocialMediaButton
          key={socialMediaButton.ariaLabel}
          {...socialMediaButton}
        />
      );
    });
  }, [socialMediaButtonsData]);

  return (
    <header class="flex items-center justify-between text-sm tracking-[.15em] uppercase mb-16">
      <a
        class="rounded border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-800 text-slate-900 dark:text-white bg-primary text-primary-content absolute p-3 m-3 skip-link focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-slate-300 dark:focus-visible:ring-slate-500 focus:outline-none"
        href="#main-content"
      >
        Skip Navigation
      </a>
      <nav>
        <ul class="flex items-center gap-4">{navLinks}</ul>
      </nav>
      <div class="grid sm:grid-cols-3 grid-cols-1 gap-2">
        {socialMediaButtons}
        <ThemeButton />
      </div>
    </header>
  );
}

export default NavigationBar;
