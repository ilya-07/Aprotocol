import { NavigationType } from "./common/types";
import { Routes, Route } from "react-router-dom";

import Bridge from "./pages/Bridge";
import AiAudit from "./pages/AiAudit";
import Dex from "./pages/Dex";
import Quests from "./pages/Quests";
import Staking from "./pages/Staking";
import PortfolioTracker from "./pages/PortfolioTracker";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PortfolioTracker />} />
        <Route path={NavigationType.Bridge} element={<Bridge />} />
        <Route path={NavigationType.AiAudit} element={<AiAudit />} />
        <Route path={NavigationType.Dex} element={<Dex />} />
        <Route path={NavigationType.Quests} element={<Quests />} />
        <Route path={NavigationType.Staking} element={<Staking />} />
      </Route>
    </Routes>
  );
}

export default App;
