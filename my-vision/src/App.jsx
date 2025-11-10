import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./AboutUs";
import Objectives from "./components/Objectives";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Objectives/>
      <AboutUs/>
    </div>
  );
};

export default App;
