import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./AboutUs";
import Objectives from "./components/Objectives";
import SubmissionProcess from "./components/SubmissionProcess";
import Footer from "./Footer";
import EligibilitySection from "./components/EligibilitySection";
import HowToParticipate from "./components/HowToParticipate";
import ThemeOfSubmission from "./components/ThemeOfSubmission";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
            <AboutUs/>
      <Objectives/>
       <EligibilitySection />
       <HowToParticipate />  
       {/* <ThemeOfSubmission />    */}
      <SubmissionProcess/>
      <Footer />
    </div>
  );
};

export default App;
