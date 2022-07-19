import React from "react";
import { FaDatabase, FaLocationArrow, FaGithub } from "react-icons/fa";

const PhoneHunter = () => {
  return (
    <div className="lg:w-1/3 mx-auto my-fruit">
      <img src="https://i.ibb.co/BjQg2bd/Phone-Hunter.png" alt="" />
      <h1 className="text-3xl lg:mt-10 mt-10 mb-10 text-slate-400 font-bold system">
        PHONE HUNTER
      </h1>
      <button className="bg-orange-300 lg:mt-3 mt-3 lg:px-4 lg:py-1 px-4 py-1 rounded system">
        HTML
      </button>
      <button className="bg-orange-300 lg:mt-3 mt-3 lg:px-4  lg:py-1 px-4 py-1 rounded lg:ml-3 ml-3">
        CSS
      </button>
      <button className="bg-orange-300 lg:mt-3 mt-3 lg:px-4  lg:py-1 px-4 py-1 rounded lg:ml-3 ml-3">
        JavaScript
      </button>

      <h1 className=" bg-slate-600 lg:mt-10 mt-10 lg:p-2 rounded-full text-center text-2xl font-bold text-slate-400 shadow-2xl mmy-fruit">
        Project Details :
      </h1>
      <p className="mt-10 text-slate-400 mmy-fruit">
        ● This is website about phone hunter and there is a search button for
        searching phone.
      </p>
      <p className="mt-10 text-slate-400 mmy-fruit">
        ● In these website user can search different types of phone like oppo,
        samsung, huawei.
      </p>
      <p className="mt-10 text-slate-400 mmy-fruit">
        ● In the search field if user put wrong information it will be showing
        error.
      </p>

      <a
        target="_blank"
        href="https://awesome-assignment-6-4e1073.netlify.app/"
        className=""
      >
        <button className="p-4 bg-sky-900 rounded lg:mb-10 mb-10 lg:mt-12 mt-12 live-fruit">
          <FaLocationArrow className="lg:w-20 mb-2 text-white text-xl"></FaLocationArrow>
          <span className="font-bold text-white"> Live Website</span>
        </button>
      </a>

      <a
        target="_blank"
        href="https://github.com/Mimi-Afsana/phonee-hunterr"
        className=""
      >
        <button className="p-4 bg-sky-900 rounded lg:mb-10 lg:mt-6 lg:ml-10">
          <FaGithub className="lg:w-20 mb-2 text-white text-xl"></FaGithub>
          <span className="font-bold text-white"> GitHub Code</span>
        </button>
      </a>
    </div>
  );
};

export default PhoneHunter;
