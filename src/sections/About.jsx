import { forwardRef } from 'react';
import climbing from '../assets/about_images/climbing.jpg';
import inventionConvention from '../assets/about_images/invention_convention.jpg';
import goKart from '../assets/about_images/gokart.png';
import tableTennis from '../assets/about_images/table_tennis.png';
import polevault from '../assets/about_images/polevault.jpg';
import viola from '../assets/about_images/viola.png';

const About = forwardRef((props, ref) => {

    const aboutCards = [
        { name: "Bouldering", 
        blurb: "I've recently got into bouldering as a way to solve problems with my body! My best grade is V6!", 
        image: climbing,
        },
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
        blurb: "I used to pole vault in high school and briefly in college, and I had a PB of 13'8\".", 
        image: polevault,
        },

        { name: "Music", 
        blurb: "The violin and viola have been my best friends since 1st grade. I love the structured rules yet boundless elegance of music!", 
        image: viola,
        },
    ];

  return (
    <div ref={ref} className='bg-[#0a0a0a] w-full min-h-screen flex flex-col items-center justify-center py-20 border-t border-white/10'>
        <div className="max-w-4xl w-full px-4 flex flex-col items-center">
            <h1 className='text-white text-3xl md:text-5xl font-bold tracking-tight mb-4'> Interests & Hobbies </h1>
            <p className='text-gray-400 text-center mb-16 max-w-2xl'>When I&apos;m not coding, you can find me exploring nature, eating food, or creating things.</p>
            
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                {aboutCards.map((card, index) => (
                    <div key={index} className='bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col hover:bg-white/10 transition-colors duration-300 group'>
                        <div className='w-full h-40 mb-6 overflow-hidden rounded-xl bg-black/50'>
                            <img src={card.image} alt={card.name} className='w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0'/>
                        </div>
                        <h3 className='text-white font-semibold text-xl mb-2'>{card.name}</h3>
                        <p className='text-gray-400 text-sm leading-relaxed'>{card.blurb}</p>                    
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
});

About.displayName = 'About';

export default About;
