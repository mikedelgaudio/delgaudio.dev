import { Link } from 'preact-router/match';
import { useCallback } from 'preact/hooks';
import { ThemeProvider } from '../../contexts/theme.context';
import ThemeButton from '../buttons/theme';

function Header() {
  const links = [
    {
      name: 'Projects',
      path: '/projects',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  const renderLinks = useCallback(() => {
    return links.map(link => {
      return (
        <li key={link.name}>
          <Link
            activeClassName="bg-cod-gray-600 text-white"
            href={link.path}
            class="block py-2 rounded hover:bg-cod-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cod-gray-700 md:p-0 md:dark:hover:text-cod-gray-500 dark:hover:bg-cod-gray-700 dark:hover:text-white md:dark:hover:bg-transparent focus:z-10 focus:ring-2 focus:ring-cod-gray-300 dark:focus:ring-cod-gray-500 focus:outline-none"
          >
            {link.name}
          </Link>
        </li>
      );
    });
  }, [links]);

  return (
    <ThemeProvider>
      <header class="flex items-center justify-between text-sm tracking-[.15em] uppercase mb-16">
        <a
          class="rounded border-cod-gray-200 bg-cod-gray-50 dark:bg-cod-gray-900 dark:border-cod-gray-800 text-cod-gray-900 dark:text-white bg-primary text-primary-content absolute p-3 m-3 skip-link focus:z-10 focus:ring-2 focus:ring-cod-gray-300 dark:focus:ring-cod-gray-500 focus:outline-none"
          href="#main-content"
        >
          Skip Navigation
        </a>
        <nav>
          <ul class="flex items-center gap-4">{renderLinks()}</ul>
        </nav>
        <ThemeButton />
      </header>
    </ThemeProvider>
  );
}

export default Header;
