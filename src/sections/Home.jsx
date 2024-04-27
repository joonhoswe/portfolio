import React from 'react';
import {ReactTyped} from 'react-typed';
import me from '../assets/me2.png';

const Home = () => {
  return (
    <div className="text-white flex justify-center items-center overflow-hidden relative w-full max-h-screen">
      <div className="absolute inset-0 flex justify-between items-center">
      <div className="z-10 ml-36 space-y-4">
          <h2 className="text-5xl font-bold">Hi, I'm Jonathan,</h2>
          <h2 className="text-5xl font-bold">
          <ReactTyped
              strings = {[
                  "A Student",
                  "An Inventor",
                  "An Avid Chef ",
              ]}
              typeSpeed = {50}
              backSpeed = {50}
              loop
          />
          </h2>
          
        </div>

        <div className="z-10 flex flex-col space-y-5 mr-24">
          {/* <div className = 'pt-8 h-72 w-72 rounded-full bg-green-400'> */}
          <div>
            <h1 className="text-3xl font-bold">About</h1>
            <hr className="h-0.5 bg-gray-200 border-0 mb-3"></hr>
            <p className="text-s text-gray-300"> I'm a student at Emory University <br></br>majoring in CS, Data Science, and Pre-Law. </p>
            <button className="text-white font-bold underline mt-2">Learn More </button>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold">Projects</h1>
            <hr className="h-0.5 bg-gray-200 border-0 mb-3"></hr>
            <p className="text-m text-gray-300"> I love making projects with purpose. </p>
            <p className="text-m text-gray-300"> Check out my recent projects! </p>
          </div>
          
        </div>
        
      </div>
      <img src={me} alt="Profile" className="w-3/5 h-full z-0 pt-12" />
    </div>
  );
};

export default Home;