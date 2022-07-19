import React from "react";
import "./About.css";
const About = () => {
  return (
    <div
      className="text-white lg:pt-32 pt-20 lg:pl-48 lg:pr-48 mx-auto"
      id="about"
    >
      <div className="about-div ml-1">
        <div className="text-center">
          <p className="border pt-6 pb-6 lg:mr-8">
            <sapn className="text-3xl font-bold text-orange-300">1+</sapn>{" "}
            <br />
            <p className="mt-2">YEARS OF EXPERIENCE</p>
          </p>
        </div>

        <div className="text-center">
          <p className="border pt-6 pb-6 lg:mr-8">
            <sapn className="text-3xl font-bold text-orange-300">22+</sapn>{" "}
            <br />
            <p className="mt-2">COMPLETED PROJECTS</p>
          </p>
        </div>
        <div className="text-center">
          <p className="border pt-6 pb-6 lg:mr-8">
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
