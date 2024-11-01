import React from "react";
import { FaLocationArrow, FaGithub } from "react-icons/fa";

const ConventionCenter = () => {
  return (
    <div className="w-full lg:w-1/3 mx-auto px-4 py-6">
      <img
        src="https://i.ibb.co/Yfz9pkm/Convention-community-center.png"
        alt="Convention Community Center"
        className="w-full max-w-md mx-auto rounded"
      />
      <h1 className="text-2xl sm:text-3xl mt-6 mb-4 text-slate-400 font-bold text-center">
        CONVENTION COMMUNITY CENTER
      </h1>

      {/* Technology Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {["HTML", "CSS", "Bootstrap"].map((tech) => (
          <button
            key={tech}
            className="bg-orange-300 px-4 py-1 rounded text-sm sm:text-base"
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
        <p>● This website is about the convention community center.</p>
        <p>● It shows different types of booking packages: Basic, Standard, and Special.</p>
        <p>● There is a simple form and a footer.</p>
      </div>

      {/* Links to Live Site and GitHub */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <a
          target="_blank"
          href="https://clever-curran-convention-center.netlify.app/"
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
          href="https://github.com/Mimi-Afsana/assignment-3-conventioncommunity-center"
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

export default ConventionCenter;
