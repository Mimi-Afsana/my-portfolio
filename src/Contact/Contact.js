import React from "react";
import "./Contact.css";
import { FaVoicemail, FaPhoneVolume } from "react-icons/fa";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const sentEmail = (event) => {
    event.preventDefault();
    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const data = {
      name: fname + " " + lname,
      email,
      message,
    };
    console.log(data);

    emailjs
      .send("service_nplce6o", "template_3jqce8h", data, "bAhautiKLo-P9KKPn")
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="lg:pl-40 form-submit" id="contact">
      <div className="text-white ">
        <h2 className="text-xl font-bold lg:mb-5 mb-5 lg:mt-20">
          DON'T BE SHY!
        </h2>
        <p className="lg:pr-96 lg:mb-4 mb-4">
          Feel free to get in touch with me. I am always open to discussing new
          project, creative ideas or opportunities to be part of your visions.
        </p>
        <p className="font-bold">MAIL ME</p>
        <div className="lg:mb-3 flex mb-3">
          <FaVoicemail className="mt-1 text-2xl font-bold text-orange-300"></FaVoicemail>
          <p className="ml-3">afsanamimi61220@gmail.com</p>
        </div>
        <p className="font-bold">CALL ME</p>
        <div className="lg:mb-3 flex mb-3">
          <FaPhoneVolume className="mt-1 text-2xl text-orange-300 font-bold"></FaPhoneVolume>
          <p className="ml-3">+601137957340</p>
        </div>
        <div></div>
      </div>

      <div className="text-white">
        <h1 className="lg:pr-96 text-3xl font-bold mt-10">
          GET IN <span className="text-orange-300">TOUCH</span>
        </h1>
        <form onSubmit={sentEmail}>
          
          <input
            name="fname"
            type="text"
            className="lg:w-80 w-4/5 mt-8 lg:mt-10 bg-slate-600 shadow-2xl text-white lg:pl-5 p-2 rounded font-bold mb-3"
            placeholder="YOUR FIRST NAME"
          />
          <input
            name="lname"
            type="text"
            className="lg:w-80 lg:mt-4 w-4/5  lg:ml-10 lg:pl-5 p-2 rounded font-bold bg-slate-600 shadow-2xl mb-3"
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
            id=""
            cols="30"
            rows="5"
            className="mt-5 lg:w-4/5 w-4/5 lg:pl-5 rounded font-bold bg-slate-600 shadow-2xl"
            placeholder="YOUR MESSAGE"
          ></textarea>{" "}
          <br />
          <input
            type="submit"
            value="SEND MESSAGE"
            className="border border-orange-300 pl-8 pr-8 rounded-full lg:mt-4 text-white p-2 font-bold"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
