import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Contact from "./components/Contact";
import About from "./components/About";
import Signup from "./components/Signup";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
