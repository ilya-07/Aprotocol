// Импортируем дефолты для react react-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Импортируем библиотеку для уведомлений
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Импортируем компоненты страниц
import Bridge from "./pages/Bridge";
import AiAudit from "./pages/AiAudit";
import Dex from "./pages/Dex";
import Quests from "./pages/Quests";
import Staking from "./pages/Staking";
import PortfolioTracker from "./pages/PortfolioTracker";

import { Layout } from "./components/Layout";
import Page404 from "./pages/404Page";
import { ReactElement } from "react";
import {
  AiAuditIcon,
  BridgeIcon,
  DexIcon,
  PersonIcon,
  QuestsIcon,
  StakingIcon,
} from "./assets/icons";

// Cоздаем объект в котором отражена вся структура роутов
// Состоит из объекта Логических роутов и объекта Физических под-роутов
// Логические роуты - это роуты которые отображаются в адресной строке
// Физические под-роуты - это роуты которые отображаются внутри роута
// Например, роут /:owner/:repository/ - это логический роут
// А роуты /:owner/:repository/contributors/ и /:owner/:repository/users/ - это физические под-роуты
// И Логических роут нужен для обособления и группировки физических под-роутов
// В объекте каждого роута есть path - это путь к роуту
// И link - это функция которая возвращает путь к роуту
// В функцию link передаются параметры которые нужны для формирования пути
// В логическом роуте есть children - это объект для логических или физических под-роутов

export type RoutesType =
  | "portfolio"
  | "dex"
  | "bridge"
  | "staking"
  | "aiaudit"
  | "quests";

export interface IRoute {
  title: string;
  path: string;
  icon?: ReactElement;
  link: (...args: any[]) => string;
  children?: Record<string, IRoute>;
  disabled?: boolean;
}

PortfolioTracker;
Dex;
Bridge;
Staking;
AiAudit;
Quests;
export const routes: Record<RoutesType, IRoute> = {
  portfolio: {
    title: "Portfolio Tracker",
    path: "/",
    link: () => `/`,
    icon: <PersonIcon />,
  },
  dex: {
    title: "DEX",
    path: "/dex",
    link: () => `/dex`,
    icon: <DexIcon />,
  },
  bridge: {
    title: "Bridge",
    path: "/bridge",
    link: () => `/bridge`,
    icon: <BridgeIcon />,
  },
  staking: {
    title: "Staking",
    path: "/staking",
    link: () => `/staking`,
    icon: <StakingIcon />,
    // link: (network: string) => `/names/market/${network}`,
    // children: {
    //   market: {
    //     title: "Market",
    //     path: "market/:network",
    //     link: (network: string) => `/names/market/${network}`,
    //   },
    //   search: {
    //     title: "Search",
    //     path: "search/:name",
    //     link: (name: string, network?: string) =>
    //       `/names/search/${name}${network ? `?network=${network}` : ""}`,
    //   },
    // },
  },
  aiaudit: {
    title: "Ai Audit",
    path: "/aiaudit",
    link: () => `/aiaudit`,
    icon: <AiAuditIcon />,
  },
  quests: {
    title: "Quests",
    path: "/quests",
    link: () => `/quests`,
    icon: <QuestsIcon />,
    // disabled: true,
  },
};

// Компонент который отвечает за роутинг имеет такую структуру:
// <GlobalState> - это react context который хранит в себе application state
// <BrowserRouter> - это react router который отвечает за роутинг
// <ToastContainer /> - это компонент который отвечает за отображение уведомлений,
// разместили на одном уровне со всеми роутами, потому что уведомления должны отображаться на всех страницах
// <Routes> - это компонент который отвечает за отображение роутов
// <Route> - это компонент который отвечает за отображение конкретного роута
export const SiteRoutes = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={routes.portfolio.path} element={<PortfolioTracker />} />
          <Route path={routes.dex.path} element={<Dex />} />
          <Route path={routes.bridge.path} element={<Bridge />} />
          <Route path={routes.staking.path} element={<Staking />} />
          <Route path={routes.aiaudit.path} element={<AiAudit />} />
          <Route path={routes.quests.path} element={<Quests />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
