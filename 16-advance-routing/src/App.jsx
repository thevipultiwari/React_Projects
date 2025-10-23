import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import PageNotFound from "./pages/PageNotFound";
import Courses from "./pages/Courses";
import CoursesDetail from "./pages/CoursesDetail";
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
       
        <Route path="*" element={<PageNotFound />} />
        <Route path="/courses" element={<Courses />}/>
       
       
          <Route path="/courses/:id" element={<CoursesDetail />} />
      </Routes>
    </div>
  );
};

export default App;
