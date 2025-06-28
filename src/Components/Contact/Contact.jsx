import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Contact</h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1 border-2 bg-white border-gray-500 rounded-md p-5">
            <h2>Contact Information</h2>
            <div className="border-2 bg-black rounded-md p-5">
              <p>Number/WhatsApp :</p>
              <p>Email :</p>
            </div>
          </div>
          <div className="flex-1">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">age titleP</legend>
              <input
                type="text"
                className="input"
                placeholder="My awesome page"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Your bio</legend>
              <textarea className="textarea h-24" placeholder="Bio"></textarea>
              <div className="label">Optional</div>
            </fieldset>
            <button className="btn btn-primary">Send Email</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
