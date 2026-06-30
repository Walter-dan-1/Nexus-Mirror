import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

console.log("window.nexus =", (window as any).nexus);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);