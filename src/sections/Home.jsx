import React, { forwardRef } from 'react';
import { ReactTyped } from 'react-typed';
import me from '../assets/me.png';
import background from '../assets/background.jpg';
import cmu from '../assets/cmu.jpeg';

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
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold animate-fade-right animate-duration-2000">Hi, I'm Jonathan,</h2>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold animate-fade-right animate-duration-2000">
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

            <div className="z-10 mt-3 md:mt-5 flex flex-row space-x-2 items-center w-full animate-fade-right animate-duration-2000 animate-delay-700">
                  <img src = {cmu} className='h-10 w-10 md:h-12 md:w-12' alt='CMU logo'/>
                  <p className="text-white w-full text-xs md:text-sm lg:text-base"> B.S. Computer Science + PSST </p>
            </div>
        </div>
        
        
        
      </div>

      <img src={me} alt="Profile" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-4/5 md:w-3/5 h-auto" />
    </div>
  );
});

export default Home;
