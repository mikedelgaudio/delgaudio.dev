import { useMemo } from 'preact/hooks';
import { PROJECTS } from '../../assets/projects/projects';
import Card from '../../components/card';
import Header from '../../components/header';

function Projects() {
  const projectsList = useMemo(() => {
    return PROJECTS.map(project => {
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
    <div>
      <Header {...{ message: 'Projects' }} />
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">{projectsList}</div>
    </div>
  );
}

export default Projects;
