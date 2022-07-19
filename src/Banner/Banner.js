import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Banner = () => {
  const [count, setCount] = useState(0);
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  // const handleType = (count:number) => {
  //   // access word count number
  //   console.log(count)}
  // }
  return (
    <div class=" lg:mt-14 max-w-7xl mx-auto banner-width" id="header">
      <div className="card-side banner-grid lg:flex md:block">
        <div className="">
          <img
            src="https://i.ibb.co/025109B/IMG-20220702-193420-removebg-preview.png"
            alt="picture"
            className="lg:ml-6 bg-slate-800 shadow-2xl"
            data-aos="flip-left"
            data-aos-duration="600"
          />
          {/* <div class=" lg:mt-16 mt-6 lg:ml-7 ml-8 pl-1">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1nbUXw2gxNPxx68RVr6uKB2DuaeMPFbbJ/view?usp=sharing"
              class="animated-button1 text-white p-4 rounded font-semi-bold hover-my"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Download Resume{" "}
            </a>
          </div> */}
        </div>

        <div class="">
          <h2 class="card-title text-orange-300 text-4xl lg:pl-40 lg:mt-8 font-semi-bold mb-2 mt-12 ml-10">
            I'M
            <Typewriter
              options={{
                skipAddStyles: false,
                strings: ["<span class='2ca46d mt-5'>AFSANA MIMI</span>"],
                autoStart: true,
                loop: true,
                pauseFor: 500,
              }}
            />
          </h2>

          <h2 className="card-title text-white text-4xl lg:pl-40 font-semi-bold mb-4 mt-5 ml-10">
            {" "}
            <span>WEB DEVELOPER</span>
          </h2>
          <p
            className="text-white lg:pl-48 mb-3 text-xl height-set pr-8 pl-10
        "
          >
            I’m a web designer & web developer focused on crafting clean &
            user-friendly experiences based on Malaysia. I am passionate about
            building excellent website for all of my clients.
          </p>
          <p
            className="text-white lg:pl-48 text-xl height-set pr-8 pl-10
        "
          >
            Well-organised person, problem solver, independent employee with
            high attention to detail.Interested in the entire frontend spectrum
            and working on ambitious projects with positive people.
          </p>

          {/* <div class="lg:pl-48 lg:mt-20 sm:pb-20">
            <a
              href="#about"
              className="text-white p-4 rounded-full border border-orange-300 font-semi-bold hover-my"
            >
              MY FULL INFORMATION
            </a>
          </div> */}
          <div class=" lg:mt-16 mt-6 lg:ml-48 ml-8 pl-1">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1nbUXw2gxNPxx68RVr6uKB2DuaeMPFbbJ/view?usp=sharing"
              class="animated-button1 text-white p-4 rounded font-semi-bold hover-my"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Download Resume{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
