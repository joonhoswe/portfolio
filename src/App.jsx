import React from 'react';
import Home from './sections/Home'
import About from './sections/About'
import Navbar from './components/navbar'
// import Projects from './sections/Projects'

const App = () => {
  return (
   <div className='bg-gray-900'>
    <Navbar/>
    <Home/>
    <About/>
    {/* <Projects/> */}
  </div>
  );
};

export default App;
