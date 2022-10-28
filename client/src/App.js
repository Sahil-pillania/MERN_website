import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Contact from "./components/Contact";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/signup" element={<signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
