import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="lg:ml-32 mt-10">
      {/* <div class="rounded  mt-5 animated-button1">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1AKAG-W6Edqx0azBV6u76BgXBd1sAZW4e/view?usp=sharing"
          className="text-white lg:ml-8 lg:mt-4 mt-4 lg:mb-4 font-semi-bold pl-2 "
          href="#"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DOWNLOAD RESUME
        </a>
        <FaArrowAltCircleDown className="lg:ml-4 ml-3 lg:mt-5 text-white mb-5 mt-5"></FaArrowAltCircleDown>
      </div> */}

      <div className="mt-8 ml-10">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1AKAG-W6Edqx0azBV6u76BgXBd1sAZW4e/view?usp=sharing"
          class="animated-button1 rounded"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DOWNLOAD RESUME{" "}
        </a>
      </div>
    </div>
  );
};

export default Resume;
