interface EduCardProps {
  company: string;
  initial: number;
  finalize: number;
  curse: string;
}

export function EduCard({ company, initial, finalize, curse }: EduCardProps) {
  return (
    <span className="flex flex-col text-gray-100 mt-[20px]">
      <li className="font-bold text-sm  ">{company}</li>
      <span className="text-xs px-5">{initial} - {finalize}</span>
      <span className="text-xs px-5">{curse}</span>
    </span>
  );
}
