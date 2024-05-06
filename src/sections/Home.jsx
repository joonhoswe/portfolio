import React, { forwardRef } from 'react';
import {ReactTyped} from 'react-typed';
import me from '../assets/me.png';
import background from '../assets/background.jpg';
import { motion } from "framer-motion";

const Home = forwardRef((props, ref) => {

  const { AboutRef, ProjectsRef } = props;

  const scrollToSection = (elementRef) => {

    console.log("calledd");
    console.log(elementRef.current)

    const sectionTop = elementRef.current.getBoundingClientRect().top;
    let scrollPosition = window.scrollY + sectionTop;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  }

  return (
    <div ref = {ref} className="text-white flex justify-center items-center overflow-hidden relative w-full min-h-screen" 
      style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 flex justify-between items-center">

        {/* typewriter effect text */}
        <div className="z-5 ml-12 md:ml-16 lg:ml-24 space-y-4">
            <h2 className="md:text-3xl lg:text-5xl font-bold">Hi, I'm Jonathan,</h2>
            <h2 className="md:text-3xl lg:text-5xl font-bold">
            <ReactTyped
                strings = {[
                    "A Student",
                    "A Developer",
                    "An Avid Chef",
                ]}
                typeSpeed = {50}
                backSpeed = {50}
                loop
            />
            </h2>
        </div>
        
        {/* right side of me image */}
        <div className="z-50 pt-12 flex flex-col space-y-2 text-xs -mr-72 sm:-mr-60 md:-mr-52 lg:-mr-40 sm:text-xs md:text-sm lg:text-base md:space-y-3 lg:space-y-5 md:pb-48">
          <div className='w-1/4 space-y-2 sm:w-1/3 md:w-1/2'>
            <h1 className="font-bold">ABOUT ME</h1>
            <p className="text-gray-300 max-w-full"> I'm a student at <span className="text-white">Emory University</span> studying <span className="text-white">CS, Data Science,</span> and <span className='text-white'>Pre-Law.</span></p>
            <button onClick = {() => scrollToSection(AboutRef)} className="text-white font-bold underline hover:text-sky-500 transition ease-in-out duration-300"> Learn More </button>
          </div>

          <hr className="h-0.5 bg-gray-200 border-0 w-1/4 sm:w-1/3 md:w-1/2" />

          <div className='w-1/4 space-y-2 sm:w-1/3 md:w-1/2'>
            <h1 className="font-bold">PROJECTS</h1>
            <p className="text-gray-300"> Check out my recent projects directly through a macbook mockup I made! </p>
            <button onClick = {() => scrollToSection(ProjectsRef)} className="text-white font-bold underline hover:text-sky-500 transition ease-in-out duration-300"> See Portfolio </button>
          </div>
        </div>
        
      </div>

      <img src={me} alt="Profile" className="w-3/5 h-full z-0 pt-12" />
    </div>
  );
});

export default Home;