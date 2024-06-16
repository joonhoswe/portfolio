import React from 'react';
import Home from './sections/Home';
import About from './sections/About';
import Navbar from './components/Navbar';
import Work from './sections/Work';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/footer';
import { useRef } from 'react';

const App = () => {

  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const WorkRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);

  return (
   <div className='bg-gray-900'>
        <Navbar HomeRef = {HomeRef} AboutRef = {AboutRef} WorkRef = {WorkRef} ProjectsRef = {ProjectsRef} ContactRef = {ContactRef}/>
        <Home ref = {HomeRef} AboutRef = {AboutRef} ProjectsRef = {ProjectsRef}/>
        <About ref = {AboutRef}/>
        <Work ref = {WorkRef}/>
        <Projects ref = {ProjectsRef}/>
        <Testimonials/>
        <Contact ref = {ContactRef}/>
        <Footer/>
  </div>
  );
};

export default App;
