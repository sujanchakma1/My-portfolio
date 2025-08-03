import image1 from "../../assets/projects-3/Screenshot (311).png";
import { TbDetails, TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";

const Projects1 = () => {
  return (
    <div className=" bg-base-300 border border-primary rounded-xl my-10">
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
          <p className="text-md text-center line-clamp-3">
            A MERN stack web application that helps organizers create and manage
            medical camps, and allows participants to join those camps, make
            payments, and access health resources.
          </p>
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
            <div className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
              JWT
            </div>
            <div className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
              Stripe Payment
            </div>
          </div>
          <div className="flex gap-5 justify-end">
            <a
              href="https://medical-center-camp.web.app"
              className="btn btn-sm btn-primary rounded-full"
            >
              Live Site <TbWorld size={18} />
            </a>
            <a href="#" className="btn btn-sm btn-primary rounded-full">
              GitHub <IoLogoGithub size={18} />
            </a>
            <button
              onClick={() =>
                document.getElementById("doctor_phudu").showModal()
              }
              className="btn btn-sm btn-primary rounded-full"
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
              <h2 className="text-3xl font-bold"> MedCamp</h2>

              {/* Technologies Used */}
              <section className="mb-6">
                <h2 className="text-lg">
                  <span className="text-2xl font-semibold ">
                    Technologies :
                  </span>{" "}
                  React JS, Firebase Authentication & Hosting, Node.js, MongoDB,
                  Stripe Payment
                </h2>
              </section>

              {/* major feature*/}
              <section>
                <h2 className="text-2xl font-semibold mb-2">Major Featured</h2>
                <ul className="list-disc list-inside ml-4 space-y-1">
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

export default Projects1;
