import React from 'react';
import { useState, useEffect, useRef, forwardRef } from 'react';

const Work = forwardRef((props, ref) => {

    return (
        <div ref = {ref} className="bg-gray-900 text-white w-full h-screen flex items-center justify-center">

        </div>
    );
});

export default Work;