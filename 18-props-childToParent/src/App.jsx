import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [Theme, setTheme] = useState("dark");

  return (
    <div>
      <Navbar theme={Theme} />
    </div>
  );
};

export default App;
