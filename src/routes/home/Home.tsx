import { animate, stagger } from 'motion/react';
import { Link } from 'preact-router';
import { useEffect, useMemo } from 'preact/hooks';
import avatar from '../../assets/avatar.webp';
import { PROJECTS } from '../../assets/projects/projects';
import Card from '../../components/card';

function Home() {
  useEffect(() => {
    // Trigger staggered animation for the skills list
    animate('.skill-item', { opacity: 1, y: [50, 0] }, { delay: stagger(0.2) });
    animate('.avatar', { opacity: 1, y: [50, 0] }, { delay: stagger(0.2) });
  }, []);

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
    <div class="grid gap-5 z-[1]">
      <section class="grid grid-cols-1 ">
        <div class={'flex items-center gap-4 flex-nowrap'}>
          <h1 class="font-semibold lg:text-[5rem] text-[3rem] tracking-tighter">
            Hi, I'm Mike
          </h1>
          <img
            src={avatar}
            alt="" // Intentionally left empty since the image is purely decorative
            class="opacity-0 avatar lg:w-16 lg:h-16 w-10 h-10"
          />
        </div>

        <div class={'grid lg:mt-[-1rem]  lg:gap-0 gap-1'}>
          <p class={'text-xl m-0'}>
            A frontend engineer who loves creating performant and user friendly
            experiences.
          </p>
          <p class={'text-base m-0'}>
            Currently at{' '}
            <span class={'font-bold text-[#2F855A] dark:text-[#81bc0d]'}>
              Microsoft
            </span>
            . Previously at{' '}
            <span class={'font-bold text-[#09a7f0]'}>Google</span> and{' '}
            <span class={'font-bold text-[#f35326]'}>Colgate</span>.
          </p>
        </div>
      </section>

      <section class="grid gap-4 dark:text-slate-100 pt-6 pb-6 rounded-xl">
        <h2 class="font-semibold text-2xl tracking-tighter">Recent Projects</h2>
        <div class="grid gap-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projectsList}
          </div>
          <Link
            href="/projects"
            class="hover:underline flex items-center gap-1"
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
