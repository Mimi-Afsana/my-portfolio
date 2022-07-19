import React from "react";
import { FaDatabase, FaLocationArrow, FaGithub } from "react-icons/fa";

const Medical = () => {
  return (
    <div className="lg:w-1/3 mx-auto my-fruit">
      <img src="https://i.ibb.co/xDMm6DD/MEDICAL-CARE-2.png" alt="" />
      <h1 className="text-3xl lg:mt-10 mt-10 mb-10 text-slate-400 font-bold system">
        MEDICAL CARE
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
      <button className="bg-orange-300 lg:mt-3 mt-3 lg:px-4  lg:py-1 px-4 py-1 rounded lg:ml-3 ml-3">
        React
      </button>

      <button className="bg-orange-300 lg:mt-3 mt-3 lg:px-4  lg:py-1 px-4 py-1 rounded lg:ml-3 ml-10">
        Bootstrap
      </button>

      <h1 className=" bg-slate-600 lg:mt-10 mt-10 lg:p-2 rounded-full text-center text-2xl font-bold text-slate-400 shadow-2xl mmy-fruit">
        Project Details :
      </h1>
      <p className="mt-10 text-slate-400 mmy-fruit">
        ● This is a website where single doctor provide different services and
        doctor also go for home visit for doing goods his patients.
      </p>
      <p className="mt-10 text-slate-400 mmy-fruit">
        ● On services section there is a specific button and clicking on the
        button will take the user to the Checkout route. And this route is
        protected route.
      </p>
      <p className="mt-10 text-slate-400 mmy-fruit">● Every page footer is common.</p>
      <p className="mt-10 text-slate-400 mmy-fruit">
        ● On blogs page describe three question. These are: 1.Difference between
        authorization and authentication? 2.Why are you using firebase? What
        other options do you have to implement authentication? 3.What other
        services does firebase provide other than authentication ?
      </p>
      <p className="mt-10 text-slate-400 mmy-fruit">
        ● On about page describe about my goal and And how i will work hard to
        achieve my goal.
      </p>
      <p className="mt-10 text-slate-400 mmy-fruit">
        ● On login page user can login and also toggle sign in page.
      </p>
      <p className="mt-10 text-slate-400 mmy-fruit">
        ● In this website i use css framework bootstrap and react bootstrap,
        also use react library, react router, react tostify, Firebase
        Google-backed application development , firebase hooks.
      </p>

      <a
        target="_blank"
        href="https://single-doctor-website.web.app/"
        className=""
      >
        <button className="p-4 bg-sky-900 rounded lg:mb-10 mb-10 lg:mt-12 mt-12 live-fruit">
          <FaLocationArrow className="lg:w-20 mb-2 text-white text-xl"></FaLocationArrow>
          <span className="font-bold text-white"> Live Website</span>
        </button>
      </a>

      <a
        target="_blank"
        href="https://github.com/Mimi-Afsana/my-medical-care/tree/main/medical-care"
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
