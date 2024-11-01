import React, { useEffect } from "react";
import "./Contact.css";
import { FaVoicemail, FaPhoneVolume } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
    emailjs.init("ZktPOvOzOpHok2Y2W"); // public API key
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
          toast.success("Email sent successfully!");

          // Clear form data after success
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          toast.error("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Toast Container */}
      <ToastContainer /> {/* Default ToastContainer */}

      <div className="form-submit sm:pl-10" id="contact">
        <div className="text-white text-center sm:text-left">
          <h2 className="text-xl font-bold mb-5 mt-10 sm:mt-20">
            DON'T BE SHY!
          </h2>
          <p className="mb-4 text-lg sm:text-xl">
            Feel free to get in touch with me. I am always open to discussing new
            project ideas or opportunities to be part of your vision.
          </p>
          <p className="font-bold">MAIL ME</p>
          <div className="flex justify-center sm:justify-start mb-3 items-center">
            <FaVoicemail className="text-3xl text-orange-300 mr-3" />
            <p className="text-lg sm:text-xl">afsanamimi.wd@gmail.com</p>
          </div>
          <p className="font-bold">CALL ME</p>
          <div className="flex justify-center sm:justify-start mb-5 items-center">
            <FaPhoneVolume className="text-3xl text-orange-300 mr-3" />
            <p className="text-lg sm:text-xl">+8801772670796</p>
          </div>
        </div>

        <div
          className="text-white mt-10"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
            GET IN <span className="text-orange-300">TOUCH</span>
          </h1>
          <form onSubmit={sentEmail} className="flex flex-col items-center sm:items-start">
            <input
              name="fname"
              type="text"
              className="w-full sm:w-4/5 mt-8 bg-slate-600 shadow-2xl text-white pl-5 p-2 rounded font-bold mb-3"
              placeholder="YOUR FIRST NAME"
            />
            <input
              name="lname"
              type="text"
              className="w-full sm:w-4/5 mt-4 text-white pl-5 p-2 rounded font-bold bg-slate-600 shadow-2xl"
              placeholder="YOUR LAST NAME"
            />
            <input
              name="email"
              type="email"
              className="w-full sm:w-4/5 mt-4 text-white pl-5 p-2 rounded font-bold bg-slate-600 shadow-2xl"
              placeholder="YOUR EMAIL ADDRESS"
            />
            <textarea
              name="message"
              cols="30"
              rows="5"
              className="mt-5 w-full sm:w-4/5 pl-5 rounded font-bold bg-slate-600 shadow-2xl p-2"
              placeholder="YOUR MESSAGE"
            ></textarea>
            <br />
            <input
              type="submit"
              value="SEND MESSAGE"
              className="border border-orange-300 w-full sm:w-auto pl-8 pr-8 rounded mt-4 text-white p-2 font-bold hover:bg-orange-300 hover:text-slate-900 transition-colors"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
