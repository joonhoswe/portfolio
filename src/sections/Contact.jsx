import { useState, useRef, forwardRef } from 'react';
import emailjs from '@emailjs/browser';

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

    const isFormValid = userName && userEmail && userMessage;

    return (
        <div ref={ref} className="bg-[#0a0a0a] text-white w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 border-t border-white/10">
            <div className="max-w-3xl w-full flex flex-col items-center">
                <h1 className='text-3xl md:text-5xl font-bold tracking-tight mb-4'> Get In Touch </h1>
                <p className='text-gray-400 text-center mb-12 max-w-xl'>Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>

                <div className="bg-white/5 border border-white/10 w-full md:w-4/5 lg:w-3/4 rounded-2xl overflow-hidden backdrop-blur-sm">
                    <div className="p-8 md:p-10">                  
                        <form ref={form} onSubmit={sendEmail} className='w-full flex flex-col space-y-6'>
                            <div className='flex flex-col space-y-5 w-full'>
                                <div className='w-full'>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input 
                                        name="user_name" 
                                        type="text" 
                                        value={userName} 
                                        onChange={(e) => setUserName(e.target.value)} 
                                        className="w-full bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:outline-none p-3 text-white transition-all" 
                                        placeholder="John Doe"
                                    />
                                </div>
                                
                                <div className='w-full'>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                    <input 
                                        name="user_email" 
                                        type="email" 
                                        value={userEmail} 
                                        onChange={(e) => setUserEmail(e.target.value)} 
                                        className="w-full bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:outline-none p-3 text-white transition-all" 
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className='w-full'>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={userMessage}
                                        onChange={(e) => setUserMessage(e.target.value)}
                                        className="w-full bg-black/50 border border-white/10 h-32 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:outline-none p-3 text-white resize-none transition-all"
                                        placeholder="Hello Jonathan..."
                                    />
                                </div>  
                            </div>

                            <div className="flex justify-center pt-4">
                                <button 
                                    type="submit" 
                                    disabled={!isFormValid}
                                    className={`w-full sm:w-auto px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2
                                    ${isFormValid 
                                        ? 'bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]' 
                                        : 'bg-white/10 text-gray-500 cursor-not-allowed'
                                    }`} 
                                >
                                    <span>Send Message</span>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
});

Contact.displayName = 'Contact';

export default Contact;