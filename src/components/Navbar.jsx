import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import name from '../assets/name.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.jpg';
import resume from '../assets/Jonathan Oh Resume.pdf';
import download from '../assets/download.png';
import { Fade as Hamburger } from 'hamburger-react';

const Navbar = ({ HomeRef, AboutRef, WorkRef, ProjectsRef, ContactRef }) => {
  const navbarRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const navLinks = [
    { title: "home", ref: HomeRef },
    { title: "about", ref: AboutRef },
    { title: "work", ref: WorkRef },
    { title: "projects", ref: ProjectsRef }, 
    { title: "contact", ref: ContactRef }
  ];

  const scrollToSection = (elementRef) => {
    if (!elementRef.current || !navbarRef.current) return;

    const navbarHeight = navbarRef.current.offsetHeight;
    const sectionTop = elementRef.current.getBoundingClientRect().top;
    let scrollPosition = window.scrollY + sectionTop - (elementRef === HomeRef ? navbarHeight : 0);

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  };

  const sidebarVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" }
  };

  return (
    <div ref={navbarRef} className="flex items-center justify-between w-full h-14 sticky top-0 z-50 text-white bg-gray-700 bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <div className='items-center justify-between w-full h-14 hidden md:flex'>
        <img className='ml-4 h-1/3 w-1/8' src={name} alt='Jonathan'/>
        <div className="flex items-center justify-center space-x-6 ml-24">
          {navLinks.map((link) => (
            <button key={link.title} onClick={() => scrollToSection(link.ref)} className="group text-white hover:text-sky-500 transition duration-300 relative overflow-hidden">
              {link.title}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-500 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left"></span>
            </button>
          ))}
        </div>
        <div className='mr-4 flex items-center justify-center space-x-3'>
          <a href={resume} target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition duration-300 ease-in-out w-24 h-6 rounded-md flex items-center justify-center bg-white text-gray-800 text-sm font-bold'>
            resume
            <img src={download} alt='download icon' className='w-4 h-4 ml-2'/>
          </a>
          <a href="https://linkedin.com/in/joonho-oh" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" className="hover:scale-110 transition duration-300 ease-in-out w-6 h-6"/>
          </a>
          <a href="https://github.com/joonhoswe" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" className="hover:scale-110 transition duration-300 ease-in-out w-6 h-6"/>
          </a>
        </div>
      </div>

      <div className='z-50 flex items-center justify-between w-full h-14 md:hidden'>
        <img className='ml-4 h-1/3 w-1/8' src={name} alt='Jonathan'/>

        {/* Mobile NavBar Icon */}
        <Hamburger rounded size={24} duration={0.4} distance='lg' hideOutline={false} onToggle={toggleMenu} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              transition={{ duration: 0.4 }}
              className="z-20 pt-12 pb-28 absolute top-full right-0 h-screen w-2/5 bg-gray-800 flex flex-col justify-between"
            >
              {/* Website Section Links */}
              <div className='flex flex-col space-y-6'>
                {navLinks.map((link) => (
                  <button
                    key={link.title}
                    onClick={() => scrollToSection(link.ref)}
                    className="group text-lg text-white hover:text-sky-500 transition duration-300"
                  >
                    {link.title}
                  </button>
                ))}
                {/* Resume, Linkedin, Github Buttons */}
              <div className='flex flex-col items-center justify-center space-y-6'>
                <a href={resume} target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition duration-300 ease-in-out w-24 h-6 rounded-md flex items-center justify-center bg-white text-gray-800 text-sm font-bold'>
                  resume
                  <img src={download} alt='download icon' className='w-4 h-4 ml-2'/>
                </a>
                <a href="https://linkedin.com/in/joonho-oh" target="_blank" rel="noopener noreferrer" className='flex flex-row space-x-2'>
                  <img src={linkedin} alt="linkedin" className="hover:scale-110 transition duration-300 ease-in-out w-6 h-6"/>
                  <p className=' hover:text-sky-500 transition duration-300'> Linkedin</p>
                </a>
                <a href="https://github.com/joonhoswe" target="_blank" rel="noopener noreferrer" className='flex flex-row space-x-2'>
                  <img src={github} alt="github" className="hover:scale-110 transition duration-300 ease-in-out w-6 h-6"/>
                  <p className=' hover:text-sky-500 transition duration-300'> Github </p>
                </a>
              </div>
              </div>
              

              

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
