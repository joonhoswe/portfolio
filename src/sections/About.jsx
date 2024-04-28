import React, {useEffect, useState} from 'react';
import inventionConvention from '../assets/invention_convention.jpg';
import instaHome from '../assets/insta_home.png';
import instaSearch from '../assets/insta_search.png';
import instaPlus from '../assets/insta_plus.png';
import instaReels from '../assets/insta_reels.png';
import instaProfile from '../assets/insta_profile.png';

const About = () => {

  var [date, setDate] = useState(new Date());

  useEffect (() => {
      var timer = setInterval(() => setDate(new Date()), 1000);

      return function cleanup() {
          clearInterval(timer)
      }
  });

  return (
    <div className='bg-gray-700 text-white w-full h-screen flex items-center justify-center'>
      <div className="flex flex-col space-y-6 font-bold text-3xl w-1/2 ml-24">
          <div>Mission</div>
          <div>Garden-Kart</div>
          <div>Cooking</div>
          <div>Pole Vault</div>
          <div>Viola</div>
      </div>

      {/* Instagram Area */}
      <div className='w-1/2 flex items-center justify-center'>
          {/* iPhone Container */}
          <div className='flex flex-col items-center bg-white h-128 w-60 rounded-3xl outline outline-yellow-300 outline-4 shadow-lg'>
              {/* Dynamic Island */}
              <div className='w-full mt-2 mb-2 flex flex-row justify-between text-black'>
                  <p className='pl-4'> {date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} </p>
                  <div className='bg-black h-5 w-20 rounded-3xl' />
                  <p className='pr-4'> {date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })} </p>
              </div>
              

              {/* Image container */}
              <div className='w-full flex justify-center'>
                  <img src={inventionConvention} alt='invention convention' className='max-h-64 w-full object-cover' />
              </div>

              {/* Bottom Icons */}
              <div className='mt-auto w-full p-2 flex justify-around rounded-b-2xl'>
                  <img src={instaHome} alt='Instagram home icon' className='h-6 w-6' />
                  <img src={instaSearch} alt='Instagram search icon' className='h-6 w-6' />
                  <img src={instaPlus} alt='Instagram plus icon' className='h-6 w-6' />
                  <img src={instaReels} alt='Instagram reels icon' className='h-6 w-6' />
                  <img src={instaProfile} alt='Instagram profile icon' className='h-6 w-6' />
              </div>

              {/* Home Swipe Bar */}
              <div className='bg-black h-1 w-24 rounded-3xl mb-2' />
          </div>
      </div>
    </div>
  );
};

export default About;
