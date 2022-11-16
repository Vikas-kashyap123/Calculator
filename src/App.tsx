import { useState } from "react";
import Button from "./Button";

const App = () => {
  const Buttons = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "/",
    "+",
    "-",
    "X",
    ".",
    "=",
  ];

  // const [number, setNumber] = useState();
  const [expression, setExpression] = useState<string[]>([]);

  const onButtonClick = (e: any) => {
    let newValue = e.target.getAttribute("data-cell-index");
    if (newValue === "X") {
      newValue = "*";
    }
    if (newValue === "=") {
      setExpression(eval(expression.join("")));
    } else {
      const newExpression = [...expression, newValue];
      setExpression(newExpression);
    }
  };

  const CanelClick = () => {
    expression.pop();
    const newExpression = [...expression];
    setExpression(newExpression);
  };

  return (
    <div className="sm:w-96 w-48 mx-auto border-2 bg-gradient-to-r from-cyan-200 to-blue-500 rounded-sm bg-gray-200 mt-10  sm:mt-28 justify-center hover:cursor-pointer ">
      <h1 className="text-2xl font-bold text-indigo-700">DG Calculator</h1>
      <div className=" flex mx-1 flex-row-reverse px-5 mb-2 h-10 sm:h-16 text-2xl font-bold items-center sm:text-3xl border border-gray-500 py-4">
        {expression}
      </div>
      <div className="grid grid-cols-3 sm:gap-1 ">
        {Buttons.map((value, index) => (
          <div className="" key={index}>
            <Button value={value} onClick={onButtonClick} />
          </div>
        ))}
      </div>
      <div className="flex gap-3 justify-center items-center py-2 hover:cursor-pointer">
        <button
          onClick={() => setExpression([""])}
          className="bg-red-500 rounded-md px-4 sm:px-10 py-2 "
        >
          A/C
        </button>
        <button
          onClick={CanelClick}
          className="bg-yellow-500 rounded-md sm:px-11 px-5 py-2 "
        >
          C
        </button>
      </div>
    </div>
  );
};

export default App;
