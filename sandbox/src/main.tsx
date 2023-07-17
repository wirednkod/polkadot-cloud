import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/index.scss";
import "../../packages/core-ui/lib/styles/fonts/index.css";
import "../../packages/react-odometer/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
