import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

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
          <div className="flex-1 border border-primary rounded-xl p-6 bg-primary text-white shadow-lg py-10">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="bg-black p-4 rounded-lg space-y-5">
              <p>
                <span className="font-semibold">Phone/WhatsApp : </span>{" "}
                +8801571312226
              </p>
              <p>
                <span className="font-semibold">Email :</span>{" "}
                sujanckz926@gmail.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 border border-primary bg-primary rounded-xl p-6 shadow">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="email"
                name="user_email"
                required
                className="input input-bordered w-full rounded-md"
                placeholder="Your Email"
              />
              <input
                type="text"
                name="subject"
                required
                className="input input-bordered w-full rounded-md"
                placeholder="Subject"
              />
              <textarea
                name="message"
                required
                className="textarea textarea-bordered w-full rounded-md"
                placeholder="Your message..."
              ></textarea>
              <button type="submit" className="btn rounded-xl w-full">
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
