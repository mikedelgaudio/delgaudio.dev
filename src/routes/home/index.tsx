import { Link } from 'preact-router';
import { useMemo } from 'preact/hooks';
import avatar from '../../assets/avatar.jpg';
import { PROJECTS } from '../../assets/projects/projects';
import Card from '../../components/card';
import Header from '../../components/header';

function Home() {
  const projectsList = useMemo(() => {
    return PROJECTS.map((project, index) => {
      if (index > 2) return;
      return (
        <Card
          key={project.header}
          header={project.header}
          description={project.description}
          link={project.link}
        />
      );
    });
  }, [PROJECTS]);

  return (
    <div class="grid gap-10">
      <section class="grid grid-cols-3 sm:grid-cols-4 gap-4">
        <div class="col-span-3">
          <Header {...{ message: "hi, I'm Mike 👋" }} />
          <p>
            Frontend engineer creating performant and user friendly experiences
            on Microsoft SharePoint and OneDrive.
          </p>
        </div>
        <img
          class="rounded-full w-36 h-36 object-cover hidden sm:block"
          src={avatar}
          alt=""
        />
      </section>
      <section class="grid gap-4">
        <h2 class="font-semibold text-2xl tracking-tighter">Recent Projects</h2>
        <div class="grid gap-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projectsList}
          </div>
          <Link
            href="/projects"
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
