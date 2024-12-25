import { useState } from "react";
import data from "./data.js";
import "../../App.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelection, setMultipleSelection] = useState([]);

  function handleSelectedClick(itemID) {
    setSelected(itemID === selected ? null : itemID);
  }

  function handleMultipleSelection(itemID) {
    let newMultipleSelection = [...multipleSelection];
    let findIndex = newMultipleSelection.indexOf(itemID);
    findIndex === -1
      ? newMultipleSelection.push(itemID)
      : newMultipleSelection.splice(findIndex, 1);
    setMultipleSelection(newMultipleSelection);
  }

  function handleEnableMultiSelection() {
    setEnableMultiSelection(!enableMultiSelection);
    setSelected(null);
    setMultipleSelection([]);
  }
  return (
    <div className="wrapper w-full pt-10 pb-32 flex flex-col bg-indigo-800 ">
      <button
        onClick={handleEnableMultiSelection}
        className="mt-5 bg-slate-800 text-2xl font-bold w-fit py-5 px-5 text-white m-auto rounded-lg border-4 border-slate-300"
      >
        Enable Multi Accordian
      </button>
      <div className="accordian h-full w-1/2 m-auto">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item text-lg flex justify-between text-white bg-slate-800 my-10 py-5 px-5 rounded-lg border-4 border-s-slate-300">
              <div className="text ">
                <div className="question">{dataItem.question}</div>
                {enableMultiSelection ? (
                  multipleSelection.map((selection) =>
                    selection === dataItem.id ? (
                      <div className="answer mt-5">{dataItem.answer}</div>
                    ) : null
                  )
                ) : selected === dataItem.id ? (
                  <div className="answer mt-5">{dataItem.answer}</div>
                ) : null}
              </div>
              <button
                className="w-2 flex tracking-[.75rem] mr-5"
                onClick={() =>
                  enableMultiSelection
                    ? handleMultipleSelection(dataItem.id)
                    : handleSelectedClick(dataItem.id)
                }
              >
                ()
              </button>
            </div>
          ))
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </div>
  );
}
