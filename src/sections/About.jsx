import React, {useEffect, useState, forwardRef} from 'react';
import me from '../assets/me.png';
import inventionConvention from '../assets/iphone_images/invention_convention.jpg';
import goKart from '../assets/iphone_images/gokart.png';
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
        blurb: "I've always been a builder from a young age. After winning the 2014 Invention Convention and seeing a copy of my product on the market a year later, I became determined to fight for the ethical development of new technologies, through software engineering and patent law.", 
        image: inventionConvention},

        {name: "Go-Karting", 
        blurb: "", 
        image: goKart},

        {name: "Table Tennis", 
        blurb: "", 
        image: ""},

        {name: "Viola", 
        blurb: "", 
        image: ""},
    ];

    useEffect (() => {
        // preloadImages([inventionConvention, instaHome, instaSearch, instaPlus, instaReels, instaProfile, insta, instaDM, instaComment, instaMessenger, instaSave, instaHeart, instaDots, iphoneIcons]);
        var timer = setInterval(() => setDate(new Date()), 1000);

        return function cleanup() {
            clearInterval(timer)
        }
    });

  return (
    <div ref = {ref} className='bg-gray-900 text-white w-full h-screen flex items-center justify-center'>
     <div className="flex flex-col space-y-6 items-start text-2xl w-1/2 pl-12">
        {aboutButtons.map((title) => (
            <button
                key={title.name}
                onClick={() => setActiveButton(title.name)}
                className={`group relative overflow-hidden h-16 flex items-center justify-center transition-transform duration-300 ease-in-out transform ${activeButton === title.name ? 'scale-125 text-white' : 'scale-100 text-gray-400'}`}
            >
                {title.name}
            </button>
        ))}
    </div>


      {/* Blurb Area */}
      <div className='items-center justify-center'>
            <div className='w-96 h-72 bg-gray-800 rounded-2xl outline outline-2 outline-white p-2'>
            {
                aboutButtons.find(button => button.name === activeButton).blurb
            }
            </div>
      </div>

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

              <div className='px-2 justify-start flex flex-col w-full mt-2 text-black text-xs'> 
                  <p><span className='font-bold'>joonho_oh</span> cool stuff </p>
                  <p className='text-gray-700'>View all 101 comments</p>
                  <p className='text-gray-700'>June 8, 2014</p>
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
