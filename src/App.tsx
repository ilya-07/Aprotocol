import { NavigationType } from "./common/types";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/components/Sidebar";
import { Routes, Route } from "react-router-dom";

import Bridge from "./pages/Bridge";
import AiAudit from "./pages/AiAudit";
import Dex from "./pages/Dex";
import Quests from "./pages/Quests";
import Staking from "./pages/Staking";
import PortfolioTracker from "./pages/PortfolioTracker";
function App() {
  return (
    <div className="pl-[250px] bg-[#0b0e14] text-white flex flex-col justify-between min-h-screen">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/">
          <Route index element={<PortfolioTracker />} />
          <Route path={NavigationType.Bridge} element={<Bridge />} />
          <Route path={NavigationType.AiAudit} element={<AiAudit />} />
          <Route path={NavigationType.Dex} element={<Dex />} />
          <Route path={NavigationType.Quests} element={<Quests />} />
          <Route path={NavigationType.Staking} element={<Staking />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
