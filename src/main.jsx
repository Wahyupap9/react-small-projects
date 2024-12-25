import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Accordian from "./components/Accordian/Accordian";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Accordian />
  </StrictMode>
);
