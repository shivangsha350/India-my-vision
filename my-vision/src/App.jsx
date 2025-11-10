import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./AboutUs";
import Objectives from "./components/Objectives";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Objectives/>
      <AboutUs/>
      <Footer />
    </div>
  );
};

export default App;
