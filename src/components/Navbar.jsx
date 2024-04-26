import React from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className=" w-full h-14 sticky top-0 z-50 text-white bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <img className = 'h-3/4 w-1/7 ml-4 pt-4' src={logo} alt = 'logo'/>
    </div>
  );
};

export default Navbar;
