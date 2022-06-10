import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="text-white lg:pl-32 lg:pr-36 mx-auto lg:mt-28 mt-16" id="about">
      <h1 className="lg:text-center lg:mb-14 mb-4 text-4xl font-bold pl-10">
        ABOUT <span className="text-orange-300">ME</span>
      </h1>
      <div className="about-div">
        <div>
          <h2 className="font-bold mb-4 text-xl">PERSONAL INFOS</h2>
          <p className="mb-4">First Name : Afsana</p>
          <p className="mb-4">Last Name : Mimi</p>
          <p className="mb-4">Age : 27 Years</p>
          <p>Nationality : Bangladeshi</p>
        </div>
        <div>
          <h2></h2>
          <p className="mb-4">Address : Kuala Lumpur, Malaysia</p>
          <p className="mb-4">Phone : +60172289099</p>
          <p className="mb-4">Email : contact@darudulislam.com</p>
          <p className="mb-4">Language : English, Bangla, Hindi, Urdo.</p>
        </div>

        <div className="text-center">
          <p className="border pt-6 pb-6 lg:mr-8">
            <sapn className="text-4xl font-bold text-orange-300">1+</sapn>{" "}
            <br />
            YEARS OF EXPERIENCE
          </p>
        </div>

        <div className="text-center">
          <p className="border pt-6 pb-6 lg:mr-8">
            <sapn className="text-4xl font-bold text-orange-300">22+</sapn>{" "}
            <br />
            COMPLETED PROJECTS
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
