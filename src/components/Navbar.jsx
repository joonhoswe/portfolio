import React from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-full h-14 sticky top-0 z-50 text-white bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <img className = 'absolute left-4 h-1/2 w-1/7' src={logo} alt = 'logo'/>
      <div className="flex items-center justify-center space-x-6">
          <div> HOME </div>
          <div> ABOUT </div>
          <div> WORK </div>
          <div> PROJECTS </div>
          <div> SKILLS </div>
      </div>
    </div>
  );
};

export default Navbar;
