import { Link } from 'preact-router';
import { useMemo } from 'preact/hooks';
import { PROJECTS } from '../../assets/projects/projects';
import AsciiHero from '../../components/asciiHero';
import BlobBuddy from '../../components/blobBuddy';
import Card from '../../components/card';

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
          index={index}
        />
      );
    });
  }, [PROJECTS]);

  return (
    <div class="grid z-[1]">
      <section class="intro-section relative pt-10 pb-12 overflow-hidden">
        <div class="sm:max-w-[55%] mb-4">
          <AsciiHero text="mike d" />
          <h1 class="sr-only">Mike D — Software Engineer</h1>
        </div>

        <p class={'sm:max-w-[55%] text-base leading-[1.75]'}>
          Software engineer at{' '}
          <span class={'font-semibold text-[#22c55e]'}>Microsoft</span>.
          Previously at{' '}
          <span class={'font-semibold text-[#09a7f0]'}>Google</span> and{' '}
          <span class={'font-semibold text-[#f35326]'}>Colgate</span>. I build
          performance-driven systems and MCP tooling that empowers them. I focus
          on low-level performance, user experiences, and building interfaces
          that integrate LLMs into real workflows.
        </p>

        <div class="hidden sm:block absolute right-8 bottom-6 w-[140px] md:w-[180px] lg:w-[220px]">
          <BlobBuddy />
        </div>
      </section>

      <section class="now-block mb-12">
        <span class="now-label">What I'm working on</span>
        <p>
          Building <strong>MCP integrations</strong> that connect AI agents to
          real user file systems and workflow automations on the web. Focused on
          search, retrieval, and orchestration tooling that powers{' '}
          <strong>agentic experiences</strong> at scale.
        </p>
      </section>

      <section>
        <h2 class="font-semibold text-[1.1rem] pb-2 mb-6 border-b border-outline">
          Recent Projects
        </h2>
        <div class="grid gap-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projectsList}
          </div>
          <Link
            href="/projects"
            class="text-accent hover:underline text-[0.88rem] flex items-center gap-1"
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
