import { useState } from 'react';

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
        review: "I worked with Joonho early on during his tenure at Wells Fargo. During that time, I saw his proactiveness and 'go-getter' attitude in his efforts to go above and beyond on his assignments. He showed strong communication skills during our interactions and would make a good software engineer wherever he might go.",
        name: "Aakash Tammana",
        position: "Lead Software Engineer",
        company: "Wells Fargo",
        },
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
        <div className="bg-[#0a0a0a] w-full min-h-[60vh] flex flex-col space-y-8 items-center justify-center py-20 border-t border-white/10">
            <h1 className='text-white text-3xl md:text-5xl font-bold tracking-tight mb-4'> Endorsements </h1>
            
            <div className='bg-white/5 border border-white/10 rounded-2xl w-11/12 md:w-2/3 lg:w-1/2 p-8 md:p-12 relative h-[32rem] sm:h-[28rem] md:h-[26rem] flex flex-col'>
                <svg className="absolute top-6 left-6 w-10 h-10 text-white/10 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                
                <div className="flex-grow flex items-center mt-6 mb-4 overflow-y-auto">
                    <p className='text-gray-300 italic text-base md:text-lg lg:text-xl leading-relaxed relative z-10'>
                        &quot;{testimonials[active].review}&quot;
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end mt-auto border-t border-white/10 pt-6 flex-shrink-0'>
                    <div className='flex flex-col mb-6 sm:mb-0'>
                        <p className='font-bold text-white text-lg'> {testimonials[active].name} </p>
                        <p className='text-cyan-400 text-sm'> {testimonials[active].position} </p>
                        <p className='text-gray-500 text-sm'> {testimonials[active].company} </p>
                    </div>
                    
                    <div className='flex flex-row space-x-3'>
                        <button onClick={handlePrev} className='h-10 w-10 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300'> 
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button onClick={handleNext} className='h-10 w-10 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300'> 
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-row space-x-2 mt-4'>
                {testimonials.map((_, index) => (
                    <button 
                        key={index} 
                        onClick={() => setActive(index)}
                        className={`rounded-full h-1.5 transition-all duration-300 ${active === index ? 'w-8 bg-cyan-400' : 'w-2 bg-gray-600 hover:bg-gray-400'}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}