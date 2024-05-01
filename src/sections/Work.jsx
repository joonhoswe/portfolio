import React from 'react';
import { useState, useEffect, useRef, forwardRef } from 'react';

const Work = forwardRef((props, ref) => {

    return (
        <div ref = {ref} className="bg-gray-900 text-white w-full h-screen flex items-center justify-center">
            {/* Big rectangle to contain both connect with me + contact form */}
            <div className="bg-gray-800 flex flex-row items-center w-3/5 h-3/5 outline outline-2 outline-white shadow-all-lg shadow-cyan-400 rounded-2xl ">
            </div>
        </div>
    );
});

export default Work;