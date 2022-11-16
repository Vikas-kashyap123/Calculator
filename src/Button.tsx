import { FC } from "react";

type ButtonProps = { value: any; onClick(e: any): void };

const Button: FC<ButtonProps> = ({ value, onClick }) => {
  return (
    <div className="sm:mx-4 mx-1">
      <div
        data-cell-index={value}
        onClick={onClick}
        className="border hover:hover:cursor-pointer hover:scale-105 text-center font-bold text-xl from-bg-cyan-100-to  border-black rounded-md px-3 py-2 w-14 sm:w-20"
      >
        {value}
      </div>
    </div>
  );
};

export default Button;

// const CanelClick = () => {
//   expression.pop();
//   const newExpression = [...expression];
//   setExpression(newExpression);
// };
