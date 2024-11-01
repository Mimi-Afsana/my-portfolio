import React from "react";
import { Link } from "react-router-dom";
import "./MyProjects.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const MyProjects = () => {
  return (
    <div>
      <div
        className="text-white projects-information max-w-7xl mx-auto pb-10 "
        id="portfolio"
      >
        <h3 className="text-center font-bold text-3xl mb-9 lg:pt-24 pt-20 lg:pb-10">
          MY <span className="text-orange-300 ">PROJECTS</span>
        </h3>

        <div className="projects">
          <a target="_blank" className="set-position">
            <div className="" data-aos="fade-up" data-aos-duration="600">
              <img
                src="https://i.ibb.co.com/RTYFJxg/react-career-hub.png"
                alt=""
              />
            </div>
            <div className="detail">
              <p>
                <p className="lg:mt-14 mt-14 font-bold lg:pl-1 ml-4 lg:mb-5 mb-5 text-slate-800">
                  Career Hub
                </p>
              </p>
              <Link
                to="/fruitss"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-full px-4 py-2 font-bold ml-4 text-slate-800 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                SEE DETAILS
              </Link>
            </div>
          </a>
          <a target="_blank" className="set-position">
            <div className="" data-aos="fade-up" data-aos-duration="600">
              <img
                src="https://i.ibb.co.com/RhN0G7F/Screenshot-2024-11-01-025622.png"
                alt=""
              />
            </div>
            <div className="detail">
              <p>
                <p className="lg:mt-14 mt-14 font-bold lg:pl-1 ml-4 lg:mb-5 mb-5 text-slate-800">
                  Tea House
                </p>
              </p>
              <Link
                to="/manufrac"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-full px-4 py-2 font-bold ml-4 text-slate-800 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                SEE DETAILS
              </Link>
            </div>
          </a>
          <a target="_blank" className="set-position">
            <div className="" data-aos="fade-up" data-aos-duration="600">
              <img src="https://i.ibb.co.com/cDwXbqr/medical-care.png" alt="" />
            </div>
            <div className="detail">
              <p>
                <p className="lg:mt-14 mt-14 font-bold lg:pl-1 ml-4 lg:mb-5 mb-5  text-slate-800">
                  Medical Care
                </p>
              </p>
              <Link
                to="/medical"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-full px-4 py-2 font-bold ml-4 text-slate-800 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                SEE DETAILS
              </Link>
            </div>
          </a>
          <a target="_blank" className="set-position">
            <div className="" data-aos="fade-up" data-aos-duration="600">
              <img src="https://i.ibb.co/6gn2rms/Money-master.png" alt="" />
            </div>
            <div className="detail">
              <p className="lg:mt-14 mt-14 font-bold lg:pl-1 ml-4 lg:mb-5 mb-5 text-slate-800">
                Money Master
              </p>
              <Link
                to="/money"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-full px-4 py-2 font-bold ml-4 text-slate-800 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                SEE DETAILS
              </Link>
            </div>
          </a>
          <a target="_blank" className="set-position">
            <div className="" data-aos="fade-up" data-aos-duration="600">
              <img
                src="https://i.ibb.co/Yfz9pkm/Convention-community-center.png"
                alt=""
              />
            </div>
            <div className="detail">
              <p className="lg:mt-14 mt-14 font-bold lg:pl-1  lg:mb-5 mb-5 ml-4 text-slate-800">
                CONVENTION COMMUNITY CENTER
              </p>
              <Link
                to="/center"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-full px-4 py-2 font-bold ml-4 text-slate-800 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                SEE DETAILS
              </Link>
            </div>
          </a>
          <a target="_blank" className="set-position">
            <div className="" data-aos="fade-up" data-aos-duration="600">
              <img src="https://i.ibb.co.com/jHhjsPL/hunting-phone.png" alt="" />
            </div>
            <div className="detail">
              <p className="lg:mt-14 mt-14 font-bold lg:pl-1 lg:mb-5 mb-5 ml-4 text-slate-800">
                Phone Hunter
              </p>
              <Link
                to="/hunter"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-full px-4 py-2 font-bold ml-4 text-slate-800 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                SEE DETAILS
              </Link>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default MyProjects;
