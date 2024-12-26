import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ starCount }) {
  const [starNum, setStarNum] = useState(0);
  const [constStar, setConstStar] = useState(0);
  const [enableHover, setEnableHover] = useState(false);

  function handleMouseEnter(index) {
    setEnableHover(true);
    setStarNum(index);
  }

  function handleClick(index) {
    setConstStar(index);
  }

  function handleMouseLeave() {
    setEnableHover(false);
  }

  return (
    <div id="starRating" className="w-full h-[100vh] flex flex-col">
      <h1 className="text-center text-slate-700 font-bold text-4xl mb-10 mt-20">
        Rate This Cat
      </h1>
      <img src="/catjpg.jpg" alt="" className="w-[40%] mx-auto rounded-xl" />
      <div className="flex justify-center mx-auto">
        {[...Array(starCount)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              style={
                enableHover
                  ? index <= starNum
                    ? { color: "yellow" }
                    : null
                  : index <= constStar
                  ? { color: "yellow" }
                  : null
              }
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
              className="text-4xl mt-5 text-slate-800 transition duration-150"
            />
          );
        })}
      </div>
      <h1 className="text-center text-4xl mt-5 ">
        You rate this <span className="font-bold text-slate-700">Cat </span>
        {constStar}/{starCount}
      </h1>
      <p className="text-center font-thin">
        {constStar >= 6
          ? "WOW Thanks!!! 😍❤️"
          : constStar > 3 && constStar <= 5
          ? "Ummm.... thanks, i guess?"
          : "Aww.. Why? :("}
      </p>
    </div>
  );
}
