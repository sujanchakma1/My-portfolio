import React from "react";
import image1 from "../../assets/projects-1/Screenshot (269).png";
import image2 from "../../assets/projects-1/Screenshot (270).png";
import image3 from "../../assets/projects-1/Screenshot (271).png";
import image4 from "../../assets/projects-1/Screenshot (272).png";
import image5 from "../../assets/projects-1/Screenshot (273).png";
import image6 from "../../assets/projects-1/Screenshot (274).png";
import image7 from "../../assets/projects-1/Screenshot (275).png";
import logo from "../../assets/projects-1/Logo/Logo.png";
import { TbDetails, TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import { FaNode, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";

const Projects1 = () => {
  const images = [image1, image2, image3, image4, image5, image6,image7];

  return (
    <div className="hero bg-base-300 border border-primary rounded-xl my-10">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <div className="h-96 w-full lg:w-[400px] overflow-y-auto rounded-box snap-y snap-mandatory scroll-smooth space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-item h-64 snap-center overflow-hidden rounded-xl shadow"
            >
              <img src={image} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* ✅ Project Description */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center ">
            <img src={logo} alt="" className="w-24 items-center -mr-5 mb-3" />
            <h2 className="font text-3xl font-bold items-center">
              <span className="text-[#c133ff] font font-semibold">Items</span>
              Track
            </h2>
          </div>
          <p className="py-2 text-lg">
            ItemsTrack is a simple lost and found item tracking website where
            users can post lost or found items with details and images. It helps
            people reconnect with their lost belongings easily.
          </p>
          <p>-- Lost & Found Posting </p>
          <p>-- Smart Search & Filter </p>
          <p>-- Item Recovery Matching </p>
          <div className="space-x-3">
            <div className="badge badge-info rounded-md">
              <FaReact />
              React
            </div>
            <div className="badge badge-info rounded-md">
              <IoLogoFirebase />
              Firebase
            </div>
            <div className="badge badge-info rounded-md">
              <FaNode />
              Node.js
            </div>
            <div className="badge badge-info rounded-md">
              <SiExpress />
              Express.js
            </div>
            <div className="badge badge-info rounded-md">
              <SiMongodb />
              MongoDB
            </div>
          </div>
          <div className="flex gap-5">
            <a
              href="https://where-is-it-88c14.web.app/"
              className="btn btn-sm md:btn-md btn-primary rounded-xl"
            >
              Live Site <TbWorld size={18} />
            </a>
            <a
              href="https://github.com/sujanchakma1/items-track-client"
              className="btn btn-sm md:btn-md btn-primary rounded-xl"
            >
              GitHub <IoLogoGithub size={18} />
            </a>
            <button
              onClick={() => document.getElementById("items_track").showModal()}
              className="btn btn-sm md:btn-md btn-primary rounded-xl"
            >
              Details <TbDetails size={18} />
            </button>
          </div>
        </div>
        <dialog id="items_track" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className=" py-10 px-4 text-base-content">
              <div className="flex items-center mb-3">
                <img
                  src={logo}
                  alt=""
                  className="w-24 items-center -mr-5 mb-3"
                />
                <h2 className="font text-3xl font-bold items-center">
                  <span className="text-[#c133ff] font font-semibold">
                    Items
                  </span>
                  Track
                </h2>
              </div>

              {/* Technologies Used */}
              <section className="mb-6">
                <h2 className="text-lg"><span className="font-semibold text-2xl">Technologies :</span> React JS, Firebase Authentication & Hosting, Node.js,
                  MongoDB</h2>
 
              </section>

              {/* Description */}
              <section className="mb-6">
                <p>
                  ItemsTrack is a simple lost and found item tracking website
                  where users can post lost or found items with details and
                  images. It helps people reconnect with their lost belongings
                  easily.
                </p>
              </section>

              {/* Links */}
              <section className="mb-6">
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Live Website:{" "}
                    <a
                      href="https://where-is-it-88c14.web.app/https://lost-found-project.web.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      https://items-track.web.app
                    </a>
                  </li>
                  <li>
                    GitHub Repository (Client):{" "}
                    <a
                      href="https://github.com/sujanchakma1/items-track-client"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      https://github.com/sujanchakma1/items-track-client
                    </a>
                  </li>
                </ul>
              </section>
              {/* Future Plans */}
              <section>
                <h2 className="text-2xl font-semibold mb-2">
                 Future Improvements
                </h2>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Adding advanced search and filtering options</li>
                  <li>
                    Implementing email/notification alerts for found items
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Projects1;
