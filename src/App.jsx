import React from 'react';
import me from './assets/me.png';

const App = () => {
  return (
    <div className="bg-gray-900 text-white flex justify-center items-center w-full h-screen overflow-hidden relative p-4">
      <div className="absolute inset-0 flex justify-between items-center p-4">
        <div className="z-10">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">Hello There!</h1>
          <p>Some text on the left</p>
        </div>
        <div className="z-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold">Jonathan Oh</h2>
          <p>A bit about Jonathan</p>
          <button className="bg-blue-600 text-white rounded-full px-6 py-2 mt-4">Learn More</button>
        </div>
      </div>
      <img src={me} alt="Profile" className="w-96 h-96 z-0" />
    </div>
  );
};

export default App;
