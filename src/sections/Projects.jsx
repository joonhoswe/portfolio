import React from 'react';
import { useState, useEffect, useRef, forwardRef } from 'react';
import inventionConvention from '../assets/about_images/invention_convention.jpg';


const Projects = forwardRef((props, ref) => {

    const projectCards = [
        { name: "ApartMatch", 
        blurb: "An online platform for college students to swiftly match into off-campus homes with one click.", 
        image: inventionConvention,
        },

        { name: "SWEdle", 
        blurb: "A spinoff of the viral web game Wordle, with Software Engineering words instead!", 
        image: inventionConvention,
        },

        { name: "StockBot", 
        blurb: "A Discord bot that keeps you up to date on your profits (or losses)!", 
        image: inventionConvention,
        },

        { name: "Portfolio Website", 
        blurb: "My portfolio website built with React, Vite, and Tailwind CSS.", 
        image: inventionConvention,
        },
    ];

    return (
        <div ref={ref} className='bg-white w-full h-screen flex flex-col items-center justify-center'>
        <h1 className='text-black text-3xl font-bold'> My Portfolio </h1>
        <div className='lg:px-48 lg:py-12 flex flex-wrap justify-center gap-24'>
            {projectCards.map((card, index) => (
                <div key={index} className='bg-white shadow-2xl p-4 rounded-lg lg:h-auto lg:w-56 flex flex-col'>
                    <div className="h-full w-full rounded-2xl flex flex-col space-y-1 text-start">
                        <div className='flex items-center justify-center '>
                            <img src={card.image} alt={card.name} className='rounded-xl lg:h-40 lg:w-48'/>
                        </div>
                        <div className='flex flex-col justify-start items-center'>
                            <p className='text-black font-bold'>{card.name}</p>
                        </div>
                        <p className='text-gray-600 text-xs'>{card.blurb}</p>                    
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
});

export default Projects;