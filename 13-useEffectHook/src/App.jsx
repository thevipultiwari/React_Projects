// import React, { useEffect } from "react";
// import { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(1);
//   const [num2, setNum2] = useState(10);

//   useEffect(function () {
//     console.log("counter bad rha hai");
//   },[num,num2]);

//   return (
//     <div>
//       <h1>num1={num}</h1>
//       <h1>num2={num2}</h1>
//       <button
//         onMouseEnter={() => {
//           setNum(num + 1);
//         }}
//         onMouseLeave={() => {
//           setNum2(num + 10);
//         }}
//       >
//         Hover
//       </button>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useState } from "react";
import "./index.css";
import { useEffect } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChanging() {
    console.log("a is changing");
  }

  function bChanging() {
    console.log("b is changing");
  }
  useEffect(function () {
    aChanging();
    bChanging();
 },[a])
  

  return <div>
    <h1>a:{a}</h1>
    <h1>b:{ b}</h1>
    <button className="btn" onClick={() => {
      setA(a+1)
    }}>A</button>
    <button className="btn" onClick={() => {
      setB(b+1)
    }}>B</button>
  </div>;
};

export default App;
