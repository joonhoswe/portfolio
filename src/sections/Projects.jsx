import React from 'react';
import { useState, useEffect, useRef, forwardRef } from 'react';
import apartmatch from '../assets/project_images/apartmatch.jpeg';
import swedle from '../assets/project_images/swedle.png';
import stockBot from '../assets/project_images/stockbot.png';
import portfolio from '../assets/project_images/portfolio.png';


const Projects = forwardRef((props, ref) => {

    const projectCards = [
        { name: "ApartMatch", 
        blurb: "An online platform for college students to swiftly match into off-campus homes with one click.", 
        image: apartmatch,
        link: "https://github.com/joonhoswe/ApartMatch",
        },

        { name: "SWEdle", 
        blurb: "A spinoff of the viral web game Wordle, with Software Engineering words instead!", 
        image: swedle,
        link: "https://github.com/joonhoswe/SWEdle",
        },

        { name: "StockBot", 
        blurb: "A Discord bot that keeps you up to date on your profits (or losses)!", 
        image: stockBot,
        link: "https://github.com/joonhoswe/StockBot",
        },

        { name: "Portfolio", 
        blurb: "My portfolio website built with React, Vite, and Tailwind CSS.", 
        image: portfolio,
        link: "https://github.com/joonhoswe/portfolio",
        },
    ];

    return (
        <div ref={ref} className='bg-white w-full h-auto flex flex-col items-center justify-center py-12'>
            <h1 className='text-black text-center text-lg sm:text-2xl md:text-3xl font-bold'> My Portfolio </h1>
            <div className='h-full w-full px-8 py-12 md:px-32 md:py-12 lg:px-64 lg:py-12 flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-20'>
                {projectCards.map((card, index) => (
                    <a key={index} href={card.link} target="_blank" rel="noopener noreferrer">
                        <div className='bg-white shadow-2xl p-4 rounded-2xl h-full w-40 md:w-48 lg:w-56 flex flex-col hover:scale-110 hover:bg-cyan-400 hover:cursor-pointer transition ease-in-out duration-300'>
                            <div className="h-full w-full rounded-lg flex flex-col space-y-1 text-start">
                                <div className='flex items-center justify-center '>
                                    <img src={card.image} alt={card.name} className='rounded-xl h-24 w-32 sm:h-28 sm:w-36 md:h-32 md:w-40 lg:h-40 lg:w-48'/>
                                </div>
                                <div className='flex flex-col justify-start items-center'>
                                    <p className='text-black font-bold'>{card.name}</p>
                                </div>
                                <p className='text-gray-600 text-xs'>{card.blurb}</p>                    
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>

    );
});

export default Projects;