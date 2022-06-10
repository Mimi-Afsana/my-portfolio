import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Resume = () => {
  return (
    <div className='lg:pl-32 mt-10 pl-5 '>
      <div class="lg:mt-20 flex border lg:w-64 w-52 rounded-full border-orange-300 mt-5">
        <a
          href="https://drive.google.com/file/d/1AKAG-W6Edqx0azBV6u76BgXBd1sAZW4e/view?usp=sharing"
          className="text-white lg:ml-8 lg:mt-4 mt-4 lg:mb-4 font-bold pl-2"
        >
          DOWNLOAD RESUME
        </a>
        <FaArrowAltCircleDown className="lg:ml-4 ml-3 lg:mt-5 text-white mb-5 mt-5"></FaArrowAltCircleDown>
      </div>
    </div>
  );
};

export default Resume;
