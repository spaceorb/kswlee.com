import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import App from "./App";
import "./index.css";
import "./tailwind.css";

createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <Router>
      <App />
    </Router>
  </RecoilRoot>
);
