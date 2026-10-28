import { GITHUB_ICON, GLOBE_ICON, YOUTUBE_ICON } from '../../assets/svgs/icons';
import { SIDE_PROJECTS } from '../../content/profile';
import Reveal from '../reveal';

// The icon says where the link goes: a live site, a demo video or the source
const ICON = {
  'live site': GLOBE_ICON,
  'demo video': YOUTUBE_ICON,
  source: GITHUB_ICON,
};

function SideProjects() {
  return (
    <ul class="grid gap-2 text-[15px] leading-[24px] text-ink-muted">
      {SIDE_PROJECTS.map(project => (
        <Reveal as="li" key={project.name} class="flex items-start gap-2.5">
          <span class="mt-1 shrink-0 text-ink-subtle" aria-hidden="true">
            {ICON[project.linkType]}
          </span>
          <span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener"
              data-native
              aria-label={`${project.name}, ${project.linkType}`}
            >
              {project.name}
            </a>
            : {project.what}
          </span>
        </Reveal>
      ))}
    </ul>
  );
}

export default SideProjects;
