import React from "react";
import ecom1 from "../assets/ecommerce.jpg";
import ecom2 from "../assets/ecom2.png";
function Projects() {
  const config = {
    projects: [
      {
        image: ecom1,
        description:
          "This is a responsive ecommerce that smooth navigation, and a clean UI.",
        link: "https://github.com/Gokul-24-2001/creditcard",
      },
      {
        image: ecom2,
        description: "built by own",
        link: "https://github.com/Gokul-24-2001/Todolist",
      },
    ],
  };
  return (
    <section
      className="flex flex-col py-2 px-5 justify-center text-white bg-primary"
      id="project"
    >
      <div className="w-full">
        <div className="d-flex flex-column py-5">
          <h1 className="fs-1 mb-2 font-bold">Projects</h1>
          <p>
            This is a responsive ecommerce web application built with React.js
            and styled using Tailwind CSS. The goal of the project is to create
            a modern, fast, and mobile-friendly shopping experience that
            showcases dynamic product listings, smooth navigation, and a clean
            UI.
          </p>
        </div>
      </div>

      <div className="w-100">
        <div className="d-sm-flex mb-5">
          {config.projects.map((project, index) => {
            return (
              <div className="image1 image-hov py-2 px-3" key={index}>
                <img src={project.image} className="project-image" />
                <div className="position-absolute overlay rounded">
                  <p className="px-2 py-3">{project.description}</p>
                  <div className=" d-flex justify-content-center mb-3">
                    <a
                      target="_blank"
                      className="button text-white"
                      href={project.link}
                    >
                      view project
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
