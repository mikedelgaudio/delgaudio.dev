import { Link } from 'preact-router';
import { useMemo } from 'preact/hooks';
import Card from '../../components/card';
import Header from '../../components/header';

const projects = [
  {
    header:
      'Noteworthy technology acquisitions 2021 Noteworthy technology acquisitions 2021',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    link: 'https://www.zdnet.com/article/noteworthy-technology-acquisitions-2021/',
  },
  {
    header: 'Noteworthy technology acquisitions 2021',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    link: 'https://www.zdnet.com/article/noteworthy-technology-acquisitions-2021/',
  },
  {
    header: 'Noteworthy technology acquisitions 2021',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    link: 'https://www.zdnet.com/article/noteworthy-technology-acquisitions-2021/',
  },
];

function Home() {
  const projectsList = useMemo(() => {
    return projects.map(project => {
      return (
        <Card
          key={project.header}
          header={project.header}
          description={project.description}
          link={project.link}
        />
      );
    });
  }, [projects]);

  return (
    <div class="grid gap-10">
      <section>
        <Header {...{ message: "hi, I'm Mike 👋" }} />
        <p>
          Frontend engineer shaping smooth experiences on Microsoft SharePoint
          and OneDrive. Turning code into user-friendly magic for seamless
          digital journeys.
        </p>
      </section>
      <section class="grid gap-4">
        <h2 class="font-semibold text-2xl tracking-tighter">Recent Projects</h2>
        <div class="grid gap-2">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            {projectsList}
          </div>
          <Link
            href="#"
            class="text-cod-gray-400 hover:text-cod-gray-700 dark:hover:text-cod-gray-500 flex items-center gap-1"
          >
            See all projects{' '}
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
