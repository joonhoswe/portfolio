import React from 'react';
import { useState, useEffect, useRef, forwardRef } from 'react';

const Work = forwardRef((props, ref) => {

    const [activeExp, setActiveExp] = useState('');
    return (
        <div ref = {ref} className="bg-gray-200 text-black w-full h-screen flex items-center justify-center">
            <div className='bg-white rounded-2xl w-2/3 h-2/3 flex flex-col p-8'>
                <div className='w-full h-3/5 flex flex-row'>
                    <img src={activeExp} className='w-4/5 h-full rounded-lg' alt='' />
                </div>
                
                <p className='font-bold mt-8'> Company </p>
                <p className='text-italic'> Position </p>
                <p className=''> Blurb </p>
            </div>
        </div>
    );
});

export default Work;