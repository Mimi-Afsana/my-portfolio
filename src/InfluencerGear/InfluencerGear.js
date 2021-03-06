import React from 'react';
import { FaDatabase, FaLocationArrow, FaGithub } from "react-icons/fa";

const InfluencerGear = () => {
  return (
    <div className="w-1/3 mx-auto">
      <img src="https://i.ibb.co/w4F02Bn/Influencer-gear.png" alt="" />
      <h1 className="text-3xl lg:mt-10 text-slate-400 font-bold">
      INFLUENCER GEAR
      </h1>
      <button className="bg-orange-300 lg:mt-3 lg:px-4 lg:py-1 rounded">
        HTML
      </button>
      <button className="bg-orange-300 lg:mt-3 lg:px-4 lg:py-1 rounded lg:ml-3">
        CSS
      </button>
      

      <h1 className=" bg-slate-600 lg:mt-10 lg:p-2 rounded-full text-center text-2xl font-bold text-slate-400 shadow-2xl">
        Project Details :
      </h1>
      <p className="mt-10 text-slate-400">
        ● This is a responsive website.
      </p>
      <p className="mt-4 text-slate-400">
        ● There is a form.
      </p>
      <p className="mt-4 text-slate-400">
        ● And there is a footer.
      </p>

      <a
        target="_blank"
        href="https://darudul.github.io/influencer-gear/"
        className=""
      >
        <button className="p-4 bg-sky-900 rounded lg:mb-10 lg:mt-6">
          <FaLocationArrow className="lg:w-20 mb-2 text-white text-xl"></FaLocationArrow>
          <span className="font-bold text-white"> Live Website</span>
        </button>
      </a>

      <a
        target="_blank"
        href="https://github.com/Darudul/influencer-gear"
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

export default InfluencerGear;