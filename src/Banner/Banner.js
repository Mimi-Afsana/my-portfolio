import "./Banner.css";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Banner = () => {
  return (
    <div className="lg:mt-14 max-w-7xl mx-auto banner-width" id="header">
      <div className="card-side banner-grid lg:flex md:block">
        <div className="mt-5">
          <img
            src="https://i.ibb.co/025109B/IMG-20220702-193420-removebg-preview.png"
            alt="Afsana Mimi"
            className="lg:ml-6 bg-slate-800 shadow-2xl"
            data-aos="flip-left"
            data-aos-duration="600"
          />
        </div>

        <div>
          <h2 className="card-title text-orange-300 text-4xl lg:pl-40 lg:mt-8 font-semi-bold mb-2 mt-12 ml-10">
            I'M
            <Typewriter
              options={{
                skipAddStyles: false,
                strings: ["<span class='text-orange-300'>AFSANA MIMI</span>"],
                autoStart: true,
                loop: true,
                pauseFor: 500,
              }}
            />
          </h2>

          <h2 className="card-title text-white text-4xl lg:pl-40 font-semi-bold mb-4 mt-5 ml-10">
            <span>WEB DEVELOPER</span>
          </h2>

          <p className="text-white lg:pl-48 mb-3 text-xl height-set pr-8 pl-10">
            I’m a web designer & web developer focused on crafting clean &
            user-friendly experiences based in Malaysia. I am passionate about
            building excellent websites for all of my clients.
          </p>

          <p className="text-white lg:pl-48 text-xl height-set pr-8 pl-10">
            A well-organised person, problem solver, independent employee with
            high attention to detail. Interested in the entire frontend spectrum
            and working on ambitious projects with positive people.
          </p>

          <div className="lg:mt-16 mt-6 lg:ml-48 ml-8 pl-1 font-bold">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1AZ8_ux5yOHetNT1ifwv5f1vu9lEC7DTMpHr9_vJ652s/view?usp=sharing"
              className="animated-button1 text-white p-4 rounded hover-my"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <strong>Download Resume</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
