import { Folder, GitBranch, Star } from "phosphor-react";

interface ProjectCardProps {
  name: string;
  link: string;
  description: string;
  star: number;
  forks: number;
  language: string;
}

export function ProjectCard({
  name,
  link,
  description,
  star,
  forks,
  language,
}: ProjectCardProps) {
  return (
    <div className="w-[437px] h-[186px] bg-gray-200 rounded-[20px] mt-[31px] flex flex-col justify-start">
      <a href={link}>
        <div className="flex items-center px-[30px] mt-[30px] gap-4">
          <Folder className="h-[20px] w-[20px] text-gray-100 font-extrabold " />
          <span className="text-sm font-bold text-gray-100">{name}</span>
        </div>
        <p className="text-xs font-normal text-gray-100 px-[30px] mt-[24px]">
          {description}
        </p>

        <div className="flex gap-4 px-[30px] text-gray-100 font-bold mt-[43px] justify-between">
          <div className="flex justify-center items-center gap-[8px]">
            <Star />
            <span>{star}</span>

            <GitBranch />
            <span>{forks}</span>
          </div>

          <div>
            <p>{language}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
