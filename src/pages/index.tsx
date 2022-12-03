import {
  MapPin,
  Briefcase,
  GithubLogo,
  Globe,
  Envelope,
  LinkedinLogo,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { EduCard } from "../components/edu-card";
import { IconLabel } from "../components/icon-label";
import { ProjectCard } from "../components/project-card";
import { TecCard } from "../components/tec-card";

interface ProjectProps {
  id: number;
  html_url: string;
  name: string;
  description: string;
  forks_count: number;
  language: string;
  star_count: number;
}

export default function Home(props: any) {
  const [projects, setProjects] = useState<ProjectProps[]>();

  useEffect(() => {
    setProjects(props.data);
  }, []);

  return (
    <div className="bg-gray-500 flex gap-6">
      <div className="flex flex-col px-7 mt-[40px]">
        <div className="w-[348px] h-[292px] drop-shadow-custom rounded-[20px] flex-col flex justify-center items-center bg-gray-200 ">
          <img
            className="h-[128px] w-[128px] rounded-full border-2 border-green mb-7"
            src="https://avatars.githubusercontent.com/u/65878175?v=4"
            alt="Ricardo foto"
          />
          <h3 className="text-xl text-gray-100 font-bold">Ricardo Nunes Paz</h3>
          <h4 className="text-sm text-gray-100 font-normal">
            Desenvolvedor FullStack
          </h4>
        </div>
        <div className="w-[348px] h-[348px] drop-shadow-custom mt-[30px] p-5 gap-5 bg-gray-200 flex flex-col space justify-start items-start rounded-[20px] px-9 py-[30px]">
          <IconLabel icon={<MapPin />} label="Brasil" />
          <IconLabel icon={<Briefcase />} label="Valferraco" />
          <a href="https://github.com/ricardonun" target="noreferrer">
            <IconLabel icon={<GithubLogo />} label="ricardonun" hasHover />
          </a>
          <a href="https://www.linkedin.com/in/ricardonpaz/" target="noreferrer">
            <IconLabel icon={<LinkedinLogo />} label="ricardonpaz" hasHover />
          </a>
          <a href="https://www.ricardonun.com" target="noreferrer">
            <IconLabel icon={<Globe />} label="ricardonun.com" hasHover />
          </a>
          <IconLabel icon={<Envelope />} label="riic.nun@gmail.com" />
        </div>
        <div className="w-[348px] h-[176px] drop-shadow-custom mt-[30px] bg-gray-200 flex flex-col p-5 rounded-[20px]">
          <h2 className="text-lg text-gray-100 font-bold">Tecnologias</h2>
          <div className="flex justify-start items-start gap-[15px]">
            <TecCard name="React.Js" />
            <TecCard name="JavaScript" />
            <TecCard name="Node.Js" />
          </div>
          <div className="flex justify-start items-start gap-[15px]">
            <TecCard name="HTML" />
            <TecCard name="CSS" />
            <TecCard name="Github" />
          </div>
        </div>
        <div className="w-[348px] h-[352px] drop-shadow-custom mt-[30px] bg-gray-200 rounded-[20px] flex flex-col p-5">
          <h2 className="text-lg text-gray-100 font-bold">Educação</h2>
          <EduCard
            company="Eniac"
            finalize={2020}
            curse="Ciencias Contabeis"
            initial={2016}
          />
          <EduCard
            company="Rocketseat"
            finalize={2022}
            curse="Trilha React.js"
            initial={2022}
          />
          <EduCard
            company="Wizard"
            finalize={2023}
            curse="Ingles"
            initial={2022}
          />
        </div>
      </div>

      <div>
        <>
          <div className="w-[928px] h-[86px] bg-gray-200 rounded flex justify-between items-center mt-10">
            <p className="text-gray-100 p-4 font-bold text-xl">Meus projetos</p>

            <p className="text-gray-100 p-4 text-x">Veja Todos</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {projects?.map((projects: ProjectProps) => (
              <ProjectCard
                key={projects?.id}
                link={projects.html_url}
                name={projects.name}
                description={projects.description}
                forks={projects.forks_count}
                language={projects.language}
                star={projects.star_count}
              />
            ))}
          </div>
        </>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.github.com/users/ricardonun/repos`);
  const data = await res.json();

  return { props: { data } };
}
