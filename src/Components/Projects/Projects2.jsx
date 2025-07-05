import React from "react";
import image1 from "../../assets/projects-2/Screenshot (232).png";
import image2 from "../../assets/projects-2/Screenshot (233).png";
import image3 from "../../assets/projects-2/Screenshot (234).png";
import image4 from "../../assets/projects-2/Screenshot (235).png";
import image5 from "../../assets/projects-2/Screenshot (236).png";
import image6 from "../../assets/projects-2/Screenshot (237).png";
import gardenLogo from "../../assets/projects-2/a-garden-logo.png";
import { TbDetails, TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import { FaNode, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";

const Projects2 = () => {
  const images = [image1, image2, image3, image4, image5, image6];

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
          <div className="flex items-center">
            <img className="w-16 " src={gardenLogo} alt="" />
            <h2 className="font font-bold text-3xl">A Garden</h2>
          </div>
          <p className="py-2 text-lg">
            A Garden is a community-based gardening platform where users can
            share gardening tips, read helpful guides, and explore gardener
            profiles. It’s a space to learn, inspire, and connect through the
            love of gardening.
          </p>
          <p>-- Garden Tips Sharing </p>
          <p>-- Explore Tips & Guides </p>
          <p>-- Gardener Profiles </p>
          <div className="space-x-3 ">
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
              className="btn btn-sm md:btn-md  btn-primary rounded-xl"
            >
              Live Site <TbWorld size={18} />
            </a>
            <a
              href="https://github.com/sujanchakma1/a-garden-client"
              className="btn btn-sm md:btn-md  btn-primary rounded-xl"
            >
              GitHub <IoLogoGithub size={18} />
            </a>
            <button
              onClick={() => document.getElementById("a_garden").showModal()}
              className="btn btn-sm md:btn-md  btn-primary rounded-xl"
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
                  <span className="text-2xl font-semibold">Technologies : </span> React JS, Firebase Authentication & Hosting, Node.js, MongoDB
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
