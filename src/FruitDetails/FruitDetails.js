import React from "react";
import { FaLocationArrow, FaGithub } from "react-icons/fa";
import "./FruitDetail.css";

const FruitDetails = () => {
  return (
    <div className="w-full lg:w-1/3 mx-auto px-4 py-6">
      <img
        src="https://i.ibb.co.com/RTYFJxg/react-career-hub.png"
        alt="Career Hub"
        className="w-full max-w-md mx-auto rounded"
      />
      <h1 className="text-2xl sm:text-3xl mt-6 mb-4 text-slate-400 font-bold text-center">
        Career Hub
      </h1>

      {/* Tech Stack Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {[
          "HTML",
          "CSS",
          "Tailwind CSS",
          "DaisyUI",
          "React",
          "React Router",
          "React Icons",
          "Firebase Authentication",
        ].map((tech) => (
          <button
            key={tech}
            className="bg-orange-300 px-3 py-1 rounded text-sm sm:text-base text-center"
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
        <p>● Firebase authentication to manage user login and secure data access.</p>
        <p>● Implemented React Router for dynamic routing, allowing users to view job details, apply, and filter jobs.</p>
        <p>● Created an interactive blogs page for displaying posts.</p>
        <p>● Added job filtering options on the Applied Jobs page (e.g., Onsite, Remote).</p>
        <p>● Consistent footer across all pages.</p>
      </div>

      {/* Links to Live Site and GitHub */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
        <a
          target="_blank"
          href="https://react-career-hub-960a5.web.app/"
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
          href="https://github.com/Mimi-Afsana/react-career-hub"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto flex items-center justify-center bg-sky-900 text-white font-bold py-3 px-6 rounded shadow-lg hover:bg-sky-800 transition">
            <FaGithub className="mr-2 text-xl" />
            Client Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default FruitDetails;
