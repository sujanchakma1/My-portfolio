import image1 from "../../assets/projects-3/Screenshot (238).png";
import image2 from "../../assets/projects-3/Screenshot (239).png";
import image3 from "../../assets/projects-3/Screenshot (240).png";
import image4 from "../../assets/projects-3/Screenshot (241).png";
import image5 from "../../assets/projects-3/Screenshot (242).png";
import { TbDetails, TbWorld } from "react-icons/tb";
import { IoLogoCss3, IoLogoGithub, IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaReact } from "react-icons/fa";

const Projects3 = () => {
  const images = [image1, image2, image3, image4, image5];

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
          <div className="flex items-center gap-3">
            <img
              className="w-8"
              src="https://i.ibb.co.com/60jXdQQY/logo.png"
              alt=""
            />
            <h1 className="text-3xl font-bold">Doctor-Phudu</h1>
          </div>
          <p className="py-2 text-lg">
            Doctor-Phudu is an online doctor appointment platform where users
            can easily book or cancel appointments, view available doctors, and
            check their profiles and specializations in one place.
          </p>
          <p>-- Book & Cancel Appointments </p>
          <p>-- View Available Doctors </p>
          <p>-- Doctor Profile & Details </p>
          <div className="space-x-3 ">
            <div className="badge badge-info rounded-md">
              <FaHtml5 />
              HTML5
            </div>
            <div className="badge badge-info rounded-md">
              <IoLogoCss3 />
              CSS3
            </div>
            <div className="badge badge-info rounded-md">
              <IoLogoJavascript />
              JavaScript
            </div>
            <div className="badge badge-info rounded-md">
              <FaReact />
              React
            </div>
          </div>
          <div className="flex gap-5">
            <a
              href="https://doctor-talk.surge.sh/"
              className="btn btn-sm md:btn-md btn-primary rounded-xl"
            >
              Live Site <TbWorld size={18} />
            </a>
            <a
              href="https://github.com/sujanchakma1/Doctor-phudu"
              className="btn btn-sm md:btn-md btn-primary rounded-xl"
            >
              GitHub <IoLogoGithub size={18} />
            </a>
            <button
              onClick={() =>
                document.getElementById("doctor_phudu").showModal()
              }
              className="btn btn-sm md:btn-md btn-primary rounded-xl"
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
              <div className="flex items-center gap-3 mb-3">
                <img
                  className="w-8"
                  src="https://i.ibb.co.com/60jXdQQY/logo.png"
                  alt=""
                />
                <h1 className="text-3xl font-bold">Doctor-Phudu</h1>
              </div>

              {/* Technologies Used */}
              <section className="mb-6">
                <h2 className="text-lg">
                  <span className="text-2xl font-semibold ">
                    Technologies :
                  </span>{" "}
                  React JS, Tailwind CSS
                </h2>
              </section>

              {/* Description */}
              <section className="mb-6">
                <p>
                  Doctor-Phudu is an online doctor appointment platform where
                  users can easily book or cancel appointments, view available
                  doctors, and check their profiles and specializations in one
                  place.
                </p>
              </section>

              {/* Links */}
              <section className="mb-6">
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Live Website:{" "}
                    <a
                      href="https://doctor-talk.surge.sh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      https://doctor-talk.surge.sh/
                    </a>
                  </li>
                  <li>
                    GitHub Repository (Client):{" "}
                    <a
                      href="https://github.com/sujanchakma1/Doctor-phudu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      https://github.com/sujanchakma1/Doctor-phudu
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
