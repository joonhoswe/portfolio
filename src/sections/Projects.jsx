import React from 'react';
import { useState, useEffect, useRef, forwardRef } from 'react';
import mac from "../assets/mac_images/wallpaper.png";
import { motion } from 'framer-motion';

const Projects = forwardRef((props, ref) => {

    return (
        <div ref = {ref} className="bg-gray-900 text-white w-full h-screen flex items-center justify-center">
            {/* Big rectangle to contain both connect with me + contact form */}
            {/* <motion.div 
                className="flex flex-row items-center w-3/5 h-3/5 outline outline-2 outline-white shadow-all-lg shadow-cyan-400 rounded-2xl"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}  // Increased sensitivity, animation can trigger multiple times
                transform={{
                  duration: 0.8,
                  delay: 0.1,  // Reduced delay
                  ease: [0, 0.71, 0.2, 1.01]
                }}
                style={{ 
                    backgroundImage: `url(${mac})`,
                    backgroundSize: 'cover', 
                    backgroundRepeat: 'no-repeat', 
                    backgroundPosition: 'center' 
                }}>
            </motion.div> */}
            <div className='flex flex-row items-center w-3/5 h-3/5 outline outline-2 outline-white shadow-all-lg shadow-cyan-400 rounded-2xl'
            style={{ 
                backgroundImage: `url(${mac})`,
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center' 
            }}>
            </div>
        </div>
    );
});

export default Projects;