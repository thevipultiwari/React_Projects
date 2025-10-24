import React from "react";
import Nav2 from "./Nav2";

const Navbar = (props) => {
  return (
    <div className="bg-red-400 flex flex-wrap justify-between items-center">
      <h1 className="text-4xl font-bold text-rose-100 p-5">Sheriyans</h1>
      <Nav2 theme={props.theme} />
    </div>
  );
};

export default Navbar;
