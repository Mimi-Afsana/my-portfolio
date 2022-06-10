import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div class=" lg:mt-10 lg:pl-32 mx-auto banner-width pl-5 pr-5">
      <div className="card-side banner-grid lg:flex">
        <div className="">
          <img
            src="https://i.ibb.co/JdgBBMQ/IMG-20190428-153111.jpg"
            alt="picture"
            className="rounded"
          />
        </div>
        <div class="lg:pr-48">
          <h2 class="card-title text-orange-300 text-4xl lg:pl-48 lg:mt-12 font-bold mb-2 mt-3">
            I'M AFSANA MIMI
          </h2>
          <h2 className="card-title text-white text-4xl lg:pl-48 font-bold mb-4">
            {" "}
            <span>WEB DEVELOPER</span>
          </h2>
          <p
            className="text-white lg:pl-48 mb-10
        "
          >
            I’m a web designer & web developer focused on crafting clean &
            user-friendly experiences based on Malaysia. I am passionate about
            building excellent website for all of my clients.
          </p>
          <div class="lg:pl-48 lg:mt-6 sm:pb-20">
            <a
              href="#about"
              className="text-white p-4 rounded-full border border-orange-300 font-bold "
            >
              MY FULL INFORMATION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
