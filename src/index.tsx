import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  //rendering for all react app, App is a component, App is App.js
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
