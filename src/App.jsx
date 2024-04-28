import React from 'react';
import Home from './sections/Home'
import About from './sections/About'
import Navbar from './components/navbar'
// import Projects from './sections/Projects'
import { useRef } from 'react';

const App = () => {

  const HomeRef = useRef(null);
  const AboutRef = useRef(null);

  return (
   <div className='bg-gray-900'>
    <Navbar HomeRef = {HomeRef} AboutRef = {AboutRef} />
    <Home ref = {HomeRef}/>
    <About ref = {AboutRef}/>
    {/* <Projects/> */}
  </div>
  );
};

export default App;
