import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Button = ({ onClick, text = "Add to cart" ,showIcon}) => {
  
  return (
    <>
      <button
        onClick={onClick}
        className="rounded-full p-1.5 bg-white cursor-pointer flex flex-row items-center justify-center border border-red hover hover:bg-red hover:text-rose50 w-[150px] text-lg"
      >
        <div className="mr-0.5 flex flex-row justify-center items-center">
          <div>{showIcon ? <FaCartPlus className="mr-2" /> : null}</div>
        </div>
        {text}
      </button>
    </>
  );
};

export default Button;
