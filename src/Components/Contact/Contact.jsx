import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook, FiSend } from "react-icons/fi";

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
    <div className="pt-26 px-4 -mb-5 text-base-content" id="contacts">
      <h1 className="text-5xl font-bold text-center">Get In touch</h1>
      <p className="font-medium text-center pt-5 max-w-3xl mx-auto mb-8">
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'm always open to discussing new opportunities.
      </p>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row items-start gap-8">
          {/* Contact Info */}
          <div className="flex-1 w-full border-2 border-secondary bg-base-200 rounded-xl p-6 shadow-lg space-y-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Contact Information
            </h2>
            <div className="flex gap-4 items-center">
              <FaPhone size={18} />
              <div>
                <p className="font-semibold text-secondary">Phone/WhatsApp </p>{" "}
                <p className="font-semibold">+8801571312226</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <AiOutlineMail size={24} />
              <div>
                <p className="font-semibold text-secondary">Email</p>
                <p className="font-semibold">sujanckz926@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <IoLocationOutline size={28} />
              <div>
                <p className="font-semibold text-secondary">Location</p>
                <p className="font-semibold">Chattogram, Bangladesh</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold my-4">Find Me On</h2>
              <div className="flex gap-5">
                <a href="https://www.facebook.com/share/1LL4u1yggP/">
                  <FiFacebook size={28} className="text-blue-600" />
                </a>
                <a href="https://wa.me/8801571312226">
                  <FaWhatsapp size={28} className="text-green-400" />
                </a>
                <a href="https://www.instagram.com/sujan___chakma?igsh=eWVuOGFpMmNvZ2dk">
                  <FaInstagram size={28} className="text-yellow-900" />
                </a>
                <a href="https://github.com/sujanchakma1">
                  <LuGithub size={28} className="text-secondary" />
                </a>
                <a href="https://www.linkedin.com/in/sujan99">
                  <SlSocialLinkedin size={28} className="text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full border-2 border-secondary bg-base-200 rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Send Me a Message
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-2">
              <label className="label font-semibold">
                Your Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="input input-bordered w-full rounded-md"
                placeholder="you@example.com"
              />
              <label className="label font-semibold">
                Subject <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="subject"
                required
                className="input input-bordered w-full rounded-md"
                placeholder="Subject about cooperation opportunities"
              />
              <label className="label font-semibold">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                required
                className="textarea textarea-bordered w-full rounded-md"
                placeholder="Your detailed message here..."
              ></textarea>
              <button
                type="submit"
                className="btn rounded-full w-full border border-secondary transition-all duration-300 bg-gradient-to-r from-secondary to-primary bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left"
              >
                Send Message <FiSend size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
