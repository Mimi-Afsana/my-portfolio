import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div class="flex card-side lg:mt-10 lg:pl-80 mx-auto banner-width">
      <div>
        <img
          src="https://i.ibb.co/JdgBBMQ/IMG-20190428-153111.jpg"
          alt="picture"
          className="rounded"
        />
      </div>
      <div class="lg:pr-36">
        <h2 class="card-title text-white lg:pl-48 lg:mt-16">I'M AFSANA MIMI</h2>
        <h2 className="text-white card-title lg:pl-48">
          {" "}
          <span>WEB DEVELOPER</span>
        </h2>
        <p
          className="text-white lg:pl-48 lg:pr-96
        "
        >
          I’m a web designer & web developer focused on crafting clean &
          user-friendly experiences based on Malaysia. I am passionate about
          building excellent website for all of my clients.
        </p>
        <div class="lg:pl-48 lg:mt-6">
          <a href="#about" className="text-white bg-orange-400 p-4 rounded font-bold">
            MY FULL INFORMATION
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
