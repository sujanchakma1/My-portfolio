import image1 from "../../assets/projects-3/Screenshot (311).png";
import { TbDetails, TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";
import { FaNode, FaReact } from "react-icons/fa";
import Logo from "./project3-logo/Logo";
import { SiExpress, SiMongodb, SiReactquery, SiStripe } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const Projects3 = () => {
  return (
    <div className="hero bg-base-300 border border-primary rounded-xl my-10">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <div className="h-full w-full lg:w-[500px]">
          <img src={image1} className="w-full h-full object-cover rounded-md" />
        </div>

        {/* ✅ Project Description */}
        <div className="flex-1">
          <Logo></Logo>
          <p className="text-lg mb-1">
            A MERN stack web application that helps organizers create and manage medical camps, and allows participants to join those camps, make payments, and access health resources.
          </p>
          <p>-- Medical Camp Registration & Management System</p>
          <p>-- Participant Registration with Stripe Payment Integration</p>
          <p>-- Role-Based Dashboard with Activity Tracking</p>
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
              <SiExpress/>
              Express.js
            </div>
            <div className="badge badge-info rounded-md">
              <SiMongodb />
              MongoDB
            </div>
            <div className="badge badge-info rounded-md">
              <SiReactquery/>
              TanStack Query
            </div>
            <div className="badge badge-info rounded-md">
              <SiStripe />
              Stripe Payment
            </div>
          </div>
          <div className="flex gap-5">
            <a
              href="https://medical-center-camp.web.app"
              className="btn btn-sm btn-primary rounded-xl"
            >
              Live Site <TbWorld size={18} />
            </a>
            <a
              href="#"
              className="btn btn-sm btn-primary rounded-xl"
            >
              GitHub <IoLogoGithub size={18} />
            </a>
            <button
              onClick={() =>
                document.getElementById("doctor_phudu").showModal()
              }
              className="btn btn-sm btn-primary rounded-xl"
            >
              Details <TbDetails size={18} />
            </button>
          </div>
        </div>
        <dialog id="doctor_phudu" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className=" py-10 px-4 text-base-content">
              <Logo></Logo>

              {/* Technologies Used */}
              <section className="mb-6">
                <h2 className="text-lg">
                  <span className="text-2xl font-semibold ">
                    Technologies :
                  </span>{" "}
                  React JS, Firebase Authentication & Hosting, Node.js, MongoDB, Stripe Payment
                </h2>
              </section>

              {/* Description */}
              <section className="mb-6">
                <p>
                  A MERN stack web application that helps organizers create and manage medical camps, and allows participants to join those camps, make payments, and access health resources.
                </p>
              </section>

              {/* Links */}
              <section className="mb-6">
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Live Website:{" "}
                    <a
                      href="https://medical-center-camp.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      https://medical-center-camp.web.app
                    </a>
                  </li>
                  <li>
                    GitHub Repository (Client):{" "}
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
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
                  <li>Integrate video consultation or chat feature</li>
                  <li>Allow patients to review and rate doctors</li>
                  <li>Add doctor dashboard to manage appointments</li>
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
