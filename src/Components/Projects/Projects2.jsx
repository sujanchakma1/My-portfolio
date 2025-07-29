import React from "react";
import image1 from "../../assets/projects-2/Screenshot (310).png";
import gardenLogo from "../../assets/projects-2/a-garden-logo.png";
import { TbDetails, TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import { FaNode, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";

const Projects2 = () => {
  return (
    <div className="hero bg-base-300 border border-primary rounded-xl my-10">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <div className="h-full w-full lg:w-[500px]">
          <img src={image1} className="w-full h-full object-cover rounded-md" />
        </div>

        {/* ✅ Project Description */}
        <div className="flex-1">
          <div className="flex items-center -ml-2">
            <img className="w-12" src={gardenLogo} alt="" />
            <h2 className="font font-bold text-3xl">A Garden</h2>
          </div>
          <p className="text-lg mb-1">
            A Garden is a community-based gardening platform where users can
            share gardening tips, read helpful guides, and explore gardener
            profiles. It’s a space to learn, inspire, and connect through the
            love of gardening.
          </p>
          <p>-- Garden Tips Sharing </p>
          <p>-- Explore Tips & Guides </p>
          <p>-- Gardener Profiles </p>
          <div className="space-x-3 my-3">
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
              href="https://a-garden.web.app/"
              className="btn btn-sm  btn-primary rounded-xl"
            >
              Live Site <TbWorld size={18} />
            </a>
            <a
              href="https://github.com/sujanchakma1/a-garden-client"
              className="btn btn-sm  btn-primary rounded-xl"
            >
              GitHub <IoLogoGithub size={18} />
            </a>
            <button
              onClick={() => document.getElementById("a_garden").showModal()}
              className="btn btn-sm  btn-primary rounded-xl"
            >
              Details <TbDetails size={18} />
            </button>
          </div>
        </div>
        <dialog id="a_garden" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className=" py-10 px-4 text-base-content">
              <div className="flex items-center mb-3">
                <img className="w-16 " src={gardenLogo} alt="" />
                <h2 className="font font-bold text-3xl">A Garden</h2>
              </div>

              {/* Technologies Used */}
              <section className="mb-6">
                <h2 className="">
                  <span className="text-2xl font-semibold">
                    Technologies :{" "}
                  </span>{" "}
                  React JS, Firebase Authentication & Hosting, Node.js, MongoDB
                </h2>
              </section>

              {/* Description */}
              <section className="mb-6">
                <p>
                  A Garden is a community-based gardening platform where users
                  can share gardening tips, read helpful guides, and explore
                  gardener profiles. It’s a space to learn, inspire, and connect
                  through the love of gardening.
                </p>
              </section>

              {/* Links */}
              <section className="mb-6">
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Live Website:{" "}
                    <a
                      href="https://a-garden.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      https://a-garden.web.app/
                    </a>
                  </li>
                  <li>
                    GitHub Repository (Client):{" "}
                    <a
                      href="https://github.com/sujanchakma1/a-garden-client"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      https://github.com/sujanchakma1/a-garden-client
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
                  <li>
                    Integrate gardener ranking or badges based on contributions
                  </li>
                  <li>
                    Enable uploading of photos and videos for plant growth
                    tracking
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

export default Projects2;
