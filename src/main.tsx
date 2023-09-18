import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "fundamental-styles/dist/theming/sap_horizon.css";
import "@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css";

import "fundamental-styles/dist/avatar.css";
import "fundamental-styles/dist/bar.css";
import "fundamental-styles/dist/button.css";
import "fundamental-styles/dist/dynamic-page.css";
import "fundamental-styles/dist/fundamental-styles.css";
import "fundamental-styles/dist/icon.css";
import "fundamental-styles/dist/input.css";
import "fundamental-styles/dist/menu.css";
import "fundamental-styles/dist/page.css";
import "fundamental-styles/dist/popover.css";
import "fundamental-styles/dist/section.css";
import "fundamental-styles/dist/shellbar.css";
import "fundamental-styles/dist/title.css";
import "fundamental-styles/dist/toolbar.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
