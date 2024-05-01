import React, {useRef} from 'react';
import name from '../assets/name.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.jpg'
import resume from '../assets/Jonathan_Oh_Resume.pdf'
import download from '../assets/download.png';

const Navbar = ({ HomeRef, AboutRef, WorkRef, ContactRef }) => {

  const navbarRef = useRef(null); // Used to measure the navbar height dynamically

  const scrollToSection = (elementRef) => {
    if (!elementRef.current || !navbarRef.current) return;

    // Get navbar height
    const navbarHeight = navbarRef.current.offsetHeight;

    // Get the top position relative to the viewport
    const sectionTop = elementRef.current.getBoundingClientRect().top;

    // Calculate scroll position
    let scrollPosition = window.scrollY + sectionTop;

    // Special adjustment if scrolling to Home because the navbar overlaps the section initially
    if (elementRef === HomeRef) {
      scrollPosition -= navbarHeight; // Subtract navbar height to ensure the top of Home is visible
    }

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  }

  return (
    <div ref = {navbarRef} className="flex items-center justify-between w-full h-14 sticky top-0 z-50 text-white bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <img className = 'ml-4 h-1/3 w-1/8' src={name} alt = 'jonathan'/>
      <div className="flex items-center justify-center space-x-6 ml-24">
          {/* Home */}
          <button onClick={() => scrollToSection(HomeRef)} className="group text-white hover:text-sky-500 transition duration-300 relative overflow-hidden">
            home
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-500 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left"></span>
          </button>

          {/* About */}
          <button onClick={() => scrollToSection(AboutRef)} className="group text-white hover:text-sky-500 transition duration-300 relative overflow-hidden">
            about
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-500 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left"></span>
          </button>

          {/* Work */}
          <button onClick={() => scrollToSection(WorkRef)} className="group text-white hover:text-sky-500 transition duration-300 relative overflow-hidden">
            work
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-500 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left"></span>
          </button>

          {/* Projects */}
          <button onClick={() => scrollToSection(AboutRef)} className="group text-white hover:text-sky-500 transition duration-300 relative overflow-hidden">
            projects
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-500 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left"></span>
          </button>

          {/* Contact */}
          <button onClick={() => scrollToSection(ContactRef)} className="group text-white hover:text-sky-500 transition duration-300 relative overflow-hidden">
            contact
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-500 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left"></span>
          </button>
      </div>
      <div className='mr-4 flex items-center justify-center space-x-3'>
        <a 
          className='hover:scale-110 transition duration-300 ease-in-out w-24 h-6 rounded-md flex items-center justify-center bg-white text-gray-800 text-sm font-bold'
          href={resume}
          target="_blank" 
          rel="noopener noreferrer">
            resume
            <img src = {download} alt='download icon' className='w-4 h-4 ml-2'/>
        </a>
        <a href="https://linkedin.com/in/joonho-oh" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" className="hover:scale-110 transition duration-300 ease-in-out w-6 h-6"/>
        </a>
        <a href="https://github.com/joonhoswe" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" className="hover:scale-110 transition duration-300 ease-in-out w-6 h-6"/>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
