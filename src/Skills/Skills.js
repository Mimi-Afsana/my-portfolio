import React from "react";
import "./Skill.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";
const Skills = () => {
  return (
    <div className="text-white lg:pl-36 lg:pr-6 mx-auto  lg:mt-5" id="skill">
      <h1 className="text-center text-3xl font-bold mb-16  lg:pt-6 lg:pr-20 ">
        MY <span className="text-orange-300">SKILLS</span>
      </h1>

      <div className="set-skill">
        <div className="text-center lg:mb-8" style={{ width: "135px" }}>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 98 : 0;

              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  strokeWidth={6}
                  // text="HTML"
                  // text={`${percentage}%`}
                  styles={buildStyles({
                    // textColor: "red",
                    pathColor: "#fdba74",
                    pathTransitionDuration: 3,
                    trailColor: "black"
                  })}
                >
                  <div>
                    <p className="font-bold">HTML</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center lg:ml-16" style={{ width: "130px" }}>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 95 : 0;

              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  strokeWidth={6}
                  // text="HTML"
                  // text={`${percentage}%`}
                  styles={buildStyles({
                    // textColor: "red",
                    pathColor: "#fdba74",
                    pathTransitionDuration: 3,
                    trailColor: "black"
                  })}
                >
                  <div>
                    <p className="font-bold">CSS</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center lg:ml-16" style={{ width: "130px" }}>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 93 : 0;

              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  strokeWidth={6}
                  // text="HTML"
                  // text={`${percentage}%`}
                  styles={buildStyles({
                    // textColor: "red",
                    pathColor: "#fdba74",
                    pathTransitionDuration: 3,
                    trailColor: "black"
                  })}
                >
                  <div>
                    <p className="font-bold">JAVASCRIPT</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center lg:ml-16" style={{ width: "130px" }}>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 94 : 0;

              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  strokeWidth={6}
                  // text="HTML"
                  // text={`${percentage}%`}
                  styles={buildStyles({
                    // textColor: "red",
                    pathColor: "#fdba74",
                    pathTransitionDuration: 3,
                    trailColor: "black"
                  })}
                >
                  <div>
                    <p className="font-bold">REACT</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center lg:ml-16" style={{ width: "130px" }}>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 98 : 0;

              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  strokeWidth={6}
                  // text="HTML"
                  // text={`${percentage}%`}
                  styles={buildStyles({
                    // textColor: "red",
                    pathColor: "#fdba74",
                    pathTransitionDuration: 6,
                    trailColor: "black"
                  })}
                >
                  <div>
                    <p className="font-bold">BOOTSTRAP</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center " style={{ width: "130px" }}>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 98 : 0;

              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  strokeWidth={6}
                  // text="HTML"
                  // text={`${percentage}%`}
                  styles={buildStyles({
                    // textColor: "red",
                    pathColor: "#fdba74",
                    pathTransitionDuration: 3,
                    trailColor: "black"
                  })}
                >
                  <div>
                    <p className="font-bold ">TAILWIND</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center lg:ml-16" style={{ width: "130px" }}>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 98 : 0;

              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  strokeWidth={6}
                  // text="HTML"
                  // text={`${percentage}%`}
                  styles={buildStyles({
                    // textColor: "red",
                    pathColor: "#fdba74",
                    pathTransitionDuration: 3,
                    trailColor: "black"
                  })}
                >
                  <div>
                    <p className="font-bold">DAISY UI</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center lg:ml-16" style={{ width: "130px" }}>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 84 : 0;

              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  strokeWidth={6}
                  // text="HTML"
                  // text={`${percentage}%`}
                  styles={buildStyles({
                    // textColor: "red",
                    pathColor: "#fdba74",
                    pathTransitionDuration: 3,
                    trailColor: "black"
                  })}
                >
                  <div>
                    <p className="font-bold">NODE JS</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center lg:ml-16" style={{ width: "130px" }}>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 91 : 0;

              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  strokeWidth={6}
                  // text="HTML"
                  // text={`${percentage}%`}
                  styles={buildStyles({
                    // textColor: "red",
                    pathColor: "#fdba74",
                    pathTransitionDuration: 3,
                    trailColor: "black"
                  })}
                >
                  <div>
                    <p className="font-bold">EXPRESS JS</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center lg:ml-16" style={{ width: "130px" }}>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 88 : 0;

              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  strokeWidth={6}
                  // text="HTML"
                  // text={`${percentage}%`}
                  styles={buildStyles({
                    // textColor: "red",
                    pathColor: "#fdba74",
                    pathTransitionDuration: 3,
                    trailColor: "black"  
                  })}
                >
                  <div>
                    <p className="font-bold">MONGODB</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
      </div>
    </div>
  );
};

export default Skills;
