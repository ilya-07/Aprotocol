import { ReactElement } from "react";
import { Link } from "react-router-dom";

import cn from "classnames";

interface NavItemProps {
  title: string;
  link: string;
  isActive: boolean;
  icon: ReactElement;
}
export function NavItem({ title, link, isActive, icon }: NavItemProps) {
  return (
    <li>
      <Link
        to={link}
        className={cn(
          "flex items-center gap-3 py-5 px-6 w-full border relative" ,
          isActive
            ? "text-primaryS rounded-r-[60px] border-[#1B1E28] bg-[#101319] shadSidebar"
            : "text-white rounded-[60px] border-transparent"
        )}
      >
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  );
}
