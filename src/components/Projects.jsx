import { useEffect, useState } from "react";

import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get("data/projects.json");

        setProjects(res.data.projects);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProject();
  }, []);

  console.log(projects);

  return projects?.map((project) => {
    return <ProjectContent data={project} key={project.title} />;
  });
}

function ProjectContent({ data }) {
  console.log(data);
  return (
    <>
      <div className="flex w-30">
        <img src={data.img} alt={data.title} />
        <div className="flex items-center flex-col gap-6 bg-red-500 text-white-500">
          <p>{data.description}</p>
          <ul className="">
            <li>{data.tech_stack}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Projects;
