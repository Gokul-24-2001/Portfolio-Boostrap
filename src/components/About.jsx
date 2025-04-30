import React from 'react'
import aboutimg from "../assets/about.jpg"
function About() {
  const config={
    line1:'I have complete my graduation in 2022 ,in VSB College of Engineering Campus,Coimbatore 2018-2022'
  }
  return (
   <section className='d-md-flex px-5 py-5 py-md-5 bgsecondary justify-content-center' id="about"> 
    <div className='w-75'>
<img src={aboutimg} className="img-fluid w-75" alt="about me" /> 

    </div>
    <div className='w-75 py-md-0 py-3 d-flex justify-content-center text-white'>
       <div className='d-flex flex-column justify-content-center'> 
        <div className="text-white">
  <h1 className="fs-2 fw-bold border-3 border-bottom border-primary d-inline-block mb-4">
    About Me
  </h1>
</div>


       
       <p className='pb-2'> I am Gokul, from Namakkal</p>
       <p className='pb-2'> {config.line1}</p>
       <p className='pb-2'> Having 1.7 years of Experience in Fron end Developer using Reactjs,developed many websites using HTML,CSS,Bootstrap and Javascript</p></div>
    </div>
   </section>
  )
}

export default About