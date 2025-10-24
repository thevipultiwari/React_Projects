import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Nav2 = () => {
 const [theme,setTheme] = useContext(ThemeDataContext)
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 h-20 pr-4 text-rose-100 font-bold text-xl">
      <h2>Home</h2>
      <h2>{theme}</h2>
      <h2>Secion</h2>
      <h2>{theme}</h2>
      <h2>{theme}</h2>
    </div>
  );
};

export default Nav2;
