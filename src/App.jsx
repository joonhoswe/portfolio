import React from 'react';
import Home from './sections/Home'
import About from './sections/About'
import Navbar from './components/navbar'
import Work from './sections/Work'
import Projects from './sections/Projects';
import Contact from './sections/Contact'
import { useRef } from 'react';

const App = () => {

  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const WorkRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);

  return (
   <div className='bg-gray-900'>
    {/* <div className='h-[calc(100vh-56px)] overflow-y-scroll snap-y snap-mandatory'>
        <Navbar HomeRef = {HomeRef} AboutRef = {AboutRef} WorkRef = {WorkRef} ProjectsRef = {ProjectsRef} ContactRef = {ContactRef}/>
        <div className='snap-always snap-center'>
            <Home ref = {HomeRef} AboutRef = {AboutRef} ProjectsRef = {ProjectsRef} />
        </div>

        <div className='snap-always snap-center'>
            <About ref = {AboutRef}/>
        </div>

        <div className='snap-always snap-center'>
            <Work ref = {WorkRef}/>
        </div>

        <div className='snap-always snap-center'>
            <Projects ref = {ProjectsRef}/>
        </div>

        <div className='snap-always snap-center'>
            <Contact ref = {ContactRef}/>
        </div>
    </div>  */}
            <Navbar HomeRef = {HomeRef} AboutRef = {AboutRef} WorkRef = {WorkRef} ProjectsRef = {ProjectsRef} ContactRef = {ContactRef}/>
            <Home ref = {HomeRef} AboutRef = {AboutRef} ProjectsRef = {ProjectsRef} />

            <About ref = {AboutRef}/>

            <Work ref = {WorkRef}/>

            <Projects ref = {ProjectsRef}/>


            <Contact ref = {ContactRef}/>

  </div>
  );
};

export default App;
