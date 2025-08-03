import React from "react";
import image1 from "../../assets/projects-1/Screenshot (269).png";
import { TbDetails, TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";

const Projects2 = () => {
  return (
    <div className="bg-base-300 border border-primary rounded-xl my-10">
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
          <p className="text-md text-center line-clamp-3">
            ItemsTrack is a simple lost and found item tracking website where
            users can post lost or found items with details and images. It helps
            people reconnect with their lost belongings easily.
          </p>

          <div className="flex flex-wrap gap-2 my-3">
            <div className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
              React
            </div>
            <div className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
              Firebase
            </div>
            <div className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
              Node.js
            </div>
            <div className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
              Express.js
            </div>
            <div className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
              MongoDB
            </div>
            <div className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
              JWT
            </div>
          </div>
          <div className="flex gap-5 justify-end">
            <a
              href="https://where-is-it-88c14.web.app/"
              className="btn btn-sm btn-primary rounded-full"
            >
              Live Site <TbWorld size={18} />
            </a>
            <a
              href="https://github.com/sujanchakma1/items-track-client"
              className="btn btn-sm btn-primary rounded-full"
            >
              GitHub <IoLogoGithub size={18} />
            </a>
            <button
              onClick={() => document.getElementById("items_track").showModal()}
              className="btn btn-sm btn-primary rounded-full"
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
                <h2 className="font text-3xl font-bold">Items Track</h2>
              </div>

              {/* Technologies Used */}
              <section className="mb-6">
                <h2 className="text-lg">
                  <span className="font-semibold text-2xl">Technologies :</span>{" "}
                  React JS, Firebase Authentication & Hosting, Node.js, MongoDB
                </h2>
              </section>

              {/* Major feature */}
              <section>
                <h2 className="text-2xl font-semibold mb-2">Major Feature</h2>
                <ul className="list-disc list-inside ml-4 space-y-1">
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

export default Projects2;
