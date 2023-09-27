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

  return projects?.map((project) => {
    return <ProjectContent data={project} key={project.title} />;
  });
}

function ProjectContent({ data }) {
  return (
    <div className="flex justify-center gap-6 mb-6">
      <a target="blank" href={data.live_url}>
        <img
          className="h-[300px]	cursor-pointer rounded-2xl"
          src={data.img}
          alt={data.title}
        />
      </a>
      <div className="flex items-center flex-col gap-6 ">
        <p className="w-60">{data.description}</p>

        <div className="flex">
          <ul>
            <p className="text-center">Tech Stack</p>
            <li className="flex gap-3">{data.tech_stack}</li>
          </ul>
        </div>
        <a className="mt-auto" target="blank" href={data.github}>
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

export default Projects;
