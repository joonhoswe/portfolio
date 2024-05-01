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
    const [formSubmitted, setFormSubmitted] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {

        setFormSubmitted(true);
        e.preventDefault();

        if (!userName || !userEmail || !userMessage) {
            // Don't proceed if any field is empty
            return;
        }

        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, 'contact_form', form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then(
                () => {
                    console.log('SUCCESS!');
                    // Clear the input fields 
                    setUserEmail("");
                    setUserName("");
                    setUserMessage("");
                    setFormSubmitted(false);
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

    return (
        <div ref = {ref} className="bg-gray-900 text-white w-full h-screen flex items-center justify-center">
            {/* Big rectangle to contain both connect with me + contact form */}
            <div className="bg-gray-800 flex flex-row items-center w-2/3 h-2/3 shadow-all-lg shadow-cyan-400 rounded-2xl ">

                {/* left portion containing "connect with me" */}
                <div className="flex flex-col items-start pl-8 pt-8 w-2/5 h-full shadow-r-lg shadow-black rounded-l-2xl">
                    {/* <p className='font-bold text-4xl'> connect with <span className='text-cyan-400'> me</span></p> */}
                    <p className='font-bold text-3xl'> Contact Me </p>
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
                            <p> Atlanta, GA, United States</p>
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                            <img src = {clock} alt = 'clock icon' className='h-4 w-4 '/>
                            <p> {date.toLocaleDateString('en-US', { timeZone: 'America/New_York'})}</p>
                            <p> {date.toLocaleTimeString('en-US', { timeZone: 'America/New_York'})}</p>
                        </div>
                    </div>
                </div>

                {/* right portion containing "get in touch" */}
                <div className="flex flex-col items-center pt-8 w-3/5 px-5 h-full">                  
                    <form ref={form} onSubmit={sendEmail}>

                        {/* <p className='font-bold text-4xl mb-12'>get in <span className='text-cyan-400'>touch</span></p> */}
                        <p className='font-bold text-3xl mb-12'> Let's Connect! </p>
                        {/* name input field */}
                        <p className="mb-1"> Name </p>
                        <label className=''>
                            <input name="user_name" type="name" value={userName} onChange={(e) => setUserName(e.target.value)} className="bg-gray-900 w-full rounded-lg pl-1" />
                            <h4 className="pt-1 text-xs">
                                {
                                    userName === "" && formSubmitted ?
                                        <p className="text-red-500"> Please enter a name. </p>
                                        :
                                        <p className="text-transparent"> text placeholder </p>
                                }
                            </h4>
                        </label>

                        {/* email input field */}
                        <p className="mb-1"> Email Address </p>
                        <label>
                            <input name="user_email" type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="bg-gray-900 w-full rounded-lg pl-1" />
                            <h4 className="pt-1 text-xs">
                                {
                                    userEmail === "" && formSubmitted ?
                                        <p className="text-red-500"> Please enter an email. </p>
                                        :
                                        <p className="text-transparent"> text placeholder </p>
                                }
                            </h4>
                        </label>

                        {/* message input field */}
                        <p className="mb-1"> Message </p>
                        <label>
                            <textarea
                                name="message"
                                value={userMessage}
                                onChange={(e) => setUserMessage(e.target.value)}
                                className="bg-gray-900 h-32 w-full sm:w-96 rounded-lg pl-1"
                            />
                            <h4 className="pt-1 text-xs">
                                {
                                    userMessage === "" && formSubmitted ?
                                        <p className="text-red-500"> Please enter a message. </p>
                                        :
                                        <p className="text-transparent"> text placeholder </p>
                                }
                            </h4>
                        </label>

                        {/* submit button */}
                        <div className="flex justify-center mt-4">
                            <input type="submit" value="Send" className="hover:bg-white hover:text-gray-800 hover:cursor-pointer w-32 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out outline outline-3 " />
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
});

export default Contact;