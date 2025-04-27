import React from "react";
import hero from "../assets/heroimg.jpg";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Hero() {
  const config={
    subtitle:'I am a Front End Developer',
    social:{
      linkedin:"https://www.linkedin.com/in/gokul-r-467624214/"
    }
  }
  return (
    <section className="d-md-flex px-5 py-5 py-md-5 bg-primary justify-content-center" id="hero">
     <div className="w-75">
     <h1 className="text-white">
        hi,
        <br />
        <span className="text-black">Gokul</span>
        <p className="fs-2 fw-medium">{config.subtitle}</p>
      </h1>
      <div className="d-flex gap-2 ">
<a href="#" className="icons"><FaTwitter size={40}/></a>
<a href={config.social.linkedin} className="icons fs-5"><FaLinkedin size={40}/></a>
<a href="#"className="icons "><FaFacebook size={40}/></a>
      </div>
     </div>
      <img className="w-50" src={hero} />
    </section>
  );
}

export default Hero;
