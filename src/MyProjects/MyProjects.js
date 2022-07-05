import React from "react";
import { Link } from "react-router-dom";
import "./MyProjects.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();
const MyProjects = () => {
  return (
    <div>
      <div
        className="text-white projects-information lg:pl-36 lg:pr-40 pb-10 "
        id="portfolio"
      >
        <h3 className="text-center font-semi-bold text-3xl mb-8 lg:pt-24 pt-24 lg:pb-10">
          MY <span className="text-orange-300 ">PROJECTS</span>
        </h3>

        <div className="projects">
          <a target="_blank" className="set-position">
            <div className="" data-aos="fade-up" data-aos-duration="600">
              <img
                src="https://i.ibb.co/QfW1P62/Warehouse-management-system-1.png"
                alt=""
              />
            </div>
            <div className="detail">
              <p>
                <p className="lg:mt-14 mt-14 font-bold lg:pl-3 lg:mb-5 mb-5 text-slate-800">
                  FRUITS WAREHOUSE MANAGEMENT SYSTEM
                </p>
              </p>
              <Link
                to="/fruitss"
                className=" bg-orange-500 rounded-full px-3 font-bold lg:ml-2 text-slate-800 py-2 border-0"
              >
                SEE DETAILS
              </Link>
            </div>
          </a>
          <a target="_blank" className="set-position">
            <div className="" data-aos="fade-up" data-aos-duration="600">
              <img
                src="https://i.ibb.co/gTTWwd3/Refrigerator-Parts-Manufracturer-Website-2.png"
                alt=""
              />
            </div>
            <div className="detail">
              <p>
                <p className="lg:mt-14 mt-14 font-bold lg:pl-3 lg:mb-5 mb-5 text-slate-800">
                  REFRIGERATOR PARTS MANUFRACTURER
                </p>
              </p>
              <Link
                to="/manufrac"
                className=" bg-orange-500 rounded-full px-3 font-bold lg:ml-2 text-slate-800 py-2 border-0"
              >
                SEE DETAILS
              </Link>
            </div>
          </a>
          <a target="_blank" className="set-position">
            <div className="" data-aos="fade-up" data-aos-duration="600">
              <img src="https://i.ibb.co/xDMm6DD/MEDICAL-CARE-2.png" alt="" />
            </div>
            <div className="detail">
              <p>
                <p className="lg:mt-14 mt-14 font-bold lg:pl-3 lg:mb-5 mb-5  text-slate-800">
                  MEDICAL CARE
                </p>
              </p>
              <Link
                to="/medical"
                className=" bg-orange-500 rounded-full px-3 font-bold lg:ml-2 text-slate-800 py-2 border-0"
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
              <p className="lg:mt-14 mt-14 font-bold lg:pl-3 lg:mb-5 mb-5 text-slate-800">
                MONEY MASTER
              </p>
              <Link
                to="/money"
                className=" bg-orange-500 rounded-full px-3 font-bold lg:ml-2 text-slate-800 py-2 border-0"
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
              <p className="lg:mt-14 mt-14 font-bold lg:pl-3 lg:mb-5 mb-5 text-slate-800">
                CONVENTION COMMUNITY CENTER
              </p>
              <Link
                to="/center"
                className=" bg-orange-500 rounded-full px-3 font-bold lg:ml-2 text-slate-800 py-2 border-0"
              >
                SEE DETAILS
              </Link>
            </div>
          </a>
          <a target="_blank" className="set-position">
            <div className="" data-aos="fade-up" data-aos-duration="600">
              <img src="https://i.ibb.co/BjQg2bd/Phone-Hunter.png" alt="" />
            </div>
            <div className="detail">
              <p className="lg:mt-14 mt-14 font-bold lg:pl-3 lg:mb-5 mb-5 text-slate-800">
                PHONE HUNTER
              </p>
              <Link
                to="/hunter"
                className=" bg-orange-500 rounded-full px-3 font-bold lg:ml-2 text-slate-800 py-2 border-0"
              >
                SEE DETAILS
              </Link>
            </div>
          </a>
          <a target="_blank" className="set-position">
            <div className="" data-aos="fade-up" data-aos-duration="600">
              <img src="https://i.ibb.co/w4F02Bn/Influencer-gear.png" alt="" />
            </div>
            <div className="detail">
              <p className="lg:mt-14 mt-14 font-bold lg:pl-3 lg:mb-5 mb-5 text-slate-800">
                INFLUENCER GEAR
              </p>
              <Link
                to="/influencer"
                className=" bg-orange-500 rounded-full px-3 font-bold lg:ml-2 text-slate-800 py-2 border-0"
              >
                SEE DETAILS
              </Link>
            </div>
          </a>
          <a target="_blank" className="set-position">
            <div className="" data-aos="fade-up" data-aos-duration="600">
              <img src="https://i.ibb.co/Jm9Q8Pt/Insta-Sohor.png" alt="" />
            </div>
            <div className="detail">
              <p className="lg:mt-14 mt-14 font-bold lg:pl-3 lg:mb-5 mb-5 text-slate-800">
                INSTA SOHOR
              </p>
              <Link
                to="/sohor"
                className=" bg-orange-500 rounded-full px-3 font-bold lg:ml-2 text-slate-800 py-2 border-0"
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
