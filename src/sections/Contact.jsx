import React from 'react';
import { useState, useEffect, useRef, forwardRef } from 'react';
import emailjs from '@emailjs/browser';
import phone from '../assets/contact_images/phone.png';
import mail from '../assets/contact_images/mail.png';
import address from '../assets/contact_images/address.png';
import clock from '../assets/contact_images/clock.png';

const Contact = forwardRef((props, ref) => {
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        if (!userName || !userEmail || !userMessage) {
            // Don't proceed if any field is empty
            return;
        }

        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, 'contact_form', form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then(
                () => {
                    // Clear the input fields 
                    setUserEmail("");
                    setUserName("");
                    setUserMessage("");
                    alert("Message sent!")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    const isFormValid = userName && userEmail && userMessage;

    return (
        <div ref = {ref} className="bg-gray-900 text-white w-full h-screen flex items-center justify-center">
            {/* Big rectangle to contain both connect with me + contact form */}
            <div className="bg-gray-800 flex flex-row items-center w-3/4 md:w-1/2 h-11/20 outline outline-2 outline-white shadow-all-lg shadow-cyan-400 rounded-2xl overflow-hidden">

                {/* left portion containing "connect with me" */}
                <div className="hidden lg:flex flex-col items-start pl-8 pt-10 w-2/5 h-full shadow-r-lg shadow-black rounded-l-2xl overflow-auto">
                    {/* <p className='font-bold text-4xl'> connect with <span className='text-cyan-400'> me</span></p> */}
                    <p className='font-bold text-3xl'> Let's Connect! </p>
                    <div className='flex flex-col space-y-4 text-s mt-12'>
                        <div className='flex flex-row items-center space-x-2'>
                            <img src = {phone} alt = 'phone icon' className='h-4 w-4 '/>
                            <p> +1 (614) 949-4702 </p>
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                            <img src = {mail} alt = 'mail icon' className='h-4 w-4 '/>
                            <p>joonhoswe@gmail.com </p>
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                            <img src = {address} alt = 'address icon' className='h-4 w-4 '/>
                            <p> Pittsburgh, PA </p>
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                            <img src = {clock} alt = 'clock icon' className='h-4 w-4 '/>
                            <p> {date.toLocaleDateString('en-US', { timeZone: 'America/New_York'})}</p>
                            <p> {date.toLocaleTimeString('en-US', { timeZone: 'America/New_York'})}</p>
                        </div>
                    </div>
                </div>

                {/* right portion containing "get in touch" */}
                <div className="flex flex-col items-center pt-10 w-full lg:w-3/5 h-full overflow-auto">                  
                    <form ref={form} onSubmit={sendEmail} className='w-full px-4 sm:px-32 md:px-24 lg:px-14'>
                        <p className='font-bold text-xl md:text-3xl mb-8 text-center'> Contact Me </p>

                        <div className='flex flex-col space-y-2 w-full'>
                            {/* name input field */}
                            <div className='w-full'>
                                <p className=""> Name </p>
                                <label className='w-full'>
                                    <input name="user_name" type="name" value={userName} onChange={(e) => setUserName(e.target.value)} className="bg-gray-900 w-full rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none p-1" />
                                </label>
                            </div>
                            
                            {/* email input field */}
                            <div>
                                <p className="mb-1"> Email Address </p>
                                <label className=''>
                                    <input name="user_email" type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="bg-gray-900 w-full rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none p-1" />
                                </label>
                            </div>

                            {/* message input field */}
                            <div>
                                <p className="mb-1"> Message </p>
                                <label className=''>
                                    <textarea
                                        name="message"
                                        value={userMessage}
                                        onChange={(e) => setUserMessage(e.target.value)}
                                        className="bg-gray-900 h-20 lg: w-full rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none p-1 resize-none"
                                    />
                                </label>
                            </div>  
                        </div>
                        {/* submit button */}
                        <div className="flex justify-center mt-8">
                                <input 
                                    type="submit" 
                                    value="Send" 
                                    className={`w-32 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out outline outline-3 
                                    ${
                                        isFormValid ? 'opacity-100 hover:bg-white hover:text-gray-800 hover:cursor-pointer' : 'opacity-50 cursor-not-allowed'
                                    }`} 
                                    disabled={!isFormValid}
                                />
                            </div>
                    </form>

                </div>
            </div>
            
        </div>
    );
});

export default Contact;