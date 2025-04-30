import React from "react";
import resume from "../assets/cv.jpg";
function Resume() {
  const config = {
    link: "https://drive.google.com/file/d/18tgC1GfNNLfzS58z1U-9DUmc-NfR-c1y/view?usp=drive_link",
  };
  return (
    <section
      className="d-md-flex px-5 py-5 md:py-20 bgsecondary justify-content-around"
      id="resume"
    >
      <div className="d-flex justify-content-center">
        {/* <img src={resume} />  */}{" "}
        <img
          src={resume}
          className="img-fluid w-100 w-md-75"
          alt="Resume preview"
        />
      </div>
      <div className="w-md-50 d-flex justify-content-center text-white">
        <div className="flex flex-col justify-center py-1">
          <h1 className="text-4xl border-b-2 w-[140px] border-primary mb-5  font-bold">
            Resume
          </h1>
          {/* border accept only color codes, but rga color also accepts, but nee to some logics..  copy rgba to tailwing config file .. under extend  . border:{
        }*/}
          <p className="pb-2 text-white text-nowrap">
            {" "}
            View my cv details..
            <a
              className="button rounded fs-6"
              target="_blank"
              href={config.link}
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
