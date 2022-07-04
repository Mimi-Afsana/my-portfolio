import React from "react";
import { FaDatabase, FaLocationArrow, FaGithub } from "react-icons/fa";

const Medical = () => {
  return (
    <div className="w-1/3 mx-auto">
      <img src="https://i.ibb.co/xDMm6DD/MEDICAL-CARE-2.png" alt="" />
      <h1 className="text-3xl lg:mt-10 text-slate-400 font-bold">
        MEDICAL CARE
      </h1>
      <button className="bg-orange-300 lg:mt-3 lg:px-4 lg:py-1 rounded">
        HTML
      </button>
      <button className="bg-orange-300 lg:mt-3 lg:px-4 lg:py-1 rounded lg:ml-3">
        CSS
      </button>
      <button className="bg-orange-300 lg:mt-3 lg:px-4 lg:py-1 rounded lg:ml-3">
        JavaScript
      </button>
      <button className="bg-orange-300 lg:mt-3 lg:px-4 lg:py-1 rounded lg:ml-3">
        React
      </button>

      <button className="bg-orange-300 lg:mt-3 lg:px-4 lg:py-1 rounded lg:ml-3">
        Bootstrap
      </button>

      <h1 className=" bg-slate-600 lg:mt-10 lg:p-2 rounded-full text-center text-2xl font-bold text-slate-400 shadow-2xl">
        Project Details :
      </h1>
      <p className="mt-10 text-slate-400">
        ● This is a website where single doctor provide different services and
        doctor also go for home visit for doing goods his patients.
      </p>
      <p className="mt-4 text-slate-400">
        ● On services section there is a specific button and clicking on the
        button will take the user to the Checkout route. And this route is
        protected route.
      </p>
      <p className="mt-4 text-slate-400">● Every page footer is common.</p>
      <p className="mt-4 text-slate-400">
        ● On blogs page describe three question. These are: 1.Difference between
        authorization and authentication? 2.Why are you using firebase? What
        other options do you have to implement authentication? 3.What other
        services does firebase provide other than authentication ?
      </p>
      <p className="mt-4 text-slate-400">
        ● On about page describe about my goal and And how i will work hard to
        achieve my goal.
      </p>
      <p className="mt-4 text-slate-400">
        ● On login page user can login and also toggle sign in page.
      </p>
      <p className="mt-4 text-slate-400">
        ● In this website i use css framework bootstrap and react bootstrap,
        also use react library, react router, react tostify, Firebase
        Google-backed application development , firebase hooks.
      </p>

      <a
        target="_blank"
        href="https://single-doctor-website.web.app/"
        className=""
      >
        <button className="p-4 bg-sky-900 rounded lg:mb-10 lg:mt-6">
          <FaLocationArrow className="lg:w-20 mb-2 text-white text-xl"></FaLocationArrow>
          <span className="font-bold text-white"> Live Website</span>
        </button>
      </a>

      <a
        target="_blank"
        href="https://github.com/Mimi-Afsana/medical-care"
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

export default Medical;
