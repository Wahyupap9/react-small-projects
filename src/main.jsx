import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Accordian from "./components/Accordian/Accordian";
import RandomColorGenerator from "./components/Random-color-generator/randomColorGenerator";
import StarRating from "./components/Star-Rating/starRating";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Accordian />
    <RandomColorGenerator />
    <StarRating starCount={10} />
  </StrictMode>
);
