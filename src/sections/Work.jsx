import React from 'react';
import { useState, useEffect, useRef, forwardRef } from 'react';

const Work = forwardRef((props, ref) => {

    return (
        <div ref = {ref} className="bg-gray-500 text-white w-full h-screen flex flex-col items-center justify-center">
            <p> work </p>
      

        </div>
    );
});

export default Work;