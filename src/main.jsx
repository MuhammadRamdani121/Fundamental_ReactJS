import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import ComponentDasar from "./components/componentDasar.jsx";
import Variable from "./components/variable.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ComponentDasar />
    <Variable />
  </StrictMode>,
);
