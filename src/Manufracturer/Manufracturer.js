import React from "react";
import { FaLocationArrow, FaGithub } from "react-icons/fa";

const Manufracturer = () => {
  return (
    <div className="w-full lg:w-1/3 mx-auto px-4 py-6">
      <img
        src="https://i.ibb.co.com/RhN0G7F/Screenshot-2024-11-01-025622.png"
        alt="Tea House Landing Page"
        className="w-full max-w-md mx-auto rounded"
      />
      <h1 className="text-2xl lg:text-3xl mt-8 mb-6 text-slate-400 font-bold text-center">
        Tea House Landing Page
      </h1>

      {/* Tech Stack Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {["HTML", "CSS", "Tailwind CSS", "DaisyUI"].map((tech) => (
          <button key={tech} className="bg-orange-300 px-4 py-1 rounded text-center">
            {tech}
          </button>
        ))}
      </div>

      {/* Project Details */}
      <h2 className="bg-slate-600 text-center text-xl lg:text-2xl font-bold text-slate-400 rounded-full py-2 mt-8 shadow-lg">
        Project Details:
      </h2>
      <div className="mt-6 text-slate-400 space-y-4 px-4">
        <p>● Used Tailwind CSS and DaisyUI to create a responsive layout that adapts smoothly to all screen sizes.</p>
        <p>● Developed a hero banner and “Featured Products” section with a responsive grid layout and DaisyUI cards.</p>
        <p>● Created a News & Events section to keep users informed of the latest updates and promotions.</p>
        <p>● Implemented a structured footer with contact information and an email subscription form.</p>
      </div>

      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <a
          target="_blank"
          href="https://tea-house-2a18b5daisyui.netlify.app/"
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
          href="https://github.com/Mimi-Afsana/tea-house-landing-page-daisyui"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto flex items-center justify-center bg-sky-900 text-white font-bold py-3 px-6 rounded shadow-lg hover:bg-sky-800 transition">
            <FaGithub className="mr-2 text-xl" />
            Github Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default Manufracturer;
