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
    <div className="flex justify-center gap-[4rem]  border-b-2 py-3 bg-purple-500">
      <a className="h-fit" target="blank" href={data.live_url}>
        <img
          className="h-[300px]	 cursor-pointer rounded-2xl"
          src={data.img}
          alt={data.title}
        />
      </a>
      <div className="flex items-center flex-col gap-6 ">
        <h3 className="text-2xl">{data.title}</h3>
        <p className="w-80">{data.description}</p>

        <div className="flex">
          <ul>
            <p className="text-center">Tech Stack</p>
            <li className="flex ">{data.tech_stack}</li>
          </ul>
        </div>
        <a className="mt-auto " target="blank" href={data.github}>
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

export default Projects;
