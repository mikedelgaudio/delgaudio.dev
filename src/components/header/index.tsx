import { Link } from 'preact-router/match';
import { useCallback, useState } from 'preact/hooks';
import ThemeButton from '../buttons/theme';

function Header() {
  const links = [
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Work',
      path: '/work',
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
            activeClassName="bg-slate-600 text-white"
            href={link.path}
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-700 md:p-0 dark:text-white md:dark:hover:text-slate-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            {link.name}
          </Link>
        </li>
      );
    });
  }, [links]);

  const [toggled, setToggled] = useState(false);
  const toggleMenu = () => {
    setToggled(!toggled);
  };

  return (
    <header class="py-2 text-lg border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 tracking-[.15em] uppercase fixed z-10 inset-x-0 flex items-center px-4">
      <a
        class="border-gray-200 bg-gray-50 dark:bg-gray-900 dark:border-gray-800 text-gray-900 dark:text-white transition left-0 bg-primary text-primary-content absolute p-3 m-3 -translate-y-16 focus:translate-y-0"
        href="#main-content"
      >
        Skip Navigation
      </a>
      <nav class="container mx-auto">
        <div class="flex flex-wrap items-center justify-between p-4">
          <a
            href="/"
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >
            Mike DelGaudio
          </a>

          <div class="flex items-center">
            <ThemeButton className="md:hidden w-full block w-auto" />
            <button
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-solid-bg"
              aria-expanded={toggled}
              onClick={toggleMenu}
              onFocus={e => console.log(e)}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            class={`${toggled ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          >
            <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {renderLinks()}
            </ul>
          </div>
        </div>
      </nav>
      <ThemeButton className="hidden w-full md:block md:w-auto" />
    </header>
  );
}

export default Header;
