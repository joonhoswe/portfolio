import React, {useEffect, useState, forwardRef} from 'react';
import { Accordion, AccordionItem } from '../components/accordion';
import me from '../assets/me.png';
import inventionConvention from '../assets/iphone_images/invention_convention.jpg';
import goKart from '../assets/iphone_images/gokart.png';
import tableTennis from '../assets/iphone_images/table_tennis.png';
import viola from '../assets/iphone_images/viola.png';

const About = forwardRef((props, ref) => {

    const [activeButton, setActiveButton] = useState('Bio');

    const aboutButtons = [
        {name: "Bio", 
        blurb: "I've always felt a calling towards finding new problems to build solutions for. Pictured is me winning the 2014 Invention Convention with my invention which uses UV light and Lego Robotics to santize smart devices!", 
        image: inventionConvention,
        caption: "Wash Your iPad",
        comments: "104",
        date: "June 8, 2014"},

        {name: "Go-Karting", 
        blurb: "As a kid, I always hated paying $50 for a few laps around the track at go-kart places. Luckily, my parents had an old garden wagon in the garage. Through this project, I experienced the true reward of engineering; combining a problem with skills to build a solution from scratch. ", 
        image: goKart,
        caption: "vroom vroom",
        comments: "42",
        date: "April 12, 2022"},

        {name: "Table Tennis", 
        blurb: "I've been playing table tennis for 10 years since I was 9. At age 14, I was a sponsored athlete and ranked #6 in Ohio!", 
        image: tableTennis,
        caption: "is it ping pong or table tennis?",
        comments: "91",
        date: "November 2, 2018"},

        {name: "Viola", 
        blurb: "Music has been one of my greatest passions since 1st grade. I particularly love the structured rules of music, but also the room for creativity and expression within each line-just like in coding.", 
        image: viola,
        caption: "Meditation from Thais",
        comments: "200",
        date: "May 17, 2023"},
    ];

  return (
    <div ref = {ref} className='bg-gray-900 text-white w-full h-screen flex items-center justify-center'>

        {/* Accordion for blurbs and hobbies */}
        <Accordion className="w-4/5 sm:w-2/5 rounded-xl flex flex-col gap-4" onSetActiveButton={setActiveButton} value={aboutButtons[0].name}>
            {aboutButtons.map((button, index) => (
                <AccordionItem key={index} value={button.name} trigger={button.name} className='rounded-xl outline outline-2 outline-white'>
                    <div className="text-white bg-gray-600 rounded-2xl p-4 flex flex-col space-y-4 items-center justify-center">
                        <p>{button.blurb}</p>
                        <div className='h-1/2 w-1/2 flex sm:hidden'>
                            <img src={button.image} alt={button.name} className='rounded-xl'/>
                        </div>
                        
                    </div>
                </AccordionItem>
            ))}
        </Accordion>

      


    </div>
  );
});

export default About;
