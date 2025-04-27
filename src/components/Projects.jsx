import React from "react";
import ecom1 from "../assets/ecommerce.jpg";
import ecom2 from "../assets/ecom2.png";
function Projects() {
  const config = {
    projects: [
      {
        image: ecom1,
        description: "THis is my ecommerece1",
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
        <div className="d-md-flex px-5 py-4">
          
        { config.projects.map((project,index)=>{
          return <div className="image1" key={index}>
            <img src={project.image} className="project-image" />
            <div className="position-absolute overlay">
              <p className="text-center px-5 py-5">{project.description}</p>
              <div className="d-flex justify-content-center"><a target="_blank"className="btn"href={project.link}>view project</a></div> 
            </div>

          </div>})}
        </div>
      </div>
    </section>
  );
}

export default Projects;
