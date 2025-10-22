// import axios from "axios";
// import { useState } from "react";

// const App = () => {
//   // const [data, setData] = useState([]);

//   const getData = async () => {
//     const response = await axios.get("https://picsum.photos/v2/list");
//      console.log(response)
//     // setData(response.data);

//   };
//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//       <div>
//         {/* {data.map((elem,idx)=>{
//           return <h3>Hello, {elem.author} {idx}</h3>
//         })} */}

//       </div>
//     </div>
//   );
// };
//
// export default App;

import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    console.log(response);
    const jsonData = await response.json();
    setData(jsonData);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((elem, idx) => {
          return <h3 key={idx}>Hello, {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  );
};

export default App;

//axios vs fect
// Feature         |  Axios                      |  Fetch                         
// ----------------+-----------------------------+--------------------------------
// JSON parsing    |  Automatic (response.data)  |  Manual (await response.json())
// Error handling  |  Rejects on HTTP errors     |  Only rejects on network errors
// Syntax          |  axios.get(url)             |  fetch(url)                    
// Installation    |  Requiresnpm install axios  |  Built into browsers     

// With Axios: Axios automatically parses JSON for you, so response.data directly gives you the array.
// With Fetch: The fetch() API returns a Response object that contains the raw data in the body. You must call 
// .json() to extract and parse it into a JavaScript object/array.

// The response object from fetch() looks like this:
// {
//   ok: true,
//   status: 200,
//   statusText: "OK",
//   headers: {...},
//   body: ReadableStream  // ← The actual data is locked in here
// }
