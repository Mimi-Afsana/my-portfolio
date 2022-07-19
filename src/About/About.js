import React from "react";
import "./About.css";
const About = () => {
  return (
    <div
      className="text-white lg:pt-32 pt-20 max-w-7xl mx-auto lg:pl-5"
      id="about"
    >
      <div className="about-div ml-1">
        <div className="text-center">
          <p className="border pt-6 pb-6">
            <span className="text-3xl font-bold text-orange-300">1+</span>{" "}
            <br />
            <p className="mt-2">YEARS OF EXPERIENCE</p>
          </p>
        </div>

        <div className="text-center">
          <p className="border pt-6 pb-6">
            <span className="text-3xl font-bold text-orange-300">22+</span>{" "}
            <br />
            <p className="mt-2">COMPLETED PROJECTS</p>
          </p>
        </div>
        <div className="text-center">
          <p className="border pt-6 pb-6">
            <sapn className="text-3xl font-bold text-orange-300">4</sapn>{" "}
            <br />
            <p className="mt-2">RUNNING PROJECTS</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
