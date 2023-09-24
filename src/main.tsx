import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@ui5/webcomponents-react";
import App from "./App.tsx";
import "./index.css";

// import "@ui5/webcomponents/dist/Assets.js";
// import "@ui5/webcomponents-react/dist/Assets.js";
// import "@ui5/webcomponents-icons/dist/Assets.js";
// import "@ui5/webcomponents-fiori/dist/Assets.js";

// import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
// setTheme("sap_fiori_3_dark");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
