import React from "react";
import "./Skill.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";
const Skills = () => {
  return (
    <div
      className="text-white mx-auto lg:pt-28 pt-24"
      id="skill"
    >
      <h1 className="text-center text-3xl font-bold mb-16  lg:pt-6 ">
        MY <span className="text-orange-300">SKILLS</span>
      </h1>

      <div className="set-skill max-w-7xl mx-auto">
        <div className="text-center lg:mb-8 mb-8" style={{ width: "135px" }}>
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
                    trailColor: "black",
                  })}
                >
                  <div>
                    <p className="font-semi-bold">HTML</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center" style={{ width: "135px" }}>
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
                    trailColor: "black",
                  })}
                >
                  <div>
                    <p className="font-semi-bold">CSS</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center" style={{ width: "135px" }}>
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
                    trailColor: "black",
                  })}
                >
                  <div>
                    <p className="font-semi-bold">JAVASCRIPT</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center" style={{ width: "135px" }}>
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
                    trailColor: "black",
                  })}
                >
                  <div>
                    <p className="font-semi-bold">REACT</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center" style={{ width: "135px" }}>
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
                    trailColor: "black",
                  })}
                >
                  <div>
                    <p className="font-semi-bold">REACT ROUTER</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center" style={{ width: "135px" }}>
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
                    trailColor: "black",
                  })}
                >
                  <div>
                    <p className="font-semi-bold">BOOTSTRAP</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center" style={{ width: "135px" }}>
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
                    trailColor: "black",
                  })}
                >
                  <div>
                    <p className="font-semi-bold ">TAILWIND CSS</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center" style={{ width: "135px" }}>
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
                    trailColor: "black",
                  })}
                >
                  <div>
                    <p className="font-semi-bold">DAISY UI</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center" style={{ width: "135px" }}>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 99 : 0;

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
                    trailColor: "black",
                  })}
                >
                  <div>
                    <p className="font-semi-bold">Firebase Authentication</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center" style={{ width: "135px" }}>
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
                    trailColor: "black",
                  })}
                >
                  <div>
                    <p className="font-semi-bold">NODE JS</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center" style={{ width: "135px" }}>
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
                    trailColor: "black",
                  })}
                >
                  <div>
                    <p className="font-semi-bold">EXPRESS JS</p>
                    <p className="text-2xl text-white text-center">{`${percentage}%`}</p>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
        <div className="text-center" style={{ width: "135px" }}>
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
                    trailColor: "black",
                  })}
                >
                  <div>
                    <p className="font-semi-bold">MONGODB</p>
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
