import React from "react";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import {Link, Outlet} from "react-router-dom"

const Product = () => {
  return (
    <div className="flex justify-center gap-10">
      <Link className="text-white text-2xl font font-semibold underline"  to="/product/men">men</Link>
      <Link className="text-white text-2xl font font-semibold underline"   to="/product/women">women</Link>
      <Link className="text-white text-2xl font font-semibold underline"  to="/product/kids">kids</Link>
    
      <Outlet/>
    </div>
  ); 
};

export default Product;
