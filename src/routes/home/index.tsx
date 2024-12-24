import { Link } from 'preact-router';
import { useMemo } from 'preact/hooks';
import avatar from '../../assets/avatar.webp';
import CP_LOGO from '../../assets/companies/colgate.webp';
import GOOGLE_LOGO from '../../assets/companies/google.webp';
import MSFT_LOGO from '../../assets/companies/microsoft.webp';
import { PROJECTS } from '../../assets/projects/projects';
import Card from '../../components/card';
import {
  Carousel,
  ICarouselImage,
  ICarouselProps,
} from '../../components/carousel/Carousel';
import FadeInOnScroll from '../../components/fadeInOnScroll/FadeInOnScroll';
import Header from '../../components/header';

const skills = [
  'Preact',
  'React',
  'TypeScript',
  'JavaScript',
  'SCSS',
  'YAML',
  'Docker',
];

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

  const carouselProps: ICarouselProps = useMemo(() => {
    const logos: ICarouselImage[] = [
      {
        src: MSFT_LOGO,
        alt: 'Microsoft logo',
      },
      {
        src: GOOGLE_LOGO,
        alt: 'Google logo',
      },
      {
        src: CP_LOGO,
        alt: 'Colgate-Palmolive logo',
      },
    ];

    return { images: logos, intervalInMs: 3000 };
  }, []);

  return (
    <div class="grid gap-5">
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
      <FadeInOnScroll>
        <section class="grid gap-4 md:grid-cols-3 grid-cols-1">
          <div class="md:col-span-2 grid gap-4 bg-slate-800 p-6 text-white rounded-xl">
            <h2 class="font-semibold text-2xl tracking-tighter">Skills</h2>
            <div class="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span
                  key={skill}
                  class="p-3 flex items-center border-2 border-solid rounded-full border-slate-200 dark:border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div class="md:col-span-1 gap-4 grid bg-slate-200 dark:bg-slate-300 p-6 text-slate-800 rounded-xl">
            <h2 class="font-semibold text-2xl tracking-tighter">Experience</h2>
            <Carousel {...carouselProps} />
          </div>
        </section>
      </FadeInOnScroll>
      <FadeInOnScroll>
        <section class="grid gap-4 bg-slate-600 text-slate-100 p-6 rounded-xl">
          <h2 class="font-semibold text-2xl tracking-tighter">
            Recent Projects
          </h2>
          <div class="grid gap-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {projectsList}
            </div>
            <Link
              href="/projects"
              class="hover:text-slate-200 dark:hover:text-slate-200 flex items-center gap-1"
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
      </FadeInOnScroll>
    </div>
  );
}

export default Home;
