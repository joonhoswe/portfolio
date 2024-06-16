import React, { useEffect, useState, forwardRef } from 'react';
import inventionConvention from '../assets/about_images/invention_convention.jpg';
import goKart from '../assets/about_images/gokart.png';
import tableTennis from '../assets/about_images/table_tennis.png';
import viola from '../assets/about_images/viola.png';

const About = forwardRef((props, ref) => {

    const aboutCards = [
        { name: "Inventing", 
        blurb: "I won the Invention Convention with \"Wash Your iPad\" which uses UV light and Lego Robotics to sanitize devices!", 
        image: inventionConvention,
        },

        { name: "Go-Karting", 
        blurb: "I've always loved the thrill of racing, so I made my own go-kart from my parent's garden wagon!", 
        image: goKart,
        },

        { name: "Table Tennis", 
        blurb: "I've been playing table tennis for 10 years since I was 9. At age 14, I was a sponsored athlete and ranked #6 in Ohio!", 
        image: tableTennis,
        },

        { name: "Pole Vault", 
        blurb: "I'm a pole vaulter for CMU with a PB of 13\'8\". I love seeing physics work in real life through this sport!", 
        image: viola,
        },

        { name: "Music", 
        blurb: "The violin and viola have been my best friends since 1st grade. I love the structured rules yet boundless elegance of music!", 
        image: viola,
        },
    ];

  return (
    <div ref={ref} className='bg-white w-full min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-black text-3xl font-bold'> See some of my interests and hobbies! </h1>
        <div className='h-full w-full px-8 py-12 md:px-24 md:py-12 lg:px-24 lg:py-12 flex flex-wrap justify-center md:gap-8 lg:gap-20'>
            {aboutCards.map((card, index) => (
                <div key={index} className='bg-white shadow-2xl p-4 rounded-2xl h-auto md:w-48 lg:w-56 flex flex-col'>
                    <div className="h-full w-full rounded-lg flex flex-col space-y-1 text-start">
                        <div className='flex items-center justify-center '>
                            <img src={card.image} alt={card.name} className='rounded-xl md:h-32 md:w-40 lg:h-40 lg:w-48'/>
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

export default About;
