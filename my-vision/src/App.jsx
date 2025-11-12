import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./AboutUs";
import Objectives from "./components/Objectives";
import SubmissionProcess from "./components/SubmissionProcess";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
            <AboutUs/>
      <Objectives/>

      <SubmissionProcess/>
      <Footer />
    </div>
  );
};

export default App;
