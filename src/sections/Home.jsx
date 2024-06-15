import React, { forwardRef } from 'react';
import { ReactTyped } from 'react-typed';
import me from '../assets/me.png';
import background from '../assets/background.jpg';

const Home = forwardRef((props, ref) => {

  const { AboutRef, ProjectsRef } = props;

  const scrollToSection = (elementRef) => {
    console.log("calledd");
    console.log(elementRef.current);

    const sectionTop = elementRef.current.getBoundingClientRect().top;
    let scrollPosition = window.scrollY + sectionTop;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  }

  return (
    <div ref={ref} className="text-white flex justify-center items-center overflow-hidden relative w-full h-[calc(70vh-54px)] md:h-[calc(80vh-54px)] lg:h-[calc(100vh-54px)] " 
      style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 flex flex-col md:flex-row md:justify-between md:items-center items-start h-full py-16 md:py-0">

        {/* typewriter effect text */}
        <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-20">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">Hi, I'm Jonathan,</h2>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            <ReactTyped
                strings={[
                    "A Student",
                    "A Developer",
                    "An Avid Chef",
                ]}
                typeSpeed={50}
                backSpeed={50}
                loop
            />
            </h2>
        </div>
        
        {/* right side of me image */}
        <div className="z-10 md:pt-12 flex flex-col space-y-2 text-xs sm:text-xs md:text-sm lg:text-base md:space-y-3 lg:space-y-5 md:pb-48 w-3/4 md:w-1/4 mr-4 sm:mr-6 md:mr-8 lg:mr-12">
          <div className='hidden md:block'>
            <h1 className="font-bold">ABOUT ME</h1>
            <p className="text-gray-300 w-full"> I'm a student at <span className="text-white"> Carnegie Mellon </span> studying <span className="text-white"> Computer Science + Information Systems</span></p>
            <button onClick={() => scrollToSection(AboutRef)} className="text-white text-sm font-bold underline hover:text-sky-500 transition ease-in-out duration-300"> Learn More </button>
          </div>

          <div className='md:hidden ml-4 sm:ml-8'>
            <p className="text-white w-full"> CS + IS @ Carnegie Mellon </p>
          </div>

          <hr className="h-0.5 bg-gray-200 border-0 hidden md:block" />

          <div className='hidden md:block'>
            <h1 className="font-bold">PROJECTS</h1>
            <p className="text-gray-300"> Check out my recent projects! </p>
            <button onClick={() => scrollToSection(ProjectsRef)} className="text-white text-sm font-bold underline hover:text-sky-500 transition ease-in-out duration-300"> See Portfolio </button>
          </div>
        </div>
        
      </div>

      <img src={me} alt="Profile" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-4/5 md:w-3/5 h-auto" />
    </div>
  );
});

export default Home;
