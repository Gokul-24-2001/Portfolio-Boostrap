import React from 'react'
import aboutimg from "../assets/about.jpg"
function About() {
  const config={
    line1:'I have complete my graduation in 2022 ,in VSB College of Engineering Campus,Coimbatore 2018-2022'
  }
  return (
   <section className='d-md-flex px-5 py-5 py-md-5 bgsecondary justify-content-center'> 
    <div className='w-75'>
<img src={aboutimg} /> 
    </div>
    <div className='w-75 py-md-0 py-3 d-flex justify-content-center text-white'>
       <div className='d-flex flex-column justify-content-center'> 
        <h1 className='fs-2 font-bold about responsive-border'>About me</h1> 
        {/* border accept only color codes, but rga color also accepts, but nee to some logics..  copy rgba to tailwing config file .. under extend  . border:{
        }*/}
       <p className='pb-2'> I am Gokul, from Namakkal</p>
       <p className='pb-2'> {config.line1}</p>
       <p className='pb-2'> Having 1.7 years of Experience in Fron end Developer using Reactjs,developed many websites using HTML,CSS,Bootstrap and Javascript</p></div>
    </div>
   </section>
  )
}

export default About