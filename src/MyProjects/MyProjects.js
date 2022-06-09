import React from "react";
import { Link } from "react-router-dom";
import "./MyProjects.css";
const MyProjects = () => {
  return (
    <div className="text-white projects-information">
      <h3 className="text-center lg:pr-14 font-bold text-xl mb-5">MY PROJECTS</h3>

      <div className="projects">
        <a target="_blank" href="https://fruits-warehouse-website.web.app/">
          <div className="lg:pl-20">
            <img
              src="https://i.ibb.co/PDbJLhV/Warehouse-management-system.png"
              alt=""
            />
          </div>
        </a>
        <a target="_blank" href="https://fruits-warehouse-website.web.app/">
          <div className="lg:pl-16">
            <img
              src="https://i.ibb.co/qnNvF51/Refrigerator-Parts-Manufracturer-Website.png"
              alt=""
            />
          </div>
        </a>
        <a target="_blank" href="https://single-doctor-website.web.app/">
          <div className="lg:pl-16">
            <img
              src="https://i.ibb.co/x3wTZcJ/MEDICAL-CARE-1.png"
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default MyProjects;
