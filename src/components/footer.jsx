import React from 'react';
import reactLogo from '../assets/work_images/logos/React.png';
import vite from '../assets/work_images/logos/vite.png';
import tailwind from '../assets/work_images/logos/tailwind.png';

export default function Footer() {

    return (
        <footer>
            <div className='bg-white text-black w-full h-12 px-4 flex items-center justify-between'>
                <div className='flex flex-row space-x-1 items-center'>
                    <img src = {reactLogo} alt ='react logo'className='h-6 w-6'/>
                    <img src = {vite} alt ='vite logo'className='h-6 w-6'/>
                    <img src = {tailwind} alt ='tailwind logo'className='h-4 w-6'/>
                </div>
                <p> © 2024 Jonathan Oh </p>
            </div>
        </footer>
    )
}