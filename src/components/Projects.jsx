import { useEffect } from "react";

import axios from "axios";

function Projects() {
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get("data/projects.json");
        console.log(res.data.projects);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProject();
  }, []);

  return <div>Projects</div>;
}

export default Projects;
