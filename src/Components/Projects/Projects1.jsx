import image1 from "../../assets/projects-3/Screenshot (311).png";
import { TbDetails, TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";

const Projects1 = () => {
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
          <h2 className="text-3xl font-bold text-center"> MedCamp</h2>
          <p className="text-sm text-center line-clamp-3">
            A MERN stack web application that helps organizers create and manage
            medical camps, and allows participants to join those camps, make
            payments, and access health resources.
          </p>

          <h2 className="text-md font-semibold mb-1">Technologies are use :</h2>
          <div className="flex flex-wrap gap-2">
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
            <div className="px-2 py-1 text-xs font-medium border border-secondary rounded-full bg-secondary">
              Stripe Payment
            </div>
          </div>
          <div className="flex justify-between">
            <a
              href="https://medical-center-camp.web.app"
              className="btn-sm btn rounded-full border border-secondary transition-all duration-300 bg-gradient-to-r from-secondary to-primary bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left"
            >
              Live Site <TbWorld size={18} />
            </a>
            <a href="https://github.com/sujanchakma1/medical-camp-client" className="btn-sm btn rounded-full border border-secondary transition-all duration-300 bg-gradient-to-r from-secondary to-primary bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left">
              GitHub <IoLogoGithub size={18} />
            </a>
            <button
              onClick={() =>
                document.getElementById("doctor_phudu").showModal()
              }
              className="btn-sm btn rounded-full border border-secondary transition-all duration-300 bg-gradient-to-r from-secondary to-primary bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left"
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
              <h2 className="text-3xl font-bold text-center mb-2"> MedCamp</h2>

              {/* Technologies Used */}
              <section className="mb-6">
                <h2 className="text-sm">
                  <span className="text-2xl font-semibold ">
                    Technologies :
                  </span>
                  <br />
                  React JS, Firebase Authentication & Hosting, Node.js, MongoDB,
                  Stripe Payment
                </h2>
              </section>

              <div>
                <h2 className="text-2xl font-semibold mb-2">Description</h2>
                <p className="text-sm mb-2">
                  A MERN stack web application that helps organizers create and
                  manage medical camps, and allows participants to join those
                  camps, make payments, and access health resources.
                </p>
              </div>

              {/* major feature*/}
              <section>
                <h2 className="text-2xl font-semibold mb-2">Major Featured</h2>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                  <li>Medical Camp Registration & Management System</li>
                  <li>
                    Participant Registration with Stripe Payment Integration
                  </li>
                  <li>Role-Based Dashboard with Activity Tracking</li>
                </ul>
              </section>

              {/* Future Plans */}
              <section>
                <h2 className="text-2xl font-semibold mb-2">
                  Future Improvements
                </h2>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
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

export default Projects1;
