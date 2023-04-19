import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
// import { SiteRoutes } from "./routes";
import App from "./App";

import "./styles/index.css";
import "./styles/reset.css";
import "./styles/gradientShadow.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
        {/* <SiteRoutes /> */}
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
