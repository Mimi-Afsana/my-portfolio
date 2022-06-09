import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="text-white text-center mb-5 lg:pl-20" id="services">
      <h3 className="lg:pr-32 text-xl font-bold">
        MY <span>SERVICES</span>
      </h3>
      <div className="services m-3">
        <div className="border mb-2 m-3 p-5 lg:mr-16">
          <h3>WEB DESIGN</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolor?
          </p>
        </div>
        <div className="border mb-2 m-3 p-5 lg:mr-16">
          <h3>FRONT-END DEVELOPMENT</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolor?
          </p>
        </div>
        <div className="border mb-2 m-3 p-5 lg:mr-24">
          <h3>BACK-END DEVELOPMENT</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolor?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
