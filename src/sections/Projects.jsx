import React from 'react';
import { useState, useEffect, useRef, forwardRef } from 'react';
import Iframe from 'react-iframe';
import mac from '../assets/mac_images/wallpaper.png';
import apple from '../assets/mac_images/apple.png';
import finder from '../assets/mac_images/finder.png';
import SWEdle from '../assets/mac_images/SWEdle.png';
import ATC from '../assets/mac_images/smiski404.webp';
import { motion } from 'framer-motion';

const Projects = forwardRef((props, ref) => {

    const [currentlyOpen, setCurrentlyOpen] = useState('Finder');

    const menuBarLeft = [currentlyOpen, "File", "Edit", "View", "Go", "Window", "Help"];
    const menuBarRight = [];
    const dock = [
        {name: "Finder", image: finder},
        {name: "SWEdle", image: SWEdle},
        {name: "Angel Trading Co.", image: ATC},
    ];

    var [date, setDate] = useState(new Date());

    useEffect (() => {
        var timer = setInterval(() => setDate(new Date()), 1000);

        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div ref = {ref} className="bg-gray-900 text-white w-full h-screen flex items-center justify-center">
            {/* Big rectangle to contain both connect with me + contact form */}
            {/* <motion.div 
                className="flex flex-row items-center w-3/5 h-3/5 outline outline-2 outline-white shadow-all-lg shadow-cyan-400 rounded-2xl"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}  // Increased sensitivity, animation can trigger multiple times
                transform={{
                  duration: 0.8,
                  delay: 0.1,  // Reduced delay
                  ease: [0, 0.71, 0.2, 1.01]
                }}
                style={{ 
                    backgroundImage: `url(${mac})`,
                    backgroundSize: 'cover', 
                    backgroundRepeat: 'no-repeat', 
                    backgroundPosition: 'center' 
                }}>
            </motion.div> */}

            {/* macbook screen container */}
            <div className='relative flex justify-center items-center w-1/2 h-3/5 outline outline-2 outline-white shadow-all-lg shadow-cyan-400 rounded-2xl'
            style={{ 
                backgroundImage: `url(${mac})`,
                backgroundSize: 'contain', 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center' 
            }}>
                {/* screen borders */}
                <div className='z-10 w-full h-4 bg-black absolute top-0 rounded-t-2xl'/>
                <div className='z-0 w-4 h-full bg-black absolute left-0 rounded-l-2xl'/>
                <div className='z-0 w-4 h-full bg-black absolute right-0 rounded-r-2xl'/>
                <div className='z-0 w-full h-4 bg-black absolute bottom-0 rounded-b-2xl'/>

                {/* top of browser bar */}
                <div className={`absolute top-8 w-full px-4 ${currentlyOpen !== 'Finder' ? 'visible' : 'invisible'}`}>
                    <div className='flex h-6 items-center bg-gray-500 rounded-t-lg px-2'>
                        {/* 3 buttons at top of browser */}
                        <div className='flex flex-row space-x-1'>
                            <button onClick={() => setCurrentlyOpen('Finder')}className='bg-red-500 rounded-full h-2 w-2'></button>
                            <div className='bg-yellow-500 rounded-full h-2 w-2' />
                            <div className='bg-green-500 rounded-full h-2 w-2' />
                        </div>

                        {/* search bar with url */}

                        {/* expand into new tab button */}
                        
                    </div>
                </div>

                

                {/* inside of mac screen */}
                <div className='absolute top-4 flex flex-row justify-between items-center w-full px-5 '>
                    {/* menu bar left side */}
                    <div className='flex flex-row space-x-2 items-center'>
                        <img src={apple} alt = 'apple logo' className='h-3 w-3 mb-px'/>
                        {menuBarLeft.map((button) => (
                            <p 
                            key = {button}
                            className={`text-white text-xs ${button === currentlyOpen ? 'font-bold' : ''}`}
                            >
                            {button}
                            </p>
                        ))}
                    </div>
                    {/* menu bar right side */}
                    <div className='flex flex-row space-x-2 items-center'>
                    {menuBarRight.map((button) => (
                        <p 
                        key = {button}
                        className='text-white text-xs'
                        >
                        {button}
                        </p>
                    ))}
                    <p className='text-xs '> {date.toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: 'numeric'})} </p>
                    <p className='text-xs '> {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} </p>
                    </div> 
                </div>

                <div className='absolute top-14 bottom-16 w-full px-4 overflow-y-auto'>
                    <Iframe
                        url={currentlyOpen === 'SWEdle' ? 'https://swedle.netlify.app' : currentlyOpen === 'Angel Trading Co.' ? 'https://angel-trading-company.com' : ''}
                        className='w-full h-full'
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>

                {/* dock with projects */}
                
                <div className='flex flex-row items-center justify-center space-x-3 absolute bottom-2 left-1/6 w-5/6 h-12 bg-slate-400 bg-opacity-30 rounded-2xl'>
                {dock.map((app) => (
                    <img 
                        src={app.image} 
                        alt={`${app.name} icon`} 
                        onClick={() => setCurrentlyOpen(app.name)}
                        key={app.name} 
                        className='h-8 w-8 hover:cursor-pointer' 
                    />
                ))}
                </div>

            </div>

        </div>
    );
});

export default Projects;