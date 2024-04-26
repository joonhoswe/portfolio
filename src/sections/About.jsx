import React from 'react';
import me from '../assets/me.png';

const About = () => {
  return (
    <div className="bg-gray-900 text-white flex justify-center items-center w-full height-100vh overflow-hidden relative p-4">
      <div className="absolute inset-0 flex justify-between items-center p-4">
      <div className="z-10 ml-36">
          <h2 className="text-5xl font-bold">Hi, I'm Jonathan</h2>
          <button className="bg-blue-600 text-white rounded-full px-6 py-2 mt-4">Learn More</button>
        </div>

        <div className="z-10 flex flex-col space-y-5 mr-36 text-white">
          <h1 className="text-3xl font-bold"> About me </h1>
          <p className="text-s"> I'm a student interested in the intersection of <br></br> tech and law, planning to pursue patent law! </p>
          <h1 className="text-3xl font-bold">Education</h1>
          <p className="text-m"> Computer Science + Philosophy, Politics, and Law </p>
        </div>
        
      </div>
      <img src={me} alt="Profile" className="w-3/5 h-full z-0" />
    </div>
  );
};

export default About;