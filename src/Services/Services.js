import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className=" text-center mb-5 lg:pl-32 lg:pr-20 lg:mt-8" id="services">
      <h3 className=" lg:mb-10 text-4xl font-bold lg:pr-32 lg:pl-20">
        <span className="text-white">MY</span>{" "}
        <span className="text-orange-300">SERVICES</span>
      </h3>
      <div className="services m-3 ">
        <div className="mb-2 m-3 p-5 lg:mr-16 bg-slate-800 shadow-xl text-white">
          <img
            src="https://i.ibb.co/Y3ws49t/website-design.png"
            alt=""
            width="60px"
            className="lg:ml-48 lg:mb-2 ml-32 mb-4"
          />
          <h3 className="text-xl font-bold lg:mb-4 mb-4">WEB DESIGN</h3>
          <p>
            Web designers plan, create and code internet sites and web pages,
            many of which combine text with sounds, pictures, graphics and video
            clips.
          </p>
        </div>
        <div className=" mb-2 m-3 p-5 lg:mr-16 text-slate-700 bg-slate-400 shadow-xl">
          <img
            src="https://i.ibb.co/Rvsmsv2/img1.png"
            alt=""
            width="80px"
            className="lg:ml-48 lg:mb-3 mb-4 ml-28"
          />
          <h3 className="text-xl font-bold lg:mb-4 mb-4">
            FRONT-END DEVELOPMENT
          </h3>
          <p>
            A Front End Developer, or Front End Web Developer, is responsible
            for using their knowledge of programming languages to code user-side
            applications orweb applications.
          </p>
        </div>
        <div className="text-white mb-2 m-3 p-5 lg:mr-24 bg-slate-800 shadow-xl">
          <img
            src="https://i.ibb.co/dJfCC88/backend.png"
            alt=""
            width="50px"
            className="lg:ml-48 lg:mb-3 ml-32 mb-4"
          />
          <h3 className="text-xl font-bold lg:mb-4 mb-4">
            BACK-END DEVELOPMENT
          </h3>
          <p className="">
            The back end developer is a programmer who creates components and
            features on the server-side, indirectly accessed through a front end
            application or system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
