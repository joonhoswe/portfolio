import React, { forwardRef } from 'react';
import {ReactTyped} from 'react-typed';
import me from '../assets/me.png';
import background from '../assets/background.jpg';
import { motion } from "framer-motion";

const Home = forwardRef((props, ref) => {

  const { AboutRef, ProjectsRef } = props;

  const scrollToSection = (elementRef) => {

    // Get the top position relative to the viewport
    const sectionTop = elementRef.current.getBoundingClientRect().top;

    // Calculate scroll position
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
      backgroundPosition: 'center' 
    }}>
      <div className="absolute inset-0 flex justify-between items-center">
      <div className="z-5 md: ml-24 lg:ml-32 space-y-4">
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

        <div className="z-5 pt-12 flex flex-col space-y-2 text-xs -mr-24 sm:-mr-8 md:mr-2 lg:mr-24 sm:text-xs md:text-sm lg:text-base md:space-y-3 lg:space-y-5 md:pb-20">
          <div className='w-1/2 space-y-2 sm:w-3/4 md:w-5/6 lg:w-full'>
            <h1 className="font-bold">ABOUT ME</h1>
            <p className="text-gray-300"> I'm a student at <span className="text-white">Emory University</span> <br></br> studying <span className="text-white">CS, Data Science,</span> and <span className='text-white'>Pre-Law.</span></p>
            <button onClick = {() => scrollToSection(AboutRef)}className="text-white font-bold underline"> Learn More </button>
          </div>

          <hr className="h-0.5 bg-gray-200 border-0 w-1/2 sm:w-3/4 md:w-5/6 lg:w-full"></hr>

          <div className='w-1/2 space-y-2 sm:w-3/4 md:w-5/6 lg:w-full'>
            <h1 className="font-bold">PROJECTS</h1>
            <p className="text-gray-300"> Check out my recent projects! </p>
            <button onClick = {() => scrollToSection(ProjectsRef)}className="text-white font-bold underline"> See Portfolio </button>
          </div>
          
        </div>
        
      </div>
      <img src={me} alt="Profile" className="w-3/5 h-full z-0 pt-12" />
    </div>
  );
});

export default Home;