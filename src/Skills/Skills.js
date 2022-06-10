import React from "react";
import "./Skill.css";
const Skills = () => {
  return (
    <div className="text-white lg:pl-36 mx-auto lg:mt-16 p-10" id="skill">
      <h1 className="text-center text-4xl font-bold mb-16 lg:pr-20 ">
        MY <span className="text-orange-300">SKILLS</span>
      </h1>
      <div className="set-skill">
        <div className="">
          <div
            class="radial-progress text-orange-300 lg:mb-16"
            style={{ "--value": 95, "--size": "8rem", "--thickness": "8px" }}
          >
            <p className="text-white font-bold">HTML</p>
            <p className="text-2xl text-white">90%</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <div
            class="radial-progress text-orange-300 "
            style={{ "--value": 90, "--size": "8rem", "--thickness": "8px" }}
          >
            <p className="text-white text-center font-bold">CSS</p>
            <p className="text-2xl text-white text-center">90%</p>
          </div>
        </div>
        <div className="lg:pl-20 text-orange-300">
          <div
            class="radial-progress"
            style={{ "--value": 87, "--size": "8rem", "--thickness": "8px" }}
          >
            <p className="font-bold text-white">JAVASCRIPT</p>
            <p className="text-2xl text-white text-center">87%</p>
          </div>
        </div>
        <div className="lg:pl-20 text-orange-300">
          <div
            class="radial-progress"
            style={{ "--value": 87, "--size": "8rem", "--thickness": "8px" }}
          >
            <p className="font-bold text-white text-center">REACT</p>
            <p className="text-2xl text-white text-center">87%</p>
          </div>
        </div>
        <div className="set-skill lg:pl-20">
          <div
            class="radial-progress text-orange-300"
            style={{ "--value": 97, "--size": "8rem", "--thickness": "8px" }}
          >
            <p className="font-bold text-white text-center">BOOTSTRAP</p>
            <p className="text-2xl text-white text-center">97%</p>
          </div>
        </div>
        <div>
          <div
            class="radial-progress text-orange-300"
            style={{ "--value": 95, "--size": "8rem", "--thickness": "8px" }}
          >
            <p className="font-bold text-white text-center">TAILWIND</p>
            <p className="text-2xl text-white text-center">95%</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <div
            class="radial-progress text-orange-300"
            style={{ "--value": 97, "--size": "8rem", "--thickness": "8px" }}
          >
            <p className="font-bold text-white text-center">DAISY UI</p>
            <p className="text-2xl text-white text-center">97%</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <div
            class="radial-progress mb-3 text-orange-300"
            style={{ "--value": 87, "--size": "8rem", "--thickness": "8px" }}
          >
            <p className="font-bold text-white text-center">NODE JS</p>
            <p className="text-2xl text-white text-center">87%</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <div
            class="radial-progress text-orange-300"
            style={{ "--value": 87, "--size": "8rem", "--thickness": "6px" }}
          >
            <p className="font-bold text-white text-center">EXPRESS JS</p>
            <p className="text-2xl text-white text-center">87%</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <div
            class="radial-progress text-orange-300"
            style={{ "--value": 85, "--size": "8rem", "--thickness": "6px" }}
          >
            <p className="font-bold text-white text-center">MONGO DB</p>
            <p className="text-2xl text-white text-center">85%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
