import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RoutesType, routes } from "@/routes";

import { NavItem } from "./components/NavItem";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState<RoutesType>("portfolio");

  const location = useLocation();

  useEffect(() => {
    const routeKey =
      location.pathname === "/"
        ? "portfolio"
        : Object.keys(routes).find((key: string) =>
            location.pathname.includes(key)
          );

    if (routeKey) {
      setActiveTab(routeKey as RoutesType);
    }
  }, [location]);

  return (
    <nav>
      <ul className="flex flex-col text-[18px] font-medium duration-500">
        {Object.keys(routes).map((key) => {
          const route = routes[key as RoutesType];
          return (
            <NavItem
              title={route.title}
              link={route.link()}
              isActive={key === activeTab}
              icon={route.icon!}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
