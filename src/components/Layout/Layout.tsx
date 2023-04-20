import { Outlet } from "react-router-dom";

import Header from "./header";
import Sidebar from "./sidebar";

export default function Layout() {
  return (
    <div className="pl-[200px] 2xl:pl-[250px] bg-[#0b0e14] text-white flex flex-col justify-between min-h-screen max-w-screen overflow-x-hidden">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}
