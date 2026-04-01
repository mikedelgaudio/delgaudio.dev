import { useMemo } from 'preact/hooks';
import { PROJECTS } from '../../assets/projects/projects';
import Card from '../../components/card';
import { useTitle } from '../../hooks/useTitle';

function Projects() {
  useTitle('Projects');

  const projectsList = useMemo(() => {
    return PROJECTS.map((project, index) => {
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
    <div>
      <h1 class="font-semibold text-3xl mb-8 tracking-tighter">Projects</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projectsList}
      </div>
    </div>
  );
}

export default Projects;
