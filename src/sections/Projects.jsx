import { forwardRef } from 'react';
import poleswapper from '../assets/project_images/poleswapper.png';
import apartmatch from '../assets/project_images/apartmatch.jpeg';
import swedle from '../assets/project_images/swedle.png';
import stockBot from '../assets/project_images/stockbot.png';
import portfolio from '../assets/project_images/portfolio.png';
import C from '../assets/project_images/C.png';


const Projects = forwardRef((props, ref) => {

    const projectCards = [
        { name: "malloc()", 
        blurb: "A implementation of core memory allocation functions in C!", 
        image: C,
        link: "https://github.com/joonhoswe/",
        },
        { name: "PoleSwapper", 
        blurb: "An online marketplace for pole vaulters to buy and sell pole vaulting equipment!", 
        image: poleswapper,
        link: "https://github.com/joonhoswe/poleswap",
        },
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
        <div ref={ref} className='bg-[#0a0a0a] w-full min-h-screen flex flex-col items-center justify-center py-20 border-t border-white/10'>
            <div className="max-w-5xl w-full px-4 flex flex-col items-center">
                <h1 className='text-white text-3xl md:text-5xl font-bold tracking-tight mb-4'> Selected Works </h1>
                <p className='text-gray-400 text-center mb-16 max-w-2xl'>A collection of projects I&apos;ve built, ranging from web applications to low-level systems.</p>
                
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                    {projectCards.map((card, index) => (
                        <a key={index} href={card.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                            <div className='bg-white/5 border border-white/10 p-6 rounded-2xl h-full flex flex-col hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group'>
                                <div className='w-full h-48 mb-6 overflow-hidden rounded-xl bg-black/50 flex items-center justify-center'>
                                    <img src={card.image} alt={card.name} className='w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0'/>
                                </div>
                                <div className='flex flex-col flex-grow'>
                                    <h3 className='text-white font-semibold text-xl mb-2 flex items-center justify-between'>
                                        {card.name}
                                        <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </h3>
                                    <p className='text-gray-400 text-sm leading-relaxed'>{card.blurb}</p>                    
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
});

Projects.displayName = 'Projects';

export default Projects;