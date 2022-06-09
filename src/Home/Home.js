import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import MyProjects from "../MyProjects/MyProjects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <MyProjects></MyProjects>
    </div>
  );
};

export default Home;
