import { BLOG, EMAIL, GITHUB, LINKEDIN, WORK } from '../../content/profile';
import ExperienceList from '../../components/experienceList';
import PostList from '../../components/postList';
import SideProjects from '../../components/sideProjects';
import Reveal from '../../components/reveal';
import WorkRow from '../../components/workRow';

const sectionHeading = 'text-lg font-semibold text-ink mb-6';

function Home() {
  return (
    <div class="grid gap-12 sm:gap-16 pb-8">
      <section class="fade-in flex flex-col items-center justify-center text-center min-h-[48svh] sm:min-h-[54svh] py-12 sm:py-16">
        <h1 class="font-display font-normal text-[52px] leading-[54px] sm:text-[88px] sm:leading-[88px] tracking-[-0.025em] text-ink mb-3 sm:mb-4">
          Mike DelGaudio
        </h1>
        <p class="text-lg leading-[26px] sm:text-[22px] sm:leading-[30px] font-medium text-ink mb-5 sm:mb-6">
          Software engineer, product and AI agents
        </p>
        <p class="text-[17px] leading-[28px] sm:text-xl sm:leading-[32px] text-ink-muted max-w-[640px] mx-auto">
          At Microsoft, I build product experiences across SharePoint and
          OneDrive for the 100M+ people who use them every month, and the agent
          infrastructure behind Copilot in SharePoint.
        </p>
        <p class="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-base">
          <a href={`mailto:${EMAIL}`} data-native>
            Email
          </a>
          <a href={GITHUB} target="_blank" rel="noopener" data-native>
            GitHub
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener" data-native>
            LinkedIn
          </a>
          <a href={BLOG} target="_blank" rel="noopener" data-native>
            Blog
          </a>
        </p>
      </section>

      <section id="work" aria-labelledby="work-heading" class="scroll-mt-8">
        <Reveal as="h2" id="work-heading" class={sectionHeading}>
          Work
        </Reveal>
        <ul class="grid gap-10">
          {WORK.map(item => (
            <WorkRow key={item.title} item={item} />
          ))}
        </ul>
      </section>

      <section
        id="writing"
        aria-labelledby="writing-heading"
        class="scroll-mt-8"
      >
        <Reveal as="h2" id="writing-heading" class={sectionHeading}>
          Writing
        </Reveal>
        <PostList />
      </section>

      <section
        id="experience"
        aria-labelledby="experience-heading"
        class="scroll-mt-8"
      >
        <Reveal as="h2" id="experience-heading" class={sectionHeading}>
          Experience
        </Reveal>
        <ExperienceList />
      </section>

      <section
        id="projects"
        aria-labelledby="projects-heading"
        class="scroll-mt-8"
      >
        <Reveal as="h2" id="projects-heading" class={sectionHeading}>
          Side projects
        </Reveal>
        <SideProjects />
      </section>
    </div>
  );
}

export default Home;
