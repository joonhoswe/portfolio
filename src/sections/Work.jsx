import { forwardRef } from 'react';
import aws from '../assets/work_images/AWS.jpg';
import meta from '../assets/work_images/meta.png';
import wf from '../assets/work_images/Wells-Fargo-Logo.png';
import atc from '../assets/work_images/smiski.webp';
import jj from '../assets/work_images/j&j.png';
import osu from '../assets/work_images/osu.jpg';
import cmu from '../assets/cmu.jpeg';

const Work = forwardRef((props, ref) => {

    const experiences = [
        {
            company: "Amazon Web Services (AWS)",
            position: "Software Development Engineer Intern",
            date: "Fall 2026",
            location: "Mountain View, CA",
            blurb: "Incoming on the AWS Builder Center team.",
            image: aws,
        },
        {
            company: "Meta",
            position: "Software Engineer Intern",
            date: "Summer 2026",
            location: "Menlo Park, CA",
            blurb: "Incoming on the WhatsApp Core Messaging Experience team.",
            image: meta,
        },
        {
            company: "Carnegie Mellon University",
            position: "Undergraduate Teaching Assistant",
            date: "August 2025 - Present",
            location: "Pittsburgh, PA",
            blurb: <>Currently teaching <a href="https://www.cs.cmu.edu/~213/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">15-213</a> (Introduction to Computer Systems in C). Previously taught <a href="https://cmu-313.github.io/_old/F25/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">17-313</a> (Foundations of Software Engineering).</>,
            image: cmu,
        },
        {
            company: "Wells Fargo",
            position: "Software Engineer Intern",
            date: "Summer 2025",
            location: "New York, NY",
            blurb: "Worked on device authentication, building core APIs for 42,000+ devices. Also rode the elevator with CEO Charlie Scharf :)",
            image: wf,
        },
        {
            company: "Angel Trading Co.",
            position: "Software Engineer Intern",
            date: "Summer 2024",
            location: "Atlanta, GA",
            blurb: "Developed the first marketplace with 2k+ MAU for Smiskis and Sonny Angels. Startup in the Emory Hatchery Startup Accelerator Program.",
            image: atc,
        },
        {
            company: "Johnson & Johnson",
            position: "Software Engineer Intern",
            date: "Summer 2023",
            location: "Cincinnati, OH",
            blurb: "Piloted the first ever internship for incoming college freshmen. Wrote Python scripts for the Ottava Surgical Robot and data validation algorithms.",
            image: jj,
        },
        {
            company: "The Ohio State University",
            position: "Undergraduate Teaching Assistant",
            date: "2022 - 2023",
            location: "Columbus, OH",
            blurb: "Taught Data Structures and Algorithms & Java Object-Oriented Programming during my senior year of high school!",
            image: osu,
        },
    ];

    return (
        <div ref={ref} className="bg-[#0a0a0a] w-full min-h-screen flex flex-col items-center py-24 border-t border-white/10">
            <div className="max-w-5xl w-full px-4 flex flex-col items-center">
                <h1 className='text-white text-3xl md:text-5xl font-bold tracking-tight mb-4'> Experience </h1>
                <p className='text-gray-400 text-center mb-16 max-w-2xl'>My professional journey and the amazing teams I&apos;ve had the opportunity to work with.</p>

                <div className='w-full flex flex-col space-y-12'>
                    {experiences.map((exp, index) => (
                        <div key={index} className='flex flex-col md:flex-row md:items-start gap-6 group'>
                            {/* Left: Logo */}
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-1 flex items-center justify-center">
                                    <img src={exp.image} alt={`${exp.company} logo`} className="max-w-full max-h-full object-contain rounded-lg" />
                                </div>
                            </div>

                            {/* Middle: Company, Role, Date */}
                            <div className="flex flex-col md:w-1/3 flex-shrink-0 pt-1">
                                <h3 className="text-lg font-medium text-white mb-1">{exp.company}</h3>
                                <p className="text-cyan-400 text-sm font-medium mb-1">{exp.position}</p>
                                <p className="text-gray-500 text-sm">{exp.date} &bull; {exp.location}</p>
                            </div>

                            {/* Right: Description */}
                            <div className="flex-grow pt-1">
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {exp.blurb}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

Work.displayName = 'Work';

export default Work;