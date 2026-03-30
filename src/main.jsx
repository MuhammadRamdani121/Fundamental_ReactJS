import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import ComponentDasar from "./components/componentDasar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ComponentDasar />
  </StrictMode>,
);
