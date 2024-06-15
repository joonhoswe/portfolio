import React from 'react';

export default function Testimonials() {

    const testimonials = [
        {
        review: "I wholeheartedly recommend Jonathan to any potential employer. During his time in my R&D MedTech Product Evaluation Lab he proved himself to be extremely intelligent, resourceful and hardworking. He also has the emotional intelligence and personality to work well alongside team members. Jonathan will be a valuable asset to any MedTech company in the future.",
        name: "Chris Johns",
        position: "R&D Director",
        company: "Johnson & Johnson MedTech",
        },
        {
        review: "In his role, Jonathan displayed an innate ability for problem-solving and innovation. His main project involved developing Python scripts for our Robotics department, where he showcased not only technical proficiency but also a keen understanding of practical application. Beyond his technical skills, Jonathan has shown exceptional qualities in decision-making and self-awareness. His decisions are well-thought-out and show a maturity beyond his years.",
        name: "Gregg Ridgley",
        position: "R&D Manager",
        company: "Johnson & Johnson MedTech",
        },
        
    ];

    return (
        <div className="bg-gray-200 text-white w-full h-[70vh] flex flex-col items-center justify-center">
            <div className='bg-white rounded-2xl w-2/5 h-1/2'>
            </div>
        </div>
    );
}