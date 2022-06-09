import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="text-white lg:pl-80 lg:pr-96 mx-auto lg:mt-32 " id="about">
      <h1 className="text-center mb-5 text-xl font-bold">ABOUT ME</h1>
      <div className="about-div">
        <div>
          <h2 className="font-bold">PERSONAL INFOS</h2>
          <p>First Name : Afsana</p>
          <p>Last Name : Mimi</p>
          <p>Age : 27 Years</p>
          <p>Nationality : Bangladeshi</p>
        </div>
        <div>
          <h2></h2>
          <p>Address : Kuala Lumpur, Malaysia</p>
          <p>Phone : +60172289099</p>
          <p>Email : contact@darudulislam.com</p>
          <p>Language : English, Bangla, Hindi, Urdo, Malayu</p>
        </div>
        <div className="border lg:pt-8">
          <div className="text-center">
            <span class="countdown ">
              <span style={{ "--value": 1 }}></span>+
            </span>
          </div>
          <p className="text-center">YEARS OF EXPERIENCE</p>
        </div>
        <div className="border lg:pt-8">
          <div className="text-center">
            <span class="countdown ">
              <span style={{ "--value": 22 }}></span>+
            </span>
          </div>
          <p className="text-center">COMPLETED PROJECTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
