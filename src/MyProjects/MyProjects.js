import React from "react";
import { Link } from "react-router-dom";
import "./MyProjects.css";
const MyProjects = () => {
  return (
    <div>
      <div
        className="text-white projects-information lg:pl-40 lg:pr-40 mb-10 pb-10"
        id="portfolio"
      >
        <h3 className="text-center lg:pr-12 font-bold text-3xl mb-5 lg:mt-12 lg:mb-10">
          MY <span className="text-orange-300 ">PROJECTS</span>
        </h3>

        <div className="projects">
          <a target="_blank" className="set-position">
            <div className="">
              <img
                src="https://i.ibb.co/QfW1P62/Warehouse-management-system-1.png"
                alt=""
              />
            </div>
            <div className="detail">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                sequi vel cum aliquid cupiditate assumenda deleniti neque harum,
                eveniet possimus!
              </p>
              <Link
                to="/fruitss"
                className="border bg-orange-500 rounded-full px-3 mt-10 font-bold"
              >
                SEE DETAILS
              </Link>
            </div>
          </a>
          <a target="_blank" href="" className="set-position">
            <div className="">
              <img
                src="https://i.ibb.co/gTTWwd3/Refrigerator-Parts-Manufracturer-Website-2.png"
                alt=""
              />
            </div>
            <div className="detail">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                sequi vel cum aliquid cupiditate assumenda deleniti neque harum,
                eveniet possimus!
              </p>
              <button className="border bg-orange-500 rounded-full px-3 mt-5 font-bold">
                SEE DETAILS
              </button>
            </div>
          </a>
          <a target="_blank" href="" className="set-position">
            <div className="">
              <img src="https://i.ibb.co/xDMm6DD/MEDICAL-CARE-2.png" alt="" />
            </div>
            <div className="detail">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                sequi vel cum aliquid cupiditate assumenda deleniti neque harum,
                eveniet possimus!
              </p>
              <button className="border bg-orange-500 rounded-full px-3 mt-5 font-bold">
                SEE DETAILS
              </button>
            </div>
          </a>
          <a target="_blank" href="" className="set-position">
            <div className="">
              <img src="https://i.ibb.co/6gn2rms/Money-master.png" alt="" />
            </div>
            <div className="detail">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                sequi vel cum aliquid cupiditate assumenda deleniti neque harum,
                eveniet possimus!
              </p>
              <button className="border bg-orange-500 rounded-full px-3 mt-5 font-bold">
                SEE DETAILS
              </button>
            </div>
          </a>
          <a target="_blank" href="" className="set-position">
            <div className="">
              <img
                src="https://i.ibb.co/Yfz9pkm/Convention-community-center.png"
                alt=""
              />
            </div>
            <div className="detail">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                sequi vel cum aliquid cupiditate assumenda deleniti neque harum,
                eveniet possimus!
              </p>
              <button className="border bg-orange-500 rounded-full px-3 mt-5 font-bold">
                SEE DETAILS
              </button>
            </div>
          </a>
          <a target="_blank" href="" className="set-position">
            <div className="">
              <img src="https://i.ibb.co/BjQg2bd/Phone-Hunter.png" alt="" />
            </div>
            <div className="detail">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                sequi vel cum aliquid cupiditate assumenda deleniti neque harum,
                eveniet possimus!
              </p>
              <button className="border bg-orange-500 rounded-full px-3 mt-5 font-bold">
                SEE DETAILS
              </button>
            </div>
          </a>
          <a target="_blank" href="" className="set-position">
            <div className="">
              <img src="https://i.ibb.co/w4F02Bn/Influencer-gear.png" alt="" />
            </div>
            <div className="detail">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                sequi vel cum aliquid cupiditate assumenda deleniti neque harum,
                eveniet possimus!
              </p>
              <button className="border bg-orange-500 rounded-full px-3 mt-5 font-bold">
                SEE DETAILS
              </button>
            </div>
          </a>
          <a target="_blank" href="" className="set-position">
            <div className="">
              <img src="https://i.ibb.co/Jm9Q8Pt/Insta-Sohor.png" alt="" />
            </div>
            <div className="detail">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                sequi vel cum aliquid cupiditate assumenda deleniti neque harum,
                eveniet possimus!
              </p>
              <button className="border bg-orange-500 rounded-full px-3 mt-5 font-bold">
                SEE DETAILS
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
