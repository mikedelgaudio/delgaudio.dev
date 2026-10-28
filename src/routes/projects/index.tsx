import { useEffect } from 'preact/hooks';

// The old /projects page now lives on the home page; send saved links there
function Projects() {
  useEffect(() => {
    window.location.replace('/#projects');
  }, []);
  return null;
}

export default Projects;
