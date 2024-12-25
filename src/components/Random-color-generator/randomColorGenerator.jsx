import { useState } from "react";
import "../../App.css";

export default function RandomColorGenerator() {
  const [enableHEXColor, setEnableHEXColor] = useState(true);
  const [color, setColor] = useState("#dddddd");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length + 1);
  }

  function rgbStringToHex(rgbString) {
    const [r, g, b] = rgbString.match(/\d+/g).map(Number);

    setColor(
      "#" +
        [r, g, b]
          .map((value) => {
            const hex = value.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
          })
          .join("")
    );
  }
  function hexToRgb(hex) {
    hex = hex.replace(/^#/, "");

    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("");
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  function newHEXColor() {
    let HEXColor = "#";
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    for (let i = 0; i < 6; i++) {
      HEXColor += list[randomColorUtility(list.length - 1)];
    }
    return HEXColor;
  }

  function newRGBColor() {
    const a = randomColorUtility(255);
    const b = randomColorUtility(255);
    const c = randomColorUtility(255);

    return `rgb(${a}, ${b}, ${c})`;
  }

  function handleEnableHEXColor(Boolean) {
    setEnableHEXColor(Boolean);
  }

  function handleHEXtoRGB() {
    color.includes("#") ? hexToRgb(color) : null;
  }

  function handleRGBtoHEX() {
    !color.includes("#") ? rgbStringToHex(color) : null;
  }

  function handleGenerateNewRandomColor() {
    const color = enableHEXColor ? newHEXColor() : newRGBColor();
    setColor(color);
  }

  return (
    <div className="h-[100vh] flex flex-col" style={{ backgroundColor: color }}>
      <div className="buttons flex justify-between px-44">
        <button
          onClick={() => {
            handleEnableHEXColor(true);
            handleRGBtoHEX();
          }}
          className=" px-4 py-3 border-4 border-black rounded-xl mt-6 font-bold text-lg"
        >
          Change to HEX Colors
        </button>
        <button
          onClick={() => {
            handleEnableHEXColor(false);
            handleHEXtoRGB();
          }}
          className=" px-4 py-3 border-4 border-black rounded-xl mt-6 font-bold text-lg"
        >
          Change to RGB Colors
        </button>
        <button
          onClick={handleGenerateNewRandomColor}
          className=" px-4 py-3 border-4 border-black rounded-xl mt-6 font-bold text-lg"
        >
          Make the random Color
        </button>
      </div>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="mb-20">
          <p className="text-4xl text-center">The Color is</p>
          <h1 className="text-8xl font-bold ">{color}</h1>
        </div>
      </div>
    </div>
  );
}
