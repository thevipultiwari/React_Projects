// import React, { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState({ user: "Aman", age: 28 });

//   const btnClicked = () => {
//     const newNum = { ...num };
//     newNum.user = "Vipul";
//     newNum.age = 23;
//     setNum(newNum);
//     console.log(newNum);
//   };

//   return (
//     <div>
//       <h1>
//         {num.user},{num.age}
//       </h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react'

// const App = () => {

//   const [name, setName] = useState({ user: 'Vipul', age: 23 })

//   const changeName = () => {
//     setName(prev => ({ ...prev, age: 50, user: "Aman" }))

//     console.log(name);

//   }

//   return (
//     <div>
//       <h1>{name.user},{name.age}</h1>
//       <button onClick={changeName}>Click</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const changeNum = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);

    console.log(num);
  };

  return (
    <div>
      <h1>
        {num}
      </h1>
      <button onClick={changeNum}>Click</button>
    </div>
  );
};

export default App;
