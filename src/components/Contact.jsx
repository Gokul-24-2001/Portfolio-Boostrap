import React from "react";
import resume from "../assets/cv.jpg";
function Contact() {
  const config = {
    email: "gokulashok1002@gmail.com",
    phone: "+91 9677371868",
  };
  return (
    <section
      className="d-md-flex justify-content-center px-5 py-3 bg-primary"
      id="contact"
    >
      <div className="d-md-flex flex-column align-items-center text-white">
        <div>
          <h1 className="fs-2 fw-bold border-3 border-bottom d-inline-block mb-4">
            Contact Details
          </h1>
        </div>

        <p className="pb-2 text-wrap">
          {" "}
          If you want to discuss more detail, please contact me
        </p>
        <p className="py-2">
          <span className="font-bold px-1">Email:</span>
          {config.email}
        </p>
        <p className="py-2">
          <span className="font-bold px-1">Phone:</span>
          {config.phone}
        </p>
      </div>
    </section>
  );
}

export default Contact;
