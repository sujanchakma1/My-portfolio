import React from "react";
import image1 from "../../assets/projects-1/Screenshot (269).png";
import { TbDetails, TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";

const Projects2 = () => {
  return (
    <div className="border-2 shadow-lg hover:shadow-2xl border-secondary bg-base-200 rounded-xl">
      <div className="group">
        <div className="h-full overflow-hidden p-1">
          <img
            src={image1}
            className="w-full h-full rounded hover:rounded object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* ✅ Project Description */}
        <div className="p-5 space-y-4">
          <h2 className="text-3xl font-bold text-center">ItemsTrack</h2>
          <p className="text-sm text-center line-clamp-3">
            ItemsTrack is a simple lost and found item tracking website where
            users can post lost or found items with details and images. It helps
            people reconnect with their lost belongings easily.
          </p>

          <h2 className="text-md font-semibold mb-1">Technologies are use :</h2>
          <div className="flex flex-wrap gap-2 my-3">
            <div className="px-2 py-1 text-xs font-medium border border-secondary rounded-full bg-secondary">
              React
            </div>
            <div className="px-2 py-1 text-xs font-medium border border-secondary rounded-full bg-secondary">
              Firebase
            </div>
            <div className="px-2 py-1 text-xs font-medium border border-secondary rounded-full bg-secondary">
              Node.js
            </div>
            <div className="px-2 py-1 text-xs font-medium border border-secondary rounded-full bg-secondary">
              Express.js
            </div>
            <div className="px-2 py-1 text-xs font-medium border border-secondary rounded-full bg-secondary">
              MongoDB
            </div>
            <div className="px-2 py-1 text-xs font-medium border border-secondary rounded-full bg-secondary">
              JWT
            </div>
          </div>
          <div className="flex justify-between">
            <a
              href="https://where-is-it-88c14.web.app/"
              className="btn-sm btn rounded-full border border-secondary transition-all duration-300 bg-gradient-to-r from-secondary to-primary bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left"
            >
              Live Site <TbWorld size={18} />
            </a>
            <a
              href="https://github.com/sujanchakma1/items-track-client"
              className="btn-sm btn rounded-full border border-secondary transition-all duration-300 bg-gradient-to-r from-secondary to-primary bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left"
            >
              GitHub <IoLogoGithub size={18} />
            </a>
            <button
              onClick={() => document.getElementById("items_track").showModal()}
              className="btn-sm btn rounded-full border border-secondary transition-all duration-300 bg-gradient-to-r from-secondary to-primary bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left"
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
              <h2 className="font text-3xl font-bold text-center">
                ItemsTrack
              </h2>

              {/* Technologies Used */}
              <section className="mb-6 ">
                <h2 className="text-sm">
                  <span className="font-semibold text-2xl">Technologies :</span>
                  <br />
                  React JS, Firebase Authentication & Hosting, Node.js, MongoDB
                </h2>
              </section>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Description</h2>
                <p className="text-sm mb-2">
                  ItemsTrack is a simple lost and found item tracking website
                  where users can post lost or found items with details and
                  images. It helps people reconnect with their lost belongings
                  easily.
                </p>
              </div>

              {/* Major feature */}
              <section>
                <h2 className="text-2xl font-semibold mb-2">Major Feature</h2>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                  <li>Lost & Found Posting</li>
                  <li>Smart Search & Filter </li>
                  <li>Item Recovery Matching </li>
                </ul>
              </section>

              {/* Future Plans */}
              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  Future Improvements
                </h2>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
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

export default Projects2;
