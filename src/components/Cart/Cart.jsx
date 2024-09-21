import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);

  return (
    <div className="bg-[#34a87c] w-[500px] h-16  rounded-md flex justify-between px-4">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <p className="text-sm text-zinc-200">hello this is tanvir</p>
      </div>
      <div className="flex gap-4 items-center">
        <FaEdit className="text-2xl text-purple-600 cursor-pointer" />
        <IoMdClose className="text-2xl text-red-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default Cart;
