import React from "react";
import "./Skill.css";
const Skills = () => {
  return (
    <div className="text-white lg:pl-80 lg:pr-64 mx-auto lg:mt-16 p-10">
      <h1 className="text-center text-xl font-bold mb-5 lg:pr-32">MY SKILLS</h1>
      <div className='set-skill'>
        <div>
          <div
            class="radial-progress mb-10"
            style={{ "--value": 95, "--size": "7rem", "--thickness": "4px" }}
          >
            <p>HTML</p>
            90%
          </div>
        </div>
        <div>
          <div
            class="radial-progress"
            style={{ "--value": 90, "--size": "7rem", "--thickness": "4px" }}
          >
            <p>CSS</p>
            90%
          </div>
        </div>
        <div>
          <div
            class="radial-progress"
            style={{ "--value": 87, "--size": "7rem", "--thickness": "4px" }}
          >
            <p>JAVASCRIPT</p>
            87%
          </div>
        </div>
        <div>
          <div
            class="radial-progress"
            style={{ "--value": 87, "--size": "7rem", "--thickness": "4px" }}
          >
            <p>REACT</p>
            87%
          </div>
        </div>
        <div className="set-skill">
          <div
            class="radial-progress"
            style={{ "--value": 97, "--size": "7rem", "--thickness": "4px" }}
          >
            <p>BOOTSTRAP</p>
            97%
          </div>
        </div>
        <div>
          <div
            class="radial-progress"
            style={{ "--value": 95, "--size": "7rem", "--thickness": "4px" }}
          >
            <p>TAILWIND</p>
            95%
          </div>
        </div>
        <div>
          <div
            class="radial-progress"
            style={{ "--value": 97, "--size": "7rem", "--thickness": "4px" }}
          >
            <p>DAISY UI</p>
            97%
          </div>
        </div>
        <div>
          <div
            class="radial-progress mb-3"
            style={{ "--value": 87, "--size": "7rem", "--thickness": "4px" }}
          >
            <p>NODE JS</p>
            87%
          </div>
        </div>
        <div>
          <div
            class="radial-progress"
            style={{ "--value": 87, "--size": "7rem", "--thickness": "4px" }}
          >
            <p>EXPRESS JS</p>
            87%
          </div>
        </div>
        <div>
          <div
            class="radial-progress"
            style={{ "--value": 85, "--size": "7rem", "--thickness": "4px" }}
          >
            <p>MONGO DB</p>
            85%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
