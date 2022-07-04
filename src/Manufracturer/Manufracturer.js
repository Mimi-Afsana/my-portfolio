import React from "react";
import { FaDatabase, FaLocationArrow, FaGithub } from "react-icons/fa";

const Manufracturer = () => {
  return (
    <div className="w-1/3 mx-auto">
      <img
        src="https://i.ibb.co/gTTWwd3/Refrigerator-Parts-Manufracturer-Website-2.png"
        alt=""
      />
      <h1 className="text-3xl lg:mt-10 text-slate-400 font-bold">
        REFRIGERATOR PARTS MANUFRACTURER
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
        Nodejs
      </button>
      <button className="bg-orange-300 lg:mt-3 lg:px-4 lg:py-1 rounded lg:ml-3">
        Tailwind
      </button>
      <br />
      <button className="bg-orange-300 lg:mt-3 lg:px-4 lg:py-1 rounded">
        Daisy UI
      </button>
      <button className="bg-orange-300 lg:mt-3 lg:px-4 lg:py-1 rounded lg:ml-3">
        Expressjs
      </button>

      <button className="bg-orange-300 lg:mt-3 lg:px-4 lg:py-1 rounded lg:ml-3">
        React
      </button>
      <h1 className=" bg-slate-600 lg:mt-10 lg:p-2 rounded-full text-center text-2xl font-bold text-slate-400 shadow-2xl">
        Project Details :
      </h1>
      <p className="mt-10 text-slate-400">
        ● This website is about refrigerator menufracturer parts website. From
        this warehouse customer can order which parts they want and how many
        they want. On home page user can see 6 tools item, business summary
        section, reviews section, company profile section.
      </p>
      <p className="mt-4 text-slate-400">
        ● On tools Item there is a update button by clicking this button can see
        item full information and also book order the parts and also they can
        not order less than minimum quantity and also higher than maximum
        quantity.
      </p>
      <p className="mt-4 text-slate-400">● Every page footer is common.</p>
      <p className="mt-4 text-slate-400">
        ● On blogs page describe five question and my portfolio information.
      </p>
      <p className="mt-4 text-slate-400">
        ● On my item page user can see his/her items which they added and manage
        the items also.
      </p>
      <p className="mt-4 text-slate-400">
        ● On dashboard log in user can see the product which they book and also
        delete order item. On my profile page user can update their profile
        information and give review which one is appear in the home page.
      </p>
      <p className="mt-4 text-slate-400">
        ● On dashboard admin can add a new product, see all the user, an admin
        can make another one admin also and manage all order.
      </p>
      <p className="mt-4 text-slate-400">
        ● On My Portfolio page describe about portfolio.
      </p>
      <p className="mt-4 text-slate-400">
        ● On login page user can login and also toggle sign in page.
      </p>

      <a
        target="_blank"
        href="https://assignment-12-156a9.web.app/"
        className=""
      >
        <button className="p-4 bg-sky-900 rounded lg:mb-10 lg:mt-6">
          <FaLocationArrow className="lg:w-20 mb-2 text-white text-xl"></FaLocationArrow>
          <span className="font-bold text-white"> Live Website</span>
        </button>
      </a>

      <a
        target="_blank"
        href="https://github.com/Mimi-Afsana/manufracturer-parts-client-side"
        className=""
      >
        <button className="p-4 bg-sky-900 rounded lg:mb-10 lg:mt-6 lg:ml-10">
          <FaGithub className="lg:w-20 mb-2 text-white text-xl"></FaGithub>
          <span className="font-bold text-white"> Client Code</span>
        </button>
      </a>

      <a
        target="_blank"
        href="https://github.com/Mimi-Afsana/manufracturer-parts-server-side"
        className=""
      >
        <button className="p-4 bg-sky-900 rounded lg:mb-10 lg:mt-6 lg:ml-10">
          <FaDatabase className="lg:w-20 mb-2 text-white text-xl"></FaDatabase>
          <span className="font-bold text-white"> Server Code</span>
        </button>
      </a>
    </div>
  );
};

export default Manufracturer;
