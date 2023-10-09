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
    <div className="flex  ">
      <div className="flex items-center  gap-[4rem]  border-b-2 p-6 rounded-2xl bg-slate-300 w-[60vw]	my-3">
        <a className="h-fit" target="blank" href={data.live_url}>
          <img
            className="w-50rem h-full transition duration-700 cursor-pointer rounded-2xl hover:-translate-y-3"
            src={data.img}
            alt={data.title}
          />
        </a>
        <div className="flex items-center flex-col gap-6 ">
          <h3 className="text-2xl">{data.title}</h3>
          <p className="w-80">{data.description}</p>

          <div className="flex justify-between items-center w-full">
            <p className="">Kullanılan Teknolojiler</p>
            <ul className="flex flex-col">
              <li>{data.tech_stack}</li>
            </ul>
          </div>

          <div className=" flex gap-3">
            <a target="blank" href={data.github}>
              GitHub Repo URL
            </a>
            <a target="blank" href="">
              Proje URL
            </a>
          </div>
          <div className="flex w-full justify-between">
            <p>Proje Durumu</p>
            <p
              className={`uppercase font-bold ${
                data.state === "done" ? "text-green-500" : "text-red-500"
              }`}
            >
              {data.state}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
