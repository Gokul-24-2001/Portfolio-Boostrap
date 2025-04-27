import React from "react";
import ecom1 from "../assets/ecommerce.jpg";
import ecom2 from "../assets/ecom2.png";
function Projects() {
  const config = {
    projects: [
      {
        image: ecom1,
        description: "This is a responsive ecommerce web application built with React.js and styled using Tailwind CSS. The goal of the project is to create a modern, fast, and mobile-friendly shopping experience that showcases dynamic product listings, smooth navigation, and a clean UI.",
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
      className="flex flex-col py-5 px-5 justify-center text-white bg-primary"
      id="project"
    >
      <div className="w-full">
        <div className="d-flex flex-column px-5 py-5">
          <h1 className="fs-1 mb-3 font-bold">
            Projects
          </h1>
          <p>
      
            This is a responsive ecommerce web application built with React.js
            and styled using Tailwind CSS. The goal of the project is to create
            a modern, fast, and mobile-friendly shopping experience that
            showcases dynamic product listings, smooth navigation, and a clean
            UI.
          </p>
        </div>
      </div>
      
        <div className="w-full">
        <div className="d-md-flex gap-2 px-5 py-4">
          
        { config.projects.map((project,index)=>{
          return <div className="image1 image-hov" key={index}>
            <img src={project.image} className="project-image" />
            <div className="position-absolute overlay">
              <p className="d-flex flex-wrap">{project.description}</p>
              <div className="d-flex justify-content-center mb-3"><a target="_blank"className="btn text-white"href={project.link}>view project</a></div> 
            </div>
 
          </div>})}
        </div>
      </div>
    </section>
  );
}

export default Projects;
