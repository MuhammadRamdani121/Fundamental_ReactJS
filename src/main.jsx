import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import ComponentDasar from "./components/componentDasar.jsx";
import Variable from "./components/variable.jsx";
import Props from "./components/props.jsx";
import MainJson from "./components/postjson/main.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ComponentDasar />
    <Variable />
    <Props
      name="Muhammad Ramdani"
      title={["tutorial JavaSciprt", "Tutorial CSS", "Tutorial HTML"]}
    />
    <MainJson />
  </StrictMode>,
);
