import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-10 justify-center">
      <button
        onClick={() => navigate("/")}
        className="bg-amber-400 py-3 px-2 mt-2 rounded-xl cursor-pointer active:scale-95"
      >
        Return to Home Page
      </button>
      <button
        onClick={() => navigate("/contact")}
        className="bg-amber-400 py-3 px-2 mt-2 rounded-xl cursor-pointer active:scale-95"
      >
        Return to Contact
      </button>
      <button
        onClick={() => navigate(-1)}
        className="bg-amber-400 py-3 px-2 mt-2 rounded-xl cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => navigate(1)}
        className="bg-amber-400 py-3 px-2 mt-2 rounded-xl cursor-pointer active:scale-95"
      >
        Next
      </button>
      <h1 className="absolute top-1/2 left-1/2 text-6xl font-bold underline -translate-y-1/2 -translate-x-1/2 text-white">
        About Page
      </h1>
    </div>
  );
};

export default About;
