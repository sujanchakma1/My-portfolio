import React from "react";
import image1 from "../../assets/projects-2/Screenshot (310).png";
import { TbDetails, TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";

const Projects3 = () => {
  return (
    <div className="border border-gray-700 rounded-xl my-10 h">
      <div className="group">
        <div className="h-full overflow-hidden p-1">
          <img
            src={image1}
            className="w-full h-full rounded hover:rounded object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* ✅ Project Description */}
        <div className="p-5 space-y-4">
          <h2 className="font font-bold text-3xl text-center">A Garden</h2>
          <p className="text-sm text-center line-clamp-3">
            A Garden is a community-based gardening platform where users can
            share gardening tips, read helpful guides, and explore gardener
            profiles. It’s a space to learn, inspire, and connect through the
            love of gardening.
          </p>
          <h2 className="text-md font-semibold mb-1">Technologies are use :</h2>
          <div className="flex flex-wrap gap-2">
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
          </div>
          <div className="flex gap-2">
            <a
              href="https://a-garden.web.app/"
              className="btn btn-sm  btn-primary rounded-full"
            >
              Live Site <TbWorld size={18} />
            </a>
            <a
              href="https://github.com/sujanchakma1/a-garden-client"
              className="btn btn-sm  btn-primary rounded-full"
            >
              GitHub <IoLogoGithub size={18} />
            </a>
            <button
              onClick={() => document.getElementById("a_garden").showModal()}
              className="btn btn-sm  btn-primary rounded-full"
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
              <h2 className="font font-bold text-3xl text-center mb-2">A Garden</h2>

              {/* Technologies Used */}
              <section className="mb-6">
                <h2 className="text-sm">
                  <span className="text-2xl font-semibold">
                    Technologies:{" "}
                  </span>{" "}
                  React JS, Firebase Authentication & Hosting, Node.js, MongoDB
                </h2>
              </section>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Description</h2>
                <p className="text-sm mb-2">
                  A Garden is a community-based gardening platform where users
                  can share gardening tips, read helpful guides, and explore
                  gardener profiles. It’s a space to learn, inspire, and connect
                  through the love of gardening.
                </p>
              </div>

              {/* Major Feature */}
              <section>
                <h2 className="text-2xl font-semibold mb-2">Major Featured</h2>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                  <li>Garden Tips Sharing </li>
                  <li>Explore Tips & Guides</li>
                  <li>Gardener Profiles</li>
                </ul>
              </section>
              {/* Future Plans */}
              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  Future Improvements
                </h2>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
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

export default Projects3;
