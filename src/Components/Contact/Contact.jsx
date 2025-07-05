import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaPhone } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vu5dk7h",
        "template_m0o5hxk",
        form.current,
        "J_7kVUO3QuYneugNQ"
      )
      .then(
        () => {
          Swal.fire({
            title: "✅ Message sent successfully!",
            icon: "success",
            draggable: true,
          });
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "❌ Failed to send message.",
          });
        }
      );

    e.target.reset();
  };

  return (
    <div className="pt-26 -mb-5 text-base-content" id="contacts">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Me</h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-10 w-full">
          {/* Contact Info */}
          <div className="flex-1 w-full border border-primary rounded-xl p-6 bg-base-300 text-white shadow-lg py-10 space-y-5">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="flex gap-4 items-center">
              <FaPhone size={18} />
              <div>
                <p className="font-semibold text-gray-400">Phone </p>{" "}
                <p>+8801571312226</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <AiOutlineMail size={24} />
              <div>
                <p className="font-semibold text-gray-400">Email</p>
                <p>sujanckz926@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <FaFacebook  size={24} />
              <div>
                <p className="font-semibold text-gray-400">Facebook</p>
                <a href="https://www.facebook.com/share/1LL4u1yggP/">SUJAN CHAKMA</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 border border-primary bg-base-300 rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-2">
              <label className="label">Your Email <span className="text-red-400">*</span></label>
              <input
                type="email"
                name="user_email"
                required
                className="input input-bordered w-full rounded-md"
                placeholder="you@example.com"
              />
              <label className="label">Subject <span className="text-red-400">*</span></label>
              <input
                type="text"
                name="subject"
                required
                className="input input-bordered w-full rounded-md"
                placeholder="Subject about cooperation opportunities"
              />
              <label className="label">Message <span className="text-red-400">*</span></label>
              <textarea
                name="message"
                required
                className="textarea textarea-bordered w-full rounded-md"
                placeholder="Your detailed message here..."
              ></textarea>
              <button type="submit" className="btn btn-primary rounded-xl w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
