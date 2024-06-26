import { React, useState } from 'react';

export default function Testimonials() {

    const [active, setActive] = useState(0);

    const handlePrev = () => {
        if (active === 0) {
            setActive(testimonials.length - 1);
        }
        else setActive(active - 1);
    };

    const handleNext = () => {
        if (active === testimonials.length - 1) {
            setActive(0);
        }
        else setActive(active + 1);
    };

    const testimonials = [
        {
        review: "I wholeheartedly recommend Jonathan to any potential employer. During his time in my R&D MedTech Product Evaluation Lab he proved himself to be extremely intelligent, resourceful and hardworking. He also has the emotional intelligence and personality to work well alongside team members. Jonathan will be a valuable asset to any MedTech company in the future.",
        name: "Chris Johns",
        position: "R&D Director",
        company: "Johnson & Johnson MedTech",
        },
        {
        review: "In his role, Jonathan displayed an innate ability for problem-solving and innovation. His main project involved developing Python scripts for our Robotics department, where he showcased both technical proficiency and a keen understanding of practical application. Beyond his technical skills, Jonathan has shown exceptional qualities in decision-making and self-awareness. His decisions are well-thought-out and show a maturity beyond his years.",
        name: "Gregg Ridgley",
        position: "R&D Manager",
        company: "Johnson & Johnson MedTech",
        },
        
    ];

    return (
        <div className="bg-gray-200 text-black w-full h-[60vh] flex flex-col space-y-4 items-center justify-center">

            <div className='bg-white rounded-2xl w-4/5 md:w-2/5 h-auto px-4 py-4 lg:py-8 shadow-2xl'>
                <p className='italic text-xs md:text-sm lg:text-base'> " {testimonials[active].review} "</p>

                <div className='flex justify-end mt-4'>
                    <div className='flex flex-col'>
                        <p className='font-bold text-cyan-400 text-xs md:text-sm'> - {testimonials[active].name} </p>
                        <p className='text-xs md:text-sm'> {testimonials[active].company} </p>
                        <p className='text-xs md:text-sm'> {testimonials[active].position} </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-row space-x-1 items-center justify-center'>
                <button onClick={handlePrev} className='h-9 w-9 md:h-12 md:w-12 rounded-full bg-white text-black flex items-center justify-center text-base md:text-2xl font-bold shadow-2xl hover:bg-cyan-400 transition ease-in-out duration-300'> 〈 </button>
                <button onClick={handleNext} className='h-9 w-9 md:h-12 md:w-12 rounded-full bg-white text-black flex items-center justify-center text-base md:text-2xl font-bold shadow-2xl hover:bg-cyan-400 transition ease-in-out duration-300'> 〉 </button>
            </div>

        </div>
    );
}