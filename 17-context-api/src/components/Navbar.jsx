import React, { useContext } from "react";
import Nav2 from "./Nav2";
import { ThemeDataContext } from "../context/ThemeContext";


const Navbar = () => {

    const [theme,setTheme]  = useContext(ThemeDataContext);
    
  return (
    <div className="bg-red-400 flex flex-wrap justify-between items-center">
          <h1 className="text-4xl font-bold text-rose-100 p-5">{theme}</h1>
      <Nav2  />
    </div>
  );
};

export default Navbar;
