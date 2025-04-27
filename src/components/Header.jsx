import React from "react";
// import { Bars3Icon } from "@heroicons/react/24/solid";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
export default function Header() {
  const [togglemenu, setToggleMenu] = useState(false);
  return (
    <header className=" d-md-flex justify-content-between px-5 py-2 bg-primary">
      <a className="font-bold text-black text-decoration-none" href="#">
        Gokul R
      </a>
      <nav className="d-md-flex d-none">
        <ul className="d-flex gap-4 list-unstyled ">
          
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {togglemenu && (
        <nav className="d-md-none">
          <ul onClick={()=>setToggleMenu(!togglemenu)}className="menu-items list-unstyled w-100">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
            <a href="#resume">Resume</a>
          </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
      )}
      {/* <button
        onClick={() => setToggleMenu(!togglemenu)}
      className=" "
      > 
      
      </button> */}
      <button onClick={() => setToggleMenu(!togglemenu)}
 type="button" className="btn d-md-none position-fixed top-0 end-0 m-1 btn-outline-none"><IoMenuOutline className="fs-2"/></button>
  
    </header>
  );
}
