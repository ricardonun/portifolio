import { cloneElement, ReactNode } from "react";

export interface iconLabelProps {
  icon: JSX.Element;
  label: String;
  hasHover?: boolean;
}

export function IconLabel({ icon, label, hasHover = false }: iconLabelProps) {
  return (
    <span className={`flex items-center justify-center gap-5 text-gray-100 ${hasHover ?  "hover:text-green" : ""}`}>
      {cloneElement(icon,{width: 24, height: 24})}
      <p className="text-xs flex ">{label}</p>
    </span>
  );
}
