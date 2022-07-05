import React from "react";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();
const Services = () => {
  return (
    <div className=" text-center lg:pl-32 pl-6 pr-6 lg:pr-20" id="services">
      <h3 className=" lg:mb-10 mb-10 text-3xl font-semi-bold lg:pt-32 pt-24">
        <span className="text-white">MY</span>{" "}
        <span className="text-orange-300">SERVICES</span>
      </h3>
      <div className="services m-3 ">
        <div
          className="mb-2 m-3 p-5 lg:mr-16 bg-slate-800 shadow-xl text-white "
          data-aos="zoom-in"
          data-aos-duration="600"
        >
          <img
            src="https://i.ibb.co/Y3ws49t/website-design.png"
            alt=""
            width="60px"
            className="lg:ml-48 lg:mb-2 ml-32 mb-4"
          />
          <h3 className="text-xl font-semi-bold lg:mb-4 mb-4">WEB DESIGN</h3>
          <p className="text-xl">
            Web designers plan, create and code internet sites and web pages,
            many of which combine text with sounds, pictures, graphics and video
            clips.
          </p>
        </div>
        <div
          className=" mb-2 m-3 p-5 lg:mr-16 text-slate-700 bg-slate-400 shadow-xl"
          data-aos="zoom-in"
          data-aos-duration="600"
        >
          <img
            src="https://i.ibb.co/Rvsmsv2/img1.png"
            alt=""
            width="80px"
            className="lg:ml-48 lg:mb-3 mb-4 ml-28"
          />
          <h3 className="text-xl font-semi-bold lg:mb-4 mb-4">
            FRONT-END DEVELOPMENT
          </h3>
          <p className="text-xl">
            A Front End Developer, or Front End Web Developer, is responsible
            for using their knowledge of programming languages to code user-side
            applications orweb applications.
          </p>
        </div>
        <div
          className="text-white mb-2 m-3 p-5 lg:mr-24 bg-slate-800 shadow-xl"
          data-aos="zoom-in"
          data-aos-duration="600"
        >
          <img
            src="https://i.ibb.co/dJfCC88/backend.png"
            alt=""
            width="50px"
            className="lg:ml-48 lg:mb-3 ml-32 mb-4"
          />
          <h3 className="text-xl font-semi-bold lg:mb-4 mb-4">
            BACK-END DEVELOPMENT
          </h3>
          <p className="text-xl">
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
