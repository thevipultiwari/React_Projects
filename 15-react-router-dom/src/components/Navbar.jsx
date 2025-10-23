import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="flex flex-wrap justify-between bg-[rgb(10,117,146)]
                h-18 items-center"
    >
      <h3 className="text-3xl font-bold text-rose-100 px-2 cursor-pointer">King Vipul</h3>
      <div className="flex flex-wrap gap-3 justify-center mr-3 underline">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
