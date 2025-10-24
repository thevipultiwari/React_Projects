import React from "react";

const Nav2 = (props) => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 h-20 pr-4 text-rose-100 font-bold text-xl">
      <h2>Home</h2>
      <h2>About</h2>
      <h2>Secion</h2>
      <h2>Contact</h2>
      <h2>{props.theme}</h2>
    </div>
  );
};

export default Nav2;
