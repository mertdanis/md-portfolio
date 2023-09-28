import { useEffect, useState } from "react";

import axios from "axios";
import Title from "./Title";

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
    <div className="flex justify-center ">
      <div className="flex justify-center gap-[4rem]  border-b-2 p-6 rounded-2xl bg-slate-300	 my-3">
        <a className="h-fit" target="blank" href={data.live_url}>
          <img
            className="h-[330px]	transition duration-700 cursor-pointer rounded-2xl hover:-translate-y-3"
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
          <div className="mt-auto flex gap-3">
            <a target="blank" href={data.github}>
              GitHub Repo
            </a>
            <a href="">Live URL</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
