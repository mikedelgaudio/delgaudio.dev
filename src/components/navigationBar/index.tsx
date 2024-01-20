import { Link } from 'preact-router/match';
import { useCallback, useContext } from 'preact/hooks';
import { ThemeContext } from '../../contexts/theme.context';
import ThemeButton from '../buttons/theme';

function NavigationBar() {
  const { darkMode } = useContext(ThemeContext);

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
      path: '/contact',
    },
  ];

  const renderLinks = useCallback(() => {
    return links.map(link => {
      return (
        <li key={link.name}>
          <Link
            activeClassName={darkMode ? '!text-white' : '!text-black'} // TODO Need's to be fixed
            href={link.path}
            class="block py-2 rounded md:hover:bg-transparent md:border-0 md:hover:text-cod-gray-700 md:p-0 dark:hover:text-cod-gray-500 dark:hover:bg-transparent focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-cod-gray-300 dark:focus-visible:ring-cod-gray-500 focus:outline-none text-cod-gray-400"
          >
            {link.name}
          </Link>
        </li>
      );
    });
  }, [links]);

  return (
    <header class="flex items-center justify-between text-sm tracking-[.15em] uppercase mb-16">
      <a
        class="rounded border-cod-gray-200 bg-cod-gray-50 dark:bg-cod-gray-900 dark:border-cod-gray-800 text-cod-gray-900 dark:text-white bg-primary text-primary-content absolute p-3 m-3 skip-link focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-cod-gray-300 dark:focus-visible:ring-cod-gray-500 focus:outline-none"
        href="#main-content"
      >
        Skip Navigation
      </a>
      <nav>
        <ul class="flex items-center gap-4">{renderLinks()}</ul>
      </nav>
      <ThemeButton />
    </header>
  );
}

export default NavigationBar;
