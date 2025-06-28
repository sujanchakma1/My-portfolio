import React from "react";
import image1 from "../../assets/projects-1/Screenshot (226).png";
import image2 from "../../assets/projects-1/Screenshot (227).png";
import image3 from "../../assets/projects-1/Screenshot (228).png";
import image4 from "../../assets/projects-1/Screenshot (229).png";
import image5 from "../../assets/projects-1/Screenshot (230).png";
import image6 from "../../assets/projects-1/Screenshot (231).png";
import logo from "../../assets/projects-1/Logo/Logo.png"
import { TbDetails, TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import { FaNode, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";

const Projects1 = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="hero border-2 border-gray-600 rounded-xl my-10">
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
          <p>-🔎 Lost & Found Posting </p>
          <p>-🧭 Smart Search & Filter </p>
          <p>-♻️ Item Recovery Matching </p>
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
              className="btn btn-primary rounded-xl"
            >
              Live Site <TbWorld size={18} />
            </a>
            <a
              href="https://github.com/sujanchakma1/items-track-client"
              className="btn btn-primary rounded-xl"
            >
              GitHub <IoLogoGithub size={18} />
            </a>
            <button className="btn btn-primary rounded-xl">
              Details <TbDetails size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects1;
