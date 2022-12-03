interface tecCardProps {
  name: string;
}

export function TecCard({ name }: tecCardProps) {
  return (
    <span className="rounded-[30px] bg-gray-100 w-[86px] h-[24px] flex justify-center  items-center mt-5 gap-1 ">
      <p className="font-semibold text-[10px] ">{name}</p>
    </span>
  );
}
