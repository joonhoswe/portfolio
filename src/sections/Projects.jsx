import React from 'react';
import { useState, useEffect, useRef, forwardRef } from 'react';
import Iframe from 'react-iframe';
import mac from '../assets/mac_images/wallpaper.png';
import apple from '../assets/mac_images/apple.png';
import finder from '../assets/mac_images/finder.png';
import SWEdle from '../assets/mac_images/SWEdle.png';
import ATC from '../assets/mac_images/smiski404.webp';
import macbookBase from '../assets/mac_images/macbook_base.png';
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
        <div ref = {ref} className="bg-gray-900 text-white w-full h-screen flex flex-col items-center justify-center">

            {/* macbook screen container */}
            <div className='relative flex justify-center items-center w-3/5 h-3/4 outline outline-2 outline-white rounded-2xl'
            style={{ 
                backgroundImage: `url(${mac})`,
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center' 
            }}>
                {/* screen borders */}
                <div className='z-10 w-full h-4 bg-black absolute top-0 rounded-t-2xl'/>
                <div className='z-0 w-4 h-full bg-black absolute left-0 rounded-l-2xl'/>
                <div className='z-0 w-4 h-full bg-black absolute right-0 rounded-r-2xl'/>
                <div className='z-0 w-full h-4 bg-black absolute bottom-0 rounded-b-2xl'/>

                {/* sticky note */}
                <div className='z-0 w-32 h-32 bg-yellow-200 absolute top-12 left-8 p-4'>
                    <p className='text-black text-sm'> Try clicking on an app to get started! <br/> Press the red circle to close! </p>
                </div>

                {/* top of browser bar */}
                <div className={`absolute top-8 w-full px-4 ${currentlyOpen !== 'Finder' ? 'visible' : 'invisible'}`}>
                    <div className='flex h-6 items-center bg-gray-500 rounded-t-lg px-2'>
                        {/* 3 buttons at top of browser */}
                        <div className='flex flex-row space-x-1'>
                            <button onClick={() => setCurrentlyOpen('Finder')} className='bg-red-500 rounded-full h-2 w-2' />
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
                        {/* display currently open app on top left menu bar */}
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
                
                {/* projects within macbook screen */}
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
                <div className='flex flex-row items-center justify-center space-x-3 absolute bottom-2 left-1/6 w-2/3 h-12 bg-slate-400 bg-opacity-30 rounded-2xl'>
                    {/* iterate over array of applications */}
                    {dock.map((app) => (
                        <div key={app.name} className='flex flex-col items-center justify-center space-y-0.5'>
                            <img 
                                src={app.image} 
                                alt={`${app.name} icon`} 
                                onClick={() => setCurrentlyOpen(app.name)}
                                className='h-8 w-8 hover:cursor-pointer' 
                            />
                            {/* active application dot */}
                            <div className={`rounded-full h-1 w-1 bg-slate-400 ${currentlyOpen === app.name ? "visible" : "invisible"}`}/>
                        </div>
                    ))}
                </div>
            </div>
            {/* image for macbook chasis */}
            <img src = {macbookBase} alt = 'macbook chasis' className='w-4/5' />

        </div>
    );
});

export default Projects;