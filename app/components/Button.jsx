import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Button = ({onClick}) => {
  return (
    <>
      <button onClick={onClick} className="rounded-full p-1.5 bg-white cursor-pointer flex flex-row items-center justify-center border border-red hover hover:bg-red hover:text-rose50 w-[180px] text-lg">
        <div className="mr-0.5 flex flex-row justify-center items-center">
          <div className="mr-1">Add to cart</div>
          <div>
            <FaCartPlus className="mr-2" />
          </div>
        </div>
      </button>
    </>
  );
};

export default Button;
