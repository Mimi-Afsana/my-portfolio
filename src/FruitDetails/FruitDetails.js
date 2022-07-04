import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaDatabase, FaLocationArrow, FaGithub } from "react-icons/fa";

const FruitDetails = () => {
  return (
    <div className="w-1/3 mx-auto">
      <img
        src="https://i.ibb.co/QfW1P62/Warehouse-management-system-1.png"
        alt=""
      />
      <h1 className="text-3xl lg:mt-10 text-slate-400 font-bold">
        FRUITS WAREHOUSE MANAGEMENT SYSTEM
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
      <button className="bg-orange-300 lg:mt-3 lg:px-4 lg:py-1 rounded lg:ml-3">
        Nodejs
      </button>
      <button className="bg-orange-300 lg:mt-3 lg:px-4 lg:py-1 rounded ">
        Expressjs
      </button>

      <button className="bg-orange-300 lg:mt-3 lg:px-4 lg:py-1 rounded lg:ml-3">
        React
      </button>
      <h1 className=" bg-slate-600 lg:mt-10 lg:p-2 rounded-full text-center text-2xl font-bold text-slate-400 shadow-2xl">
        Project Details :
      </h1>
      <p className="mt-10 text-slate-400">
        ● This website is about fruits warehouse. From this warehouse customer
        can order which fruits they want and how much they want. On home page
        user can see 6 inventory item. Our service and our supliers information.
      </p>
      <p className="mt-4 text-slate-400">
        ● On Inventory Item there is a update button by clicking this button can
        see delivered item and also got one input field this field called
        restock from there can update quantity.
      </p>
      <p className="mt-4 text-slate-400">● Every page footer is common.</p>
      <p className="mt-4 text-slate-400">
        ● On blogs page describe four question. These are: 1.Difference between
        javascript and nodejs ? 2.When should you use nodejs and when should you
        use mongodb? 3. Differences between sql and nosql databases. 4.What is
        the purpose of jwt and how does it work?
      </p>
      <p className="mt-4 text-slate-400">
        ● On my item page user can see his/her items which they added and manage
        the items also.
      </p>
      <p className="mt-4 text-slate-400">
        ● On Manage item page can see all item.
      </p>
      <p className="mt-4 text-slate-400">
        ● On Manage item page can see all item.
      </p>
      <p className="mt-4 text-slate-400">
        ● On about page we describe about our warehouse.
      </p>
      <p className="mt-4 text-slate-400">
        ● On login page user can login and also toggle sign in page.
      </p>

      <a
        target="_blank"
        href="https://fruits-warehouse-website.web.app/"
        className=""
      >
        <button className="p-4 bg-sky-900 rounded lg:mb-10 lg:mt-6">
          <FaLocationArrow className="lg:w-20 mb-2 text-white text-xl"></FaLocationArrow>
          <span className="font-bold text-white"> Live Website</span>
        </button>
      </a>

      <a
        target="_blank"
        href="https://github.com/Mimi-Afsana/warehouse-management-clientside"
        className=""
      >
        <button className="p-4 bg-sky-900 rounded lg:mb-10 lg:mt-6 lg:ml-10">
          <FaGithub className="lg:w-20 mb-2 text-white text-xl"></FaGithub>
          <span className="font-bold text-white"> Client Code</span>
        </button>
      </a>

      <a
        target="_blank"
        href="https://github.com/Mimi-Afsana/warehouse-management-serverside"
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

export default FruitDetails;
