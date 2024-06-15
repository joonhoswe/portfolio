import React from 'react';
import { useState, useEffect, useRef, forwardRef } from 'react';
import inventionConvention from '../assets/about_images/invention_convention.jpg';


const Projects = forwardRef((props, ref) => {

    const projectCards = [
        { name: "ApartMatch", 
        blurb: "I won the Invention Convention with \"Wash Your iPad\" which uses UV light and Lego Robotics to sanitize devices!", 
        image: inventionConvention,
        },

        { name: "SWEdle", 
        blurb: "I've always loved the thrill of racing, so I made my own go-kart from my parent's garden wagon!", 
        image: inventionConvention,
        },

        { name: "StockBot", 
        blurb: "I've been playing table tennis for 10 years since I was 9. At age 14, I was a sponsored athlete and ranked #6 in Ohio!", 
        image: inventionConvention,
        },

        { name: "Portfolio Website", 
        blurb: "I'm a pole vaulter for CMU with a PB of 13\'8\". I love seeing physics work in real life through this sport!", 
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