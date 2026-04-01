import { Link } from 'preact-router/match';
import { useMemo } from 'preact/hooks';
import { GITHUB_ICON, LINKEDIN_ICON } from '../../assets/svgs/icons';
import SocialMediaButton, {
  SocialMediaButtonProps,
} from '../buttons/socialMedia';
import ThemeSelector from '../themeSelector';

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
  const navLinks = useMemo(() => {
    return links.map(link => {
      return (
        <li key={link.name}>
          <Link
            activeClassName="!text-on-surface"
            href={link.path}
            target={link?.target ?? '_self'}
            class="block py-2 rounded md:hover:bg-transparent md:border-0 hover:text-link-hover md:p-0 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring focus:outline-hidden text-on-surface-muted"
          >
            {link.name}
          </Link>
        </li>
      );
    });
  }, [links]);

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
    <header class="flex items-center justify-between font-mono text-[0.82rem] tracking-normal mb-10">
      <a
        class="rounded border-outline bg-surface-alt text-on-surface absolute p-3 m-3 skip-link focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring focus:outline-hidden"
        href="#main-content"
      >
        Skip Navigation
      </a>
      <nav>
        <ul class="flex items-center gap-7">{navLinks}</ul>
      </nav>
      <div class="grid sm:grid-cols-3 grid-cols-1 gap-2">
        {socialMediaButtons}
        <ThemeSelector />
      </div>
    </header>
  );
}

export default NavigationBar;
