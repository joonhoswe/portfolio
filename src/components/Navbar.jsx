import React from 'react';
import logo from '../assets/logo.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.jpg'
import resume from '../assets/Jonathan_Oh_Resume.pdf'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-14 sticky top-0 z-50 text-white bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <img className = 'ml-4 h-1/2 w-1/7' src={logo} alt = 'logo'/>
      <div className="flex items-center justify-center space-x-6">
          <div> HOME </div>
          <div> ABOUT </div>
          <div> WORK </div>
          <div> PROJECTS </div>
          <div> SKILLS </div>
      </div>
      <div className='mr-4 flex items-center justify-center space-x-2'>
        <a 
          className='w-24 h-6 rounded-md flex items-center justify-center bg-white text-gray-800 text-sm font-bold'
          href={resume}
          target="_blank" 
          rel="noopener noreferrer">
            RESUME
        </a>
        <a href="https://linkedin.com/in/joonho-oh" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" className="w-6 h-6"/>
        </a>
        <a href="https://github.com/joonhoswe" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" className="w-6 h-6"/>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
