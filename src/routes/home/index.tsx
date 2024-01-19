import { Link } from 'preact-router';
import Card from '../../components/card';

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
  return (
    <div>
      <section>
        <h1 class="font-semibold text-2xl mb-8 tracking-tighter">
          hi, I'm Mike 👋
        </h1>
        <div class="grid gap-4">
          <p>
            Frontend engineer shaping smooth experiences on Microsoft SharePoint
            and OneDrive. Turning code into user-friendly magic for seamless
            digital journeys.
          </p>
        </div>
      </section>
      <section>
        <h2 class="font-semibold text-2xl mb-8 tracking-tighter">
          Recent Projects
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map(project => {
            return (
              <Card
                key={project.header}
                header={project.header}
                description={project.description}
                link={project.link}
              />
            );
          })}
        </div>
        <Link href="#" class="text-cod-gray-400 flex items-center gap-1">
          See all projects{' '}
          <svg
            class="w-3 h-3 text-cod-gray-400 dark:text-white"
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
      </section>
    </div>
  );
}

export default Home;
