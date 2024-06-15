import React from 'react';
import { useState, useEffect, useRef, forwardRef } from 'react';

const Work = forwardRef((props, ref) => {

    return (
        <div ref = {ref} className="bg-gray-200 text-white w-full h-screen flex flex-col items-center justify-center">
            <div className='bg-white rounded-2xl w-2/3 h-2/3'>
            </div>
        </div>
    );
});

export default Work;