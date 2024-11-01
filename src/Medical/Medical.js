import React from "react";
import { FaLocationArrow, FaGithub } from "react-icons/fa";

const Medical = () => {
  return (
    <div className="w-full lg:w-1/3 mx-auto px-4 py-6">
      <img
        src="https://i.ibb.co.com/cDwXbqr/medical-care.png"
        alt="Medical Care"
        className="w-full max-w-md mx-auto rounded"
      />
      <h1 className="text-2xl sm:text-3xl mt-6 mb-6 text-slate-400 font-bold text-center">
        MEDICAL CARE
      </h1>

      {/* Tech Stack Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {["HTML", "CSS", "JavaScript", "React", "Bootstrap"].map((tech) => (
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
        <p>
          ● This is a website where a single doctor provides various services,
          including home visits for patients' wellbeing.
        </p>
        <p>
          ● Each service has a button that redirects the user to a protected
          Checkout route.
        </p>
        <p>● The footer remains consistent across all pages.</p>
        <p>
          ● The Blogs page covers three questions: 1. Differences between
          authorization and authentication, 2. Why Firebase is used for
          authentication and alternatives, 3. Additional Firebase services.
        </p>
        <p>
          ● The About page shares goals and work ethics to achieve them.
        </p>
        <p>
          ● The Login page provides options for logging in and toggling
          sign-up.
        </p>
        <p>
          ● This website uses Bootstrap, React-Bootstrap, React, React Router,
          Firebase, and additional libraries like Toastify and Firebase hooks.
        </p>
      </div>

      {/* Links to Live Site and GitHub */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <a
          target="_blank"
          href="https://single-doctor-website.web.app/"
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
          href="https://github.com/Mimi-Afsana/my-medical-care/tree/main/medical-care"
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

export default Medical;
