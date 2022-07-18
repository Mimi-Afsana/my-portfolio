import React from "react";
import "./About.css";
const About = () => {
  return (
    <div
      className="text-white lg:pt-32 pt-20 lg:pl-40 lg:pr-36 mx-auto"
      id="about"
    >
      <h1 className="lg:text-center lg:mb-20 mb-10 text-3xl font-semi-bold ml-10">
        ABOUT <span className="text-orange-300">ME</span>
      </h1>
      <div className="about-div ml-1">
        <div className="text-xl">
          <h2 className="font-semi-bold mb-4 text-2xl ">PERSONAL INFOS</h2>
          <p className="mb-4">First Name : Afsana Mimi</p>
          <p className="mb-4">Age : 22 Years</p>
          <p className="mb-4">Address : Kuala Lumpur, Malaysia</p>

          <p>Nationality : Bangladeshi</p>
        </div>

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
      </div>
    </div>
  );
};

export default About;
