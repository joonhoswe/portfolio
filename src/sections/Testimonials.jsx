export default function Testimonials() {

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
        <div className="bg-[#0a0a0a] w-full min-h-[60vh] flex flex-col space-y-8 items-center justify-center py-20 border-t border-white/10 overflow-hidden">
            <h1 className='text-white text-3xl md:text-5xl font-bold tracking-tight mb-8'> Endorsements </h1>
            
            <div className="relative w-full max-w-[100vw] overflow-hidden flex">
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-max animate-scroll items-stretch">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div key={index} className='bg-white/5 border border-white/10 rounded-2xl w-[85vw] md:w-[600px] mx-4 p-8 md:p-10 relative h-auto flex flex-col flex-shrink-0'>
                            <svg className="absolute top-6 left-6 w-10 h-10 text-white/10 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                            
                            <div className="flex-grow flex items-center mt-6 mb-4">
                                <p className='text-gray-300 italic text-base md:text-lg lg:text-xl leading-relaxed relative z-10'>
                                    &quot;{testimonial.review}&quot;
                                </p>
                            </div>

                            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end mt-auto border-t border-white/10 pt-6 flex-shrink-0'>
                                <div className='flex flex-col mb-6 sm:mb-0'>
                                    <p className='font-bold text-white text-lg'> {testimonial.name} </p>
                                    <p className='text-cyan-400 text-sm'> {testimonial.position} </p>
                                    <p className='text-gray-500 text-sm'> {testimonial.company} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
