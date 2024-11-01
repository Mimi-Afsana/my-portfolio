import React from 'react';
import { FaLocationArrow, FaGithub } from "react-icons/fa";

const InfluencerGear = () => {
  return (
    <div className="w-full lg:w-1/3 mx-auto px-4 py-6">
      <img
        src="https://i.ibb.co/w4F02Bn/Influencer-gear.png"
        alt="Influencer Gear"
        className="w-full max-w-xs sm:max-w-sm mx-auto rounded"
      />
      <h1 className="text-2xl sm:text-3xl mt-6 mb-4 text-slate-400 font-bold text-center">
        INFLUENCER GEAR
      </h1>

      {/* Tech Stack Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {["HTML", "CSS"].map((tech) => (
          <button
            key={tech}
            className="bg-orange-300 px-4 py-1 rounded text-sm sm:text-base text-center"
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Project Details Section */}
      <h2 className="bg-slate-600 text-center text-lg sm:text-xl lg:text-2xl font-bold text-slate-400 rounded-full py-2 mt-8 shadow-lg">
        Project Details:
      </h2>
      <div className="mt-6 text-slate-400 space-y-4 px-2 sm:px-4">
        <p>● This is a responsive website.</p>
        <p>● There is a form.</p>
        <p>● And there is a footer.</p>
      </div>

      {/* Links to Live Site and GitHub */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <a
          target="_blank"
          href="https://darudul.github.io/influencer-gear/"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto flex items-center justify-center bg-sky-900 text-white font-bold py-3 px-6 rounded shadow-lg hover:bg-sky-800 transition">
            <FaLocationArrow className="mr-2 text-xl" />
            Live Website
          </button>
        </a>
        <a
          target="_blank"
          href="https://github.com/Darudul/influencer-gear"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto flex items-center justify-center bg-sky-900 text-white font-bold py-3 px-6 rounded shadow-lg hover:bg-sky-800 transition">
            <FaGithub className="mr-2 text-xl" />
            GitHub Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default InfluencerGear;
