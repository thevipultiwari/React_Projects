import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import { ThemeDataContext } from "./context/ThemeContext";
import Button from "./components/Button";

const App = (props) => {
    const [theme,setTheme] = useContext(ThemeDataContext);
  console.log(theme);

  return (
    <div>
          <Navbar theme={theme} />
          <Button/>
    </div>
  );
};

export default App;
