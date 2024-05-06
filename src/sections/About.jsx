import React, {useEffect, useState, forwardRef} from 'react';
import { Accordion, AccordionItem } from '../components/accordion';
import me from '../assets/me.png';
import inventionConvention from '../assets/iphone_images/invention_convention.jpg';
import goKart from '../assets/iphone_images/gokart.png';
import tableTennis from '../assets/iphone_images/table_tennis.png';
import viola from '../assets/iphone_images/viola.png';
import instaHome from '../assets/iphone_images/insta_home.png';
import instaSearch from '../assets/iphone_images/insta_search.png';
import instaPlus from '../assets/iphone_images/insta_plus.png';
import instaReels from '../assets/iphone_images/insta_reels.png';
import instaProfile from '../assets/iphone_images/insta_profile.png';
import insta from '../assets/iphone_images/insta.png';
import instaDM from '../assets/iphone_images/insta_dm.png';
import instaComment from '../assets/iphone_images/insta_comment.png';
import instaMessenger from '../assets/iphone_images/insta_messenger.png';
import instaSave from '../assets/iphone_images/insta_save.png';
import instaHeart from '../assets/iphone_images/insta_heart.png';
import instaDots from '../assets/iphone_images/insta_dots.png';
import iphoneIcons from '../assets/iphone_images/iphone_icons.png';

const About = forwardRef((props, ref) => {

    var [date, setDate] = useState(new Date());
    const [activeButton, setActiveButton] = useState('Bio');

    const aboutButtons = [
        {name: "Bio", 
        blurb: "I've always felt a calling towards finding new problems to build solutions for. Pictured to the right is me winning the 2014 Invention Convention with my invention which uses UV light and Lego Robotics to santize smart devices!", 
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

    useEffect (() => {
        var timer = setInterval(() => setDate(new Date()), 1000);

        return function cleanup() {
            clearInterval(timer)
        }
    });

  return (
    <div ref = {ref} className='bg-gray-900 text-white w-full h-screen flex items-center justify-center'>

        {/* Accordion for blurbs and hobbies */}
        <Accordion className="w-2/5 rounded-xl flex flex-col gap-4" onSetActiveButton={setActiveButton} value={aboutButtons[0].name}>
            {aboutButtons.map((button, index) => (
                <AccordionItem key={index} value={button.name} trigger={button.name} className='rounded-xl outline outline-2 outline-white'>
                    <div className="text-white bg-gray-600 rounded-2xl p-4">
                        <p>{button.blurb}</p>
                    </div>
                </AccordionItem>
            ))}
        </Accordion>

      {/* iPhone Area */}
      <div className='w-1/2 flex items-center justify-center'>
          {/* iPhone Container */}
          <div className='flex flex-col items-center bg-white h-128 w-60 rounded-3xl outline outline-gray-400 outline-6 shadow-all-lg shadow-cyan-400'>
              {/* Time + Dynamic Island + Date */}
              <div className='w-full mt-2 mb-2 flex flex-row justify-between items-center text-black px-1'>
                  <p className='pl-2 text-xs font-bold'> {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} </p>
                  <div className='bg-black h-5 w-16 rounded-3xl mb-1' />
                  <img src={iphoneIcons} alt='iPhone icons' className='h-6 w-16' />
              </div>
              
              {/* Instagram Logo + Icons */}
              <div className='px-1 flex flex-row justify-between items-center w-full'>
                  <img src = {insta} alt = 'instagram logo' className='h-6/7 w-1/3'/>
                  <div className='flex flex-row space-x-2 items-center'>
                      <img src={instaHeart} alt='Instagram heart icon' className='h-4 w-4' />
                      <img src={instaMessenger} alt='Instagram dm icon' className='h-4 w-4' />
                  </div>
              </div>

              {/* Instagram Username + 3 dots */}
              <div className='w-full mt-5 mb-2 flex flex-row justify-between items-center text-black px-2'>
                  <div className='flex flex-row space-x-1 items-center'>
                      <img src={me} alt='me as profile pic' className='h-5 w-5 rounded-full outline outline-2 outline-black' />
                      <p className='text-xs'> joonho_oh </p>
                  </div>
                  <img src={instaDots} alt='instagram dots' className='h-3 w-3 pt-1' />
              </div>

              {/* Image container */}
              <div className='w-full flex justify-center '>
                  <img src={aboutButtons.find(button => button.name === activeButton).image} alt={aboutButtons.find(button => button.name === activeButton).name} className='max-h-64 w-full object-cover' />
              </div>

              {/* Post Icons */}
              <div className='px-2 flex flex-row justify-between items-center w-full mt-2'>
                  <div className='flex flex-row space-x-2 items-center'>
                      <img src={instaHeart} alt='Instagram heart icon' className='h-4 w-4' />
                      <img src={instaComment} alt='Instagram comment icon' className='h-4 w-4' />
                      <img src={instaDM} alt='Instagram dm icon' className='h-4 w-4' />
                  </div>
                  <img src = {instaSave} alt = 'instagram save icon' className='h-4 w-4'/>
              </div>

            {/* username below the post, comments, and date */}
              <div className='px-2 justify-start flex flex-col w-full mt-2 text-black text-xs'> 
                  {/* <p><span className='font-bold'>joonho_oh</span> cool stuff </p>
                  <p className='text-gray-700'>View all 101 comments</p>
                  <p className='text-gray-700'>June 8, 2014</p> */}
                <p><span className='font-bold'>joonho_oh</span> {aboutButtons.find(post => post.name === activeButton).caption} </p>
                <p className='text-gray-700'>View all {aboutButtons.find(post => post.name === activeButton).comments} comments</p>
                <p className='text-gray-700'>{aboutButtons.find(post => post.name === activeButton).date}</p>
              </div>

              {/* Bottom Icons */}
              <div className='mt-auto w-full p-2 flex justify-around rounded-b-2xl'>
                  <img src={instaHome} alt='Instagram home icon' className='h-5 w-5' />
                  <img src={instaSearch} alt='Instagram search icon' className='h-5 w-5' />
                  <img src={instaPlus} alt='Instagram plus icon' className='h-5 w-5' />
                  <img src={instaReels} alt='Instagram reels icon' className='h-5 w-5' />
                  <img src={instaProfile} alt='Instagram profile icon' className='h-5 w-5' />
              </div>

              {/* Home Swipe Bar */}
              <div className='bg-black h-1 w-24 rounded-3xl mb-2' />
          </div>
      </div>
    </div>
  );
});

export default About;
