import { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };
  return (
    <div className="">
      <form onSubmit={handelSubmit}>
        <div className="bg-zinc-300 rounded-lg w-[500px] h-10 flex justify-between">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add Your todos..."
            className="bg-transparent outline-none px-4 py-2 text-zinc-800 placeholder:text-[#464444] placeholder:text-md"
          />
          <button
            type="submit"
            className="text-white bg-green-600 rounded-e-lg  px-4 py-1"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
