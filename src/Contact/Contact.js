import React, { useEffect } from "react";
import "./Contact.css";
import { FaVoicemail, FaPhoneVolume } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
    // Initialize EmailJS with your public key
    emailjs.init("ZktPOvOzOpHok2Y2W");  // Replace with your public API key
  }, []);

  const sentEmail = (event) => {
    event.preventDefault();
    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const data = {
      name: `${fname} ${lname}`,
      email,
      message,
    };

    emailjs
      .send("service_v4pltcg", "template_2bljvdk", data)
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div className="max-w-7xl mx-auto form-submit sm:pl-10" id="contact">
      <div className="text-white">
        <h2 className="text-xl font-bold lg:mb-5 mb-5 lg:mt-20 mt-24">
          DON'T BE SHY!
        </h2>
        <p className="lg:mb-4 mb-4 text-xl">
          Feel free to get in touch with me. I am always open to discussing new
          project, creative ideas or opportunities to be part of your visions.
        </p>
        <p className="font-bold">MAIL ME</p>
        <div className="lg:mb-3 flex mb-3">
          <FaVoicemail className="mt-1 text-3xl font-bold text-orange-300"></FaVoicemail>
          <p className="ml-3 text-xl">afsanamimi.wd@gmail.com</p>
        </div>
        <p className="font-bold">CALL ME</p>
        <div className="lg:mb-5 flex mb-3">
          <FaPhoneVolume className="mt-1 text-3xl text-orange-300 font-bold"></FaPhoneVolume>
          <p className="ml-3 text-xl">+601137957340</p>
        </div>
      </div>

      <div
        className="text-white"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
      >
        <h1 className="text-3xl font-bold mt-10 lg:mt-20">
          GET IN <span className="text-orange-300">TOUCH</span>
        </h1>
        <form onSubmit={sentEmail}>
          <input
            name="fname"
            type="text"
            className="w-4/5 mt-8 lg:mt-10 bg-slate-600 shadow-2xl text-white lg:pl-5 p-2 rounded font-bold mb-3"
            placeholder="YOUR FIRST NAME"
          />
          <input
            name="lname"
            type="text"
            className="lg:mt-4 w-4/5 p-2 rounded font-bold bg-slate-600 shadow-2xl mb-3"
            placeholder="YOUR LAST NAME"
          />
          <input
            name="email"
            type="email"
            className="lg:w-4/5 w-4/5 lg:mt-4 text-white lg:pl-5 p-2 rounded font-bold bg-slate-600 shadow-2xl"
            placeholder="YOUR EMAIL ADDRESS"
          />
          <textarea
            name="message"
            cols="30"
            rows="5"
            className="mt-5 lg:w-4/5 w-4/5 lg:pl-5 rounded font-bold bg-slate-600 shadow-2xl p-2"
            placeholder="YOUR MESSAGE"
          ></textarea>
          <br />
          <input
            type="submit"
            value="SEND MESSAGE"
            className="border border-orange-300 pl-8 pr-8 rounded lg:mt-4 mt-4 text-white p-2 font-semi-bold wrapper hover-my"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
