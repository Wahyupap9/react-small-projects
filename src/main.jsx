import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Accordian from "./components/Accordian/Accordian";
import RandomColorGenerator from "./components/Random-color-generator/randomColorGenerator";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Accordian />
    <RandomColorGenerator />
  </StrictMode>
);
