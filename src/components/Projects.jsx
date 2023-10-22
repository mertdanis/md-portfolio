import { useEffect, useState } from "react";
import Title from "./Title";
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
    <div className="flex flex-col w-[50vw]">
      <div className="flex items-center  gap-[4rem]  border-b-2 p-6 rounded-2xl border-2 	my-3">
        <a className="h-fit" target="blank" href={data.live_url}>
          <img
            className=" h-full transition duration-700 cursor-pointer rounded-2xl hover:-translate-y-3"
            src={data.img}
            alt={data.title}
          />
        </a>
        <div className="flex items-center flex-col gap-6 h-full justify-center">
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
            <a target="blank" href={``}>
              Proje URL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
