import React, { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  // const [username, setUsername] = useState("aman");
  

  const increaseCounter = () => {
    setCount(count + 1);
  };
  const decreaseCounter = () => {
    setCount(count - 1);
  };

  return (
    <div className="w-150">
      <h1 className="bg-red-400 h-40  flex items-center justify-center text-rose-50 mb-20 rounded-4xl text-9xl">
        
        {count}
      </h1>
      <div
        className=" flex justify-center text-2xl gap-5
      "
      >
        <button
          className="px-5 bg-blue-600 rounded-full py-2 cursor-pointer "
          onClick={increaseCounter}
        >
          Increase
        </button>
        <button
          className="px-4 bg-blue-600 w-35 rounded-full cursor-pointer"
          onClick={decreaseCounter}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default App;
