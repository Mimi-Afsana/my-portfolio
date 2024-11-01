import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import MyProjects from "../MyProjects/MyProjects";
import Resume from "../Resume/Resume";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Resume></Resume>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <MyProjects></MyProjects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
